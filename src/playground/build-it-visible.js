import React from 'react';
import ReactDOM from 'react-dom';

// class VisibilityToggle extends React.Component {
//     constructor(props) {
//         super(props);
//         this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
//         this.state = {
//             visibility : false
//         };
//     }
//     handleToggleVisibility() {
//        this.setState((prevState) => {
//            return {
//                visibility : !prevState.visibility
//            };
//        });
//     }
    
//     render(){
//         return (
//             <div>
//                 <h1>Visibility Toggle </h1>
//                 <button onClick={this.handleToggleVisibility}>
//                     {this.state.visibility ? "Hide Details" : "Show Details"}
//                 </button>
//                 {this.state.visibility && (
//                     <div>
//                         <p>Hey. secret details in here... </p>
//                     </div>
//                 )}
//             </div>
//         )
//     }
// }

class VisibilityToggle extends React.Component {

    constructor(props) {
        super(props);
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
        this.state = {
            visibility : false
        }
    }

    handleToggleVisibility() {
        this.setState((prevState) => {
            return {
                visibility : !prevState.visibility
            }
        })
    }

    render() {
        return (
            <div>
                <h1> Visiblity Toggle </h1>
                <button onClick={this.handleToggleVisibility}>
                    button
                </button>
                {this.state.visibility && (
                    <div>
                        <p> Hey. these are some detials you can now see! </p>
                    </div> 
                )}
            </div>
        )
    }
}



ReactDOM.render(<VisibilityToggle />, document.querySelector('.app'));
