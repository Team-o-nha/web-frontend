// TODO: どこからサービスをゲットするか？
const BASE_SERVICE = "wincalx-reservation-api-ishidainn";

export default {
  RESERVATION_API: {
    RESERVE_REGISTER: `/${BASE_SERVICE}/reservation/reserve/register`,
    RESERVE_LIST: `/${BASE_SERVICE}/reservation/reserve/list`,
    RESERVE_EDIT: `/${BASE_SERVICE}/reservation/reserve/edit`,
    RESERVE_UPDATE: `/${BASE_SERVICE}/reservation/reserve/update`,
    NETCOMMENT_FIND: `/${BASE_SERVICE}/reservation/netcomment/find`,
    CHARGE_CONFIRM: `/${BASE_SERVICE}/reservation/charge/confirm`
  }
};
