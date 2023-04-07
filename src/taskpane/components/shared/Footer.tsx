import * as React from "react";

/* global require */

const Footer = () => {
  return (
    <>
      <div className="flex flex-col lg:flex-row items-center">
        <p className="text-sm text-ray-400">
          © 2023. All rights reserved.{" "}
          <a className="text-blue-400" href="https://www.boehmert.de/" target="_blank" rel="noreferrer noopener">
            BOEHMERT & BOEHMERT
          </a>
        </p>
        <div className="order-first lg:order-last -mx-2 mb-4 lg:mb-0">
          <a className="inline-block px-2" href="https://www.boehmert.de/">
            <img src={require("/assets/images/facebook-blue.svg")} alt="" />
          </a>
          <a className="inline-block px-2" href="https://www.boehmert.de/">
            <img src={require("/assets/images/twitter-blue.svg")} alt="" />
          </a>
          <a className="inline-block px-2" href="https://www.boehmert.de/">
            <img src={require("/assets/images/instagram-blue.svg")} alt="" />
          </a>
        </div>
      </div>
    </>
  );
};

export default Footer;
