import React from 'react';
import AddOption from './AddOption';
import Header from './Header';
import Action from './Action';
import Options from './Options';
import OptionModal from './OptionModal';

class IndecisionApp extends React.Component {

    state = {
        options : [],
        selectedOption: undefined
    };
    
    handleClearSelectedOption = () => {
        this.setState(() => ({
            selectedOption: undefined
        }))
    }

    handleDeleteOptions = () => {
        
        this.setState(() => ({
            options : []
        }))
    }
    handlePick = () => {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        this.setState(() => ({
            selectedOption : option
        }))
    }
    handleDeleteOption = (optionToRemove) => {
        this.setState((prevState) => ({
            options : prevState.options.filter((option) => optionToRemove !== option )
        }));
    }
    handleAddOption = (option) => {
        if (!option) {
            return 'enter valid value to add item'
        } else if (this.state.options.indexOf(option) > -1) {
            return 'this item already exist'
        } 
        
        this.setState((prevState) => ({
            options : prevState.options.concat(option)
        }))  
    }
    componentDidMount() {
        try {
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);
    
            if(options) {
                this.setState(() => ({options}))
            }
        } catch  (e) {
            // Do nothing at all, fall back to empty array
        }    
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
        }
    }
    componentWillUnmount() {
        console.log("component will unmount")
    }
    render(){
        const subtitle = 'Put your life in the hands of a computer';
        
        return(
            <div>
                <Header 
                    subtitle={subtitle} 
                />
                <div className="container">
                    <Action 
                        hasOptions={this.state.options.length > 0} 
                        handlePick={this.handlePick} 
                    />
                    <div className="widget">
                        <Options 
                            options={this.state.options}
                            handleDeleteOptions={this.handleDeleteOptions}
                            handleDeleteOption={this.handleDeleteOption}
                        />
                        <AddOption 
                            handleAddOption={this.handleAddOption} 
                        />
                    </div>
                </div>
                <OptionModal 
                    selectedOption={this.state.selectedOption}
                    handleClearSelectedOption={this.handleClearSelectedOption}
                />
            </div>
        )
    }
}
IndecisionApp.defaultProps = {
    options : []
}

export default IndecisionApp;