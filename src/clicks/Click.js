import React, {Component} from 'react';
import Nav from '../layout/Nav';

class Click extends Component{
    constructor(props){
        super(props);
        this.state = {
            clicks: 50
        }
    }
    render(){
        return (
            <Nav>
                <div>
                    <span>{this.state.clicks}</span>
                    <button onClick={() => {
                        console.log(this.state.clicks)
                        this.setState({clicks: this.state.clicks + 1}, ()=>{
                            console.log(this.state.clicks)
                        })
                    }}
                    >click me</button>
                </div>
            </Nav>            
        )
    }
}

export default Click;