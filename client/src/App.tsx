import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CertificatePage } from "./pages";
import { LayoutContainer } from "./components/layout";
import CertificateProvider from "./context/CertificateContext";

function App() {
  return (
    <>
      <CertificateProvider>
        <BrowserRouter>
          <LayoutContainer>
            <Routes>
              <Route path="/" element={<CertificatePage />} />
            </Routes>
          </LayoutContainer>
        </BrowserRouter>
      </CertificateProvider>
    </>
  );
}

export default App;
