import { FieldsType } from "@/types";
import React from "react";
import { IconButton } from "@radix-ui/themes";
import { TrashIcon } from "@radix-ui/react-icons";
import { useCertificate } from "@/context/CertificateContext";

interface PropType {
  field: FieldsType;
  index: number;
}
export const FieldRow = ({ field, index }: PropType) => {
  const { fields, setFields } = useCertificate();
  const handleFieldChange = (e: React.ChangeEvent<any>, valueType: string) => {
    let val;
    if (valueType == "image") {
      val = e.target.files?.[0];
    } else {
      val = e.target.value;
    }
    const tempFields = [...fields];
    tempFields[index] = { ...field, [valueType]: val };
    setFields(tempFields); // Update the state with the modified array
  };
  return (
    <>
      <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
        <th scope="row" className="px-1 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          {index + 1}
        </th>
        <td className="px-1 py-4">{field.type == "text" ? <input className="input-field" type="text" value={field.text || ""} onChange={(e) => handleFieldChange(e, "text")} /> : <input className="input-field" type="File" onChange={(e) => handleFieldChange(e, "image")} />}</td>
        <td className="px-1 py-4">
          <select className="select-field" name="type" id="" value={field.type || ""} onChange={(e) => handleFieldChange(e, "type")}>
            <option value="text">text</option>
            <option value="file">image</option>
          </select>
        </td>
        <td className="px-1 py-4">
          <select className="select-field" name="FM" id="FM" value={field.FM || ""} onChange={(e) => handleFieldChange(e, "FM")}>
            <option>inter</option>
            <option>work sans</option>
          </select>
        </td>
        <td className="px-1 py-4">
          <select className="select-field" name="FW" id="FW" value={field.FW || ""} onChange={(e) => handleFieldChange(e, "FW")}>
            <option value={100}>thin</option>
            <option value={400}>light</option>
            <option value={400}>semibold</option>
            <option value={500}>bold</option>
            <option value={700}>extrabold</option>
            <option value={900}>black</option>
          </select>
        </td>
        <td className="px-1 py-4">
          <select className="select-field" name="FM" id="FM" value={field.FD || ""} onChange={(e) => handleFieldChange(e, "FD")}>
            <option>center</option>
            <option>right</option>
            <option>left</option>
          </select>
        </td>
        <td className="px-1 py-4">
          <input className="input-field" type="number" value={field.FS || ""} onChange={(e) => handleFieldChange(e, "FS")} />
        </td>
        <td className="px-1 py-4">
          <input className="input-field" type="color" value={field.color} onChange={(e) => handleFieldChange(e, "color")} />
        </td>
        <td className="px-1 py-4">
          <input className="input-field" type="number" value={field.L || ""} onChange={(e) => handleFieldChange(e, "L")} />
        </td>
        <td className="px-1 py-4">
          <input className="input-field" type="number" value={field.T || ""} onChange={(e) => handleFieldChange(e, "T")} />
        </td>
        <td className="px-1 py-4">
          <input className="input-field" type="number" value={field.LH || ""} onChange={(e) => handleFieldChange(e, "LH")} />
        </td>
        <td className="px-1 py-4">
          <input className="input-field" type="number" value={field.MW || ""} onChange={(e) => handleFieldChange(e, "MW")} />
        </td>
        <td className="px-1 py-4">
          <IconButton color="tomato" variant="soft" className="p-2">
            <TrashIcon width="22" height="22" />
          </IconButton>
        </td>
      </tr>
    </>
  );
};
