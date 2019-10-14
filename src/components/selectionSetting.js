import React, { useState } from 'react'
import { makeStyles, Divider } from '@material-ui/core'
import { useSelector } from 'react-redux'

import RenderInput from "../components/Input/Input";


const useStyles = makeStyles(theme=>({
  root:{

  },
  container:{
    fontSize:'1rem',
    '& li':{
      listStyleType:'none',
      paddingBottom:9
    }
  },
  addTypeButton:{
    display:'flex',
  },
  addSelectSection:{
    paddingBottom:9
  },
  addSelectSectionHeader:{
    marginTop:2,
    marginBottom:-10
  },
  continue:{
    fontColor:'#a5a5a5'
  }



}))


const Seletion = props => {
  const classes = useStyles(props)
  const basicInfo = useSelector(state => state.basicInfo)

  const [selectType, setSelectType] = useState(true)


  const handleChange = () => {
    setSelectType(!selectType)
    console.log(selectType)
  }


  let addTyleSelection = (
    <section className={classes.addSelectSection}>
      <h4 className={classes.addSelectSectionHeader}>新增填充題問題</h4>
      <RenderInput
        style={{marginTop:0}}
        elementType='input'
        inputlabel='輸入問題內容'
      />
    </section>
  )
  if(!selectType){
    addTyleSelection = (
      <section className={classes.addSelectSection}>
        <h4 className={classes.addSelectSectionHeader}>新增選擇題問題</h4>
        <RenderInput
          style={{marginTop:0}}
          elementType='input'
          inputlabel='輸入問題內容'
        />
        <h4 className={classes.addSelectSectionHeader}>新增選擇題選項</h4>
        <RenderInput
          style={{marginTop:0}}
          elementType='input'
          inputlabel='輸入選擇題選項'
        />
        <p><span className={classes.continue}>...</span></p>
      </section>
    )
  }

  return(
    <div className={classes.root}>
      <h1>{basicInfo.title}設定</h1>
      {Object.entries(basicInfo.basic).map(item=>{
          return(
            <div className={classes.container}>
            <h2>{item[0]}</h2>
              {item[1].map(subitem=><li>標題: {subitem.inputlabel} 類型:{subitem.elementType}</li>)}
            {/* Add selecton section */}
            <div className={classes.addTypeButton}>
              <RenderInput
                elementType='checkbox'
                inputlabel='新增填充項目'
                value='input'
                checked={selectType}
                onChange={handleChange}
              />
              <RenderInput
                elementType='checkbox'
                inputlabel='新增選擇項目'
                value='selection'
                checked={!selectType}
                onChange={handleChange}
              />
            </div>
            {addTyleSelection}
            <Divider />

            <br />
            </div>
          )
      })}
    </div>
  )

}




export default Seletion
