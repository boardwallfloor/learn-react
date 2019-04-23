import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div class="container">
        <div class="row">
          <div class="col s12">
          <div class="col s12 m4">
            
            <div class="card">
              <div class="card-content">
                  <form class="container">
                  <div className="row">
                    <div class="input-field col s12">
                      <input placeholder=" Your Name" id="name" type="text" class="validate"></input>
                      <label for="name">Name</label>
                    </div>
                    <div class="input-field col s12">
                      <input placeholder=" Your Name" id="name" type="text" class="validate"></input>
                      <label for="name">Name</label>
                    </div>
                    <div className="center-align">
                      <a class="btn waves-effect waves-light blue"><i class="material-icons">airplay</i></a>
                    </div>
                    </div>
                  </form>
                </div> 
           </div>
           </div>

           <div class="col s12 m8">
            <div class="col s12 m6">
              <div class="card">
                <div class="card-content">
                    <div class="card-image waves-effect waves-block waves-light">
                      <img class="activator" src={logo}></img>
                    </div>
                  <p>I am a very simple card. I am good at containing small bits of information.
                  I am convenient because I require little markup to use effectively.</p>
                </div>
                <div className="center-align">
                <a class="btn waves-effect waves-light red"><i class="material-icons">arrow_downward</i></a>
                </div>
                </div>
              </div>
              <div class="col s12 m6">
              <div class="card">
                <div class="card-content">
                  <div class="card-image waves-effect waves-block waves-light">
                      <img class="activator" src={logo}></img>
                    </div>
                  <p>I am a very simple card. I am good at containing small bits of information.
                  I am convenient because I require little markup to use effectively.</p>
                </div>
                <div className="center-align">
                <a class="waves-effect waves-light red btn"><i class="material-icons">arrow_downward</i></a>
                </div>
                </div>
              </div>
          </div>
            </div>
          
          </div>
         
        
        </div>

      
  );
}

export default App;
