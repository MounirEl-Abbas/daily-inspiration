import React, { useRef } from "react";
import emailjs, { init } from "emailjs-com";

function Form() {
  init("user_MO0uYEFzUIaQ0zbBZ2iau");
  const dynamicMessage = "this is my dynamic message";
  const userName = "Moe";

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    // emailjs.send("service_fxy7wzj", "template_z0bpjmo", {
    //   from_name: "M.E Time",
    //   to_name: `${userName}`,
    //   message: `${dynamicMessage}`,
    //   user: "el-abbas@hotmail.com",
    // });
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
  );
}

export default Form;
