import { combineReducers } from "redux";

import allowance from "./reducer";
import allowancePopup from "./allowancereducer";
import registerData from "./registerreducer";

 const rootReducer = combineReducers({
    allowance,allowancePopup,registerData
})

export default rootReducer;