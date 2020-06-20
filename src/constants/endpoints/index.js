import RESERVATION from "./reservation";
import VACANCY from "./vacancy";
import MAINTENANCE from "./maintenance";

export default {
  ...RESERVATION,
  ...VACANCY,
  ...MAINTENANCE
};
