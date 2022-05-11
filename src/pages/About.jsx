import React from "react";
import "../pages/about.css";
import {
  LinkedinOutlined,
  InstagramOutlined,
  FacebookOutlined,
} from "@ant-design/icons";

const About = () => {
  return (
    <div className="container about_container">
      <h2 className="contact_title">Contactez-nous !</h2>
      <p className="contact_item">Par Email : jeremy.vaneste@free.fr</p>
      <p className="contact_item">Par Téléphone : 06-95-77-54-63</p>
      <div className="socials_container">
        <LinkedinOutlined className="social_item"></LinkedinOutlined>
        <InstagramOutlined className="social_item"></InstagramOutlined>
        <FacebookOutlined className="social_item"></FacebookOutlined>
      </div>
    </div>
  );
};

export default About;
