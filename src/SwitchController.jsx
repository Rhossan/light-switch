import React from 'react';
import LogicButton from './LogicButton'
import LogicGate from './LogicGate'

class SwitchController extends React.Component{

    constructor(props){
        super(props)
        // const { button_one, button_two, logic } = this.props;
        // this.state= { button_one, button_two, logic}
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
    handleLogic() {
        this.props.handler(this.props.id, 'logic');
    }
    render(){
        // const {button_one, button_two, logic} = this.props;
        return(
            <div>
                <LogicButton button={this.props.button_one} onClick={this.handleButtonOne}></LogicButton>
                <LogicGate onClick={this.handleLogic}></LogicGate>
                <LogicButton button={this.props.button_two} onClick={this.handleButtonTwo}></LogicButton>
            </div>
        );
    }
// switches {
//     {id: 1, val:true},
//     {id: 2, val:false}
// }

}

export default SwitchController;