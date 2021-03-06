import axios from "axios";

export default function sendEstimate(
  setLoading,
  email,
  name,
  phone,
  message,
  total,
  category,
  service,
  platforms,
  features,
  customFeatures,
  users,
  setAlert,
  setDialogOpen
) {
  setLoading(true);

  axios
    .get(
      "https://us-central1-material-ui-course-9066c.cloudfunctions.net/sendMail",
      {
        params: {
          email: email,
          name: name,
          phone: phone,
          message: message,
          total: total,
          category: category,
          service: service,
          platforms: platforms,
          features: features,
          customFeatures: customFeatures,
          users: users,
        },
      }
    )
    .then((res) => {
      setLoading(false);
      setAlert({ open: true, color: "#4BB543" });
      setDialogOpen(false);
    })
    .catch((err) => {
      setLoading(false);
      setAlert({ open: true, color: "#FF3232" });
      console.error(err);
    });
}
