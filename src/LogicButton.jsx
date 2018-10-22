import React from 'react';

class LogicButton extends React.PureComponent{
    render(){
        // const {buttonVal} = this.props;
        let button;
            if (this.props.button === true) {
                button = <button className='button-style-true' onClick={this.props.onClick}>On</button>
            }else {
                button = <button className='button-style-false' onClick={this.props.onClick}>Off</button>
            }
                    
        return(
            <div>
                {button}
            </div>
        )
    }
}

export default LogicButton;