import "./Footer.css";
import { useNavigate, useLocation, Form } from "react-router-dom";
import React, { useState, useEffect } from "react";

export const Footer = () => {
  const navigate = useNavigate();
  const handleItemClick = (path) => {
    navigate(path);
  };
  return (
    <footer className="bottom">
      <div className="legal">
        <div className="words">
          <span> © 2023 All rights reserved </span>
          {/* <a> License </a>
          <a> Terms </a>
          <a>  </a> */}
          <form className="flex gap-5">{/* <input
                      type="text"
                      id="Parent"
                      name="role"
                      value={role}
                      onChange={(e) => setRole(e.target.value)}
                    /> */}
          <a><button type="submit" onClick={handleItemClick("/parent")}>License</button></a>
          <a><button type="submit" onClick={handleItemClick("/midwife")}>Terms</button></a>
          <a><button type="submit" onClick={handleItemClick("/doctor")}>Privacy</button></a></form>
        </div>
      </div>
    </footer>
  );
};
