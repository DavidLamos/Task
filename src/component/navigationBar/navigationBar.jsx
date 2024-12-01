import { useState } from "react";
import "./navigationBar.css";
import { Link } from "react-router-dom";

const NavigationBar = (props) => {
  const [sidebarShow, setSidebarShow] = useState(false);
  return (
    <div className="navigationBar">
      <div className="navigationBar-t">
        <div
          className="navigationBar-t-l"
          onClick={() => setSidebarShow(!sidebarShow)}
        >
          <svg width="33" height="22" viewBox="0 0 33 22">
            <defs>
              <clipPath id="clip-path">
                <rect width="33" height="22" fill="none" />
              </clipPath>
            </defs>
            <g
              id="Header_Menu_Icon"
              data-name="Header Menu Icon"
              clip-path="url(#clip-path)"
            >
              <path
                id="sort_-_material"
                data-name="sort - material"
                d="M11,22H0V18H11v4Zm11-9H0V9H22v4ZM33,4H0V0H33V4Z"
                transform="translate(0 0)"
                fill="#fff"
              />
            </g>
          </svg>
        </div>
        <div className="navigationBar-t-c">{props.title}</div>
        <Link to="/create" className="navigationBar-t-r">
          {props.flag ? "+" : ""}
        </Link>
      </div>
      <div
        className="navigationBar-side"
        style={{ left: sidebarShow ? "0px" : "-250px" }}
      >
        <Link to="/dashboard" className="navigationBar-side-dashboard ">
          Dashboard
        </Link>
        <Link to="/chat" className="navigationBar-side-chat">
          Chat
        </Link>
        <div className="navigationBar-side-signout">Sign Out</div>
      </div>
    </div>
  );
};

export default NavigationBar;
