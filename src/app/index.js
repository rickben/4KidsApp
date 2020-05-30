import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { NavBar } from '../components'
import { popUp } from '../components'
import { ItemsUpdate, ItemsInsert, ItemsList } from '../pages'

import 'bootstrap/dist/css/bootstrap.min.css'
import Popup from "reactjs-popup";


function App() {
    return (
        <Router>
            <popUp>
                <Popup trigger={<button > Register </button>} position="right center">
                    <div>
                        <head>
                            <title>Sign-in</title>
                        </head>
                        <body>
                            <h1>Sign in:</h1>
                                <fieldset>
                                    <legend>To make your own photo diary</legend>
                                    Username:
                                    <input type="text" id="username" placeholder="Enter your name" required
                                           autoComplete/>
                                    <br/>
                                    Password:
                                    <input type="password" id="password" placeholder="Choose password" required
                                           maxLength="8"/>
                                    <br/>
                                    <input type="date" id="calendar" value="01/01/2019" required/>
                                    <input type="submit" id="button" value="login"/>
                                </fieldset>
                        </body>
                    </div>
                </Popup>
            </popUp>
            <NavBar />
            <Switch>
                <Route path="/items/list" exact component={ItemsList} />
                <Route path="/items/create" exact component={ItemsInsert} />
                <Route path="/items/update/:id" exact component={ItemsUpdate}/>
            </Switch>
        </Router>
    )
}

export default App