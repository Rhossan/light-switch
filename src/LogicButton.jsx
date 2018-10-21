import React from 'react';

class LogicButton extends React.Component{
    render(){
        // const {buttonVal} = this.props;
        let button;
            if (this.props.button === true) {
                button = <button className='button-style-true' onClick={this.props.onClick}>click me</button>
            }else {
                button = <button className='button-style-false' onClick={this.props.onClick}>click me</button>
            }
                    
        return(
            <div>
                {button}
            </div>
        )
    }
}

export default LogicButton;