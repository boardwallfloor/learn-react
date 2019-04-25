import React, {Component} from 'react';
import logo from './logo.svg';


class Product extends Component {
    render() {
        return (
            
    <div className="col s12 m4">
              <div className="card">
                <div className="card-content">
                    <div className="card-image waves-effect waves-block waves-light">
                      <img className="activator" alt="icon" src={logo}></img>
                    </div>
                  <span><b>{this.props.name}</b></span>
                  <p>{this.props.desc}</p>
                </div>
                <div className="center-align">
                <button onClick={this.props.handleDelete} className="btn waves-effect waves-light teal"><i className="material-icons">arrow_downward</i></button>
                </div>
                </div>
              </div>
              
        );
    }
}

export default Product;