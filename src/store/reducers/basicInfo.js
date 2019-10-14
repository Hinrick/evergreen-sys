import * as actionTypes from '../actions/actionTypes';

const basicInfo = {
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

const initialState = {
    title:'',
    basic:basicInfo,
    static:[]
};


const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        default: return state;
    }
};

export default reducer;
