import reducer, { initialState } from "./index";
// others
import CONSTANTS from "@/constants";

const {
  RESERVATION_MODEL: { UPDATE_ROOM_TYPES_AMOUNT }
} = CONSTANTS.ACTION_TYPES;

describe("roomInformationReducer", () => {
  /**
   * Reducer should return the initial state
   */
  it("It should return the initial state", () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  /**
   * Should handle UPDATE_ROOM_TYPES_AMOUNT
   * Before: roomTypesAmount = { SS4: "0", SN: "0" }
   * After: roomTypesAmount = { SS4: "1", SN: "1" }
   */
  it("Should handle UPDATE_ROOM_TYPES_AMOUNT", () => {
    expect(
      reducer(
        {
          roomTypesAmount: { SS4: "0", SN: "0" }
        },
        {
          type: UPDATE_ROOM_TYPES_AMOUNT,
          payload: { data: { SS4: "1", SN: "1" } }
        }
      )
    ).toEqual({
      roomTypesAmount: { SS4: "1", SN: "1" }
    });
  });
});
