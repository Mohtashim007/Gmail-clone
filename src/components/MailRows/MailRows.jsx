import { Checkbox, IconButton } from "@material-ui/core";
import { LabelImportantOutlined, StarBorderOutlined } from "@material-ui/icons";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectedMail } from "../../features/mailSlice";
import "./MailRows.css";

const MailRows = ({ id, title, subject, description, time }) => {
  const history = useNavigate();
  const dispatch = useDispatch();

  const opneMail = () => {
    dispatch(
      selectedMail({
        id,
        title,
        subject,
        description,
        time,
      })
    );

    history("/mail");
  };

  return (
    <div onClick={opneMail} className="mailrows">
      <div className="mailrows_option">
        <Checkbox />
        <IconButton>
          <StarBorderOutlined />
        </IconButton>
        <IconButton>
          <LabelImportantOutlined />
        </IconButton>
      </div>
      <h3 className="mailrows_title">{title}</h3>
      <div className="mailrows_message">
        <h4>
          {subject}{" "}
          <span className="mailrows_description">- {description}</span>
        </h4>
      </div>
      <p className="mailrows_time">{time}</p>
    </div>
  );
};

export default MailRows;
