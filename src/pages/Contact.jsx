import { InputGroup, Form, Button } from "react-bootstrap";
import emailjs from "@emailjs/browser";
import React, { useRef } from "react";

export default function Contact() {
  const form = useRef();

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

  const sendEmail = (e) => {
    e.preventDefault();
    // service_id, templte_id and public key will get from Emailjs website when you create account and add template service and email service
    emailjs
      .sendForm(
        "service_8q8rwfd",
        "template_d5s6vw7",
        form.current,
        "6HPhF5iRicWDyOEDk"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      )
      .then(() => {
        document.getElementById("name_input").value = "";
        document.getElementById("email_input").value = "";
        document.getElementById("message_input").value = "";
      });
  };

  return (
    <Form onSubmit={sendEmail} ref={form} id="formContainer">
      <h1>CONTACT ME</h1>
      <div
        id="formWidth"
        className="d-flex justify-content-center flex-column align-items-center mt-4"
      >
        <InputGroup className="mb-3">
          <InputGroup.Text className="label" id="inputGroup-sizing-default">
            Name
          </InputGroup.Text>
          <Form.Control
            id="name_input"
            name="from_name"
            onBlur={onBlurName}
            aria-label="Default"
            aria-describedby="inputGroup-sizing-default"
          />
        </InputGroup>
        <p id="notif-name" className="text-danger align-self-start d-none">
          NAME IS REQUIRED
        </p>

        <InputGroup className="mb-3">
          <InputGroup.Text className="label" id="inputGroup-sizing-default">
            Email
          </InputGroup.Text>
          <Form.Control
            id="email_input"
            name="reply_to"
            onBlur={onBlurEmail}
            aria-label="Default"
            aria-describedby="inputGroup-sizing-default"
          />
        </InputGroup>
        <p id="notif-email" className="text-danger align-self-start d-none">
          EMAIL IS INVALID
        </p>

        <InputGroup className="mb-3">
          <InputGroup.Text className="label">Message</InputGroup.Text>
          <Form.Control
            id="message_input"
            name="message"
            as="textarea"
            aria-label="With textarea"
            onBlur={onBlurMessage}
          />
        </InputGroup>
        <p id="notif-message" className="text-danger align-self-start d-none">
          MESSAGE IS REQUIRED
        </p>

        <Button className="mb-4" id="submitButton" variant="dark" type="submit">
          Submit
        </Button>
      </div>
    </Form>
  );
}
