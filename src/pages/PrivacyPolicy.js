import Nav from '../components/Nav';

const PrivacyPolicy = () => {
  return (
    <>
      <Nav />

      <div className="privacy-policy-container">
        <div className="privacy-policy-content">
          <h1>Privacy Policy</h1>

          <div className="privacy-policy-section">
            <p>
              "perfect pulse" App built the "perfect pulse" app as
              a Free app. This SERVICE is provided by
              "perfect pulse" App at no cost and is intended for use as
              is.
            </p>
          </div>

          <div className="privacy-policy-section">
            <p>
              This page is used to inform visitors regarding our
              policies with the collection, use, and disclosure of Personal
              Information if anyone decided to use our Service.
            </p>
          </div>

          <div className="privacy-policy-section">
            <p>
              If you choose to use our Service, then you agree to
              the collection and use of information in relation to this
              policy. The Personal Information that we collect is
              used for providing and improving the Service. We will not use or share your information with
              anyone except as described in this Privacy Policy.
            </p>
          </div>

          <div className="privacy-policy-section">
            <p>
              The terms used in this Privacy Policy have the same meanings
              as in our Terms and Conditions, which are accessible at
              "perfect pulse" unless otherwise defined in this Privacy Policy.
            </p>
          </div>

          <div className="privacy-policy-section">
            <h2>Information Collection and Use</h2>
            <p>
              For a better experience, while using our Service, we
              may require you to provide us with certain personally
              identifiable information, including but not limited to email and name. The information that
              we request will be retained by us and used as described in this privacy policy.
            </p>
          </div>

          <div className="privacy-policy-section">
            <h2>Cookies</h2>
            <p>
              Cookies are files with a small amount of data that are
              commonly used as anonymous unique identifiers. These are sent
              to your browser from the websites that you visit and are
              stored on your device's internal memory.
            </p>
          </div>

          <div className="privacy-policy-section">
            <p>
              This Service does not use these “cookies” explicitly. However,
              the app may use third-party code and libraries that use
              “cookies” to collect information and improve their services.
              You have the option to either accept or refuse these cookies
              and know when a cookie is being sent to your device. If you
              choose to refuse our cookies, you may not be able to use some
              portions of this Service.
            </p>
          </div>

          {/* <div className="privacy-policy-section">
            <h2>Security</h2>
            <p>
              We value your trust in providing us your
              Personal Information, thus we are striving to use commercially
              acceptable means of protecting it. But remember that no method
              of transmission over the internet, or method of electronic
              storage is 100% secure and reliable, and we cannot
              guarantee its absolute security.
            </p>
          </div> */}

          <div className="privacy-policy-section">
            <h2>Links to Other Sites</h2>
            <p>
              This Service may contain links to other sites. If you click on
              a third-party link, you will be directed to that site. Note
              that these external sites may not be operated by us.
              Therefore, we strongly advise you to review the
              Privacy Policy of these websites. We have
              no control over and assume no responsibility for the content,
              privacy policies, or practices of any third-party sites or
              services.
            </p>
          </div>

          <div className="privacy-policy-section">
            <h2>Changes to This Privacy Policy</h2>
            <p>
              We may update our Privacy Policy from
              time to time. Thus, you are advised to review this page
              periodically for any changes. We will
              notify you of any changes by posting the new Privacy Policy on
              this page.
            </p>
            <p>This policy is effective as of 2025-04-15</p>
          </div>

          <div className="privacy-policy-section">
            <h2>Contact Us</h2>
            <p>
              If you have any questions or suggestions about our
              Privacy Policy, do not hesitate to contact us at <a href="mailto:newmodeapps@gmail.com" target="_blank" rel="noopener noreferrer">newmodeapps@gmail.com</a>.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default PrivacyPolicy;