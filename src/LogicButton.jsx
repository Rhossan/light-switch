import React from 'react';
import { Button } from 'semantic-ui-react'

class LogicButton extends React.PureComponent{
    render(){
        let button;
            if (this.props.button === true) {
                button = <Button positive onClick={this.props.onClick}>On</Button>
            }else {
                button = <Button negative onClick={this.props.onClick}>Off</Button>
            }    
        return(
            <div className="logic-button-style">
                {button}
            </div>
        )
    }
}

export default LogicButton;
            