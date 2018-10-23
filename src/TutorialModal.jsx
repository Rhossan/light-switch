import React from 'react'
import { Button, Header, Image, Modal, Form } from 'semantic-ui-react';
import Lightning from './lightening_bolt.png';

class TutorialModal extends React.Component {
  constructor(props){
    super(props);
    this.state = { isOpen: true };
    this.closeModal = this.closeModal.bind(this);
  }
  closeModal = () => {
    this.setState({ isOpen: false });
  }
  render = () => {
    return (
      <div>
        <Modal open={this.state.isOpen} centered={false}>
          <Modal.Header>Let's Learn about Logic Gates!</Modal.Header>
          <Modal.Content image>
            <Image wrapped size='medium' src={Lightning} />
            <Modal.Description>
              <Header>How to Play</Header>
              <p>Each Controller consists of two buttons and a selector</p>
              <p>Each button has two possible states: OFF or On</p>
              <p>The Selector can be one of three logical operators: AND(^), OR(V), XOR(+)</p>
              <p>Clicking on each button or changing the selector for any of the controllers will change their state </p>
              <p>Each Controller is seperated by another selector, and the combination of state of each controller with the value of the selector will yield our output </p>              
              <p>Play around with this tool to learn how logic gates work!</p>
            </Modal.Description>
          </Modal.Content>
          <Modal.Actions>
            <Form>
              <Form.Button color='green' inverted onClick= {this.closeModal}>Let's Begin</Form.Button>
            </Form>
          </Modal.Actions>
        </Modal>

        <Modal trigger={<Button color='green'>Tutorial</Button>} centered={false}>
          <Modal.Header>Let's Learn about Logic Gates!</Modal.Header>
          <Modal.Content image>
            <Image wrapped size='medium' src={Lightning} />
            <Modal.Description>
              <Header>How to Play</Header>
              <p>Each Controller consists of two buttons and a selector</p>
              <p>Each button has two possible states: OFF or On</p>
              <p>The Selector can be one of three logical operators: AND(^), OR(V), XOR(+)</p>
              <p>Clicking on each button or changing the selector for any of the controllers will change their state </p>
              <p>Each Controller is seperated by another selector, and the combination of state of each controller with the value of the selector will yield our output </p>
              <p>Play around with this tool to learn how logic gates work!</p>
            </Modal.Description>
          </Modal.Content>
        </Modal>
      </div>

    )
  }
}

export default TutorialModal;
