import styles from "./users.module.css";
import userPhoto from "../../assets/images/user.png";
import React from "react";
import {NavLink} from "react-router-dom";
import axios from "axios";
import {followAPI} from "../Api/Api";

const Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    return (
        <div>
            <div>
                {pages.map(p => {
                    return <span key={p + "_user_key"} className={props.currentPage === p ? styles.selectedPage : ""}
                                 onClick={(e) => {
                                     props.onPageChanged(p);
                                 }}>{p}</span>
                })}
            </div>
            {
                props.users.map(u =>
                    <div key={u.id}>
                        <span>
                            <div>
                                <NavLink to={'/profile/' + u.id}>
                                <img src={u.photos.small != null ? u.photos.small : userPhoto}
                                     className={styles.userPhoto} alt={""}/>
                                </NavLink>
                            </div>
                            <div>
                                {u.followed
                                    ? <button onClick={() => {
                                        followAPI.getUnFollow(u.id).then(data => {
                                                if (data.resultCode == 0) {
                                                    props.unfollow(u.id);
                                                }
                                            });
                                    }}>Unfollow</button>
                                    : <button onClick={() => {
                                        followAPI.getFollow(u.id).then(data => {
                                                if (data.resultCode == 0) {
                                                    props.follow(u.id);
                                                }
                                            });
                                    }}>Follow</button>
                                }
                                    </div>
                                    </span>
                        <span>
                            <span>
                                <div>{u.name}</div>
                                <div>{u.status}</div>
                            </span>
                            <span>
                                <div>{"u.location.country"}</div>
                                <div>{"u.location.city"}</div>
                            </span>
                        </span>
                    </div>)
            }
        </div>
    );
}

export default Users;