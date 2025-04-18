import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Nav from './Nav';
import TermsAndConditions from './TermsAndConditions';
import PrivacyPolicy from './PrivacyPolicy';

import './reset.css';
import './App.css';

function Home() {
  return (
    <div>
      <Nav />

      <section className="main-container">
        <header>
          <h1>perfect pulse</h1>

          <div className="description-container">
            <p>available now on iPhone and iPad</p>
          </div>
        </header>

        <div className="button-container">
          <a className="action-button" href="https://apps.apple.com/us/app/perfect-rhythms/id6744438772" target="_blank" rel="noopener noreferrer">get it on the app store</a>
        </div>

        <footer className="footer">
        </footer>
      </section>
    </div>
  )
}

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
