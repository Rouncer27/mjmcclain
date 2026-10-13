import InstagramLink from "./InstagramLink.jsx";
import FacebookLink from "./FacebookLink.jsx";
import "../socialMediaLinks.scss";

const SocialMediaLinks = ({ socialMedia }) => {
  return (
    <div className="social-media">
      <ul className="social-media-links">
        <FacebookLink link={socialMedia.socialMedia.facebookLink} />
        <InstagramLink link={socialMedia.socialMedia.instagramLink} />
      </ul>
    </div>
  );
};

export default SocialMediaLinks;
