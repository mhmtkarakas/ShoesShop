import React from "react";
import "../styles/Contact.css";
import nikeshop from "../assets/nikeshop.jpg";

const Contact = () => {
  return (
    <div className="contact">
      <div
        className="leftSide"
        style={{ backgroundImage: `url(${nikeshop})` }}
      ></div>
      <div className="rightSide">
        <h1>Bizimle Iletisime Gecin</h1>
        <form>
          <label>Ad Soyad</label>
          <input
            type="text"
            name="name"
            placeholder="Lutfen adinizi giriniz..."
          />
          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="Lutfen emailinizi giriniz..."
          />
           <label>Mesajiniz</label>
          <textarea
            row="6"
            name="message"
            placeholder="Lutfen mesajinizi giriniz..."
          ></textarea>
        </form>
      </div>
    </div>
  );
};

export default Contact;
