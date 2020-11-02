import React, { Component } from 'react'
import './App.scss';
import { connect } from 'react-redux';
import { getOrders } from './store/actions/orderActionsCreator';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { OrderListPage } from './pages/OrderListPage/OrderListPage';
import CreateOrderPage from './pages/CreateOrderPage/CreateOrderPage';
import EditOrderPage from './pages/EditOrderPage/EditOrderPage';
import { StatisticsPage } from './pages/StatisticsPage/StatisticsPage';
import { NotFoundPage } from './pages/NotFoundPage/NotFoundPage';

class App extends Component {

  componentDidMount() {
    this.props.getOrders();
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={OrderListPage} />
          <Route path="/create" component={CreateOrderPage} />
          <Route path="/orders/edit/:id" component={EditOrderPage} />
          <Route path="/statistics" component={StatisticsPage} />
          <Route path="*" component={NotFoundPage} />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default connect(null, {
  getOrders
})(App);
