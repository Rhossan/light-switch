import React from 'react';

class CompositeGate extends React.PureComponent{
    constructor(props){
        super(props);
        this.update = this.update.bind(this);
    }
    
    update(event){
        this.props.onChange(this.props.id, event);
    }
    render(){
        const options = ['and','or','xor'];
        return(
            <div>
                <label >
                    <select
                        id="logic"
                        value={this.props.logic}
                        onChange={this.update}
                    >
                        {options.map(option => (
                            <option key={option} value={option}>
                                {option}
                            </option>
                        ))}
                    </select>
                </label>
            </div>
        )
    }
}

export default CompositeGate;