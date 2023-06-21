import React from "react";
import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";

import Sidebar from "../components/Sidebar/Sidebar";
import MediaQuery from "../components/MediaQuery";
// import classes from './MainLayout.module.scss'

const MainLayout: React.FC = () => {
  const [toggleWidth, setToggleWidth] = React.useState(true)

  return (
    <Box  sx={{
      display: 'flex',
      width: '100%',
      paddingLeft: '1em',
      paddingRight: '1em',
      
    }}>
      <Sidebar toggler={setToggleWidth}/>
      <Box component="main"
        sx={{
          flexGrow: 1,
          transition: toggleWidth? 'none':'width 0.1s ease-in-out 0.1s',
          width: toggleWidth? 'calc(100% - 240px)': '95%',
        }}
      >
        <MediaQuery>
          <Outlet/>
        </MediaQuery>
      </Box>
    </Box>
  );
};

export default MainLayout;
