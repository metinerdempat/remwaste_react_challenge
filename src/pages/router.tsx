import { BrowserRouter, Route, Routes } from 'react-router';
import HomePage from './home';
import * as StepsPages from './steps';
import NotFoundPage from './404';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="steps" element={<StepsPages.Layout />}>
          <Route path="post-code" element={<StepsPages.PostCodePage />} />
          <Route path="select-skip" element={<StepsPages.SelectSkipPage />} />
          <Route path="waste-type" element={<StepsPages.WasteTypePage />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
