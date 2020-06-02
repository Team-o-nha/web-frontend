// others
import CONSTANTS from "@/constants";

const {
  VACANCY_MODEL: {
    FETCH_VACANCY_INQUIRY_INFO_LOADING,
    FETCH_VACANCY_INQUIRY_INFO_SUCCESS,
    FETCH_VACANCY_INQUIRY_INFO_ERROR
  }
} = CONSTANTS.ACTION_TYPES;

const initialState = {
  vacancyInquiryInfo: {
    roomData: [],
    roomQuantitySum: 0,
    roomFreeDaily: []
  },
  isLoading: false,
  isError: false,
  error: {}
};

export default function(state = initialState, { type, payload }) {
  // TODO: HIGHER ORDER REDUCER
  // TODO: use reducer factory
  // ご参考に：https://medium.com/javascript-in-plain-english/redux-without-switch-cases-and-some-other-tips-6a3d27157da6
  switch (type) {
    case FETCH_VACANCY_INQUIRY_INFO_LOADING: {
      return {
        ...state,
        isLoading: true,
        isError: false,
        error: {}
      };
    }
    case FETCH_VACANCY_INQUIRY_INFO_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        isError: false,
        vacancyInquiryInfo: payload.data
      };
    }
    case FETCH_VACANCY_INQUIRY_INFO_ERROR: {
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
