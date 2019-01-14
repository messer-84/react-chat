import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import TextField from "@material-ui/core/TextField";


const styles = theme => ({
   drawerHeader: {
     ...theme.mixins.toolbar,
     paddingLeft: theme.spacing.unit * 3,
     paddingRight: theme.spacing.unit * 3,
   },

});

const SidebarHeader = ({classes}) => (
  <div className={classes.drawerHeader}>
    <TextField
      fullWidth
      margin="normal"
      placeholder="Search chats..."
    />
  </div>
);


export default withStyles(styles)(SidebarHeader);
