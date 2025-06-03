import { BrowserRouter, Route, Routes } from 'react-router';
import HomePage from './home';
import * as StepsPages from './steps';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="steps">
          <Route index path="post-code" element={<StepsPages.PostCodePage />} />
          <Route path="select-skip" element={<StepsPages.SelectSkipPage />} />
          <Route path="waste-type" element={<StepsPages.WasteTypePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
