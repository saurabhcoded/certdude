import React, { useRef, useEffect, useState } from "react";
import { useCertificate } from "../../../context/CertificateContext";
import { FieldsType, StateField } from "@/types";
import { CertificateDownload } from "..";
import DefaultImage from "../templates/template1.png";

const Canvas = (props: any) => {
  const [baseImage, setBaseImage] = useState<File | string | null>(DefaultImage);
  const { fields } = useCertificate();
  const [canvasScaleFactor, setCanvasScaleFactor] = useState<number>(0);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const wrapperRef = useRef<HTMLDivElement | null>(null);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    if (selectedFile) setBaseImage(selectedFile);
  };
  function drawWrappedText(ctx: CanvasRenderingContext2D, data: StateField | FieldsType) {
    if (!data.text) {
      return;
    }
    const ScaledFontSize = data.FS * canvasScaleFactor;
    const ScaledFontMaxWidth = data.MW * canvasScaleFactor;
    const ScaledX = data.L * canvasScaleFactor;
    const ScaledY = data.T * canvasScaleFactor;
    const ScaledLH = data.LH * canvasScaleFactor;
    const words = data.text.split(" ");
    const lines: string[] = [];

    let currentLine = words[0];

    for (let i = 1; i < words.length; i++) {
      const testLine = currentLine + " " + words[i];
      const testWidth = ctx.measureText(testLine).width;
      if (testWidth <= ScaledFontMaxWidth) {
        currentLine = testLine;
      } else {
        lines.push(currentLine);
        currentLine = words[i];
      }
    }

    lines.push(currentLine);
    ctx.fillStyle = data.color;
    ctx.font = `${data.FW} ${ScaledFontSize}px ${data.FM}`;
    if (["center", "left", "right"].includes(data.FD)) {
      ctx.textAlign = data.FD === "center" ? "center" : data.FD === "right" ? "right" : "left";
    }
    for (let i = 0; i < lines.length; i++) {
      const drawY = Number(ScaledY) + i * Number(ScaledLH);
      ctx.fillText(lines[i], ScaledX, drawY);
    }
  }
  function drawLayerImage(ctx: CanvasRenderingContext2D, field: FieldsType) {
    if (field.image) {
      let ScaledX = field.L * canvasScaleFactor;
      let ScaledY = field.T * canvasScaleFactor;
      let ScaledWidth = field.MW * canvasScaleFactor;
      let ScaledHeight = field.FS * canvasScaleFactor;
      const fieldImage = new Image();
      fieldImage.src = field.image instanceof File ? URL.createObjectURL(field.image) : field.image;
      fieldImage.onload = () => {
        // ctx.clearRect(ScaledX, ScaledY, ScaledWidth, ScaledHeight);
        ctx.drawImage(fieldImage, ScaledX, ScaledY, ScaledWidth, ScaledHeight);
      };
    }
  }
  const drawField = (ctx: CanvasRenderingContext2D) => {
    if (fields.length) {
      fields.forEach((field: FieldsType) => {
        if (field.type == "file") {
          drawLayerImage(ctx, field);
        } else {
          drawWrappedText(ctx, field);
        }
      });
    }
  };
  const draw = (ctx: CanvasRenderingContext2D) => {
    if (baseImage) {
      const CertificateImage = new Image();
      CertificateImage.src = baseImage instanceof File ? URL.createObjectURL(baseImage) : baseImage;
      CertificateImage.onload = () => {
        // managing Height And Width
        const wrapperWidth = wrapperRef.current?.offsetWidth || 0;
        const scaleFactor = wrapperWidth / CertificateImage.width;
        setCanvasScaleFactor(scaleFactor);
        const canvasHeight = CertificateImage.height * scaleFactor;
        if (canvasRef.current) {
          canvasRef.current.width = wrapperWidth;
          canvasRef.current.height = canvasHeight;
          // writing Title
          ctx.clearRect(0, 0, wrapperWidth, canvasHeight);
          ctx.drawImage(CertificateImage, 0, 0, wrapperWidth, canvasHeight);
          drawField(ctx);
        }
      };
    }
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext("2d");
      if (ctx) {
        draw(ctx);
      }
    }
  }, [baseImage, canvasScaleFactor, fields]);
  return (
    <div>
      <input type="file" name="image" id="" className="file-input" onChange={(e) => handleImageChange(e)} />
      <div ref={wrapperRef}>{baseImage && <canvas ref={canvasRef} {...props} />}</div>
      <CertificateDownload canvasRef={canvasRef} />
    </div>
  );
};

export default Canvas;
