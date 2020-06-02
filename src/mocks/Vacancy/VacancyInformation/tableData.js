// libs import
import React from "react";
import moment from "moment";
import qs from "query-string";
// components import
import VacancyTableCell from "@/pages/Vacancy/components/VacancyTableCell";
import InquiryDate from "@/pages/Vacancy/components/InquiryDate";
import LinkLabel from "@/pages/Vacancy/components/LinkLabel";
// others
import CONSTANTS from "@/constants";
import { generateDOW, isSatOrSun } from "@/utils";

const data = [];

for (let i = 9; i <= 22; i += 1) {
  // fake date object
  const dateObject = new Date(`2015/06/${i}`);
  const dateLabel = moment(dateObject).format(
    CONSTANTS.DATE_TIME_FORMAT.M_D_SLASH
  );
  const dowLabel = moment(dateObject).day();
  const queryParameters = roomType => ({
    reserveDate: moment(dateObject).format(
      CONSTANTS.DATE_TIME_FORMAT.YY_MM_DD_SLASH
    ),
    roomType
  });
  data.push({
    key: i,
    inquiryDate: (
      <>
        <InquiryDate
          dateObject={dateObject}
          dateLabel={dateLabel}
          dowLabel={generateDOW(dowLabel)}
          {...isSatOrSun(dowLabel)}
        />
      </>
    ),
    yield: <VacancyTableCell aboveText="A" belowText={null} isYield />,
    SNGL: (
      <VacancyTableCell
        aboveText={
          <LinkLabel
            label="56"
            // toPath={`/jp/reservation?reserveDate=${moment(
            //   dateObject
            // ).format(
            //   CONSTANTS.DATE_TIME_FORMAT.YY_MM_DD_SLASH
            // )}&roomType=SNGL`}
            toPath={{
              // TODO: locale routing
              pathname: "/jp/reservation",
              // ご参考に：https://stackoverflow.com/questions/4292914/javascript-url-decode-function
              // ご参考に：https://github.com/sindresorhus/query-string#stringifyobject-options
              // Strictly encode URI components (qs auto does this for us)
              search: `?${qs.stringify(queryParameters("SNGL"))}`,
              state: { fromVacancy: true }
            }}
          />
        }
        belowText="5,010"
        isRoomData
      />
    ),
    SP: (
      <VacancyTableCell
        aboveText={<LinkLabel label="9" toPath="/jp/reservation" />}
        belowText="20,080"
        isRoomData
      />
    ),
    SP2: (
      <VacancyTableCell
        aboveText={<LinkLabel label="10" toPath="/jp/reservation" />}
        belowText="5,030"
        isRoomData
      />
    ),
    MT: (
      <VacancyTableCell
        aboveText={<LinkLabel label="12" toPath="/jp/reservation" />}
        belowText="10,080"
        isRoomData
      />
    ),
    HC: (
      <VacancyTableCell
        aboveText={<LinkLabel label="5" toPath="/jp/reservation" />}
        belowText="5,060"
        isRoomData
      />
    ),
    MT2: (
      <VacancyTableCell
        aboveText={<LinkLabel label="5" toPath="/jp/reservation" />}
        belowText="20,200"
        isRoomData
      />
    ),
    TW: (
      <VacancyTableCell
        aboveText={<LinkLabel label="6" toPath="/jp/reservation" />}
        belowText="10,140"
        isRoomData
      />
    ),
    DB: (
      <VacancyTableCell
        aboveText={<LinkLabel label="5" toPath="/jp/reservation" />}
        belowText="10,160"
        isRoomData
      />
    ),
    DB2: (
      <VacancyTableCell
        aboveText={<LinkLabel label="6" toPath="/jp/reservation" />}
        belowText="10,180"
        isRoomData
      />
    ),
    SS24: (
      <VacancyTableCell
        aboveText={<LinkLabel label="54" toPath="/jp/reservation" />}
        belowText="5,000"
        isRoomData
      />
    ),
    LD: (
      <VacancyTableCell
        aboveText={<LinkLabel label="5" toPath="/jp/reservation" />}
        belowText="5,100"
        isRoomData
      />
    ),
    LD2: (
      <VacancyTableCell
        aboveText={<LinkLabel label="5" toPath="/jp/reservation" />}
        belowText="5,110"
        isRoomData
      />
    ),
    SP3: (
      <VacancyTableCell
        aboveText={<LinkLabel label="1" toPath="/jp/reservation" />}
        belowText="5,120"
        isRoomData
      />
    ),
    SP4: (
      <VacancyTableCell
        aboveText={<LinkLabel label="1" toPath="/jp/reservation" />}
        belowText="5,130"
        isRoomData
      />
    ),
    ST: (
      <VacancyTableCell
        aboveText={<LinkLabel label="1" toPath="/jp/reservation" />}
        belowText="5,140"
        isRoomData
      />
    ),
    ST2: (
      <VacancyTableCell
        aboveText={<LinkLabel label="1" toPath="/jp/reservation" />}
        belowText="5,140"
        isRoomData
      />
    ),
    TR: (
      <VacancyTableCell
        aboveText={<LinkLabel label="1" toPath="/jp/reservation" />}
        belowText="5,150"
        isRoomData
      />
    ),
    TR2: (
      <VacancyTableCell
        aboveText={<LinkLabel label="1" toPath="/jp/reservation" />}
        belowText="15,480"
        isRoomData
      />
    ),
    B: (
      <VacancyTableCell
        aboveText={<LinkLabel label="1" toPath="/jp/reservation" />}
        belowText="15,510"
        isRoomData
      />
    ),
    A: (
      <VacancyTableCell
        aboveText={<LinkLabel label="1" toPath="/jp/reservation" />}
        belowText="10,380"
        isRoomData
      />
    ),
    roomQuantitySum: (
      <VacancyTableCell aboveText="186" belowText={null} isRoomQuantitySum />
    ),
    parkingBreakfast: (
      <VacancyTableCell aboveText="0" belowText="0" isParkingBreakfast />
    ),
    occupancyRevPar: (
      <VacancyTableCell aboveText="0" belowText="0" isOccupancyRevPar />
    )
  });
}

export default data;
