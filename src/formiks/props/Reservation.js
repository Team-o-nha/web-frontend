import formData from "../data/Reservation";
import submitAction from "../submission/Reservation";

const reservationFormikProps = ({ actionMethods, storeProps }) => ({
  // value to submit
  ...formData({ storeProps }),
  ...submitAction({ actionMethods }),
  // ご参考に：https://github.com/jaredpalmer/formik/issues/811
  enableReinitialize: true
});

// TODO: validateOnChange, validateOnBlur
export default reservationFormikProps;
