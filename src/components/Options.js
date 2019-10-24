import React from 'react';
import Option from './Option';

const Options = (props) => (
    <div> 

        <div className="widget-header">
            <h3 className="widget-header__title">
                Your Options 
            </h3>
            <button 
                className="button button--link" 
                onClick={props.handleDeleteOptions}>Remove All
            </button>
        </div>
        {props.options.length === 0 && 
        <p className="widget__message"> 
        Please add an option 
        </p>}

        {props.options.map((item, index) => (
            <Option
                key={item} 
                optionText={item}
                count={index + 1}
                handleDeleteOption={props.handleDeleteOption} 
            /> 
        ))
        }
    </div>
)
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

export default Options;