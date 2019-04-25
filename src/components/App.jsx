import React from "react";
import { Switch, Route } from 'react-router-dom';

import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import Team from './Team';

function App(){
  return (
    <div>
      <style jsx global>{`
        div{
          font-family: Helvetica Neue,Helvetica,Arial,sans-serif;
        }
        .footerMargin{
          margin-top: 110px;
          margin-bottom: 170px;
        }
      `}</style>
    <div className="footerMargin">
      <Header/>
      <Switch>
        <Route exact path='/' component={Main}/>
        <Route path='/team' component={Team}/>
      </Switch>
    </div>
      <Footer/>
    </div>
  );
}

export default App;
