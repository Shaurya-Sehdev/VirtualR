import React from "react";
import { resourcesLinks, platformLinks, communityLinks } from "../constants";

const Footer = () => {
  return (
    <footer className="mt-20 border-t border-neutral-800 pt-10 px-6">
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-8">
        <div>
          <h3 className="text-md font-semibold sm:text-2xl lg:text-4xl mb-4 bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
            Resources
          </h3>
          <ul>
            {resourcesLinks.map((link, index) => (
              <li className="mt-2" key={index}>
                <a
                  className="text-neutral-300 hover:text-white"
                  href={link.href}
                >
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-md font-semibold mb-4 sm:text-2xl lg:text-4xl bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
            Platform
          </h3>
          <ul>
            {platformLinks.map((link, index) => (
              <li className="mt-2" key={index}>
                <a
                  className="text-neutral-300 hover:text-white"
                  href={link.href}
                >
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-md font-semibold mb-4 sm:text-2xl lg:text-4xl bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
            Community
          </h3>
          <ul>
            {communityLinks.map((link, index) => (
              <li className="mt-2" key={index}>
                <a
                  className="text-neutral-300 hover:text-white"
                  href={link.href}
                >
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
