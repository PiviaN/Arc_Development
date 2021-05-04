import axios from "axios";

export default function onConfirm(
  setLoading,
  setOpen,
  setName,
  setEmail,
  setPhone,
  setMessage,
  setAlert,
  name,
  email,
  phone,
  message
) {
  setLoading(true);
  axios
    .get(
      "https://us-central1-material-ui-course-9066c.cloudfunctions.net/sendMail",
      {
        params: {
          name: name,
          email: email,
          phone: phone,
          message: message,
        },
      }
    )
    .then((res) => {
      setLoading(false);
      setOpen(false);
      setName("");
      setEmail("");
      setPhone("");
      setMessage("");
      setAlert({
        open: true,
        message: "Message sent succesfully!",
        backgroundColor: "#4BB543",
      });
    })
    .catch((err) => {
      setLoading(false);
      setAlert({
        open: true,
        message: "Something went wrong, please try again!",
        backgroundColor: "#FF3232",
      });
    });
}
