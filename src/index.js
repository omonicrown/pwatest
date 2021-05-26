import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
//import 'bootstrap/dist/css/bootstrap.min.css';
import createPackage from './Components/createPackage';
//import listPackage from './Components/listPackage';
import updatePackage from './Components/updatePackage';
import {Layout} from './Components/layout';
import {NavigationBar} from './Components/navbar';
import {SideNav} from './Components/sidenav';
import Dashboard from './Components/dashboard';
import PackageList from './Components/packageList';
import Subscription from './Components/subscription';
import CreateSubscription from './Components/createSubscription';
import {GLobalProvider} from './context/globalState';
import UpdateSubscription from './Components/updateSubscription';


 


ReactDOM.render(
  <GLobalProvider>
    <BrowserRouter>
  <NavigationBar />
  <SideNav />
  <Switch>
    <Route exact path='/' component={Dashboard}></Route>
    <Route path='/create' component={createPackage}></Route>
    <Route path='/subscription' component={Subscription}></Route>
    <Route path='/createsub' component={CreateSubscription}></Route>
    <Route path='/show' component={PackageList}></Route>
    <Route path='/edit' component={updatePackage}></Route>
    <Route path='/editsub' component={UpdateSubscription}></Route>
    <Route  component={404}></Route>
    </Switch>
   
  </BrowserRouter>
  </GLobalProvider>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
//serviceWorker.register();
