import React, { useEffect, useState } from "react";
import { API } from "aws-amplify";
import { Auth } from "aws-amplify";
import Button from "@material-ui/core/Button";
import { NavLink, Link } from "react-router-dom";
import { listColdStorageIDS } from "../../graphql/queries";
import { FiAlignRight, FiXCircle, FiChevronDown } from "react-icons/fi";
import logo from "../../img/logo.png";

const Navbarmenu = ({ setSelectedMode }) => {
  const [cs_id, setCS_ID] = useState([]);
  const [isMenu, setisMenu] = useState(false);
  const [isResponsiveclose, setResponsiveclose] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async (cs_id) => {
    try {
      const ColdStorageIDS = await API.graphql({
        query: listColdStorageIDS,
        variables: {
          limit: 750,
        },
      });
      const cs_id_items = ColdStorageIDS.data.listColdStorageIDS.items;
      cs_id = cs_id_items.map((x) => x.coldstorage_id);
      setCS_ID(cs_id);
    } catch (err) {
      console.log("error fetching data");
    }
  };

  const signOut = async () => {
    try {
      await Auth.signOut();
    } catch (error) {
      console.log("error signing out: ", error);
    }
    window.location.reload();
  };

  const toggleClass = () => {
    setisMenu(isMenu === false ? true : false);
    setResponsiveclose(isResponsiveclose === false ? true : false);
  };

  function setData(data) {
    try {
      setSelectedMode(data);
    } catch (error) {
      console.log("error setting state");
    }
    localStorage.setItem("id", data);
  }

  let boxClass = ["main-menu menu-right menuq1"];
  if (isMenu) {
    boxClass.push("menuq2");
  } else {
    boxClass.push("");
  }

  const [isMenuSubMenu, setMenuSubMenu] = useState(false);

  const toggleSubmenu = () => {
    setMenuSubMenu(isMenuSubMenu === false ? true : false);
  };

  let boxClassSubMenu = ["sub__menus"];
  if (isMenuSubMenu) {
    boxClassSubMenu.push("sub__menus__Active");
  } else {
    boxClassSubMenu.push("");
  }

  return (
    <header className="header__middle">
      <div className="container">
        <div className="row">
          <div className="header__middle__logo">
            <NavLink exact activeClassName="is-active" to="/">
              <img src={logo} alt="logo" />
            </NavLink>
          </div>

          <div className="header__middle__menus">
            <nav className="main-nav ">
              {isResponsiveclose === true ? (
                <>
                  <span
                    className="menubar__button"
                    style={{ display: "none" }}
                    onClick={toggleClass}
                  >
                    {" "}
                    <FiXCircle />{" "}
                  </span>
                </>
              ) : (
                <>
                  <span
                    className="menubar__button"
                    style={{ display: "none" }}
                    onClick={toggleClass}
                  >
                    {" "}
                    <FiAlignRight />{" "}
                  </span>
                </>
              )}

              <ul className={boxClass.join(" ")}>
                <li className="menu-item">
                  <NavLink
                    exact
                    activeClassName="is-active"
                    onClick={toggleClass}
                    to={`/`}
                  >
                    {" "}
                    Home{" "}
                  </NavLink>
                </li>
                <li className="menu-item ">
                  <NavLink
                    exact
                    activeClassName="is-active"
                    onClick={toggleClass}
                    to={`/Detailed`}
                  >
                    {" "}
                    Detailed{" "}
                  </NavLink>{" "}
                </li>
                <li
                  onClick={toggleSubmenu}
                  className="menu-item sub__menus__arrows"
                >
                  {" "}
                  <Link to="#">
                    {" "}
                    ColdStorage <FiChevronDown />{" "}
                  </Link>
                  <ul className={boxClassSubMenu.join(" ")}>
                    {cs_id.map((item, index) => {
                      return (
                        <li key={index}>
                          <center>
                            <Button
                              style={{ textTransform: "none" }}
                              onClick={() => setData(item)}
                            >
                              <b>{item}</b>
                            </Button>
                          </center>
                        </li>
                      );
                    })}
                  </ul>
                </li>
                <li className="menu-item ">
                  <NavLink
                    exact
                    onClick={toggleClass}
                    activeClassName="is-active"
                    to={`/Manage`}
                  >
                    {" "}
                    Manage{" "}
                  </NavLink>{" "}
                </li>
                <li className="menu-item ">
                  <NavLink exact onClick={signOut} to={" "}>
                    {" "}
                    Signout{" "}
                  </NavLink>{" "}
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbarmenu;
