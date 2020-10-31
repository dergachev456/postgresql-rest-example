import {
    GET_STATISTICS,
} from '../constants';

import ApiService from '../../services/api-service';
const apiService = new ApiService();

export const getStatistics = () => async dispatch => {
    let statistics = await apiService.getData('/statistics')
    dispatch({
        type: GET_STATISTICS,
        statistics
    })
};