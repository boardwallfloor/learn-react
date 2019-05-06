import React,{Component} from 'react';
import ButtonAppBar from './TopBar';
import RecipeReviewCard from './CardInteract';

class App2 extends Component {
    constructor(){
        super();
        this.state = {
            data : [
                {
                    title : "lorem ipsum",
                    date  : "31 Februari 9999",
                    desc  : "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                },
                {
                    title : "lorem ipsum",
                    date  : "31 Februari 9999",
                    desc  : "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                }
            ]
        }
    }
    render() {
        return (
            <div>
                <ButtonAppBar/>
                <br/>
                {this.state.data.map((data) => {
                    return (
                        <div>
                        <RecipeReviewCard title={data.title} date={data.date} desc={data.desc} />  
                        <br/>
                        </div>
                    )
                } )}
                
            </div>
        );
    }
}

export default App2;