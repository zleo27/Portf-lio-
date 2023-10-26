import { GitHubIcon } from "../icons/githun-icon";
import { InstaIcon } from "../icons/insta-icon";
import { LinkedInIcon } from "../icons/likedin-icon";

import "./social-btns.scss";

export function SocialBtns() {
  return (
    <div className="social">
      <a href="https://www.instagram.com/zleo27/">
        <InstaIcon />
      </a>
      <a href="https://www.linkedin.com/in/leonardo-pires-35bbb3215/">
        <LinkedInIcon />
      </a>
      <a href="https://github.com/zleo27">
        <GitHubIcon />
      </a>
    </div>
  );
}
