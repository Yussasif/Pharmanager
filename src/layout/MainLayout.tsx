import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";

import Sidebar from "../components/sidebar/Sidebar";

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
