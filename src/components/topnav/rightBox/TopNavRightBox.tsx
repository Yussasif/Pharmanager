import React from "react";
import Profile from "./profile/Profile";

import { Icon } from "@iconify/react";

import classes from "./TopNavRightBox.module.scss";

function TopNavRightBox() {
  return (
    <div className={classes.topNavBox_right}>
      <div className={classes.wrapper}>
        <div className={classes.icon_wrapper}>
          <Icon icon="carbon:notification" className={classes.icon}/>
          <span className={classes.count}>3</span>
        </div>
      </div>
      <Profile />
    </div>
  );
}

export default TopNavRightBox;
