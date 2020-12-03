import { combineReducers } from 'redux';
import {project} from "./components/project/project.reducer";

const rootReducer = combineReducers({
    project
});

export default rootReducer;