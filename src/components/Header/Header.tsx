import React from 'react';
import { styled } from '@mui/material/styles';
import { Icon } from "@iconify/react"
import { Box } from '@mui/material';
import Profile from '../profile/Profile';
import classes from './Header.module.scss'


interface props {
    open?: boolean
    text?: string
    subtext?: string
}

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  marginRight: '30px',
  ...theme.mixins.toolbar,
}));

const Header: React.FC<props> = (props) => {
  return (
        <Box
          sx={{
              display: 'flex',
              justifyContent: 'space-between',
              boxSizing: 'border-box',
              width: '100%'
        }}
        >
          <div className={classes.navTitle}>
               <h1>{props.text? props.text: ""}</h1>
               {
                props.subtext && <div className={classes.navTitle_text}>
                  <div className={classes.navTitle_text_arrow}>

                  <Icon color="white" icon="majesticons:arrow-left"/>
                  </div>
                <b> <small>{props.subtext} </small></b>
                </div>
               }
          </div>

          <DrawerHeader>
            <div className={classes.navTitle_cart}>
              <Icon fontSize="20px" icon='iconoir:cart'/>
              <div>{1}</div>
            </div>
            <Icon style={{
              marginRight: "25px"
            }} fontSize="20px" icon='carbon:notification'/>
            <Profile/>
          </DrawerHeader>
        </Box>
        
  )
}

export default Header
