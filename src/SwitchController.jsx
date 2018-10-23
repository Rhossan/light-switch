import React from 'react';
import LogicButton from './LogicButton'
import LogicGate from './LogicGate'

class SwitchController extends React.PureComponent{

    constructor(props){
        super(props);
        this.handleButtonOne = this.handleButtonOne.bind(this);
        this.handleButtonTwo = this.handleButtonTwo.bind(this);
        this.handleLogic = this.handleLogic.bind(this);
    }

    handleButtonOne(){
        this.props.handler(this.props.id, 'button_one');
    }
    handleButtonTwo() {
        this.props.handler(this.props.id, 'button_two');
    }
    handleLogic(event) {
        this.props.handler(this.props.id, 'logic', event.target.value);
    }
    render(){
        return(
            <div className="switch-controller-block">
                <LogicButton button={this.props.button_one} onClick={this.handleButtonOne}></LogicButton>
                <LogicGate logic={this.props.logic} onChange={this.handleLogic}></LogicGate>
                <LogicButton button={this.props.button_two} onClick={this.handleButtonTwo}></LogicButton>
            </div>
        );
    }

}

export default SwitchController;