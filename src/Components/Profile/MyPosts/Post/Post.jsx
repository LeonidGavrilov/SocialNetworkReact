import React from 'react';
import { useState } from 'react';
import s from './Post.module.css';

const Post = (props) => {
    const [clicked, setClicked] = useState(false);
    const like = require('./heart-icon.png');
    const disLike = require('./diHeart-icon.png');
    return (
        <div className={s.item}>
            <img src='https://boombo.pro/uploads/posts/2019-06/1559819674_72e3597bb2bdc4d2e19a08429db4c34a.jpg' />
                {props.message}
            <div className={s.it}>
                <img src = {clicked ? like : disLike} onClick={() => setClicked(prev => !prev)} />
                {props.likesCount}
            </div>
        </div>
    );
}

export default Post;