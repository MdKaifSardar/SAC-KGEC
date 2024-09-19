import React from "react";
import logo1 from "../assets/sponsers/Zebronics Horizontal Logo - Black.png";
import logo2 from "../assets/sponsers/boat-logo.png";
import logo3 from "../assets/sponsers/Wow-Momo-Logo.png";
import logo4 from "../assets/sponsers/beardo-logo.png";

const sponsorLogos = [
  { src: logo1, alt: "Zebronics" },
  { src: logo2, alt: "Boat" },
  { src: logo3, alt: "Wow Momo" },
  { src: logo4, alt: "Beardo" },
];

const Sponsers = () => {
  return (
    <>
      <div className="sponsors">
        <h2 className="heading-custom">Why sponsor us?</h2>
        <div className="sponsorship-about">
          <div>
            <ul>
              <li>Brand Visibility: Align your brand with innovation and enthusiasm. Gain exposure through event promotions, banners, and announcements, reaching a diverse and engaged audience.</li>
              <li>Targeted Audience: Connect with students passionate about automobiles, engineering, and technology. Your sponsorship ensures direct access to a demographic interested in your products or services.</li>
              <li>Our club has made our college one of the top 3 colleges in West Bengal to have its fully built-in Go-Cart completely made from scratch.</li>
              <li>Networking Opportunities: Engage with our club members and event attendees. Build relationships with future professionals and enthusiasts, creating a lasting impact on your brand's reputation.</li>
              <li>Innovation Showcase: Position your brand as a supporter of innovation and education. Our event provides a platform to showcase your commitment to fostering technological advancements.</li>
              <li>Social Media Presence: Benefit from extensive coverage across our social media platforms, extending your reach to a wider online audience and showcasing your involvement in community initiatives.</li>
              <li>Customized Sponsorship Packages: Tailor your sponsorship to meet specific marketing objectives. We offer flexible packages ensuring that your investment aligns seamlessly with your brand's goals.</li>
            </ul>
          </div>
          <div className="qr-image-conatiner">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/QR_code_for_mobile_English_Wikipedia.svg/800px-QR_code_for_mobile_English_Wikipedia.svg.png"
              alt="qr-code"
              className="qr-img"
            />
          </div>
        </div>
        <div className="w-full h-32 inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)] sponsor-logo">
          {[...Array(4)].map((_, index) => (
            <ul key={index} className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
              {sponsorLogos.map((logo, idx) => (
                <li key={idx}>
                  <img src={logo.src} alt={logo.alt} />
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </>
  );
};

export default Sponsers;
