import React from 'react';

class LogicGate extends React.PureComponent{
 
    render(){
        const options = ['and','or','xor'];
        return(
            <div>
                <label >
                    <select
                        id="logic"
                        value={this.props.logic}
                        onChange={this.props.onChange}
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

export default LogicGate;