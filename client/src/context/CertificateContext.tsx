import { ContextProps, FieldsType, StateField, childrenProps } from "@/types";
import React, { createContext, useContext, useState, useRef } from "react";
import signature from "@/components/certificate/templates/signature.png";

const CertificateContext = createContext<ContextProps | null>(null);
let defaultFields: FieldsType[] = [
  {
    type: "text",
    text: "Certificate Of Achievement",
    image: "",
    color: "#012554",
    FW: "900",
    FM: "inter",
    FD: "center",
    FS: 48,
    L: 448,
    T: 175,
    MW: 1500,
    LH: 24,
  },
  {
    type: "text",
    text: "Congratulations on achieving excellence in our React Course! This Certificate of Achievement recognizes your dedication, skill, and commitment to mastering React's concepts and techniques. May your accomplishments continue to pave the way for your successful journey in the world of web development.",
    image: "",
    color: "#000000",
    FM: "inter",
    FD: "center",
    FW: "400",
    FS: 19,
    L: 447,
    T: 295,
    MW: 1500,
    LH: 21,
  },
  {
    type: "text",
    text: "Saurabh Sharma",
    image: "",
    color: "#ffde59",
    FW: "500",
    FM: "inter",
    FD: "center",
    FS: 51,
    L: 444,
    T: 245,
    MW: 400,
    LH: 24,
  },
  {
    type: "text",
    text: "Founder",
    image: "",
    color: "#000000",
    FW: "500",
    FM: "inter",
    FD: "center",
    FS: 20,
    L: 200,
    T: 525,
    MW: 400,
    LH: 24,
  },
  {
    type: "file",
    text: "",
    image: signature,
    color: "#000000",
    FW: "500",
    FM: "inter",
    FD: "center",
    FS: 40,
    L: 160,
    T: 455,
    MW: 80,
    LH: 24,
  },
];

const CertificateProvider: React.FC<childrenProps> = ({ children }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [fields, setFields] = useState<FieldsType[]>(defaultFields);
  const [QRStatus, setQRStatus] = useState<boolean>(false);
  const contextValue: ContextProps = {
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
