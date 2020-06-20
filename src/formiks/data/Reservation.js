import CONSTANTS from "@/constants";

const reservationInformationValues = {
  memberNo: "1",
  checkInDate: "2019/12/05",
  // FIXME: arrivalTime
  arrivalTime: "09:00",
  checkOutDate: "2019/12/06",
  nightNumber: "1",
  personNumber: 2,
  paymentMethod: "1"
};

const detailInformationValues = ({ storeProps }) => {
  const { roomTypesAmount } = storeProps;
  const guests = [];
  Object.keys(roomTypesAmount).forEach(roomTypeCode => {
    for (let i = 0; i < parseInt(roomTypesAmount[roomTypeCode], 10); i += 1) {
      guests.push({
        memberNo: `${i + 1}`,
        guestName: "のび太",
        roomTypeCode: CONSTANTS.ROOM_TYPE_CODES[roomTypeCode],
        personNumber: 1,
        setCode: "0",
        charge: "0",
        total: "0",
        advancePayment: 0,
        arrangeCode: "000",
        notes: "明細備考01",
        point: "0",
        memberNotes: "会備01",
        roomId: "0"
      });
    }
  });

  return {
    guests
  };
};

const inputInformationValues = {
  telNo: "03-6895-1472",
  companyName: "株式会社 アルメックス",
  reservantName: "テスト00",
  faxNo: "03-3842-7573",
  email: "test@usen-next.jp",
  mobileNo: "090-1234-5678",
  notes: "共通備考",
  planComment: "001",
  netComment: "ネット備考"
};

const formData = ({ storeProps }) => ({
  initialValues: {
    ...reservationInformationValues,
    ...detailInformationValues({ storeProps }),
    ...inputInformationValues
  }
});

export default formData;
