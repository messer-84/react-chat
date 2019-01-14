import React from 'react';
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Avatar from "@material-ui/core/Avatar";
import titleInitials from "../utils/title-initials";
import ListItemText from "@material-ui/core/ListItemText";
import {withStyles} from "@material-ui/core/styles";

const styles = theme => ({
  chatsList: {
    height: 'calc(100% - 56px)',
    overflowY: 'scroll',
  },
});

const SidebarList = ({classes, chats}) => (
  <List className={classes.chatsList}>
       {chats.map((chat, index) => (
         <ListItem key={index} button>
           <Avatar>{titleInitials(chat.title)}</Avatar>
           <ListItemText primary={chat.title}/>
         </ListItem>
       ))}
     </List>
);

export default withStyles(styles)(SidebarList);
