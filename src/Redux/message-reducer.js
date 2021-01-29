const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
    dialogs: [
        {id: 1, name: 'item_1'},
        {id: 2, name: 'item_2'},
        {id: 3, name: 'item_3'},
        {id: 4, name: 'item_4'},
        {id: 5, name: 'item_5'},
        {id: 6, name: 'item_6'}
    ],
    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'Hii'},
        {id: 3, message: 'Hite'},
        {id: 4, message: 'i'},
        {id: 5, message: 'i'},
        {id: 6, message: 'i'}
    ],
    newMessageBody: ''
};

const messageReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body;
            return state;
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            state.newMessageBody = '';
            state.messages.push({id: 7, message: body});
            return state;
        default:
            return state;
    }
}
export const sendMessageCreator = () => ({type: SEND_MESSAGE});
export const updateNewMessageBodyCreator = (body) =>
    ({type: UPDATE_NEW_MESSAGE_BODY, body: body})
export default messageReducer;