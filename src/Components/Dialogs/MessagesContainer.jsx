import React from 'react';
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../Redux/message-reducer";
import Messages from "./Messages";
import StoreContext from "../../StoreContext";

const MessagesContainer = () => {
    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    let onSendMessageCLick = () => {
                        store.dispatch(sendMessageCreator());
                    }
                    let onNewMessageChange = (body) => {
                        store.dispatch(updateNewMessageBodyCreator(body));
                    }
                    return <Messages updateNewMessageBody={onNewMessageChange}
                                     sendMessage={onSendMessageCLick}
                                     messagePage={store.getState().messagePage}/>
                }
            }
        </StoreContext.Consumer>
    );
}

export default MessagesContainer;