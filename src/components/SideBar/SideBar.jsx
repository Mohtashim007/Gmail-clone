import { Button, IconButton } from "@material-ui/core";
import React from "react";
import "./SideBar.css";
import AddIcon from "@material-ui/icons/Add";
import SideBarOptions from "../SideBarOptions/SideBarOptions";
import InboxIcon from "@material-ui/icons/Inbox";
import StarIcon from "@material-ui/icons/Star";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import LabelImportantIcon from "@material-ui/icons/LabelImportant";
import NearMeIcon from "@material-ui/icons/NearMe";
import NoteIcon from "@material-ui/icons/Note";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Duo, Person, Phone } from "@material-ui/icons";

const SideBar = () => {
  return (
    <div className="sidebar">
      <Button startIcon={<AddIcon />} className="sidebar_compose">
        Compose
      </Button>
      <SideBarOptions
        Icon={InboxIcon}
        title="Inbox"
        number={10}
        selected={true}
      />
      <SideBarOptions Icon={StarIcon} title="Starred" number={5} />
      <SideBarOptions Icon={AccessTimeIcon} title="Snoozed" number={15} />
      <SideBarOptions Icon={LabelImportantIcon} title="Important" number={20} />
      <SideBarOptions Icon={NearMeIcon} title="Sent" number={25} />
      <SideBarOptions Icon={NoteIcon} title="Draft" number={30} />
      <SideBarOptions Icon={ExpandMoreIcon} title="More" />
      <div className="sidebar_footer">
        <div className="sidebar_footerIcon">
          <IconButton>
            <Person />
          </IconButton>
          <IconButton>
            <Duo />
          </IconButton>
          <IconButton>
            <Phone />
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
