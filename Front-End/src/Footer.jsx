import "./Footer.css";
import { useNavigate, useLocation, Form } from "react-router-dom";
import React, { useState, useEffect } from "react";

export const Footer = () => {
  const navigate = useNavigate();
  const [role, setRole] = useState("");
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
          <a><button onClick={navigate("/parent")}>License</button></a>
          <a><button onClick={navigate("/midwife")}>Terms</button></a>
          <a><button onClick={navigate("/doctor")}>Privacy</button></a></form>
        </div>
      </div>
    </footer>
  );
};
