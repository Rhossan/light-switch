import React, { Component } from 'react';
import './App.css';
import SwitchController from './SwitchController';
import { Button, Label } from 'semantic-ui-react';
import CompositeGate from './CompositeGate';
import TutorialModal from './TutorialModal';


import { Icon, Table } from 'semantic-ui-react';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      switches: [
        {id: 0, button_one: false, button_two: false, logic: 'and'},
        {id: 1, button_one: false, button_two: false, logic: 'and'},
        {id: 2, button_one: false, button_two: false, logic: 'and'},
      ],
      gates: ['and', 'or'],
      finalOutput: false,
      count: 3
    };
    this.handler = this.handler.bind(this);
    this.determineOutput = this.determineOutput.bind(this);
    this.addController = this.addController.bind(this);
    this.deleteController = this.deleteController.bind(this);
    this.handleCompositeGate = this.handleCompositeGate.bind(this);
  }

  componentDidUpdate(prevProps, prevState){
    if(this.state.switches.length > prevState.switches.length){
      this.setState({count: this.state.count+1});
    } else if (this.state.switches.length < prevState.switches.length){
      this.setState({count: this.state.count - 1});
    }
  }

  handler(id, value, logicVal){
    if(value === 'logic'){ 
      let new_switches = this.state.switches.slice(0); 
      new_switches[id][value] = logicVal;
      this.setState({ switches: new_switches })
    }else{
      let new_switches = this.state.switches.slice(0);
      new_switches[id][value] === true ? new_switches[id][value] = false : new_switches[id][value] = true
      // TO MAINTAIN IMMUTABLE STATE 
      this.setState({ switches: new_switches })
    }
    
  }

  handleCompositeGate(id, event){
    let newGates = this.state.gates.slice(0);
    newGates[id] = event.target.value;
    this.setState({gates: newGates});
  }
  
  handleSwitchLogic(s){
    const {button_one, button_two, logic} = s;
    switch(logic){
      case 'and':
        return button_one && button_two;
      case 'or':
        return button_one || button_two;
      case 'xor':
        return (button_one ^ button_two === 1) ? true: false;
      default:
        return;
    }
  }

  determineOutput(){ 
    const { switches, gates } = this.state;
    let result = this.handleSwitchLogic(switches[0]); 
    if (switches.length === 1) return result;

    let i = 1;
    debugger;
    for (let index = 0; index < gates.length; index++) {
      switch (gates[index]) {
        case 'and':
          result = result && this.handleSwitchLogic(switches[i]);
          break;
        case 'or':
          result = result || this.handleSwitchLogic(switches[i]);
          break;
        case 'xor':
          result = (result ^ this.handleSwitchLogic(switches[i])) === 1 ? true : false;
          break;
        default:
          break;
      }
      i += 1;
    }
    return result;
  }

  addController(){
    //ADD GATE 
    let newState = this.state.switches.slice(0);
    newState.push({ id: this.state.count, button_one: false, button_two: false, logic: 'and', controllerOutput: false });
    this.setState({switches: newState});
    
    //DELETE GATE 
    let newGates = this.state.gates.slice(0);
    newGates.push('and');
    this.setState({ gates: newGates });
    
  }

  deleteController(){
    if(this.state.count > 2){
      //ADD GATE 
      let newState = this.state.switches.slice(0, this.state.switches.length - 1);
      this.setState({ switches: newState });

      //DELETE GATE 
      let newGates = this.state.gates.slice(0, this.state.gates.length-1);
      this.setState({ gates: newGates });
    }
    
  }

  render() {
    debugger
    const { switches, gates } = this.state;
    let output = this.determineOutput();
    const controllers = switches.map(s => {
      return (
        <div className="controller-parent">
          <SwitchController key={s.id} handler={this.handler} button_one={switches[s.id].button_one} logic={switches[s.id].logic} button_two={switches[s.id].button_two} id={s.id} />
        </div>
      )
    }) 
    const compositeGates = gates.map((gate,idx) => {
      return(
        <CompositeGate key={idx} id={idx} logic={gate} onChange={this.handleCompositeGate} />
      )
    })
    let i = 0
    const rows = controllers.map(c => {
      return (
        <Table.Row>
          <Table.Cell>{c}</Table.Cell>
          <Table.Cell>{compositeGates[i++]}</Table.Cell>
        </Table.Row>
      );
    })
    
    return (
      <div className="App">

        <Table celled>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Switch Controller</Table.HeaderCell>
              <Table.HeaderCell>Composite Gate</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {rows}
            <Table.Row>
              <Table.Cell className="output-style">
                <OutputLabel logic={output}></OutputLabel>
              </Table.Cell>
              <Table.Cell>
                <div className="options-style">
                  <Button color='purple' onClick={this.addController}>ADD</Button>
                  <Button color='black' onClick={this.deleteController}>DELETE</Button>
                  <TutorialModal />
                </div>
              </Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      </div>
    );
  }
}


const OutputLabel = ({logic}) => {
  if (logic){
    return (
      <div>
        <Label color="yellow"><Icon name="lightning"/>POWER ON</Label>
      </div>
    )
  }else{
    return (
      <div>
        <Label color="brown"><Icon name="lightning" />POWER OFF</Label>
      </div>
  )
  }
  
}


export default App;
