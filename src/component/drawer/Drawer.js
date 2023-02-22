import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import GridViewIcon from '@mui/icons-material/GridView';
import LogoutIcon from '@mui/icons-material/Logout';
import BusinessCenterRoundedIcon from '@mui/icons-material/BusinessCenterRounded';
import { Typography } from '@mui/material';


function FixedDrawer(){
    const drawerWidth = 250;

    function menuIcon(value){
        if(value==='Dashboard' || value==='Reports') return <GridViewIcon/>
        else if(value==='Sign Out') return <LogoutIcon/>
        else return <BusinessCenterRoundedIcon/>
    }
    return(
        <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="permanent"
        anchor="left"
      >
        
        <List sx={{backgroundColor:"hsl(249deg 68% 29%)"}}>
          {['Dashboard','Manage Subscription', 'Young Brain', 'Mid Career', 'Vendor',
          'Consultant','Reports','Sign Out'].map((item) => (
            <ListItem key={item} disablePadding sx={{color:"#e0e0e0",margin:"10px 0"}}>
              <ListItemButton>
                <ListItemIcon sx={{color:"#e0e0e0"}}>
                    {menuIcon(item)}
                </ListItemIcon>
                <Typography sx={{fontSize:"15px",fontFamily:"revert"}}>{item}</Typography>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    )
}

export default FixedDrawer;