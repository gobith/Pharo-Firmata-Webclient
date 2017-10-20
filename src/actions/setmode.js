import {WEBSOCKET_SEND} from '@giantmachines/redux-websocket';

export const setMode = (pin, mode) => {

    return {
        type: WEBSOCKET_SEND,
        payload: {action: 'SET_MODE' , pin: pin.pin , mode: mode}
    }
};