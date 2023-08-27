import React, { createContext, useContext, useState, ReactNode } from "react";

interface StateField {
  text: string;
  FM: string;
  FS: string;
  L: string;
  T: string;
}
interface ContextProps {
  title: StateField;
  setTitle: React.Dispatch<React.SetStateAction<StateField>>;
  desc: StateField;
  setDesc: React.Dispatch<React.SetStateAction<StateField>>;
  QRStatus: boolean;
  setQRStatus: React.Dispatch<React.SetStateAction<boolean>>;
}

const CertificateContext = createContext<ContextProps | null>(null);

interface CertificateProviderProps {
  children: ReactNode;
}

const CertificateProvider: React.FC<CertificateProviderProps> = ({ children }) => {
  const [title, setTitle] = useState<StateField>({ text: "Certificate Of Achievement", FM: "inter", FS: "24", L: "30", T: "50" });
  const [desc, setDesc] = useState<StateField>({ text: "", FM: "inter", FS: "24", L: "30", T: "150" });
  const [QRStatus, setQRStatus] = useState<boolean>(false);
  const contextValue: ContextProps = {
    title,
    setTitle,
    desc,
    setDesc,
    QRStatus,
    setQRStatus,
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
