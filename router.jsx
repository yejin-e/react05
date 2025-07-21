import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./mainpage";

const Router = () => {
  

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
          
        <Route path="/notice" element={<>notice</>} />
        <Route path="/notice/:id" element={<>notice id</>} />
        <Route path="*" element={<>404 Not Found</>} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
