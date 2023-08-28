import { useCertificate } from "@/context/CertificateContext";
import { FieldsType } from "@/types";
import React, { useState } from "react";

interface PropsInterface {
  closeModal: () => void;
}

export const AddFieldForm = ({ closeModal }: PropsInterface) => {
  const { fields, setFields } = useCertificate();
  const [field, setField] = useState<FieldsType>({ text: "", image: null, color: "#000000", FW: "500", type: "text", FM: "inter", FD: "center", FS: 24, L: 30, T: 50, MW: 400, LH: 24 });
  const handleAddField = () => {
    setFields([...fields, field]);
    closeModal();
  };
  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    if (selectedFile) setField({ ...field, image: selectedFile });
  };
  return (
    <div>
      <div className="col-span-full">
        <label htmlFor="about" className="block text-sm font-medium leading-6 text-gray-900">
          Certificate Title
        </label>
        <div className="mt-2">
          {field.type == "file" ? <input id="field" name="field" type="file" className="input-field" onChange={(e) => handleImageChange(e)} /> : <input id="field" name="field" type="text" className="input-field" value={field.text || ""} onChange={(e) => setField({ ...field, text: e.target.value })} />}
          <div>
            <label htmlFor="MW" className="form-label">
              Field Type
            </label>
            <select id="FD" name="FD" className="input-field" value={field.type} onChange={(e) => setField({ ...field, type: e.target.value })}>
              <option value={"file"}>Image</option>
              <option value={"text"}>text</option>
            </select>
          </div>
          <div className="grid grid-cols-1 gap-2 mt-2">
            <div className="col-span-1">
              <div className="grid grid-cols-3 gap-2">
                <div className="col-span-1">
                  <label htmlFor="MW" className="form-label">
                    Font
                  </label>
                  <select id="FM" name="FM" className="input-field" value={field.FM} onChange={(e) => setField({ ...field, FM: e.target.value })}>
                    <option>Inter</option>
                    <option>Work Sans</option>
                  </select>
                </div>
                <div className="col-span-1">
                  <label htmlFor="MW" className="form-label">
                    Align
                  </label>
                  <select id="FD" name="FD" className="input-field" value={field.FD} onChange={(e) => setField({ ...field, FD: e.target.value })}>
                    <option>center</option>
                    <option>left</option>
                    <option>right</option>
                  </select>
                </div>
                <div className="col-span-1">
                  <label htmlFor="MW" className="form-label">
                    Line Height
                  </label>
                  <input type="number" id="LH" name="LH" placeholder="LH" className="input-field" value={field.LH} onChange={(e) => setField({ ...field, LH: Number(e.target.value) })} />
                </div>
              </div>
            </div>
            <div className="col-span-2">
              <div className="grid grid-cols-4 gap-1">
                <div className="col-span-1">
                  <label htmlFor="FS" className="form-label">
                    Font Size
                  </label>
                  <input type="number" id="FS" name="FS" placeholder="FS" className="input-field" value={field.FS} onChange={(e) => setField({ ...field, FS: Number(e.target.value) })} />
                </div>
                <div className="col-span-1">
                  <label htmlFor="L" className="form-label">
                    Left
                  </label>
                  <input type="number" id="L" name="L" placeholder="L" className="input-field" value={field.L} onChange={(e) => setField({ ...field, L: Number(e.target.value) })} />
                </div>
                <div className="col-span-1">
                  <label htmlFor="T" className="form-label">
                    Top
                  </label>
                  <input type="number" id="T" name="T" placeholder="T" className="input-field" value={field.T} onChange={(e) => setField({ ...field, T: Number(e.target.value) })} />
                </div>
                <div className="col-span-1">
                  <label htmlFor="MW" className="form-label">
                    Max Width
                  </label>
                  <input type="number" id="MW" name="MW" placeholder="MW" className="input-field" value={field.MW} onChange={(e) => setField({ ...field, MW: Number(e.target.value) })} />
                </div>
                <div className="col-span-1">
                  <label htmlFor="MW" className="form-label">
                    Color
                  </label>
                  <input type="color" id="color" name="color" placeholder="color" className="p-0 h-25 w-100" value={field.color} onChange={(e) => setField({ ...field, color: e.target.value })} />
                </div>
                <div className="col-span-2">
                  <label htmlFor="FW" className="form-label">
                    Font Weight
                  </label>
                  <select className="select-field" name="FW" id="FW" value={field.FW} onChange={(e) => setField({ ...field, FW: e.target.value })}>
                    <option value={100}>thin</option>
                    <option value={400}>light</option>
                    <option value={400}>semibold</option>
                    <option value={500}>bold</option>
                    <option value={700}>extrabold</option>
                    <option value={900}>black</option>
                  </select>
                </div>
              </div>
              <div className="mt-4">
                <button type="button" className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2" onClick={handleAddField}>
                  Submit Field
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
