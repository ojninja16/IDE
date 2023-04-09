import React, { Component } from 'react';

import GitHubLogin from 'react-github-login';


import "./styles.css";


class App extends Component {

  

  render() {

    const onSuccessGithub = (response) => {
      console.log(response.code);
    } 

    return (
      <div className="App" align="center">
        <h1>LOGIN WITH GITHUB</h1>

          {/*CLIENTID REDIRECTURI NOT CREATED YET*/}
          <div className="input-container" >
          <div className="form">
            
              <label><GitHubLogin clientId="eadc3759d300d268d2be"
                  onSuccess={onSuccessGithub}
                  buttonText="LOGIN WITH GITHUB"
                  className="git-login"
                  valid={true}
                  redirectUri="_"
          />   </label>
            </div>
        </div>

          

          <br />
          <br />


      </div>
    );
  }
}

export default App;
