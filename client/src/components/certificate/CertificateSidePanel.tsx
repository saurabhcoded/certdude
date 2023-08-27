import React, { useState } from "react";
import { PhotoIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import { useCertificate } from "@/context/CertificateContext";

export const CertificateSidePanel = () => {
  const { title, setTitle, desc, setDesc, QRStatus, setQRStatus } = useCertificate();
  return (
    <div>
      <form className="">
        <div className="border-gray-900/10 pb-10">
          <div className="mt-3 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="col-span-full">
              <label htmlFor="about" className="block text-sm font-medium leading-6 text-gray-900">
                Certificate Title
              </label>
              <div className="mt-2">
                <input id="title" name="title" className="input-field" value={title.text} onChange={(e) => setTitle({ ...title, text: e.target.value })} />
                <div className="grid grid-cols-2 gap-2 mt-2">
                  <div className="col-span-1">
                    <select id="FM" name="FM" autoComplete="country-name" className="input-field" value={title.FM} onChange={(e) => setTitle({ ...title, FM: e.target.value })}>
                      <option>Inter</option>
                      <option>Work Sans</option>
                    </select>
                  </div>
                  <div className="col-span-1">
                    <div className="grid grid-cols-3 gap-1">
                      <div className="col-span-1">
                        <input type="number" id="FS" name="FS" placeholder="FS" className="input-field" value={title.FS} onChange={(e) => setTitle({ ...title, FS: e.target.value })} />
                      </div>
                      <div className="col-span-1">
                        <input type="number" id="L" name="L" placeholder="L" className="input-field" value={title.L} onChange={(e) => setTitle({ ...title, L: e.target.value })} />
                      </div>
                      <div className="col-span-1">
                        <input type="number" id="T" name="T" placeholder="T" className="input-field" value={title.T} onChange={(e) => setTitle({ ...title, T: e.target.value })} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-3 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="col-span-full">
              <label htmlFor="about" className="block text-sm font-medium leading-6 text-gray-900">
                Certificate Description
              </label>
              <div className="mt-2">
                <textarea id="about" name="about" rows={3} value={desc.text} onChange={(e) => setDesc({ ...desc, text: e.target.value })} className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" defaultValue={""} />
                <div className="grid grid-cols-2 gap-2 mt-2">
                  <div className="col-span-1">
                    <select id="FM" name="FM" autoComplete="country-name" className="input-field" value={desc.FM} onChange={(e) => setDesc({ ...desc, FM: e.target.value })}>
                      <option>Inter</option>
                      <option>Work Sans</option>
                    </select>
                  </div>
                  <div className="col-span-1">
                    <div className="grid grid-cols-3 gap-1">
                      <div className="col-span-1">
                        <input type="number" id="FS" name="FS" placeholder="FS" className="input-field" value={desc.FS} onChange={(e) => setDesc({ ...desc, FS: e.target.value })} />
                      </div>
                      <div className="col-span-1">
                        <input type="number" id="L" name="L" placeholder="L" className="input-field" value={desc.L} onChange={(e) => setDesc({ ...desc, L: e.target.value })} />
                      </div>
                      <div className="col-span-1">
                        <input type="number" id="T" name="T" placeholder="T" className="input-field" value={desc.T} onChange={(e) => setDesc({ ...desc, T: e.target.value })} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Opt for QR Code */}
          <div className="mt-4">
            <div className="relative flex gap-x-3">
              <div className="flex h-6 items-center">
                <input id="comments" name="comments" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-green-600 focus:ring-green-600" />
              </div>
              <div className="text-sm leading-6">
                <label htmlFor="comments" className="font-medium text-gray-900">
                  QR Code
                </label>
                <p className="text-gray-500">A QR Code will be Generated at Bottom Left Of All Generated Certificate</p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-6 flex items-center justify-end gap-x-6">
          <button type="button" className="text-sm font-semibold leading-6 text-gray-900">
            Cancel
          </button>
          <button type="submit" className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
            Save
          </button>
        </div>
      </form>
    </div>
  );
};
