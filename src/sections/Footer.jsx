import { useState, useRef } from "react";
import { socialImgs } from "../constants";
import toast from "react-hot-toast";

const Footer = () => {
  const [showEmails, setShowEmails] = useState(false);
  const iconRefs = useRef([]);

  const handleMouseMove = (index) => (e) => {
    const icon = iconRefs.current[index];
    if (!icon) return;
    const rect = icon.getBoundingClientRect();
    const mouseX = e.clientX - rect.left - rect.width / 2;
    const mouseY = e.clientY - rect.top - rect.height / 2;
    let angle = Math.atan2(mouseY, mouseX) * (180 / Math.PI);
    angle = (angle + 360) % 360;
    icon.style.setProperty("--start", angle + 60);
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="flex flex-col justify-center">
          <p>Terms & Conditions</p>
        </div>
        <div className="socials">
          {socialImgs.map((socialImg, index) => (
            <a
              key={index}
              ref={(el) => (iconRefs.current[index] = el)}
              onMouseMove={handleMouseMove(index)}
              href={socialImg.link}
              target="_blank"
              rel="noopener noreferrer"
              className="card icon"
            >
              <div className="glow"></div>
              <img src={socialImg.imgPath} alt={socialImg.name} className="relative z-10 pointer-events-none" />
            </a>
          ))}
          <button 
            ref={(el) => (iconRefs.current[socialImgs.length] = el)}
            onMouseMove={handleMouseMove(socialImgs.length)}
            onClick={() => setShowEmails(true)}
            className="card icon flex justify-center items-center cursor-pointer"
            aria-label="Show Email Addresses"
          >
            <div className="glow"></div>
            <img src="/images/logos/gmail-icon-svg-download-png-14002828.webp" alt="gmail" className="w-5 h-5 md:w-6 md:h-6 object-contain pointer-events-none relative z-10" />
          </button>
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-center md:text-end">
            © Md Faizal Ali. All rights reserved.
          </p>
        </div>
      </div>

      {showEmails && (
        <div className="fixed inset-0 bg-black/80 flex justify-center items-center z-[999] backdrop-blur-sm transition-all duration-300">
          <div className="bg-[#1C1C24] border border-[#2D3240] p-8 rounded-2xl max-w-sm w-full mx-5 text-center flex flex-col gap-6 relative shadow-2xl">
            <button 
              onClick={() => setShowEmails(false)} 
              className="absolute top-4 right-4 text-[#839CB5] hover:text-white text-xl cursor-pointer"
            >
              ✕
            </button>
            <h3 className="text-xl font-semibold text-white">Email Addresses</h3>
            <div className="flex flex-col gap-3">
              <button 
                onClick={() => {
                  navigator.clipboard.writeText("slif858@gmail.com");
                  toast.success("Copied slif858@gmail.com to clipboard!");
                }}
                className="text-blue-50 hover:text-white break-all py-3 px-4 bg-blue-100/5 hover:bg-blue-100/10 rounded-lg transition-all border border-[#2d3240] flex justify-between items-center gap-2 cursor-pointer w-full text-left"
              >
                <span>slif858@gmail.com</span>
                <span className="text-xs text-[#839CB5]"> Copy</span>
              </button>
              <button 
                onClick={() => {
                  navigator.clipboard.writeText("reynavalo1234@gmail.com");
                  toast.success("Copied reynavalo1234@gmail.com to clipboard!");
                }}
                className="text-blue-50 hover:text-white break-all py-3 px-4 bg-blue-100/5 hover:bg-blue-100/10 rounded-lg transition-all border border-[#2d3240] flex justify-between items-center gap-2 cursor-pointer w-full text-left"
              >
                <span>reynavalo1234@gmail.com</span>
                <span className="text-xs text-[#839CB5]"> Copy</span>
              </button>
            </div>
            <p className="text-xs text-[#839CB5]">Click to copy any email address</p>
          </div>
        </div>
      )}
    </footer>
  );
};

export default Footer;
