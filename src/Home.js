import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./Home.css";
import logoimage from "./logoimage.png";
import { FcShipped } from "react-icons/fc";
import banner1 from "./image/banner1.png";
import banner2 from "./image/banner2.png";
import banner3 from "./image/banner3.png";
import banner4 from "./image/banner4.png";
import image2 from "./image/image2.png";
import image3 from "./image/image3.png";
import delta from "./image/delta.png";
import nokia from "./image/nokia.png";
import one from "./image/one.png";
import watch from "./image/watch.png";
import nokiaair from "./image/nokiaair.png";
import islamic from "./islamic.mp4";
import feature_3 from "./image/feature_3.png";
import { SocialIcon } from "react-social-icons";
const Home = () => {
  const data = [
    {
      pic: `${banner1}`,
      count: "Product one",
      offer: "Up to 25% of",
      detail: "Awesome",
    },
    {
      pic: `${banner2}`,
      count: "Product one",
      offer: "Up to 25% of",
      detail: "Awesome",
    },
    {
      pic: `${banner3}`,
      count: "Product one",
      offer: "Up to 25% of",
      detail: "Awesome",
    },
    {
      pic: `${banner4}`,
      count: "Product one",
      offer: "Up to 25% of",
      detail: "Awesome",
    },
    {
      pic: `${one}`,
      count: "Product one",
      offer: "Up to 25% of",
      detail: "Awesome",
    },
    {
      pic: `${nokia}`,
      count: "Product one",
      offer: "Up to 25% of",
      detail: "Awesome",
    },
    {
      pic: `${nokiaair}`,
      count: "Product one",
      offer: "Up to 25% of",
      detail: "Awesome",
    },
    {
      pic: `${one}`,
      count: "Product one",
      offer: "Up to 25% of",
      detail: "Awesome",
    },
    {
      pic: `${image2}`,
      count: "Product one",
      offer: "Up to 25% of",
      detail: "Awesome",
    },
    {
      pic: `${banner3}`,
      count: "Product one",
      offer: "Up to 25% of",
      detail: "Awesome",
    },
    {
      pic: `${watch}`,
      count: "Product one",
      offer: "Up to 25% of",
      detail: "Awesome",
    },
    {
      pic: `${banner4}`,
      count: "Product one",
      offer: "Up to 25% of",
      detail: "Awesome",
    },
  ];

  console.log(data);
  return (
    <div className="wrapper">
      <div className="header">
        <div className="d-flex justify-content-center">
          <ul className="align-items-center justify-content-around header-box header-box1 gap-5 text-light list-unstyled">
            <li className="text-decoration-none">Home</li>
            <li className="text-decoration-none">Adition</li>
            <li className="text-decoration-none">Kids</li>
          </ul>
          <div>
            <img className="logo" src={logoimage} alt="" />
          </div>
          <ul className="align-items-center justify-content-around header-box header-box2 gap-5 text-light list-unstyled">
            <li>News</li>
            <li>Achievments</li>
            <li>Education</li>
          </ul>
        </div>
      </div>

      <div className="section">
        <img src={logoimage} alt="" style={{ width: "350px" }} />
      </div>
      <div className="section2">
        <div className="mt-5 d-flex justify-content-center">
          <h2>How it Works!</h2>
        </div>
        <p className="d-flex justify-content-center p-3">It's easy 1,2,3</p>
        <div className="d-flex justify-content-center mt-5 sec2">
          <div
            className="card mb-5"
            style={{ width: "15rem", textAlign: "center" }}
          >
            <div className="card-body">
              <h1 className="card-title">
                <FcShipped />
              </h1>
              <h5 className="card-title pt-3">1.Back your day</h5>
              <p className="card-text pt-2">
                With supporting text below as a natural lead-in to additional
                content.
              </p>
            </div>
          </div>
          <div
            className="card  mb-5"
            style={{ width: "15rem", textAlign: "center" }}
          >
            <div className="card-body">
              <h1 className="card-title">
                <FcShipped />
              </h1>
              <h5 className="card-title pt-3">2.Back your day</h5>
              <p className="card-text pt-2">
                With supporting text below as a natural lead-in to additional
                content.
              </p>
            </div>
          </div>
          <div
            className="card  mb-5"
            style={{ width: "15rem", textAlign: "center" }}
          >
            <div className="card-body">
              <h1 className="card-title">
                <FcShipped />
              </h1>
              <h5 className="card-title pt-3">3.Back your day</h5>
              <p className="card-text pt-2">
                With supporting text below as a natural lead-in to additional
                content.
              </p>
            </div>
          </div>
          <div
            className="card  mb-5"
            style={{ width: "15rem", textAlign: "center" }}
          >
            <div className="card-body">
              <h1 className="card-title">
                <FcShipped />
              </h1>
              <h5 className="card-title pt-3">4.Back your day</h5>
              <p className="card-text pt-2">
                With supporting text below as a natural lead-in to additional
                content.
              </p>
            </div>
          </div>
          <div
            className="card  mb-5"
            style={{ width: "15rem", textAlign: "center" }}
          >
            <div className="card-body">
              <h1 className="card-title">
                <FcShipped />
              </h1>
              <h5 className="card-title pt-3">5.Back your day</h5>
              <p className="card-text pt-2">
                With supporting text below as a natural lead-in to additional
                content.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* section 3 */}
      <div className="section3 ">
        <div className="d-flex justify-content-center">
          <video
            width="100%"
            height="450"
            controls
            muted="0"
            autoPlay="1"
            src={islamic}
            title="YouTube video player"
          ></video>
        </div>
      </div>
      {/* section4 */}
      <main className="section4 ">
        <div className="text">
          <h1>Rotating Product List</h1>
        </div>

        <header>
          <h1>Today's Deals</h1>
          <p>
            {/* <span>&#139;</span>
            <span>&#155;</span> */}
          </p>
        </header>

        <section>
          {data.map((value) => {
            return (
              <>
                <div className="product">
                  <picture>
                    <img src={value.pic} alt="" />
                  </picture>
                  <div className="detail">
                    <p>
                      <b>{value.offer}</b>
                      <samp>{value.count}</samp>
                      <br />
                      <small>{value.detail}</small>
                    </p>
                  </div>
                </div>
              </>
            );
          })}
        </section>
      </main>

      {/* section5 */}

      <div className="section5">
        <div className="d-flex justify-content-center">
          <div className="align-items-center justify-content-center box">
            <iframe
              width="100%"
              height="100%"
              style={{ borderRadius: "10px" }}
              src="https://www.youtube.com/embed/R8avlatBTSI"
              title="YouTube video player"

              // allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>
          </div>
          <div className="align-items-center box box2">
            <p className="m-3">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Laudantium eius, officia aliquid quos doloribus tenetur ipsum sed
              qui deleniti odit tempora eum modi dolores neque sapiente hic
              assumenda minima explicabo. Rem sapiente praesentium dolorum
              tempore? Quidem, unde quia, commodi quae beatae et hic eos dolore
              quis excepturi mollitia velit facilis. Molestias et dolorem esse
              libero, delectus aspernatur cum culpa in!
            </p>
          </div>
        </div>
      </div>

      <div className="section6">
        <div className="d-flex justify-content-center mt-5">
          <div class="text-center bg-light p-1 icon-box mt-3">
            <div class="m-1">
              <div class="d-flex flex-column end gap-1">
                <SocialIcon url="https://instagram.com/in/jaketrent" />
                <SocialIcon url="https://whatsapp.com/in/jaketrent" />
                <SocialIcon url="https://linkedin.com/in/jaketrent" />
                <SocialIcon url="https://github.com/in/jaketrent" />
                <SocialIcon url="https://stackoverflow.com/in/jaketrent" />
              </div>
            </div>
          </div>
          <div className="footer-box footer-box1 p-1">
            <h2>About Us</h2>
            <p className="mt-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
              assumenda ex nihil temporibus illum odio, autem ab similique. At
              quae quod id culpa suscipit ipsum laborum dignissimos, cupiditate,
              veritatis quibusdam ullam sunt, dolorum veniam! Quae numquam
              accusamus quidem corrupti labore?
            </p>
          </div>
          <div className="footer-box footer-box2 p-1">
            <h2>Contact Details</h2>
            <address className="mt-3">
              <h4>Address</h4>
              <p className="mt-4">
                Grand Ave, Oakland California United States 94610
              </p>
            </address>
            <hr className="mt-3" />
            <div className="mt-3 mobile">
              <h4>Mobile</h4>
              <p className="mt-3">
                <a href="tel:0123456789">0123456789 ,&nbsp;9876543210</a>
              </p>
            </div>
          </div>
          <div className="footer-box footer-box3 p-1">
            <h2>Gallery</h2>
            <video
              className="mt-3"
              width="100%"
              height="60%"
              controls
              autoPlay
              // poster="https://ruttl.com/assets/img/index-hero.jpg"
            >
              <source
                src="https://ruttl.com/assets/video/index-hero.webm"
                type="video/mp4"
              />
            </video>
          </div>
          <div className="footer-box footer-box4 p-1">
            <h2>Subscribe Mailing List</h2>
            <form action="" className="mt-4 form">
              <div className="mb-3">
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Name"
                  className="form-control"
                  required
                />
              </div>
              <div className="mb-3">
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                  className="form-control"
                  required
                />
              </div>
              <div>
                <input
                  type="tel"
                  name="tel"
                  id="tel"
                  placeholder="Mobile"
                  className="form-control"
                  required
                />
              </div>
              <div className="d-flex justify-content-end">
                <button type="submit" className="btn mt-3">
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
        <div
          className="text-center p-4 footer"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
        >
          © 2023 Copyright:
          <a className="text-reset fw-bold text-decoration-none" href="#a">
            react.com
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
