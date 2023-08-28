import { useCertificate } from "@/context/CertificateContext";
import { FieldRow } from "./FieldRow";
import { AddFieldDialog } from "./AddFieldDialog";

const FieldsTable = () => {
  const { fields } = useCertificate();

  console.log(fields);
  return (
    <div className="mt-2">
      <div className="flex justify-between items-center">
        <h5 className="font-bold">Certificate Fields Manage</h5>
        <AddFieldDialog />
      </div>
      <div className="relative overflow-x-auto sm:rounded-lg border border-black-700 mt-2">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-1 py-3">
                #ID
              </th>
              <th scope="col" className="px-1 py-3">
                Value
              </th>
              <th scope="col" className="px-1 py-3">
                Type
              </th>
              <th scope="col" className="px-1 py-3">
                Font&nbsp;Family
              </th>
              <th scope="col" className="px-1 py-3">
                Weight
              </th>

              <th scope="col" className="px-1 py-3">
                Align
              </th>
              <th scope="col" className="px-1 py-3">
                Size
              </th>
              <th scope="col" className="px-1 py-3">
                Color
              </th>
              <th scope="col" className="px-1 py-3">
                Left
              </th>
              <th scope="col" className="px-1 py-3">
                Top
              </th>
              <th scope="col" className="px-1 py-3">
                Line&nbsp;Height
              </th>
              <th scope="col" className="px-1 py-3">
                Max&nbsp;Width
              </th>
              <th scope="col" className="px-1 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {fields.map((field, index) => (
              <FieldRow field={field} index={index} key={index} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FieldsTable;
