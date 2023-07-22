import "./Footer.css";
import { useNavigate, useLocation, Form } from "react-router-dom";


export const Footer = () => {
  const navigate = useNavigate();
  const handleItemClick = (path) => {
    console.log(path);
    navigate(path);
  };
  return (
    <footer className="bottom">
      <div className="legal">
        <div className="words">
          <span> © 2023 All rights reserved </span>
          <ul className="flex gap-5">
            <button onClick={() => {handleItemClick("/parent")}}> License </button>
            <button onClick={() => {handleItemClick("/midwife")}}> Terms </button>
            <button onClick={() => {handleItemClick("/doctor")}}> Privacy </button>
          </ul>
        </div>
      </div>
    </footer>
  );
};
