import React, { useState } from "react";
import "../CSS files/ContactUs.css";
import Navigation_Bar from "../Components/Navigation_Bar";
import Footer from "../Components/Footer";

export default function ContactUs() {
  return (
    <>
      <div className="layout">
        <Navigation_Bar />
        <div className="AboutUsOverall">
          <div className="Mid">
            <p id="Contact">Contact Us</p>
            <img src="\Images\\Contact.png" alt="img" id="imageee" />
          </div>
          <div className="Bottom">
            <div className="AboutUs1">
              <h1>Email</h1>
              <div className="paragraph">
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Dolores fugit quos sit amet ipsam possimus dolore vitae
                  quisquam totam iure, nesciunt exercitationem, quibusdam libero
                  ducimus fuga! Incidunt libero itaque quam!
                </p>
              </div>
              <img src="\Images\\Email.png" alt="img" id="email" />
            </div>
            <div className="AboutUs2">
              <h1>Phone Number ?</h1>
              <div className="paragraph">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
                  officia at commodi, accusantium, doloribus repellat quae
                  dignissimos pariatur, tenetur doloremque perferendis
                  voluptatem molestias itaque earum eveniet quaerat optio
                  nesciunt porro.
                </p>
              </div>
              <img src="\Images\\Phone.png" alt="img" id="phone" />
            </div>
            <div className="AboutUs3">
              <h1>More information..</h1>
              <div className="paragraph">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Reprehenderit praesentium aliquid delectus, voluptatem
                  quisquam, nemo cumque officia quis vitae, quas a distinctio.
                  Magnam facilis et voluptatem quo consequuntur corporis
                  officiis.
                </p>
              </div>
              <img src="\Images\\Viewmore.png" alt="img" id="more" />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
