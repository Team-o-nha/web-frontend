// libs import
import React from "react";
import { Input } from "antd";
// components, pages import
import InputWithSuffix from "@/components/InputWithSuffix";
// others
import { FieldGenerator } from "@/formiks/common";
import CONSTANTS from "@/constants";

const data = ({ guests }) =>
  guests.map((guest, index) => ({
    key: `${index + 1}`,
    no: `${index + 1}.`,
    memberNo: FieldGenerator({
      fieldName: `guests[${index}].memberNo`,
      component: {
        Tag: Input,
        className: "form-input-long-2",
        ...CONSTANTS.FORM_ITEM_PROPS.INPUT_PROPS
      }
    }),
    guestName: FieldGenerator({
      fieldName: `guests[${index}].guestName`,
      component: {
        Tag: Input,
        className: "form-input-long-1 essential-input",
        ...CONSTANTS.FORM_ITEM_PROPS.INPUT_PROPS
      }
    }),
    roomTypeCode: FieldGenerator({
      fieldName: `guests[${index}].roomTypeCode`,
      component: {
        Tag: InputWithSuffix,
        textBox: fieldProps => (
          <Input className="form-input-small" {...fieldProps} />
        ),
        suffix: (
          <div className="form-suffix dynamic-room-code">
            {Object.keys(CONSTANTS.ROOM_TYPE_CODES).find(
              roomTypeCode =>
                CONSTANTS.ROOM_TYPE_CODES[roomTypeCode] === guest.roomTypeCode
            )}
          </div>
        ),
        ...CONSTANTS.FORM_ITEM_PROPS.INPUT_PROPS,
        maxLength: 10
      }
    }),
    personNumber: FieldGenerator({
      fieldName: `guests[${index}].personNumber`,
      className: "form-input-small",
      component: {
        Tag: Input,
        className: "form-input-small",
        ...CONSTANTS.FORM_ITEM_PROPS.INPUT_PROPS
      }
    }),
    setCode: FieldGenerator({
      fieldName: `guests[${index}].setCode`,
      component: {
        Tag: Input,
        className: "form-input-small",
        ...CONSTANTS.FORM_ITEM_PROPS.INPUT_PROPS
      }
    }),
    charge: 0,
    total: 0,
    advancePayment: "",
    arrangeCode: "",
    notes: FieldGenerator({
      fieldName: `guests[${index}].notes`,
      component: {
        Tag: Input,
        className: "form-input-long-1",
        ...CONSTANTS.FORM_ITEM_PROPS.INPUT_PROPS
      }
    }),
    point: "",
    memberNotes: "",
    roomId: ""
  }));

export default data;
