import React from 'react';
import Paper from "@material-ui/core/Paper";
import Input from "@material-ui/core/Input";
import {withStyles} from "@material-ui/core/styles";


const styles = theme => ({
  messageInputWrapper: {
    position: 'fixed',
    left: 'auto',
    right: 0,
    bottom: 0,
    width: `calc(100% - 370px)`,
    padding: theme.spacing.unit * 3,
  },
  messageInput: {
    padding: theme.spacing.unit * 2,
  },
});

const MessageInput = ({classes}) => (
  <div className={classes.messageInputWrapper}>
    <Paper className={classes.messageInput} elevation={6}>
      <Input fullWidth placeholder="Type your message…"/>
    </Paper>
  </div>
);

export default withStyles(styles)(MessageInput);
