import { WEBSOCKET_MESSAGE } from '@giantmachines/redux-websocket';

export default function (state = {}, action) {

    switch (action.type) {

        case WEBSOCKET_MESSAGE:
            console.log(action.payload.data);
            return action.payload.data

    }

    return state;
}