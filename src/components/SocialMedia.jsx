import React from "react";
import { BsTwitter, BsInstagram, BsLinkedin, BsGithub } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

const SocialMedia = () => {
  return (
    <div className="app__social">
      <div>
        <a
          href="https://www.linkedin.com/in/adhul-krishna-a-s-3a7050208/"
          target="_blank"
        >
          <BsLinkedin />
        </a>
      </div>
      <div>
        <a href="https://github.com/adhulkrishnaas" target="_blank">
          <BsGithub />
        </a>
      </div>
      <div>
        <a href="https://www.instagram.com/adhul_696/" target="_blank">
          <BsInstagram />
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;
