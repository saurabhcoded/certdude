import React, { useRef, useEffect, useState } from "react";
import { useCertificate } from "../../../context/CertificateContext";
import { FieldsType, StateField } from "@/types";
import { CertificateDownload } from "..";
import DefaultImage from "../templates/template1.png";

const Canvas = (props: any) => {
  const [baseImage, setBaseImage] = useState<File | null>(DefaultImage);
  const { title, desc, fields } = useCertificate();
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
    const words = data.text.split(" ");
    const lines: string[] = [];

    let currentLine = words[0];

    for (let i = 1; i < words.length; i++) {
      const testLine = currentLine + " " + words[i];
      const testWidth = ctx.measureText(testLine).width;

      if (testWidth <= data.MW) {
        currentLine = testLine;
      } else {
        lines.push(currentLine);
        currentLine = words[i];
      }
    }

    lines.push(currentLine);
    ctx.fillStyle = data.color;
    ctx.font = `${data.FW} ${data.FS}px ${data.FM}`;
    if (["center", "left", "right"].includes(data.FD)) {
      ctx.textAlign = data.FD === "center" ? "center" : data.FD === "right" ? "right" : "left";
    }
    for (let i = 0; i < lines.length; i++) {
      const drawY = Number(data.T) + i * Number(data.LH);
      ctx.fillText(lines[i], data.L, drawY);
    }
  }
  const drawField = (ctx: CanvasRenderingContext2D) => {
    if (fields.length) {
      fields.forEach((field: FieldsType) => {
        if (field.type == "file") {
          if (field.image) {
            const fieldImage = new Image();
            fieldImage.src = field.image instanceof File ? URL.createObjectURL(field.image) : field.image;
            fieldImage.onload = () => {
              ctx.drawImage(fieldImage, field.L, field.T, field.MW, field.FS);
            };
          }
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
        const canvasHeight = CertificateImage.height * scaleFactor;
        if (canvasRef.current) {
          canvasRef.current.width = wrapperWidth;
          canvasRef.current.height = canvasHeight;
          // writing Title
          ctx.drawImage(CertificateImage, 0, 0, wrapperWidth, canvasHeight);
          if (title) {
            drawWrappedText(ctx, title);
          }
          if (desc) {
            drawWrappedText(ctx, desc);
          }
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
  }, [baseImage, title, desc, fields]);
  return (
    <div>
      <input type="file" name="image" id="" className="file-input" onChange={(e) => handleImageChange(e)} />
      <div ref={wrapperRef}>{baseImage && <canvas ref={canvasRef} {...props} />}</div>
      <CertificateDownload canvasRef={canvasRef} />
    </div>
  );
};

export default Canvas;
