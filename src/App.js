import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Home, TermsAndConditions, PrivacyPolicy } from './pages';

import './styles/reset.css';
import './styles/App.css';
import './styles/Policy.css';  // TODO: refactor into module and import separately into pages

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
