import React from "react";

function FloatingFooter(){
  return (
    <footer className="footer">
      <div className="footer-content">
        <span className="footer-text">&#169; 2024-2025 James Gladney</span>
        <a
          href="https://discord.gg/zPUm7geTu3"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-link"
        >
          Connect on Discord
        </a>
      </div>
    </footer>
  );
};

export default FloatingFooter;
