class Counter extends React.Component {

    constructor(props){
        super(props);
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.state = {
            count : []
        };
    }
    componentDidMount() {
        const numFromStorage = localStorage.getItem('count')
        const numToShow = parseInt(numFromStorage, 10);

        if (!isNaN(numToShow)) {
            this.setState(({ count : numToShow }));
        }
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevState.count !== this.state.count) {
            const numToSave = this.state.count;
            localStorage.setItem('count', numToSave);
        }
    }

    handleAddOne(){
        this.setState((prevState) => {
            return {
                count : prevState.count + 1
            };
        })
    }

    handleMinusOne(){
        this.setState((prevState) => {
            return {
                count : prevState.count - 1
            };
        })
    }

    handleReset(){
        this.setState(() => {
            return {
                count : 0
            };
        })
    }

    render(){
        return (
            <div>
                <h1> Count: {this.state.count} </h1>
                <button onClick={this.handleAddOne}>+1</button>
                <button onClick={this.handleMinusOne}>-1</button>
                <button onClick={this.handleReset}>reset</button>
            </div>
        )
    }
}

Counter.defaultProps = {
    count : 0
}

ReactDOM.render(<Counter />, document.querySelector('.app'))

// const appRouteTwo = document.querySelector('.appTwo');
// let count = 0;
// const addOne = () => {
//     count++;
//     renderCounterApp();
// }
// const minusOne = () => {
//     if(count > 0){
//         count--;
//         renderCounterApp();
//     }
// }
// const reset = () => {
//     count = 0;
//     renderCounterApp();
// }

// const renderCounterApp = () => {
//     const templateTwo = (
//         <div>
//             <h1>Count: {count}</h1>
//             <button onClick={addOne}> +1 </button>
//             <button onClick={minusOne}> -1 </button>
//             <button onClick={reset}> reset </button>
//         </div>
//     );

//     ReactDOM.render(templateTwo, appRouteTwo);
// }

// renderCounterApp();
