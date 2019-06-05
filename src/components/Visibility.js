import React from 'react'
//VISIBILITY APP EXAMPLE
export default class Visibility extends React.Component{
    constructor(props){
        super(props);
        this.toggleVis = this.toggleVis.bind(this);
        this.state = {
            visibility: false
        }
    }

    toggleVis(){
        this.setState((prevState) => {
            return{
                visibility: !prevState.visibility
            };
        });
    }

    render(){
        return(
            <div>
            <div className = "widget-header">
            <h1 className="widget-header__title">Visibility Toggle App</h1>
            </div>
                <button onClick={this.toggleVis}>{this.state.visibility ? 'Hide Message' : 'Show Message'}</button>
                {this.state.visibility && (<p>This is a visability toggle message</p>)}
            </div>
        )
    }
}
//END VISIBILITY APP EXAMPLE