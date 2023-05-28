import { Box } from "@mui/material";
import React, {useContext, useEffect} from "react";
import { Outlet } from "react-router-dom";

import Sidebar from "../components/sidebar/Sidebar";
import TopNav from "../components/topnav/TopNav";

import SidebarContext from "../store/sidebarContext";
import classes from "./MainLayout.module.scss";

const MainLayout = () => {
  // const sidebarCtx = useContext(SidebarContext);

  // useEffect(() => {
  //   if (document.body.classList.contains("sidebar__open"))
  //     document.body.classList.remove("sidebar__open");
  // }, []);

  return (
    <Box className={classes.container}>
      <Sidebar />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Outlet/>
      </Box>
    </Box>
  );
};

export default MainLayout;
