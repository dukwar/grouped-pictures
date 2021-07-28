import {combineReducers} from "redux";
import picturesGrouped from "./reducers/pictures";
import picturesAll from "./reducers/picturesAll";


const rootReducer = combineReducers({
    picturesGrouped,
    picturesAll
})

export type reducersType = ReturnType<typeof rootReducer>

export default rootReducer