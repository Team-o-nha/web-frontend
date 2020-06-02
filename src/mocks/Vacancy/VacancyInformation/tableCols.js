// libs import
import React from "react";
import moment from "moment";
// components import
import VacancyTableCell from "@/pages/Vacancy/components/VacancyTableCell";
import VacancyHeadlineTable from "@/pages/Vacancy/components/VacancyHeadlineTable";
// others
import CONSTANTS from "@/constants";

const roomTypes = [
  "SNGL",
  "SP",
  "SP2",
  "MT",
  "HC",
  "MT2",
  "TW",
  "DB",
  "DB2",
  "SS24",
  "LD",
  "LD2",
  "SP3",
  "SP4",
  "ST",
  "ST2",
  "TR",
  "TR2",
  "B",
  "A"
];

const generateCols = ({ parentStates, parentSetStateMethods }) => {
  // firstCol: 見出し項目テーブル、イールド指示
  const firstCols = [
    {
      title: (
        <VacancyHeadlineTable
          vacancyHeadlineTable={parentStates.vacancyHeadlineTable}
        />
      ),
      dataIndex: "inquiryDate",
      key: "inquiryDate",
      width: 25,
      sorter: false,
      filtered: false
    },
    {
      // TODO: conditional render if adds locale
      title: (
        <>
          <div className="yield-header-wrapper">
            <div className="reduce-letter-spacing">イールド</div>
            <span className="">指示</span>
          </div>
        </>
      ),
      dataIndex: "yield",
      key: "yield",
      align: "center",
      width: 25
    }
  ];

  const roomTypesCols = roomTypes.map((roomType, index) => ({
    className: "vacancy-table-cell",
    title: <VacancyTableCell aboveText={roomType} belowText={1} />,
    dataIndex: roomType,
    key: `${roomType}${index}`,
    align: "right",
    width: 16,
    onCell: record => ({
      onMouseEnter: () => {
        const roomInfo = record[roomType].props;
        // Link: parent, inquiryDate: children
        // inquiryDate component
        const inquiryDateComponent = record.inquiryDate.props.children;
        const inquiryDateComponentInfo = inquiryDateComponent.props;
        // Update VacancyHeadlineTable
        // Use Redux to do this
        // get action methods
        const { updateVacancyHeadlineTable } = parentSetStateMethods;
        // ご参考に： https://javascript.info/event-loop#use-case-3-doing-something-after-the-event
        // To schedule a new macrotask: Use zero delayed setTimeout(f)
        // That may be used to split a big calculation-heavy task into pieces,
        // for the browser to be able to react on user events and show progress between them.
        setTimeout(() =>
          updateVacancyHeadlineTable({
            date: moment(inquiryDateComponentInfo.dateObject).format(
              CONSTANTS.DATE_TIME_FORMAT.YY_MM_DD_SLASH
            ),
            dow: inquiryDateComponentInfo.dowLabel,
            roomAmount: roomInfo.aboveText,
            roomType
          })
        );
      },
      onMouseLeave: () => {
        // TODO: Update VacancyHeadlineTable
        // TODO: Do what?
        // Not show anything -> VacancyHeadlineTable empty
      }
    })
  }));

  // lastCols: 合計 + 駐車場/朝食代 + 稼働率/RevPAR
  const lastCols = [
    {
      title: <VacancyTableCell aboveText="合計" belowText="186" />,
      dataIndex: "roomQuantitySum",
      key: "roomQuantitySum",
      align: "center",
      width: 10
    },
    {
      title: (
        <VacancyTableCell
          aboveText="駐車場"
          belowText="朝食代"
          isParkingBreakfast
          isTh
        />
      ),
      dataIndex: "parkingBreakfast",
      key: "parkingBreakfast",
      align: "center",
      width: 10
    },
    {
      title: (
        <VacancyTableCell
          aboveText="稼働率"
          belowText="RevPAR"
          isOccupancyRevPar
          isTh
        />
      ),
      dataIndex: "occupancyRevPar",
      key: "occupancyRevPar",
      align: "center",
      width: 10
    }
  ];

  return [...firstCols, ...roomTypesCols, ...lastCols];
};

export default generateCols;
