import React from 'react';
import {Route, BrowserRouter} from "react-router-dom";
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import News from "./Components/News/News";
import Music from "./Components/Music/Music";
import Settings from "./Components/Settings/Settings";
import MessagesContainer from "./Components/Dialogs/MessagesContainer";
import UsersContainer from "./Components/Users/UsersContainer";
import ProfileContainer from "./Components/Profile/ProfileContainer";
import HeaderContainer from "./Components/Header/HeaderContainer";

const App = (props) => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <HeaderContainer/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path={'/profile/:userId?'}
                           render={() => <ProfileContainer/>}/>

                    <Route path={'/messages'}
                           render={() => <MessagesContainer/>}/>

                    <Route path={'/users'}
                           render={() => <UsersContainer/> } />

                    <Route path={'/news'} render={() => <News/>}/>
                    <Route path={'/music'} render={() => <Music/>}/>
                    <Route path={'/settings'} render={() => <Settings/>}/>
                </div>
            </div>
        </BrowserRouter>

    );
}

export default App;
