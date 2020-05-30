import React, {Component} from "react";
import Popup from "reactjs-popup";


class popUp extends Component {
    render() {
        return (
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
        )
    }
}
export default popUp