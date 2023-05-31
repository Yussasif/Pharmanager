import React from 'react';
import { styled } from '@mui/material/styles';
import { Icon } from "@iconify/react"
import { Box } from '@mui/material';
import classes from './Header.module.scss'


interface props {
    open?: boolean
    text?: string
}

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
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
               <h1>{props.text}</h1>
               <div className={classes.navTitle_text}>
                <div className={classes.navTitle_text_arrow}>

                <Icon color="white" icon="majesticons:arrow-left"/>
                </div>
               <b> <small>Create an invoice </small></b>
               </div>
          </div>

          <DrawerHeader>
            <div className={classes.navTitle_cart}>
              <Icon icon='iconoir:cart'/>
              <div>{1}</div>
            </div>
            <Icon icon='carbon:notification'/>
            <div className={classes.navTitle_user}>PA</div>
          </DrawerHeader>
        </Box>
        
  )
}

export default Header
