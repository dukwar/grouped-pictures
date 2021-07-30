import {combineReducers} from "redux";
import picturesGrouped from "./reducers/pictures";
import picturesAll from "./reducers/picturesAll";
import assort from "./reducers/assort";
import message from "./reducers/message";


const rootReducer = combineReducers({
    picturesGrouped,
    picturesAll,
    assort,
    message
})

export type reducersType = ReturnType<typeof rootReducer>

export default rootReducer