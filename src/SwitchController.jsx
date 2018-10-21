import React from 'react';
import LogicButton from './LogicButton'
import LogicGate from './LogicGate'

class SwitchController extends React.Component{

    render(){
        const {button_one, button_two, logic} = this.props;

        return(
            <div>
                <LogicButton button={button_one}></LogicButton>
                <LogicGate logic={logic}></LogicGate>
                <LogicButton button={button_two}></LogicButton>
            </div>
        );
    }


}

export default SwitchController;