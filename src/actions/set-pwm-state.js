import {WEBSOCKET_SEND} from '@giantmachines/redux-websocket';

export const setPWMState = (pin , state) => {

    return {
        type: WEBSOCKET_SEND,
        payload: {action: 'SET_PWM_STATE' , pin: pin.pin , state: state}
    }
};
