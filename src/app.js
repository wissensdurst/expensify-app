import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';


const store = configureStore()


store.dispatch(addExpense({description: 'Water bill', amount: 15000, createdAt: 1000}))
store.dispatch(addExpense({description: 'Gas bill', amount: 345000, createdAt: 200 }))
store.dispatch(addExpense({description: 'Rent', amount: 5000000, createdAt: 100}))
const state = store.getState()
console.log(getVisibleExpenses(state.expenses, state.filters))

console.log(store.getState())

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)

ReactDOM.render(jsx, document.getElementById('app'));
