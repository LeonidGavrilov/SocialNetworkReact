import {cloneDeep} from "lodash";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    posts: [
        {id: 1, message: 'Hi, how are you ?', likesCount: 0},
        {id: 2, message: 'It\'s my first post', likesCount: 2},
        {id: 3, message: 'bLAlLD', likesCount: 12},
        {id: 4, message: 'dCLCM', likesCount: 20}
    ],
    newPostText: 'pipi'
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 21
            };
            let stateDeep = cloneDeep(state);
            stateDeep.posts.push(newPost);
            stateDeep.newPostText = '';
            return stateDeep;
        }
        case UPDATE_NEW_POST_TEXT: {
            let stateDeep = cloneDeep(state);
            stateDeep.newPostText = action.newText;
            return stateDeep;
        }
        default:
            return state;
    }
}
export const addPostActionCreator = () => ({type: ADD_POST});
export const updateNewPostTextActionCreator = (text) =>
    ({type: UPDATE_NEW_POST_TEXT, newText: text})

export default profileReducer;