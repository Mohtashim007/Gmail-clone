import { Button } from "@material-ui/core";
import { Close } from "@material-ui/icons";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { db } from "../../config/config";
import { closeSendMessage } from "../../features/mailSlice";
import "./SendMail.css";
import firebase from "firebase/compat/app";

const SendMail = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (formData) => {
    console.log(formData);
    db.collection("emails").add({
      to: formData.to,
      subject: formData.subject,
      message: formData.message,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    dispatch(closeSendMessage());
  };

  const dispatch = useDispatch();

  return (
    <div className="sendmail">
      <div className="sendmail_header">
        <h3>New Message</h3>
        <Close
          className="sendmail_close"
          onClick={() => dispatch(closeSendMessage())}
        />
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="email"
          placeholder="To"
          {...register("to", { required: true })}
        />
        {errors.to && <p className="sendmail_error">To is Required</p>}
        <input
          type="text"
          placeholder="Subject"
          {...register("subject", { required: true })}
        />
        {errors.subject && (
          <p className="sendmail_error">Subject is Required</p>
        )}
        <input
          {...register("message", { required: true })}
          type="text"
          placeholder="Message..."
          className="sendmail_message"
        />
        {errors.message && (
          <p className="sendmail_error">Message is Required</p>
        )}
        <div className="sendmail_options">
          <Button
            className="sendmail_send"
            variant="contained"
            color="primary"
            type="submit"
          >
            Send
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SendMail;
