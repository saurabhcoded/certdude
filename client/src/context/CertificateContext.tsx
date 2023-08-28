import { ContextProps, FieldsType, StateField, childrenProps } from "@/types";
import React, { createContext, useContext, useState, useRef } from "react";
import signature from "@/components/certificate/templates/signature.png";

const CertificateContext = createContext<ContextProps | null>(null);
let descriptionText = "Congratulations on achieving excellence in our React Course! This Certificate of Achievement recognizes your dedication, skill, and commitment to mastering React's concepts and techniques. May your accomplishments continue to pave the way for your successful journey in the world of web development.";

let defaultFields: FieldsType[] = [
  { FD: "center", FM: "inter", FS: 51, FW: "500", L: 444, LH: 24, MW: 400, T: 245, color: "#ffde59", image: null, text: "Saurabh Sharma", type: "text" },
  {
    FD: "center",
    FM: "inter",
    FS: 20,
    FW: "500",
    L: 200,
    LH: 24,
    MW: 400,
    T: 525,
    color: "#000000",
    image: "",
    text: "Founder",
    type: "text",
  },
  {
    FD: "center",
    FM: "inter",
    FS: 40,
    FW: "500",
    L: 160,
    LH: 24,
    MW: 80,
    T: 455,
    color: "#000000",
    image: signature,
    text: "",
    type: "file",
  },
];

const CertificateProvider: React.FC<childrenProps> = ({ children }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [title, setTitle] = useState<StateField>({ text: "Certificate Of Achievement", color: "#012554", FW: "900", FM: "inter", FD: "center", FS: 48, L: 448, T: 175, MW: 1500, LH: 24 });
  const [desc, setDesc] = useState<StateField>({ text: descriptionText, color: "#000000", FM: "inter", FD: "center", FW: "400", FS: 19, L: 447, T: 295, MW: 1500, LH: 21 });
  const [fields, setFields] = useState<FieldsType[]>(defaultFields);
  const [QRStatus, setQRStatus] = useState<boolean>(false);
  const contextValue: ContextProps = {
    title,
    setTitle,
    desc,
    setDesc,
    fields,
    setFields,
    QRStatus,
    setQRStatus,
    canvasRef,
  };

  return <CertificateContext.Provider value={contextValue}>{children}</CertificateContext.Provider>;
};

export default CertificateProvider;

export const useCertificate = (): ContextProps => {
  const context = useContext(CertificateContext);
  if (!context) {
    throw new Error("useCertificate must be used within a CertificateProvider");
  }
  return context;
};
