import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img src='http://st-gdefon.gallery.world/wallpapers_medium/233686_gallery.world.jpg'/>
            </div>
            <div className={s.descriptionBlock}>
                ava+description
            </div>
        </div>
    );
}

export default ProfileInfo;