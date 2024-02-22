import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { useNavigate } from "react-router-dom";

const NavBar = ({ authenticate, setAuthenticate }) => {
  const navigate = useNavigate();

  const menuList = [
    "여성",
    "Divided",
    "남성",
    "신생아/유아",
    "아동",
    "H&M HOME",
    "Sale",
    "지속가능성",
    "",
  ];

  const goToLogin = () => {
    if (authenticate) {
      setAuthenticate(false);
      navigate("/login");
    } else navigate("/login");
  };

  const search = (event) => {
    if (event.key === "Enter") {
      let keyWord = event.target.value;
      navigate(`/?q=${keyWord}`);
    }
  };

  return (
    <div>
      <div>
        <div className="login-button">
          <FontAwesomeIcon icon={faUser} />
          <div className="login" onClick={goToLogin}>
            {authenticate === true ? "로그아웃" : "로그인"}
          </div>
        </div>
      </div>
      <div className="main-logo">
        <img
          width={100}
          src="https://i.namu.wiki/i/5om4fdvgxpPu4v0HIchV5CfyMOqmpk2Nw0nrOrmCLmEdmrR-j0eyI8hCFHcpjoswm8Vk_xnFeg3lElxiSkIzsVzNDrm6diwdNeoukCwLPaGKqhjY66C2dnYZpIdGSVqxla7Zcjt0pPWiLRTlsDQzSg.svg"
        ></img>
      </div>
      <div className="menu-area">
        <ul className="menu-list">
          {menuList.map((menu) => (
            <li>{menu}</li>
          ))}
        </ul>
        <div className="search">
          <FontAwesomeIcon icon={faSearch} />
          <input
            type="text"
            placeholder="제품검색"
            onKeyDown={(event) => search(event)}
          />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
