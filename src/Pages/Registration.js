import { useState } from "react";

function Registration() {
  const [formValues, setFormValues] = useState({
    userName: "",
    email: "",
    firstName: "",
    lastName: "",
    telephone: "",
    address: "",
    createdDate: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    const createdDate = new Date(); // create a new Date object with the current date and time
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
      createdDate: createdDate
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formValues);
    // TODO: submit form data to server
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input
            type="text"
            name="userName"
            value={formValues.userName}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formValues.email}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          First Name:
          <input
            type="text"
            name="firstName"
            value={formValues.firstName}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Last Name:
          <input
            type="text"
            name="lastName"
            value={formValues.lastName}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Telephone:
          <input
            type="number"
            name="telephone"
            value={formValues.telephone}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Address:
          <input
            type="text"
            name="address"
            value={formValues.address}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}
export default Registration