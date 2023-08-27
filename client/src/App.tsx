import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CertificatePage } from "./pages";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CertificatePage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
