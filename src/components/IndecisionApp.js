import React from 'react'
import AddOption from './AddOption'
import Header from './Header'
import Action from './Action'
import Options from './Options'
import Counter from './Counter'
import Visibility from './Visibility'
import OptionModal from './OptionModal'

//root class, calls all other classes on the page
export default class IndecisionApp extends React.Component{
    //initializing state
    state = {
        options: [],
        selectedOption: undefined
    }

    //launches when component mounts
    //loads localstorage json for app

    //delete all options in state
    deleteOptions=()=>{
        this.setState(()=> ({ options: [] }));
    }

    //delete single option in state
    deleteOption = (optiontoRemove)=>{
        this.setState((prevState) => ({
            options: prevState.options.filter((option) =>  option !== optiontoRemove)
        }))
    }

    //add single option to state
    addOption=(newOption)=>{
        if(!newOption){
            return 'Enter Valid Value to add item';
        } else if (this.state.options.indexOf(newOption)>-1){
            return 'This option already exists'
        }

        this.setState((prevState) => ({ options: prevState.options.concat(newOption)}));
    }

    //alerts a random option in state
    makeDecision=()=>{
        const randomNum = Math.floor(Math.random() * this.state.options.length )
        const option = this.state.options[randomNum]
        //alert(this.state.options[randomNum])
        this.setState(() => ({
            selectedOption: option
        }))
    }

    clearOption = () => {
        this.setState(()=> ({
            selectedOption: undefined
        }))
    }

    componentDidMount(){
        try{
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);
            
            if(options){
                this.setState(() => ({ options }));
            }
        }catch(e){

        }

    }

    //launches when there is an update on component
    componentDidUpdate(prevProps, prevState){
        if(prevState.options.length !== this.state.options.length){
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
        }
        
    }

    render(){
        return(
            <div>
            <Header/>

            <div className="container">
            <Action 
            hasOptions={this.state.options.length >0}
            makeDecision={this.makeDecision}
            />
            <div className="widget">
            <Options 
            options={this.state.options}
            deleteOptions={this.deleteOptions}
            deleteOption = {this.deleteOption}
            />
            <AddOption
            addOption={this.addOption}
            />
            </div>
            <div className="widget">
            <Counter/><br/></div>
            <div className="widget">
            <Visibility/></div>
            
            </div>

            <OptionModal 
            selectedOption={this.state.selectedOption}
            clearOption={this.clearOption}
            />
            </div>
        );
    }
}

//default properties for Indecisionapp component
IndecisionApp.defaultProps = {
    options: []
}