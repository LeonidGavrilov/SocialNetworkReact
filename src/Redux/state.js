const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

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
        }
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

    // addPost() {
    //     let newPost = {
    //         id: 5,
    //         message: this._state.profilePage.newPostText,
    //         likesCount: 21
    //     };
    //     this._state.profilePage.posts.push(newPost);
    //     this._state.profilePage.newPostText = '';
    //     this._callSubscriber(this._state);
    // },
    // updateNewPostText(newText) {
    //     this._state.profilePage.newPostText = newText;
    //     this._callSubscriber(this._state);
    // },

    dispatch(action) {  // type: 'ADD-POST'
        if (action.type === ADD_POST) {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: 21
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
            this._state.messagePage.newMessageBody = action.body;
            this._callSubscriber(this._state);
        } else if (action.type === SEND_MESSAGE) {
            let body = this._state.messagePage.newMessageBody;
            this._state.messagePage.newMessageBody = '';
            this._state.messagePage.messages.push({id: 7, message: body});
            this._callSubscriber(this._state);
        }
    }
}
export const addPostActionCreator = () => ({type: ADD_POST});
export const updateNewPostTextActionCreator = (text) =>
    ({type: UPDATE_NEW_POST_TEXT, newText: text})
export const sendMessageCreator = () => ({type: SEND_MESSAGE});
export const updateNewMessageBodyCreator = (body) =>
    ({type: UPDATE_NEW_MESSAGE_BODY, body: body})

window.store = store;
export default store;

// let rerenderEntireTree = () => {
//     console.log('State changed');
// }
// let state = {
//     profilePage: {
//         posts: [
//             {id: 1, message: 'Hi, how are you ?', likesCount: 0},
//             {id: 2, message: 'It\'s my first post', likesCount: 2},
//             {id: 3, message: 'bLAlLD', likesCount: 12},
//             {id: 4, message: 'dCLCM', likesCount: 20}
//         ],
//         newPostText: 'pipi'
//     },
//     messagePage: {
//         dialogs: [
//             {id: 1, name: 'item_1'},
//             {id: 2, name: 'item_2'},
//             {id: 3, name: 'item_3'},
//             {id: 4, name: 'item_4'},
//             {id: 5, name: 'item_5'},
//             {id: 6, name: 'item_6'}
//         ],
//         messages: [
//             {id: 1, message: 'Hi'},
//             {id: 2, message: 'Hii'},
//             {id: 3, message: 'Hite'},
//             {id: 4, message: 'i'},
//             {id: 5, message: 'i'},
//             {id: 6, message: 'i'}
//         ]
//     }
// }
//
// export const addPost = () => {
//     let newPost = {
//         id: 5,
//         message: state.profilePage.newPostText,
//         likesCount: 21
//     };
//     state.profilePage.posts.push(newPost);
//     state.profilePage.newPostText = '';
//     rerenderEntireTree(state);
// }
//
//
//
// export const updateNewPostText = (newText) => {
//     state.profilePage.newPostText = newText;
//     rerenderEntireTree(state);
// }
//
// export const subscribe = (observer) => {
//     rerenderEntireTree = observer;
// }

