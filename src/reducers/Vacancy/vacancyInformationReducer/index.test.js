import reducer from "./index";
// others
import CONSTANTS from "@/constants";
// __mocks__
import vacancyInquiryInfoMock from "./__mocks__/fetchVacancyInquiryInfo";

const {
  VACANCY_MODEL: { FETCH_VACANCY_INQUIRY_INFO_SUCCESS }
} = CONSTANTS.ACTION_TYPES;

describe("vacancyInformationReducer", () => {
  /**
   * Reducer should return the initial state
   */
  it("It should return the initial state", () => {
    expect(reducer(undefined, {})).toEqual({
      vacancyInquiryInfo: {
        roomData: [],
        roomQuantitySum: 0,
        roomFreeDaily: []
      },
      isLoading: false,
      isError: false,
      error: {}
    });
  });

  /**
   * Should handle FETCH_VACANCY_INQUIRY_INFO_SUCCESS
   * Before: vacancyInquiryInfo = {}, isLoading = true, isError = false
   * After: vacancyInquiryInfo = vacancyInquiryInfoMock, isLoading = false, isError = false
   */
  it("Should handle FETCH_VACANCY_INQUIRY_INFO_SUCCESS", () => {
    expect(
      reducer(
        {
          vacancyInquiryInfo: {},
          isLoading: true,
          isError: false
        },
        {
          type: FETCH_VACANCY_INQUIRY_INFO_SUCCESS,
          payload: { data: vacancyInquiryInfoMock }
        }
      )
    ).toEqual({
      vacancyInquiryInfo: vacancyInquiryInfoMock,
      isLoading: false,
      isError: false
    });
  });
});
