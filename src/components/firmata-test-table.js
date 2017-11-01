import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {setMode} from '../actions/setmode';
import {toggleDigitalState} from '../actions/toggle-digital-state';
import {setPWMState} from '../actions/set-pwm-state';


class FirmataTestTable extends React.Component {


    render() {
        return (
            <div>
                <table>
                    <tr>
                        <th>Pin</th>
                        <th>Analog</th>
                        <th>Mode</th>
                        <th>State</th>
                        <th>Action</th>
                    </tr>
                    {
                        Object.values(this.props.pins).map(pin => {
                            return (
                                <tr>
                                    <td>{pin.pin}</td>
                                    <td>{pin.analog}</td>
                                    <td>
                                      <div className="dropdown">
                                        <button className="dropbtn">{pin.mode}</button>
                                        <div className="dropdown-content">
                                          {Object.values(pin.modes).map(mode => {return (<a onClick={() => {this.props.setMode(pin , mode)}} >{mode} </a>)})}
                                        </div>
                                      </div>
                                    </td>
                                    <td>{pin.state}</td>
                                    <td>{this.setAction(pin)}</td>
                                </tr>
                            )
                        })
                    }
                </table>
            </div>)
    };

    setAction(pin) {

      if (pin.mode === 'digital out') {
      if (pin.state === 1)
        {return <button className="dropbtn" onClick={() => {this.props.toggleDigitalState(pin)}}>low</button>}
      else
        {return <button className="dropbtn" onClick={() => {this.props.toggleDigitalState(pin)}}>high</button>};
        };

      if (pin.mode === 'analog in') {
        return <meter value={pin.state} min="0" max="1024"></meter>
      };

      return (
        <td>
          <input type="range" min="0" max="255" value={pin.state} onInput={(event)=> {this.props.setPWMState(pin , event.target.value)}} ></input>
        </td>)


};
}

function mapStateToProps(event) {
    return {
        pins: event.pins
    };
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({setMode: setMode , toggleDigitalState: toggleDigitalState , setPWMState: setPWMState}, dispatch)
}



let con = connect(mapStateToProps , matchDispatchToProps);

export default con(FirmataTestTable);
