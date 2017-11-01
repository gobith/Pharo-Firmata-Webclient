import {WEBSOCKET_SEND} from '@giantmachines/redux-websocket';

export const toggleDigitalState = (pin) => {

    return {
        type: WEBSOCKET_SEND,
        payload: {action: 'TOGGLE_DIGITAL_STATE' , pin: pin.pin}
    }
};
