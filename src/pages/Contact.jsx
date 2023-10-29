import { InputGroup, Form, Button } from "react-bootstrap";

export default function Contact() {
  function onBlurName(event) {
    var currentValue = event.target.value;
    if (currentValue == "") {
      document.getElementById("notif-name").classList.remove("d-none");
    } else {
      document.getElementById("notif-name").classList.add("d-none");
    }
  }
  function onBlurEmail(event) {
    var currentValue = event.target.value;

    var regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

    var isValid = regex.test(currentValue);

    if (!isValid) {
      document.getElementById("notif-email").classList.remove("d-none");
    } else {
      document.getElementById("notif-email").classList.add("d-none");
    }
  }
  function onBlurMessage(event) {
    var currentValue = event.target.value;
    if (currentValue == "") {
      document.getElementById("notif-message").classList.remove("d-none");
    } else {
      document.getElementById("notif-message").classList.add("d-none");
    }
  }

  return (
    <div id="formContainer">
      <h1>Contact Form</h1>
      <div id="formWidth"className="d-flex justify-content-center flex-column align-items-center mt-4">
        <InputGroup className="mb-3">
          <InputGroup.Text className="label" id="inputGroup-sizing-default">
            Name
          </InputGroup.Text>
          <Form.Control
            onBlur={onBlurName}
            aria-label="Default"
            aria-describedby="inputGroup-sizing-default"
          />
        </InputGroup>
        <p id="notif-name" className="text-danger align-self-start d-none">
          Name is required
        </p>

        <InputGroup className="mb-3">
          <InputGroup.Text className="label" id="inputGroup-sizing-default">
            Email
          </InputGroup.Text>
          <Form.Control
            onBlur={onBlurEmail}
            aria-label="Default"
            aria-describedby="inputGroup-sizing-default"
          />
        </InputGroup>
        <p id="notif-email" className="text-danger align-self-start d-none">
          Email is invalid
        </p>

        <InputGroup className="mb-3">
          <InputGroup.Text className="label">Message</InputGroup.Text>
          <Form.Control
            as="textarea"
            aria-label="With textarea"
            onBlur={onBlurMessage}
          />
        </InputGroup>
        <p id="notif-message" className="text-danger align-self-start d-none">
          Message is required
        </p>

        <Button className="mb-4" id="submitButton" variant="dark">
          Submit
        </Button>
      </div>
    </div>
  );
}
