export default function onChange(
  event,
  setEmail,
  setEmailHelper,
  setPhone,
  setPhoneHelper
) {
  let valid;

  switch (event.target.id) {
    case "email":
      setEmail(event.target.value);
      valid = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(
        event.target.value
      );

      if (!valid) {
        setEmailHelper("Invalid email");
      } else {
        setEmailHelper("");
      }

      break;
    case "phone":
      setPhone(event.target.value);
      valid = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(
        event.target.value
      );

      if (!valid) {
        setPhoneHelper("Invalid phone");
      } else {
        setPhoneHelper("");
      }
      break;
    default:
      break;
  }
}
