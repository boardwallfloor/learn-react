import React,{Component} from 'react';
import logo from './logo.svg';
//import './App.css';
import Product from './Product.js';

class App extends Component {
  render() {
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
                      <a class="waves-effect waves-light blue btn"><i class="material-icons">airplay</i></a>
                    </div>
                    </div>
                  </form>
                </div> 
           </div>
           </div>
           <div className="col m8">
                        <Product judul="Charger HP" keterangan="Lorem ipsum sit dolor amet"/>
                        <Product judul="Charger HP" keterangan="Lorem ipsum sit dolor amet"/>
                </div>

           {/* <div class="col s12 m8">
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
                <a class="btn waves-effect waves-light teal"><i class="material-icons">arrow_downward</i></a>
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
                <a class="waves-effect waves-light teal btn"><i class="material-icons">arrow_downward</i></a>
                </div>
                </div>
              </div>
          </div> */}
            </div>
          
          </div>
         
        
        </div>

      
);
}
}

export default App;
