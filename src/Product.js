import React, {Component} from 'react';
import logo from './logo.svg';


class Product extends Component {
    render() {
        return (
            
    <div class="col s12 m6">
              <div class="card">
                <div class="card-content">
                    <div class="card-image waves-effect waves-block waves-light">
                      <img class="activator" src={logo}></img>
                    </div>
                  <span><b>{this.props.judul}</b></span>
                  <p>{this.props.keterangan}</p>
                </div>
                <div className="center-align">
                <a class="btn waves-effect waves-light teal"><i class="material-icons">arrow_downward</i></a>
                </div>
                </div>
              </div>
              
        );
    }
}

export default Product;