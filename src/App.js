import React,{Component} from 'react';
//import logo from './logo.svg';
//import './App.css';
import Product from './Product.js';

class App extends Component {
  constructor(){
    super();
    this.state = {
      products : [
        {
          name:"Charger HaPe",
          desc:"Lorem ipsum sit dolor amet"
        },
        
    ]
    }
  }
  
  handleSubmit = (e) => {
    e.preventDefault();

    let name = this.refs.name.value;
    let desc = this.refs.desc.value;
    

    this.state.products.push({name,desc});
    this.setState({products: this.state.products});

    this.refs.form.reset();
  }
 handleDelete = (key) => {
      // console.log(key);
      this.state.products.splice(key,1);
      this.setState({products: this.state.products});
  }
  
  
  render() {
      return (
    
        <div className="row">
          <div className="col s12">
          <div className="col s12 m4"> 
            <div className="card">
              <div className="card-content">
                  <form ref="form" onSubmit={this.handleSubmit}>
                  <div className="row">
                    <div className="input-field col s12">
                      <input placeholder="Name" id="name" ref="name" type="text"/>
                      <label htmlFor="name">Name</label>
                    </div>
                    <div className="input-field col s12">
                      <input id="desc" placeholder="Description" ref="desc" type="text"/>
                      <label htmlFor="desc">Description</label>
                    </div>
                    </div>
                    <div className="card-action">
                      <button className="btn waves-effect waves-light" type="submit" name="action">Submit
                      <i className="material-icons left">send</i>
                      </button>
                </div>
                  </form>


                </div> 
                
           </div>
           </div>
           <div className="col s12 m8">
            {this.state.products.map((data,key) =>{
              return (
                <Product handleDelete={() => this.handleDelete(key)} key={key} name={data.name} desc={data.desc}/>
            )
            })}
           </div>
        </div>
        </div>
        

      
);
}
}

export default App;
