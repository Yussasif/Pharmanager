import { Padding, WidthFull } from "@mui/icons-material";
import { Box } from "@mui/material";
import React, {useContext, useEffect} from "react";
import { Outlet } from "react-router-dom";

import Sidebar from "../components/sidebar/Sidebar";
import TopNav from "../components/topnav/TopNav";

import SidebarContext from "../store/sidebarContext";
import classes from "./MainLayout.module.scss";

const MainLayout = () => {
  

  return (
    <Box sx={{
      display: 'flex',
      width: '100%',
      paddingLeft: '1em',
      paddingRight: '1em',
      
    }}>
      <Sidebar />
      <Box component="main"
        sx={{
          width: '100%'
        }}
      >
        <Outlet/>
      </Box>
    </Box>
  );
};

export default MainLayout;
