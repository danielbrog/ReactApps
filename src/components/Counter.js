import React from 'react'

//COUNTER APP EXAMPLE
export default class Counter extends React.Component{
    constructor(props){
        super(props);
        this.addOne = this.addOne.bind(this);
        this.minusOne = this.minusOne.bind(this);
        this.reset = this.reset.bind(this)

        //state
        this.state = {
            count: 0
        };
    }

    componentDidMount(){
        try{
            if(localStorage.getItem('count')){
                this.setState(() => ({count: parseInt(localStorage.getItem('count'), 10)}))
            }
        }catch(e){

        }
    }

    componentDidUpdate(prevProps,prevState){
        if(prevState.count !== this.state.count)
            localStorage.setItem('count',this.state.count)
    }

    //increment count state
    addOne(){
        this.setState((prevState)=> ({count: prevState.count+1}));
    }

    //decrement count state
    minusOne(){
        this.setState((prevState)=> ({count: prevState.count-1}));
    }

    //reset count state to 0
    reset(){
        this.setState(()=>({count: 0}));
    }

    //determine class' render info
    render(){
        return(
            <div>
            <div className = "widget-header">
            <h1 className="widget-header__title">Count App</h1>
            </div>
                <h4>Count: {this.state.count}</h4>
                <button onClick={this.addOne}>+1</button>
                <button onClick={this.minusOne}>-1</button>
                <button onClick={this.reset}>Reset</button>
            </div>
        );
    }
}
//END COUNTER APP EXAMPLE