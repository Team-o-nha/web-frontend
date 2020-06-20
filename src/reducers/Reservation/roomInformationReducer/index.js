import CONSTANTS from "@/constants";

const {
  RESERVATION_MODEL: { UPDATE_ROOM_TYPES_AMOUNT }
} = CONSTANTS.ACTION_TYPES;

export const initialState = {
  roomTypesAmount: {
    SS4: "0",
    SN: "0",
    DB: "0",
    TR: "0",
    TW: "0",
    TN: "0",
    HC: "0"
  }
};

export default function(state = initialState, { type, payload }) {
  // TODO: HIGHER ORDER REDUCER
  switch (type) {
    case UPDATE_ROOM_TYPES_AMOUNT: {
      return {
        ...state,
        roomTypesAmount: payload.data
      };
    }
    default: {
      return state;
    }
  }
}
