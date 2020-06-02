import reducer, { initialState } from "./index";
// others
import CONSTANTS from "@/constants";
// mocks
import registerReservationMock from "./__mocks__/registerReservation";

const {
  RESERVATION_MODEL: { REGISTER_RESERVATION_SUCCESS }
} = CONSTANTS.ACTION_TYPES;

describe("reservationReducer", () => {
  /**
   * Reducer should return the initial state
   */
  it("It should return the initial state", () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  /**
   * Should handle REGISTER_RESERVATION_SUCCESS
   * Before: reservationInfo = {}, isLoading: true, isError: false
   * After: reservationInfo = { registerReservationMock }, isLoading: false, isError: false
   */
  it("Should handle REGISTER_RESERVATION_SUCCESS", () => {
    expect(
      reducer(
        {
          reservationInfo: {},
          // REGISTER_RESERVATION_LOADING is on-going
          isLoading: true,
          isError: false,
          error: {}
        },
        {
          type: REGISTER_RESERVATION_SUCCESS,
          payload: { data: registerReservationMock }
        }
      )
    ).toEqual({
      reservationInfo: registerReservationMock,
      isLoading: false,
      isError: false,
      error: {}
    });
  });
});
