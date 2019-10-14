import { useReducer } from "react";

export const basicInfo = {
  Basic: [
    {
      elementType: "input",
      inputlabel: "姓名"
    },
    {
      elementType: "input",
      inputlabel: "身分證字號"
    },
    {
      elementType: "datePicker",
      inputlabel: "出生日期"
    },
    {
      elementType: "datePicker",
      inputlabel: "入住日期"
    }
  ],
  FamilyInfo: [
    {
      elementType: "input",
      inputlabel: "姓名"
    },
    {
      elementType: "input",
      inputlabel: "身分證字號"
    },
    {
      elementType: "datePicker",
      inputlabel: "出生日期"
    },
    {
      elementType: "datePicker",
      inputlabel: "入住日期"
    }
  ],
  EntryDateInfo: [
    {
      elementType: "input",
      inputlabel: "姓名"
    },
    {
      elementType: "input",
      inputlabel: "身分證字號"
    },
    {
      elementType: "datePicker",
      inputlabel: "出生日期"
    },
    {
      elementType: "datePicker",
      inputlabel: "入住日期"
    }
  ],
  FinishDateInfo: [
    {
      elementType: "input",
      inputlabel: "姓名"
    },
    {
      elementType: "input",
      inputlabel: "身分證字號"
    },
    {
      elementType: "datePicker",
      inputlabel: "出生日期"
    },
    {
      elementType: "datePicker",
      inputlabel: "入住日期"
    }
  ]
};

// const basicInfoReducer = (state, action) => {
//   switch (action.type) {
//     case "INIT_ITEM":
//       return state;
//     case "ADD_ITEM":
//       return state;
//     default:
//       throw new Error("Hello World");
//   }
// };

// export const BasicInfoReducer = useReducer(basicInfoReducer, basicInfo);
