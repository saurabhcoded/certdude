import { CertificateCanvas, CertificateFieldManage, CertificateSidePanel } from "@/components";
import React from "react";
export const CertificatePage: React.FC = () => {
  return (
    <div>
      <div className="container">
        <div className="grid grid-cols-4 gap-4">
          <div className="col-span-3">
            <CertificateCanvas />
          </div>
          <div className="col-span-1">
            <CertificateSidePanel />
          </div>
        </div>
        <CertificateFieldManage />
      </div>
    </div>
  );
};
