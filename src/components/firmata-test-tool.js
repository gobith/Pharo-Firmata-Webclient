import React from 'react';
import {connect} from 'react-redux';


class FirmataTestTool extends React.Component {


    render() {
        return Object.values(this.props.pins).map((pin) => {
            return (<div key = {pin.pin}>{pin.pin} {pin.mode} {pin.state} </div>);

        });

    }
}

function mapStateToProps(event) {
    return {
        pins: event.pins
    };
}

let con = connect(mapStateToProps);

export default con(FirmataTestTool);