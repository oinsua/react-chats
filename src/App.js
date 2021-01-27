import React, {useEffect} from 'react';
import {Link, Route, Switch} from 'react-router-dom';
//Importar componentes
import Home from './page/Home/Home';
import Chats from './page/Chats/Chats';
import Error from './page/Error/Error';
//Importar estiled components
import {Header, Img, H1, DIV} from './styled';
//Importar archivos
import Logo from './asset/img/logo.png';
 
const App = () => {
    return ( 
        <> 
           <DIV>
                <Header>
                    <H1>Web</H1>
                    <Img src={Logo} alt="Logo" />
                    <H1>Chat</H1>
                </Header>
           </DIV>
            <Switch>
                <Route path="/" exact><Home/></Route>
                <Route path="/chats"><Chats/></Route>
                <Route path="/error"><Error/></Route>
            </Switch>
        </>
    );
}

export default App;