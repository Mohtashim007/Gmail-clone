import { Checkbox, IconButton } from "@material-ui/core";
import {
  ArrowDropDown,
  ChevronLeft,
  ChevronRight,
  Inbox,
  KeyboardHide,
  LocalOffer,
  MoreVert,
  People,
  Redo,
  Settings,
} from "@material-ui/icons";
import React from "react";
import MailRows from "../MailRows/MailRows";
import Section from "../Section/Section";
import "./MailList.css";

const MailList = () => {
  return (
    <div className="maillist">
      <div className="maillist_setting">
        <div className="maillist_settingLeft">
          <Checkbox />
          <IconButton>
            <ArrowDropDown />
          </IconButton>
          <IconButton>
            <Redo />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
        <div className="maillist_settingRight">
          <IconButton>
            <ChevronLeft />
          </IconButton>
          <IconButton>
            <ChevronRight />
          </IconButton>
          <IconButton>
            <KeyboardHide />
          </IconButton>
          <IconButton>
            <Settings />
          </IconButton>
        </div>
      </div>
      <div className="maillist_section">
        <Section Icon={Inbox} title="Primary" color="red" selected />
        <Section Icon={People} title="Socials" color="#1A73E8" />
        <Section Icon={LocalOffer} title="Promotions" color="green" />
      </div>
      <div className="maillist_list">
        <MailRows
          title="Test"
          subject="Testing"
          description="Testing the mail list work"
          time="10pm"
        />
      </div>
    </div>
  );
};

export default MailList;
