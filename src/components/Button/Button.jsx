import React from 'react'

import { Button } from '@mui/material'
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';

// importing icons
import { Icon } from '@iconify/react';


// import { makeStyles } from '@material-ui/core/styles';

import classes from './button.module.scss'

const CustomButton = ({bgColor, txtColor, btnValue}) => {
  let pop = true;
  return (
    <div>
      <PopupState variant="popover" popupId="demo-popup-menu">
        {(popupState) => (
          <React.Fragment>
            <Button 
              className={classes.btn}
              {...bindTrigger(popupState)} 
              style={{backgroundColor: bgColor, color: txtColor,}}
            >
              {btnValue}
            </Button>
            
            <Menu {...bindMenu(popupState)}>
              <MenuItem onClick={popupState.close}>
                <Icon icon="material-symbols:add-circle-rounded" className={classes.icon}/>
                Add new purchase
              </MenuItem>
              <MenuItem onClick={popupState.close}>
                <Icon icon="ic:round-remove-red-eye" className={classes.icon}/>
                View all purchases
              </MenuItem>
            </Menu>
          </React.Fragment>
        )}
      </PopupState>
    </div>
  )
}

export default CustomButton