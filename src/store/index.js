import { createStore } from 'redux';

import rooReducer from './modules/rootReducer';

const store = createStore(rooReducer);

export default store;
