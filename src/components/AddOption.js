import React from 'react'
//adds an option to the list of options
export default class AddOption extends React.Component{
    state={
        error: undefined
    }
    constructor(props){
        super(props);
        this.addOption = this.addOption.bind(this);
    }

    addOption(event){
        event.preventDefault();

        const option = event.target.elements.option.value.trim();
        const error = this.props.addOption(option);

        this.setState(()=> ({ error }));

        if(!error) {
            event.target.elements.option.value = '';
        }
    }

    render(){
        return(
            <div>
            {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.addOption}>
                    <input type="text" name="option"/>
                    <button>Add Option</button>
                </form>
            </div>
        );
    }
}