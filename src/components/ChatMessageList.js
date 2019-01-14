import React from 'react';
import ChatItem from "./ChatItem";
import {withStyles} from "@material-ui/core/styles";


const styles = theme => ({
  messagesWrapper: {
    overflowX: 'scroll',
    height: '100%',
    width: '100%',
    paddingTop: theme.spacing.unit * 3,
    paddingBottom: '120px',
  },

});

class ChatMessageList extends React.Component {
  messagesWrapper = React.createRef();

  componentDidMount() {
    console.log('did');
    this.scrollDownHistory();
  }

  componentDidUpdate() {
    console.log('upd');
    // this.scrollDownHistory();
  }

  scrollDownHistory = () => {
    const messagesWrapper = this.messagesWrapper.current;

    if (messagesWrapper) {
      messagesWrapper.scrollTop = messagesWrapper.scrollHeight;
    }

  };

  render() {
    const {classes, messages} = this.props;

    return (
      <div className={classes.messagesWrapper} ref={this.messagesWrapper}>
        {messages && messages.map((message, index) => (
          <ChatItem key={index} { ...message }/>
        ))}
      </div>
    )
  }


}

export default withStyles(styles)(ChatMessageList);

