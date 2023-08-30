import { useCertificate } from "@/context/CertificateContext";
import { MutableRefObject } from "react";

export const CertificateDownload = ({ canvasRef }: { canvasRef: MutableRefObject<HTMLCanvasElement | null> }) => {
  const download = async () => {
    console.log(canvasRef);
    if (canvasRef.current) {
      const dataURL = canvasRef.current.toDataURL("image/png"); // Explicitly specify MIME type
      var link = document.createElement("a");
      link.download = `certificate.png`;
      link.href = dataURL;
      console.log(link);
      link.click();
    }
  };
  return (
    <div className="mt-5">
      <button className="btn hover:bg-green-500" onClick={download}>
        Download Certificate
      </button>
    </div>
  );
};
