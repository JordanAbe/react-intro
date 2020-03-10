import React, { Component } from 'react';

class Ciclo extends Component{
    constructor(props){
        super(props);
        console.log('contructor');
        this.state = {
            color: 'red'
        }
        this.onResize = this.onResize.bind(this);
    }

    onResize(e){
        const width = e.target.innerWidth;
        const {color} = this.state;
        // console.log(width);
        if(width > 500 && color !== 'red'){
            this.setState({ color: 'red'})
        } else if(width <= 500 && color !== 'blue'){
            this.setState({ color: 'blue'})
        }
    }

    componentDidMount(){
        console.log('componentDidMount');
        window.addEventListener('resize', this.onResize);
    }

    componentWillUnmount(){
        console.log('componentWillUnmount');
        window.removeEventListener('resize', this.onResize);
    }

    componentDidUpdate(oldProps){
        console.log('componentDidUpdate');
        console.log('oldProps', oldProps);
        console.log('newProps', this.props)
    }

    render(){
        const { color } = this.state;
        const { valor } = this.props;
        console.log('render');
        return (
            <div>
                <div style={{backgroundColor: color}}>
                    ciclo
                    <span>{valor}</span>
                </div>
            </div>
        )
    }
}

export default Ciclo;