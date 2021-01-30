import React from 'react';
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../Redux/message-reducer";
import Messages from "./Messages";

const MessagesContainer = (props) => {
    let state = props.store.getState().messagePage;

    let onSendMessageCLick = () => {
        props.store.dispatch(sendMessageCreator());
    }
    let onNewMessageChange = (body) => {
        props.store.dispatch(updateNewMessageBodyCreator(body));
    }
    return (<Messages updateNewMessageBody = {onNewMessageChange}
                      sendMessage = {onSendMessageCLick}
                      messagePage = {state} />);
}

export default MessagesContainer;