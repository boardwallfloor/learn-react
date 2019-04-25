import React,{Component} from 'react';
//import logo from './logo.svg';
//import './App.css';
import Product from './Product.js';

class App extends Component {
  constructor(){
    super();
    this.state = {
      products : [
        {judul:"Charger HaPe",keterangan:"Lorem ipsum sit dolor amet"},
        {judul:"Charger HaP",keterangan:"Lorem ipsum sit dolor amet"},
        {judul:"Charger HPe",keterangan:"Lorem ipsum sit dolor amet"}
    ]
    }
  }
  
  handleSubmit = (e) => {
    e.preventDefault();

    let name = this.refs.name.value;
    let desc = this.refs.desc.value;
    

    console.log(desc ,name);
  }

  
  
  render() {
      return (
    
        <div className="row">
          <div className="col s12">
          <div className="col s12 m4"> 
            <div className="card">
              <div className="card-content">
                  <form ref="product-form" onSubmit={this.handleSubmit}>
                  <div className="row">
                    <div className="input-field col s12">
                      <input placeholder=" Name" ref="name" type="text"/>
                      <label htmlFor="name">Name</label>
                    </div>
                    <div className="input-field col s12">
                      <input placeholder=" Description" ref="desc" type="text"/>
                      <label htmlFor="desc">Desc</label>
                    </div>
                    </div>
                  </form>
                </div> 
                <div className="card-action">
                      <button type="submit" name="action" className="waves-effect waves-light blue btn">
                        <i className="material-icons left">send</i>Submit
                      </button>
                </div>
           </div>
           </div>
           <div className="col s12 m8">
            {this.state.products.map((data,key) =>{
              return (
                <Product key={key} judul={data.judul} keterangan={data.keterangan}/>
            )
            })}
           </div>
        </div>
        </div>
        

      
);
}
}

export default App;
