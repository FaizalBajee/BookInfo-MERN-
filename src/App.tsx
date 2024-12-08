import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { LoginPage } from './pages/LoginPage';
import { UploadPage } from './pages/UploadPage';
import { SummaryPage } from './pages/SummaryPage';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path='/' element={<LoginPage />} />
          <Route path='/uploadPage' element={<UploadPage />} />
          <Route path='/summary' element={<SummaryPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
