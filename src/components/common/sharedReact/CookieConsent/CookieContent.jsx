import { useEffect, useState } from "react";
import "./cookieConsent.scss";

const CookieConsent = () => {
  const [cookies, setCookies] = useState("unk");
  const [isMounted, setIsMounted] = useState(false);

  const handleAccept = () => {
    setCookies("granted");
    // accepted cookie lasts for a year
    let d = new Date();
    let oneYear = new Date(d.getFullYear() + 1, d.getMonth(), d.getDate());
    document.cookie =
      "sse-cookie-consent=granted; expires=" + oneYear + "; path=/";
    consentGranted();
  };

  const handleDecline = () => {
    setCookies("denied");
    // declined cookie only lasts for the session
    document.cookie = "sse-cookie-consent=denied; path=/";
  };

  // this waits to load the cookie banner until the component is mounted
  // so that there is not a component flash
  useEffect(() => {
    setIsMounted(true);
    // get cookie approval after component is mounted
    setCookies(getCookieConsent());
  }, []);

  const banner = isMounted ? (
    <div>
      <div
        id="cookie-banner"
        className={`${cookies === "granted" || cookies === "denied" ? "hidden" : ""} cookie-banner-container`}
      >
        <div className="">
          <p className="">
            We use Google Analytics to understand website usage and improve
            performance. You can manage your analytics preferences below.{" "}
            <a className="" href="/privacy-policy">
              Learn more in our Privacy Policy & Terms of Use.
            </a>
          </p>

          <div className="">
            <button className="" onClick={handleAccept}>
              Accept
            </button>
            <button className="" onClick={handleDecline}>
              Decline
            </button>
          </div>
        </div>
      </div>
      <div
        className={`${cookies === "granted" || cookies === "denied" ? "hidden" : ""} cookie-banner-overlay`}
      />
    </div>
  ) : null;

  return banner;
};

export default CookieConsent;
