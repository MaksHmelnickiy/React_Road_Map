import { BrowserRouter, Route, Routes } from "react-router-dom"
import { UseParamsPages } from "./pages"
import { UseParamsSinglePage } from "./singlePage"

export const MyUseParams = () => {
  return <div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UseParamsPages />} />
        <Route path="/:testId" element={<UseParamsSinglePage />} />
        <Route path="*" element={<div>404</div>} />
      </Routes>
    </BrowserRouter>
  </div>
}