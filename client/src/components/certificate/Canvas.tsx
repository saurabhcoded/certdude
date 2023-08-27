import React, { useRef, useEffect, useState } from "react";
import { useCertificate } from "../../context/CertificateContext";

const Canvas = (props: any) => {
  const [baseImage, setBaseImage] = useState<File | null>(null);
  const { title, desc } = useCertificate();
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    if (selectedFile) setBaseImage(selectedFile);
  };
  const draw = (ctx: CanvasRenderingContext2D) => {
    if (baseImage) {
      const CertificateImage = new Image();
      CertificateImage.src = URL.createObjectURL(baseImage);
      CertificateImage.onload = () => {
        const wrapperWidth = wrapperRef.current?.offsetWidth || 0;
        const scaleFactor = wrapperWidth / CertificateImage.width;
        const canvasHeight = CertificateImage.height * scaleFactor;
        if (canvasRef.current) {
          canvasRef.current.width = wrapperWidth;
          canvasRef.current.height = canvasHeight;
          // writing Title
          ctx.drawImage(CertificateImage, 0, 0, wrapperWidth, canvasHeight);
          if (title) {
            ctx.font = `${title.FS}px ${title.FM}`;
            ctx.fillText(`${title.text}`, Number(title.L), Number(title.T));
          }
          if (desc) {
            ctx.font = `${desc.FS}px ${desc.FM}`;
            ctx.fillText(`${desc.text}`, Number(desc.L), Number(desc.T));
          }
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
  }, [baseImage, title, desc]);
  return <div ref={wrapperRef}>{baseImage ? <canvas ref={canvasRef} {...props} /> : <input type="file" name="image" id="" className="file-input" onChange={(e) => handleImageChange(e)} />}</div>;
};

export default Canvas;
