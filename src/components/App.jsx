import React from "react";
import { Switch, Route } from 'react-router-dom';

import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import Team from './Team';

function App(){
  var footerStyle={
    position: 'fixed',
    left: '0',
    bottom: '0',
    width: '100%'
  }
  return (
    <div>
      <style jsx global>{`
        div{
          font-family: Helvetica Neue,Helvetica,Arial,sans-serif;
        }
      `}</style>
      <Header/>
      <Switch>
        <Route exact path='/' component={Main}/>
        <Route path='/team' component={Team}/>
      </Switch>
      <Footer style={footerStyle}/>
    </div>
  );
}

export default App;
