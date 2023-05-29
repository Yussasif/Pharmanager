import React from "react";
import { Icon } from "@iconify/react";
import { useWindowSize } from "usehooks-ts";
import SearchBox from "./searchBox/SearchBox";
import SidebarContext from "../../store/sidebarContext";

import classes from "./TopNav.module.scss";

interface props {
  component: JSX.Element
}

function TopNav(props : props) {
  const sideOpenCtx = React.useContext(SidebarContext);
  const { width } = useWindowSize();

  function openSidebarHandler() {
    sideOpenCtx.toggleSidebar();
    if (width <= 768) document.body.classList.toggle("sidebar__open");
  }

  return (
    <div className={classes.topNav}>
      <div className={classes.topNav_left}>
        <div
          className={classes.topNav_left_menu_icon}
          onClick={openSidebarHandler}
        >
          <Icon icon="charm:menu-hamburger" width="24" />
        </div>
        <div className={classes.topNav_left_menu} onClick={openSidebarHandler}>
          <div className="topNav_left_menu_open">
            <Icon icon="solar:hamburger-menu-broken" width="34" />
          </div>

          <div className="topNav_left_menu_close">
            <Icon icon="solar:hamburger-menu-broken" width="34" />
          </div>
        </div>
        <div className={classes.search_desktop_wrapper}>
          {props.component}
        </div>
      </div>
      <br />
      <div className={classes.search_tablet_wrapper}>
        <SearchBox />
      </div>
    </div>
  );
}
export default TopNav;
