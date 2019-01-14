import React from 'react';
import {withStyles} from "@material-ui/core/styles";
import classnames from "classnames";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import titleInitials from "../utils/title-initials";


const styles = theme => ({
  messageWrapper: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: `${theme.spacing.unit}px ${theme.spacing.unit * 3}px`,
  },
  messageWrappperFromMe: {
    justifyContent: 'flex-end',
  },
  message: {
    maxWidth: '70%',
    minWidth: '10%',
    padding: theme.spacing.unit,
    marginLeft: theme.spacing.unit * 2,
  },
  messageFromMe: {
    marginRight: theme.spacing.unit * 2,
    backgroundColor: '#e6dcff'
  },
});

const ChatItem = ({classes, sender,content}) => {
  const isMessageFromMe = sender === 'me';
  const userAvatar = (
    <Avatar>{titleInitials(sender)}</Avatar>
  );
  const {messageWrapper, messageWrapperFromMe, message, messageFromMe} = classes;
  return (
    <div className={classnames(
      messageWrapper,
      isMessageFromMe && messageWrapperFromMe
    )}>
      {!isMessageFromMe && userAvatar}
      <Paper className={classnames(
        message,
        isMessageFromMe && messageFromMe)
      }>
        <Typography variant="caption">
          {sender}
        </Typography>
        <Typography variant="body1">
          {content}
        </Typography>
      </Paper>
      {isMessageFromMe && userAvatar}
    </div>
  );
};

export default withStyles(styles)(ChatItem);
