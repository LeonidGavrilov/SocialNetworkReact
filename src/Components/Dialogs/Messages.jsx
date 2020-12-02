import React from 'react';
import s from './Messages.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Messages = (props) => {

    let dialogsElements =
        props.state.dialogs.map(d => <DialogItem name={d.name} id={d.id} />);

    let messagesElements =
        props.state.messages.map(m => <Message message={m.message} />);

    let newAddElemen = React.createRef();
    let add = () => {
        let text = newAddElemen.current.value;
        alert(text);
    }
    return (
        <div className={s.dialogs}>
            <div>
                <textarea ref={newAddElemen}></textarea>
            </div>
            <div>
                <button onClick={ add }>Add post</button>
            </div>
            <div className={s.dialogsItem}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>

    );
}

export default Messages;