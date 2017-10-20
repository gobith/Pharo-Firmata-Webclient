import { WEBSOCKET_MESSAGE } from '@giantmachines/redux-websocket';

export default function (state = {}, action) {

    switch (action.type) {

        case WEBSOCKET_MESSAGE:
            return JSON.parse(action.payload.data);
            break;

    }

    return state;
}