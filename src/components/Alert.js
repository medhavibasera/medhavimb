import React from "react";
import Button from "@material-ui/core/Button";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import { makeStyles } from "@material-ui/core/styles";
import contact from "../css/Contact.module.css";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
}));

export default function CustomizedSnackbars(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  console.log("alert:", props.bool1);
  console.log("alert:", props.bool2);
  console.log("alert:", props.bool3);

  return (
    <div className={classes.root}>
      <Button
        variant="outlined"
        onClick={handleClick}
        className={contact.btn}
        type="submit"
      >
        Send Message
      </Button>
      <Snackbar open={open} autoHideDuration={2000} onClose={handleClose}>
        {props.bool1 && props.bool2 && props.bool3 ? (
          <Alert onClose={handleClose} severity="success">
            {/* {console.log("true")} */}
            Message sent successfully !
          </Alert>
        ) : (
          <Alert severity="error">
            {/* {console.log("false")} */}
            Parameter missing ! Sending Failed.
          </Alert>
        )}
      </Snackbar>
    </div>
  );
}
