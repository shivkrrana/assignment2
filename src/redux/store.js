import { createStore } from "redux";

import allowance from './reducer'

const store = createStore(allowance)

export default store;