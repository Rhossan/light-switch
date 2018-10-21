import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SwitchController from './SwitchController';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      switches: [
        {id: 0, button_one: false, button_two: false, logic: 'and', controllerOutput: false},
        {id: 1, button_one: false, button_two: false, logic: 'and', controllerOutput: false},
      ],
      gates: ['and'],
      finalOutput: false,
      count: 2
    };
    this.handler = this.handler.bind(this);
    this.determineOutput = this.determineOutput.bind(this);
  }

  handler(id, value){
    // let new_arr = this.state.arr.slice(0);
    // new_arr[id] = 0
    // this.setState({arr : new_arr})

    // update state here
    let new_switches = this.state.switches.slice(0); 
    new_switches[id][value] === true ? new_switches[id][value] = false : new_switches[id][value] = true
    // TO MAINTAIN IMMUTABLE STATE 
    this.setState({switches: new_switches})
    //need to figure out logic 'and' 'or' 'xor'
    //handle switch logic here too
  }
  
  handleSwitchLogic(s){
    // map over the array of { button_one, buttton_two, logic }
    // in render, call handleswitchlogic, and finally return ()
    const {button_one, button_two, logic} = s;
    switch(logic){
      case 'and':
        return button_one && button_two;
      case 'or':
        return button_one || button_two;
      case 'xor':
        return button_one ^ button_two;
      default:
        return;
    }
  }

  determineOutput(){ 
    const { switches, gates } = this.state;
    let result = this.handleSwitchLogic(switches[0]); 
    if (switches.length === 1) return result;

    let i = 1;
    for (let index = 0; index < gates.length; index++) {
      switch (gates[index]) {
        case 'and':
          result = result && this.handleSwitchLogic(switches[i]);
          break;
        case 'or':
          result = result || this.handleSwitchLogic(switches[i]);
          break;
        case 'xor':
          result = result ^ this.handleSwitchLogic(switches[i]);
          break;
        default:
          break;
      }
      i += 1;
    }
    return result;
  }

  render() {
    // let output = this.state.output;
    const { switches, gates } = this.state;
    let output = this.determineOutput();
    debugger
    const controllers = switches.map(s => {
      return <SwitchController key={s.id} handler={this.handler} button_one={switches[s.id].button_one} button_two={switches[s.id].button_two} id={s.id} />
    }) 
    return (
      <div className="App">
        {controllers}
        {output}
      </div>
    );
  }
}

export default App;
