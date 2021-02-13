import React from "react";
import styles from "./users.module.css";

let Users = (props) => {
    if (props.users.length === 0) {
    props.setUsers(
        [
            {id: 1, photoURL: 'https://www.media2.hw-static.com/wp-content/uploads/58769132.jpg', followed: false, fullName: 'Dmitry', status: 'bla bla', location: {city: 'Moscow', country: 'Russia'}},
            {id: 2, photoURL: 'https://media.todaybirthdays.com/2015/11/10/jake-pitts0.jpg', followed: false, fullName: 'Vadim', status: 'bla bla', location: {city: 'Minsc', country: 'Belarus'}},
            {id: 3, photoURL: 'https://i.pinimg.com/originals/de/84/0a/de840ac63767cbc461e0f10d7c239d69.jpg', followed: true, fullName: 'Sara', status: 'bla bla', location: {city: 'Tel-Aviv', country: 'Israel'}},
            {id: 4, photoURL: 'https://avatars.mds.yandex.net/get-zen_doc/1567788/pub_5d610858bd45c000ad9d4df8_5d610a67c49f2900ad3a0b76/scale_1200', followed: true, fullName: 'Ameliy', status: 'bla bla', location: {city: 'New York', country: 'USA'}},
        ]
    )
    }
    return (
        <div>
            {
                props.users.map(u =>
                    <div key={u.id}>
                        <span>
                            <div><img src={u.photoURL} className={styles.userPhoto}/></div>
                            <div>
                                {u.followed
                                    ? <button onClick={() => (props.unfollow(u.id))}>Unfollow</button>
                                    : <button onClick={() => (props.follow(u.id))}>Follow</button>
                                }
                            </div>
                        </span>
                        <span>
                            <span>
                                <div>{u.fullName}</div>
                                <div>{u.status}</div>
                            </span>
                            <span>
                                <div>{u.location.country}</div>
                                <div>{u.location.city}</div>
                            </span>
                        </span>
                    </div>)
            }
        </div>
    );
}

export default Users;