import React from 'react'
import './app.css'
import Dashboard from './components/dashboard/Dashboard'
import Employes from './components/employ/Employes.js'
import Notification from './components/notifications/Notification'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  import Charts from './components/chart/Chart';
  import Login from './components/login/Login'
export default function App() {

    return (<>

<div className='app' style={{backgroundImage:`url(${process.env.PUBLIC_URL + '/images/grid.png'}),radial-gradient(98.31% 98.31% at 50.03% 103.64%, rgb(119 119 119 / 48%) 0%, rgb(16 19 27) 100%)`}}> 

       
           <Switch>
              <Route path="/" component={Dashboard} exact />
                <Route path="/notification" component={Notification}/>
                <Route path="/employe" component={Employes} />
                <Route path="/chart" component={Charts} />
                <Route path="/login" component={Login} />
            </Switch>
        </div>
    </>
       
    )
}
