import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {setMode} from '../actions/setmode';


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
                        <th>Options</th>
                    </tr>
                    {
                        Object.values(this.props.pins).map(pin => {
                            return (
                                <tr>
                                    <td>{pin.pin}</td>
                                    <td>{pin.analog}</td>
                                    <td>{pin.mode}</td>
                                    <td>{pin.state}</td>
                                    <td>{Object.values(pin.modes).map(mode => {
                                        return (
                                            <button onClick={() => {this.props.setMode(pin , mode)}}>{mode}</button>
                                        )
                                    })}</td>
                                </tr>
                            )
                        })
                    }
                </table>
            </div>)
    }
}

function mapStateToProps(event) {
    return {
        pins: event.pins
    };
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({setMode: setMode}, dispatch)
}



let con = connect(mapStateToProps , matchDispatchToProps);

export default con(FirmataTestTable);