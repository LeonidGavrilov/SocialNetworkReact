import React from 'react';
import { useState } from 'react';
import s from './Post.module.css';

const Posts = (props) => {
    const [clicked, setClicked] = useState(false);
    const like = require('./heart-icon.png');
    const disLike = require('./diHeart-icon.png');
    return (
        <div className={s.item}>
            <img src='https://i.artfile.ru/2880x1800_1491443_%5Bwww.ArtFile.ru%5D.jpg' />
                {props.message}
            <div className={s.it}>
                <img src = {clicked ? like : disLike} onClick={() => setClicked(prev => !prev)} />
                {props.likesCount}
            </div>
        </div>
    );
}

export default Posts;