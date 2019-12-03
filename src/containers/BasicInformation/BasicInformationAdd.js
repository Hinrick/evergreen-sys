import React, { useReducer } from 'react'

import { makeStyles, Divider, Tab, Tabs } from '@material-ui/core'

import RenderInput from '../../components/Input/Input'

const useStyles = makeStyles(theme=>({
    root:{
        paddingTop:5,
        margin:0,
        '& h1':{
            // paddingTop:15,
            margin:0   
        },  
        '& RenderInput':{
            paddingTop:15
        },
        overFlow:'scrollY'
    },

}))

const basicInfoAddReducer = (state, action) => {
    switch (action.type) {
        case 'SET':
            return state
        case 'SAVE':
            return state
        case 'DELETE':
            return state
        default:
            throw new Error('Should not get there!');
    }
};

const basicInfoSelect = [
    {
       elementType:'input',
       inputlabel:'姓名'
    },
    {
        elementType: 'input',
        inputlabel: '身分證字號'
    },
    {
        elementType: 'input',
        inputlabel: '性別'
    },
    {
        elementType: 'input',
        inputlabel: '年齡'
    },
    {
        elementType: 'input',
        inputlabel: '身份別'
    },
    {
        elementType: 'input',
        inputlabel: '是否有重大病史'
    },
    {
        elementType: 'datePicker',
        inputlabel: '出生日期'
    },
    {
        elementType: 'datePicker',
        inputlabel: '入住日期'
    },
]



const familyInfoSelect = [
    {
        elementType:'input',
        inputlabel:'家庭成員'
     },
     {
        elementType:'input',
        inputlabel:'曾任工作'
     },
     {
        elementType:'input',
        inputlabel:'專長與嗜好'
     },
     {
        elementType:'input',
        inputlabel:'主要照顧決策者'
     },
     {
        elementType:'input',
        inputlabel:'主要照顧決策者資料'
     },
     {
        elementType:'input',
        inputlabel:'次要照顧決策者'
     },
     {
        elementType:'input',
        inputlabel:'次要照顧決策者資料'
     },
     {
        elementType:'input',
        inputlabel:'家系圖'
     },
]



const BasicInfoAdd = props => {
    const classes = useStyles(props)
    const [initBasicInfo, dispatch] = useReducer(basicInfoAddReducer,{
        name:null,
    })

    const BasicInfo = basicInfoSelect.map(item=>{
        return (
            <RenderInput
                elementType = {item.elementType}
                inputlabel = {item.inputlabel} 
        />)
    })




    return(       
        <div className={classes.root}>
              <Tabs
                // value={value}
                indicatorColor="primary"
                textColor="primary"
                // onChange={handleChange}
                aria-label="disabled tabs example"
            >
                <Tab label="Active" />
                <Tab label="Disabled" disabled />
                <Tab label="Active" />
            </Tabs>
            <h1> 基本資料 </h1>
            {BasicInfo}
            <br />
            <Divider />
            <h1> 家屬聯絡資料 </h1>
            {BasicInfo} 
            <br />
            <Divider />
            <h1> 入住登記 </h1>
            {BasicInfo} 
            <br />
            <Divider />
            <h1> 結案作業 </h1>
            {BasicInfo} 
            <br />
            <Divider />
            <br />
            {/* <RenderInput
                elementType='button'
                click = {props.onCloseModalHandler}
            >儲存</RenderInput> */}
        </div>
    )
}


const styles = {

}


export default BasicInfoAdd