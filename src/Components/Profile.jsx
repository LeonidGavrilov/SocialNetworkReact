import React from 'react';
import s from './Profile.module.css';

const Profile = () => {
    return (
        <div className={s.content}>
            <div>
                <img src='http://st-gdefon.gallery.world/wallpapers_medium/233686_gallery.world.jpg' />
            </div>
            <div>
                ava+description
        </div>
            <div>
                My posts
          <div>
                    New post
          </div>
                <div className={s.posts}>
                    <div className={s.item}>
                        post 1
            </div>
                    <div className={s.item}>
                        post 2
            </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;