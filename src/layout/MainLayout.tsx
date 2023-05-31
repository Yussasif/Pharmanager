import React from "react";
import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";

import Sidebar from "../components/sidebar/Sidebar";

const MainLayout: React.FC = () => {
  const [toggleWidth, setToggleWidth] = React.useState(true)

  return (
    <Box sx={{
      display: 'flex',
      width: '100%',
      paddingLeft: '1em',
      paddingRight: '1em',
      
    }}>
      <Sidebar toggler={setToggleWidth}/>
      <Box component="main"
        sx={{
          flexGrow: 1,
          flexWrap: "wrap",
          transition: toggleWidth? 'none':'width 0.2s ease-in-out 0.1s',
          width: toggleWidth? 'calc(100% - 240px)': '95%',
        }}
      >
        <Outlet/>
      </Box>
    </Box>
  );
};

export default MainLayout;
