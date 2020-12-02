import React from 'react';
import {Route, BrowserRouter} from "react-router-dom";
import './App.css';
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';
import Profile from './Components/Profile/Profile';
import Messages from "./Components/Dialogs/Messages";
import News from "./Components/News/News";
import Music from "./Components/Music/Music";
import Settings from "./Components/Settings/Settings";

const App = (props) => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path={'/profile'}
                           render={() => <Profile
                               profilePage={props.state.profilePage}
                               addPost={props.addPost}
                               updateNewPostText={props.updateNewPostText}/>}/>

                    <Route path={'/messages'}
                           render={() => <Messages
                               state={props.state.messagePage}/>}/>

                    <Route path={'/news'} render={() => <News/>}/>
                    <Route path={'/music'} render={() => <Music/>}/>
                    <Route path={'/settings'} render={() => <Settings/>}/>
                </div>
            </div>
        </BrowserRouter>

    );
}

export default App;
