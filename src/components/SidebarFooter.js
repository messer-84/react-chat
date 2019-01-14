import React from 'react';
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import RestoreIcon from "@material-ui/icons/Restore";
import ExploreIcon from "@material-ui/icons/Explore";

const SidebarFooter = () => (
  <BottomNavigation showLabels>
    <BottomNavigationAction label="My Chats" icon={<RestoreIcon/>}/>
    <BottomNavigationAction label="Explore" icon={<ExploreIcon/>}/>
  </BottomNavigation>
);

export default SidebarFooter;
