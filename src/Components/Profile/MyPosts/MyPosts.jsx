import React from 'react';
import s from './MyPosts.module.css';
import Posts from './Post/Post';

const MyPosts = (props) => {

    let postsElements =
        props.posts.map((p, i) => <Posts key={'post_' + i} message={p.message} likesCount={p.likesCount}/>)

    let newPostElemen = React.createRef();
    let addPost = () => {
        // props.addPost();
        props.dispatch({type: 'ADD-POST'});
    }
    let onPostChange = () => {
        let text = newPostElemen.current.value;
        // props.updateNewPostText(text);
        let action = {type: 'UPDATE-NEW-POST-TEXT', newText: text};
        props.dispatch(action);
    }
    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea ref={newPostElemen} value={props.newPostText} onChange={onPostChange}/>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    );
}

export default MyPosts;