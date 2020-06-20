import { combineReducers } from "redux";
import RESERVATION_MODEL_REDUCERS from "./Reservation";
import VACANCY_MODEL_REDUCERS from "./Vacancy";

export default combineReducers({
  ...RESERVATION_MODEL_REDUCERS,
  ...VACANCY_MODEL_REDUCERS
});
