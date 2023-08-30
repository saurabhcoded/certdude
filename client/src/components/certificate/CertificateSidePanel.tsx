import { useCertificate } from "@/context/CertificateContext";

export const CertificateSidePanel = () => {
  return (
    <div>
      <form className="">
        <div className="border-gray-900/10 pb-10">
          {/* <DescriptionGenerator /> */}
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
