import React, { useState, useCallback } from "react";

import {
  makeStyles,
  Card,
  CardContent,
  CardActions,
  Button,
  Typography,
  Divider
} from "@material-ui/core/";

import Modal from "../../components/Modal/Modal";
import InnerHeader from "../../components/header";
import DisplayForm from "../../components/displayForm";
import RenderInput from "../../components/Input/Input";
import BasicInfoAdd from "../BasicInformation/BasicInformationAdd";
import Selection from '../../components/selectionSetting'
import useHttp from '../../hooks/http'


const useStyles = makeStyles({
  section: {
    padding: 16
  },
  root: {},
  cardheader: {
    display: "flex"
  },
  card: {
    minWidth: 275,
    margin: 15,
    padding: 0 
  },
  cardheader:{
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    fontSize: 14
  },
  pos: {
    paddingTop: 7,
    marginLeft: 20
  }
});

const BasicInformationList = props => {
  const classes = useStyles();
  const [isShow, setIsShow] = useState(false);
  const [open, setOpen] = useState(false);
  const [displayModal, setDisplayModal] = useState();

  const {
    isLoading,
    error,
    data,
    sendRequest,
    reqExtra,
    reqIdentifer,
    clear
  } = useHttp();


  const showMore = () => {
    setIsShow(!isShow);
  };

  const closeModalHandler = () => {
    setOpen(false);
  };

  const isModalOpen = () => {
    setOpen(true);
  };

  const displayModalHandler = screen => {
    setDisplayModal(screen)
  }


  // const addMemberHandler = useCallback(data => {
  //   sendRequest(
  //     '',
  //     'POST',
  //     JSON.stringify(data),
  //     ingredient,
  //     'ADD_INGREDIENT'
  //   );
  // }, [sendRequest]);

  return (
    <div className={classes.root}>
      <header>
        <InnerHeader
          addInfo="新增住民資料"
          setting="設定"
          modalControl={isModalOpen}
          onDisplayScreen={screen => displayModalHandler(screen)}
        />
      </header>
      <Card className={classes.card}>
        <CardContent className={classes.cardheader}>
          <h1>吳文貴</h1>
          <h3>2F/206C</h3>
        </CardContent>
        <CardContent>
          <div>
            <p>
              <span className={classes.bodyheader}>養(護)字號 : </span>
              <span>2016-01-09</span>
            </p>
            <p>
              <span className={classes.bodyheader}>入住日期 : </span>
              <span>2016-01-09</span>
            </p>
            <p>
              <span className={classes.bodyheader}>出生日期(民國): </span>
              <span>32-02-26</span>
            </p>
            <p>
              <span className={classes.bodyheader}>性別 :</span>
              <span>男</span>
            </p>
          </div>
        </CardContent>

        <DisplayForm displayTitle="Test" />
        <CardActions>
          <Button size="small" onClick={showMore}>
            更多資訊
          </Button>
        </CardActions>
      </Card>
      <Modal modalStatus={open} onCloseModalHandler={closeModalHandler}>
        {displayModal === 'ADD' && <BasicInfoAdd onCloseModalHandler={closeModalHandler} />}
        {displayModal === 'SETTING' && <Selection /> }
      </Modal>
    </div>
  );
};

export default BasicInformationList;
