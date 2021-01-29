import profileReducer from "./profile-reducer";
import messageReducer from "./message-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi, how are you ?', likesCount: 0},
                {id: 2, message: 'It\'s my first post', likesCount: 2},
                {id: 3, message: 'bLAlLD', likesCount: 12},
                {id: 4, message: 'dCLCM', likesCount: 20}
            ],
            newPostText: 'pipi'
        },
        messagePage: {
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
        },
        sidebar: {}
    },
    _callSubscriber() {
        console.log('State changed');
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {  // type: 'ADD-POST'
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.messagePage = messageReducer(this._state.messagePage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);
        this._callSubscriber(this._state);
    }
}

window.store = store;
export default store;

