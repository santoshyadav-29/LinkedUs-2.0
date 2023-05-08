import React from "react";
import "../CSS files/AboutUs.css";
import Navigation_Bar from "../Components/Navigation_Bar";
import Footer from "../Components/Footer";

export default function AboutUs() {
  return (
    <>
      <div className="layout">
        <Navigation_Bar />
        <div className="AboutUsOverall">
          <div className="Divider">.</div>

          <div className="Mid">
            <p>About Us</p>
            <img src="\Images\\AboutUs.png" alt="img" id="imagee" />
          </div>
          <div className="Divider">.</div>
          <div className="Bottom">
            <div className="AboutUs1">
              <h1>What Do We Do ?</h1>
              <div className="paragraph">
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Dolores fugit quos sit amet ipsam possimus dolore vitae
                  quisquam totam iure, nesciunt exercitationem, quibusdam libero
                  ducimus fuga! Incidunt libero itaque quam!
                </p>
              </div>
              <button id="ViewMore"></button>
            </div>
            <div className="AboutUs2">
              <h1>How Can We Help ?</h1>
              <div className="paragraph">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
                  officia at commodi, accusantium, doloribus repellat quae
                  dignissimos pariatur, tenetur doloremque perferendis
                  voluptatem molestias itaque earum eveniet quaerat optio
                  nesciunt porro.
                </p>
              </div>
              <button id="ViewMore"></button>
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
              <button id="ViewMore"></button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
