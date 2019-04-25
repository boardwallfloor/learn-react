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
                  <span><b>{this.props.judul}</b></span>
                  <p>{this.props.keterangan}</p>
                </div>
                <div className="center-align">
                <button className="btn waves-effect waves-light teal btn"><i className="material-icons">arrow_downward</i></button>
                </div>
                </div>
              </div>
              
        );
    }
}

export default Product;