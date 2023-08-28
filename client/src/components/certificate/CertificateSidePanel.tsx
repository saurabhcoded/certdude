import React, { useState } from "react";
import { PhotoIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import { useCertificate } from "@/context/CertificateContext";
import DescriptionGenerator from "./DescriptionGenerator";

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
                <div className="grid grid-cols-1 gap-2 mt-2">
                  <div className="col-span-1">
                    <div className="grid grid-cols-3 gap-2">
                      <div className="col-span-1">
                        <label htmlFor="MW" className="form-label">
                          Font
                        </label>
                        <select id="FM" name="FM" className="input-field" value={title.FM} onChange={(e) => setTitle({ ...title, FM: e.target.value })}>
                          <option>Inter</option>
                          <option>Work Sans</option>
                        </select>
                      </div>
                      <div className="col-span-1">
                        <label htmlFor="MW" className="form-label">
                          Align
                        </label>
                        <select id="FD" name="FD" className="input-field" value={title.FD} onChange={(e) => setTitle({ ...title, FD: e.target.value })}>
                          <option>center</option>
                          <option>left</option>
                          <option>right</option>
                        </select>
                      </div>
                      <div className="col-span-1">
                        <label htmlFor="MW" className="form-label">
                          Line Height
                        </label>
                        <input type="number" id="LH" name="LH" placeholder="LH" className="input-field" value={title.LH} onChange={(e) => setTitle({ ...title, LH: Number(e.target.value) })} />
                      </div>
                    </div>
                  </div>
                  <div className="col-span-2">
                    <div className="grid grid-cols-4 gap-1">
                      <div className="col-span-1">
                        <label htmlFor="FS" className="form-label">
                          Font Size
                        </label>
                        <input type="number" id="FS" name="FS" placeholder="FS" className="input-field" value={title.FS} onChange={(e) => setTitle({ ...title, FS: Number(e.target.value) })} />
                      </div>
                      <div className="col-span-1">
                        <label htmlFor="L" className="form-label">
                          Left
                        </label>
                        <input type="number" id="L" name="L" placeholder="L" className="input-field" value={title.L} onChange={(e) => setTitle({ ...title, L: Number(e.target.value) })} />
                      </div>
                      <div className="col-span-1">
                        <label htmlFor="T" className="form-label">
                          Top
                        </label>
                        <input type="number" id="T" name="T" placeholder="T" className="input-field" value={title.T} onChange={(e) => setTitle({ ...title, T: Number(e.target.value) })} />
                      </div>
                      <div className="col-span-1">
                        <label htmlFor="MW" className="form-label">
                          Max Width
                        </label>
                        <input type="number" id="MW" name="MW" placeholder="MW" className="input-field" value={title.MW} onChange={(e) => setTitle({ ...title, MW: Number(e.target.value) })} />
                      </div>
                      <div className="col-span-1">
                        <label htmlFor="MW" className="form-label">
                          Color
                        </label>
                        <input type="color" id="color" name="color" placeholder="color" className="p-0 h-25 w-100" value={title.color} onChange={(e) => setTitle({ ...title, color: e.target.value })} />
                      </div>
                      <div className="col-span-2">
                        <label htmlFor="FW" className="form-label">
                          Font Weight
                        </label>
                        <select className="select-field" name="FW" id="FW" value={title.FW} onChange={(e) => setTitle({ ...title, FW: e.target.value })}>
                          <option value={100}>thin</option>
                          <option value={400}>light</option>
                          <option value={400}>semibold</option>
                          <option value={500}>bold</option>
                          <option value={700}>extrabold</option>
                          <option value={900}>black</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <DescriptionGenerator /> */}
          <div className="mt-3 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="col-span-full">
              <label htmlFor="about" className="block text-sm font-medium leading-6 text-gray-900">
                Certificate Description
              </label>
              <div className="mt-2">
                <textarea id="about" name="about" rows={3} value={desc.text} onChange={(e) => setDesc({ ...desc, text: e.target.value })} className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" defaultValue={""} />
                <div className="grid grid-cols-1 gap-2 mt-2">
                  <div className="col-span-1">
                    <div className="grid grid-cols-3 gap-2">
                      <div className="col-span-1">
                        <label htmlFor="MW" className="form-label">
                          Font
                        </label>
                        <select id="FM" name="FM" className="input-field" value={desc.FM} onChange={(e) => setDesc({ ...desc, FM: e.target.value })}>
                          <option>Inter</option>
                          <option>Work Sans</option>
                        </select>
                      </div>
                      <div className="col-span-1">
                        <label htmlFor="MW" className="form-label">
                          Align
                        </label>
                        <select id="FD" name="FD" className="input-field" value={desc.FD} onChange={(e) => setDesc({ ...desc, FD: e.target.value })}>
                          <option>center</option>
                          <option>left</option>
                          <option>right</option>
                        </select>
                      </div>
                      <div className="col-span-1">
                        <label htmlFor="MW" className="form-label">
                          Line Height
                        </label>
                        <input type="number" id="LH" name="LH" placeholder="LH" className="input-field" value={desc.LH} onChange={(e) => setDesc({ ...desc, LH: Number(e.target.value) })} />
                      </div>
                    </div>
                  </div>
                  <div className="col-span-2">
                    <div className="grid grid-cols-4 gap-1">
                      <div className="col-span-1">
                        <label htmlFor="FS" className="form-label">
                          Font Size
                        </label>
                        <input type="number" id="FS" name="FS" placeholder="FS" className="input-field" value={desc.FS} onChange={(e) => setDesc({ ...desc, FS: Number(e.target.value) })} />
                      </div>
                      <div className="col-span-1">
                        <label htmlFor="L" className="form-label">
                          Left
                        </label>
                        <input type="number" id="L" name="L" placeholder="L" className="input-field" value={desc.L} onChange={(e) => setDesc({ ...desc, L: Number(e.target.value) })} />
                      </div>
                      <div className="col-span-1">
                        <label htmlFor="T" className="form-label">
                          Top
                        </label>
                        <input type="number" id="T" name="T" placeholder="T" className="input-field" value={desc.T} onChange={(e) => setDesc({ ...desc, T: Number(e.target.value) })} />
                      </div>
                      <div className="col-span-1">
                        <label htmlFor="MW" className="form-label">
                          Max Width
                        </label>
                        <input type="number" id="MW" name="MW" placeholder="MW" className="input-field" value={desc.MW} onChange={(e) => setDesc({ ...desc, MW: Number(e.target.value) })} />
                      </div>
                      <div className="col-span-1">
                        <label htmlFor="MW" className="form-label">
                          Color
                        </label>
                        <input type="color" id="color" name="color" placeholder="color" className="p-0 h-25 w-100" value={desc.color} onChange={(e) => setDesc({ ...desc, color: e.target.value })} />
                      </div>
                      <div className="col-span-2">
                        <label htmlFor="FW" className="form-label">
                          Font Weight
                        </label>
                        <select className="select-field" name="FW" id="FW" value={desc.FW} onChange={(e) => setDesc({ ...desc, FW: e.target.value })}>
                          <option value={100}>thin</option>
                          <option value={400}>light</option>
                          <option value={400}>semibold</option>
                          <option value={500}>bold</option>
                          <option value={700}>extrabold</option>
                          <option value={900}>black</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Opt for QR Code */}
          {/* <div className="mt-4">
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
          </div> */}
        </div>
        {/* <div className="mt-6 flex items-center justify-end gap-x-6">
          <button type="button" className="text-sm font-semibold leading-6 text-gray-900">
            Cancel
          </button>
          <button type="submit" className="btn">
            Save
          </button>
        </div> */}
      </form>
    </div>
  );
};
