import React, { Component } from 'react'
import { connect } from 'react-redux';
import { CustomTable } from '../CustomTable/CustomTable';
import { getStatistics } from '../../store/actions/statisticsActionsCreator';
import PropTypes from 'prop-types';

class StatisticsTable extends Component {

    componentDidMount() {
        this.props.getStatistics();
    }
    render() {
        const { statistics } = this.props;
        return (
            <CustomTable
                headers={['Date', 'Confirmed', 'Canceled', 'Postponed']}
                rows={statistics}
                fieldsToDispay={['order_date', 'confirmed', 'canceled', 'postponed']}
                showEditButton={false}
            />
        )
    }
}

export default connect(state => ({
    statistics: state.statistics,
}), { getStatistics })(StatisticsTable);

StatisticsTable.propTypes = {
    statistics: PropTypes.array.isRequired
  }
