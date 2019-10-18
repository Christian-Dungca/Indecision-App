

// stateless functional component (doesn't allow for state)
// there are components that are concerned with presentation of info vs managing complex state
// class based component

class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);

        this.state = {
            options : []
        }
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
    handleDeleteOptions() {
        // this.setState(() => {
        //     return {
        //         options : []
        //     }
        // })

        this.setState(() => ({
            options : []
        }))
    }
    handlePick() {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        alert(option);
    }
    handleDeleteOption(optionToRemove) {
        this.setState((prevState) => ({
            options : prevState.options.filter((option) => optionToRemove !== option )
        }));
    }
    handleAddOption(option) {
        if (!option) {
            return 'enter valid value to add item'
        } else if (this.state.options.indexOf(option) > -1) {
            return 'this item already exist'
        } 

        this.setState((prevState) => ({
            options : prevState.options.concat(option)
        }))

    }
    render(){
        const subtitle = 'Put your life in the hands of a computer';
        
        return(
            <div>
                <Header 
                    subtitle={subtitle} 
                />
                <Action 
                    hasOptions={this.state.options.length > 0} 
                    handlePick={this.handlePick} 
                />
                <Options 
                    options={this.state.options}
                    handleDeleteOptions={this.handleDeleteOptions}
                    handleDeleteOption={this.handleDeleteOption}
                />
                <AddOption 
                    handleAddOption={this.handleAddOption} 
                />
            </div>
        )
    }
}

IndecisionApp.defaultProps = {
    options : []
}

const Header = (props) => {
    return (
        <div>
            <h1> {props.title} </h1>
            {props.subtitle && <h2> {props.subtitle} </h2>}
        </div>
    );
}

Header.defaultProps = {
    title : 'Indecision'
};

// class Header extends React.Component {
//     render() {
        
//         return (
//             <div>
//                 <h1> {this.props.title} </h1>
//                 <h2> {this.props.subtitle} </h2>
//             </div>
//         )
//     }
// }

const Action = (props) => {
    return (
        <div>
                <button 
                    onClick={props.handlePick}
                    disabled={!props.hasOptions}> 
                    What should I do? 
                </button>
            </div>
    )
}
// class Action extends React.Component {

//     render() {
//         return (
//             <div>
//                 <button 
//                     onClick={this.props.handlePick}
//                     disabled={!this.props.hasOptions}> 
//                     What should I do? 
//                 </button>
//             </div>
//         )
//     }
// }

const Options = (props) => {
    return (
        <div> 
            <button onClick={props.handleDeleteOptions}>Remove All</button>
            {props.options.length === 0 && <p> Please add an option </p>}
            <h1>Option Components Section</h1>
            {props.options.map((item) => (
                <Option 
                    key={item} 
                    optionText={item}
                    handleDeleteOption={props.handleDeleteOption} 
                /> 
            ))
            }
        </div>
    )
}
// class Options extends React.Component {

//     render() {
//         return (
//             <div> 
//                 <button onClick={this.props.handleDeleteOptions }>Remove All</button>
//                 <h1>Option Components Section</h1>
//                     {this.props.options.map((item) => 
//                         <Option key={item} optionText={item} /> 
//                     )}
//             </div>
//         )
//     }
// } 


const Option = (props) => {
    return (
        <div> 
            {props.optionText} 
            <button onClick={(e) => {
                props.handleDeleteOption(props.optionText);
            }}> 
            remove 
            </button>
        </div>
    )

}
// class Option extends React.Component {
//     render() {
//         return (
//             <div> 
//                 Option: {this.props.optionText} 
//             </div>
//         )
//     }
// }

class AddOption extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            error : undefined
        }
    }

    handleAddOption(e){
        // prevents the full page refresh
        e.preventDefault();

        // this is the form element
        const option = e.target.elements.option.value.trim();  
        const error = this.props.handleAddOption(option);

        this.setState(() => ({ error  }))

        if(!error) {
            e.target.elements.option.value = '';
        }
        
    }

    render() {
        return (
            <div> 

                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="option" />
                    <button>Add Option</button>
                </form>
            </div>
        )
    }
}


// stateless functional component (can't use stae but still allow for props)
// faster because they don't have to extend react.component, if presentational component then use functions

// const User = (props) => {
//     return (
//         <div>
//             <p>Name : {props.name} </p>
//             <p>Age : {props.age} </p>
//         </div>
//     )
// }

ReactDOM.render(<IndecisionApp />, document.querySelector('.app'));
// ReactDOM.render(<IndecisionApp options={['devils den', 'second district']}/>, document.querySelector('.app'));