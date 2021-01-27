import React, {useEffect} from 'react';
import {Link, Route, Switch} from 'react-router-dom';
//Importar componentes
import Home from './page/Home/Home';
import Chats from './page/Chats/Chats';
import Error from './page/Error/Error';

import io from 'socket.io-client';


const App = () => {

    useEffect(() => {
      io('/');
    },[])
    return ( 
        <> 
           <header className="header-container">
                     <div className="menu-container">
                          <h1>Header del Chats -React</h1>
                     </div>
            </header>
             <nav className="nav-container">
                        <Link to="/" className="logo-container">
                            <h4>Aqui va el logo del chats</h4>
                        </Link>
             </nav>
                <section className="section-search">
                    <Switch>
                        <Route path="/" exact><Home/></Route>
                        <Route path="/chats"><Chats/></Route>
                        <Route path="/error"><Error/></Route>
                    </Switch>
                </section>
            <footer className="footer">Copyrigth</footer>
        </>
    );
}

export default App;