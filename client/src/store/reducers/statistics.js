import {
    GET_STATISTICS
} from '../constants';

let STATISTICS = [];

const statistics = (state = STATISTICS, { type, statistics }) => {
    switch (type) {
        case GET_STATISTICS:
            return statistics;
        default:
            return state;
    }
}

export default statistics;