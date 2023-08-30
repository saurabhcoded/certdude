import React, { MutableRefObject } from "react";
export interface childrenProps {
  children: React.ReactNode;
}

export interface StateField {
  text: string; //Text
  FW: string;
  color: string;
  FM: string; // FontFamily
  FD: string; // Font Direction
  FS: number; // Font Size
  L: number; // From Left
  T: number; // From Top
  MW: number; // Max Width
  LH: number; // Line Height
}
export interface FieldsType {
  image: File | string | null; //Text
  color: string;
  FW: string;
  text: string | null; //Text
  type: string;
  FM: string; // FontFamily
  FD: string; // Font Direction
  FS: number; // Font Size
  L: number; // From Left
  T: number; // From Top
  MW: number; // Max Width
  LH: number; // Line Height
}
export interface ContextProps {
  QRStatus: boolean;
  setQRStatus: React.Dispatch<React.SetStateAction<boolean>>;
  fields: FieldsType[];
  setFields: React.Dispatch<React.SetStateAction<FieldsType[]>>;
  canvasRef: MutableRefObject<HTMLCanvasElement | null>;
}
