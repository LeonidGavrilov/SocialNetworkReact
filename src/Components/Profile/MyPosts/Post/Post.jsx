import React from 'react';
import s from './Post.module.css';

const Post = () => {
    return (
        <div className={s.item}>
            <img src='https://boombo.pro/uploads/posts/2019-06/1559819674_72e3597bb2bdc4d2e19a08429db4c34a.jpg' />
                    post 1
            <div>
                <span>Like</span>
            </div>
        </div>
    );
}

export default Post;