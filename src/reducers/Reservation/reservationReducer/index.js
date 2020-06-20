import CONSTANTS from "@/constants";

const {
  RESERVATION_MODEL: {
    REGISTER_RESERVATION_LOADING,
    REGISTER_RESERVATION_SUCCESS,
    REGISTER_RESERVATION_ERROR
  }
} = CONSTANTS.ACTION_TYPES;

export const initialState = {
  reservationInfo: {},
  isLoading: false,
  isError: false,
  error: {}
};

export default function(state = initialState, { type, payload }) {
  // TODO: HIGHER ORDER REDUCER
  switch (type) {
    case REGISTER_RESERVATION_LOADING: {
      return {
        ...state,
        isLoading: true,
        isError: false,
        error: {}
      };
    }
    case REGISTER_RESERVATION_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        isError: false,
        reservationInfo: payload.data
      };
    }
    case REGISTER_RESERVATION_ERROR: {
      return {
        ...state,
        isLoading: false,
        isError: true,
        error: payload.error
      };
    }
    default: {
      return state;
    }
  }
}
