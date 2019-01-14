import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import SidebarFooter from '../components/SidebarFooter';
import Drawer from "@material-ui/core/Drawer";
import Divider from "@material-ui/core/Divider";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import SidebarHeader from "./SidebarHeader";
import SidebarList from './SidebarList';


const styles = theme => ({
  drawerPaper: {
    position: 'relative',
    height: '100%',
    width: 320,
  },
  newChatButton: {
    position: 'absolute',
    left: 'auto',
    right: theme.spacing.unit * 3,
    bottom: theme.spacing.unit * 3 + 48, // + bottom navigation
  },
});

const Sidebar = ({classes, chats}) => (
  <Drawer
    variant="permanent"
    classes={{
      paper: classes.drawerPaper,
    }}
  >
    <SidebarHeader/>
    <Divider/>
    <SidebarList chats={chats}/>
    <Fab
      color="primary"
      className={classes.newChatButton}
    >
      <AddIcon/>
    </Fab>
    <SidebarFooter/>
  </Drawer>
);

export default withStyles(styles)(Sidebar);

