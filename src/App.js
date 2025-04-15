import './App.css';
import './reset.css';

function App() {
  return (
    <div className="main-container">
      <header>
        <h1>perfect pulse</h1>
        <p>coming soon to iPhone and iPad.</p>
      </header>

      <body>
        <div className="button-container">
          <a className="action-button" href='privacyPolicy.html' id="privacy-policy">Privacy Policy</a>
          <a className="action-button" href='termsAndConditions.html' id="terms-and-conditions">Terms And Conditions</a>
          {/* <a className="action-button" href="mailto:newmodeapps@gmail.com?subject=Delete My Data&body=Please delete the data associated with my email: ">Delete My Data</a> */}
        </div>
      </body>
    </div>
  );
}

export default App;
