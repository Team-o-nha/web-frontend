// @flow
// libs import
// components import
import ReservationSearching from "@/pages/Reservation/modals/ReservationSearching";
import MemberSearching from "@/pages/Reservation/modals/MemberSearching";

const modalRoutes = [
  {
    path: (locale: string) => `/${locale}/reservation/searching`,
    exact: true,
    component: ReservationSearching
  },
  {
    path: (locale: string) => `/${locale}/reservation/member/searching`,
    exact: true,
    component: MemberSearching
  }
];

export default modalRoutes;
