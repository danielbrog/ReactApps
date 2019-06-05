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
            {this.state.error && <p className="add-option-error">{this.state.error}</p>}
                <form className="add-option" onSubmit={this.addOption}>
                    <input className="add-option__input" type="text" name="option"/>
                    <button className="button">Add Option</button>
                </form>
            </div>
        );
    }
}