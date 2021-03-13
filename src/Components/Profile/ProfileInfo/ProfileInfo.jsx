import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }
    return (
        <div>
            <div>
                <img src='http://st-gdefon.gallery.world/wallpapers_medium/233686_gallery.world.jpg' alt={""}/>
            </div>
            <div className={s.descriptionBlock}>
                {
                    props.profile?.photos?.large
                    && <img src={props.profile.photos.large} alt={""}/>
                }
                {/*<span>{props.profile.user.fullName}</span>*/}

                ava+description
            </div>
        </div>
    );
}

export default ProfileInfo;