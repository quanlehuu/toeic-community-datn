import Head from "next/head";
import Link from "next/link";
import React from "react";
import Script from "../components/Script";

const Signup = () => {
  return (
    <>
      <Head>
        <link rel="stylesheet" href="/css/login.css" />
        <link rel="stylesheet" href="/css/signup.css" />
      </Head>
      <header className="fix">
        <img className="logo" src="/static/img/logo.png" />
        <span className="toeic-community">Toeic Community</span>
      </header>
      <div className="container">
        <div className="backdrop">
          <div className="lds-ring">
            <div />
            <div />
            <div />
            <div />
          </div>
        </div>
        <div
          id="signupbox"
          style={{ marginTop: 60 }}
          className="mainbox col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2"
        >
          <div className="panel panel-info">
            <div className="panel-body">
              <div className="login-title">Sign Up</div>
              <div id="signupform" className="form-horizontal">
                <div
                  id="signupalert"
                  style={{ display: "none" }}
                  className="alert alert-danger"
                >
                  <p />
                </div>
                <div className="form-group has-feedback" id="username">
                  <label htmlFor="username" className="col-md-4">
                    Username *
                  </label>
                  <div className="col-md-8">
                    <input
                      type="text"
                      className="form-control"
                      name="username"
                      placeholder="Username"
                    />
                    <span
                      className="glyphicon glyphicon-remove form-control-feedback"
                      style={{ display: "none" }}
                    />
                    <span
                      className="glyphicon glyphicon-ok form-control-feedback"
                      style={{ display: "none" }}
                    />
                  </div>
                </div>
                <div className="form-group has-feedback" id="password">
                  <label htmlFor="password" className="col-md-4">
                    Password *
                  </label>
                  <div className="col-md-8">
                    <input
                      type="password"
                      className="form-control"
                      name="password"
                      placeholder="Password"
                    />
                    <span
                      className="glyphicon glyphicon-remove form-control-feedback"
                      style={{ display: "none" }}
                    />
                    <span
                      className="glyphicon glyphicon-ok form-control-feedback"
                      style={{ display: "none" }}
                    />
                  </div>
                </div>
                <div className="form-group has-feedback" id="repassword">
                  <label htmlFor="repassword" className="col-md-4">
                    Retype password *
                  </label>
                  <div className="col-md-8">
                    <input
                      type="password"
                      className="form-control"
                      name="repassword"
                      placeholder="Confirm Password"
                    />
                    <span
                      className="glyphicon glyphicon-remove form-control-feedback"
                      style={{ display: "none" }}
                    />
                    <span
                      className="glyphicon glyphicon-ok form-control-feedback"
                      style={{ display: "none" }}
                    />
                  </div>
                </div>
                <div className="form-group has-feedback" id="name">
                  <label htmlFor="fullname" className="col-md-4">
                    Full Name *
                  </label>
                  <div className="col-md-8">
                    <input
                      type="text"
                      className="form-control"
                      name="name"
                      placeholder="Your full name"
                    />
                    <span
                      className="glyphicon glyphicon-remove form-control-feedback"
                      style={{ display: "none" }}
                    />
                    <span
                      className="glyphicon glyphicon-ok form-control-feedback"
                      style={{ display: "none" }}
                    />
                  </div>
                </div>
                <div className="form-group has-feedback" id="birthday">
                  <label htmlFor="birthday" className="col-md-4">
                    Birthday
                  </label>
                  <div className="col-md-8">
                    <input
                      type="date"
                      className="form-control"
                      name="birthday"
                      placeholder="Birthday"
                      min="1900-01-01"
                    />
                    <span
                      className="glyphicon glyphicon-remove form-control-feedback"
                      style={{ display: "none" }}
                    />
                    <span
                      className="glyphicon glyphicon-ok form-control-feedback"
                      style={{ display: "none" }}
                    />
                  </div>
                </div>
                <div className="form-group has-feedback" id="email">
                  <label htmlFor="email" className="col-md-4">
                    Email *
                  </label>
                  <div className="col-md-8">
                    <input
                      type="text"
                      className="form-control"
                      name="email"
                      placeholder="Email Address"
                    />
                    <span
                      className="glyphicon glyphicon-remove form-control-feedback"
                      style={{ display: "none" }}
                    />
                    <span
                      className="glyphicon glyphicon-ok form-control-feedback"
                      style={{ display: "none" }}
                    />
                  </div>
                </div>
                <div className="form-group has-feedback" id="phonenumber">
                  <label htmlFor="phonenumber" className="col-md-4">
                    Phone Number
                  </label>
                  <div className="col-md-8">
                    <input
                      type="text"
                      className="form-control"
                      name="phonenumber"
                      placeholder="Phone Number"
                    />
                    <span
                      className="glyphicon glyphicon-remove form-control-feedback"
                      style={{ display: "none" }}
                    />
                    <span
                      className="glyphicon glyphicon-ok form-control-feedback"
                      style={{ display: "none" }}
                    />
                  </div>
                </div>
                <div
                  className="col-md-8 col-md-offset-4 checkbox"
                  style={{ marginBottom: 10 }}
                >
                  <label>
                    <input type="checkbox" /> Do you agree the rules below? Take
                    a look!
                  </label>
                </div>
                <div className="form-group">
                  {/* Button */}
                  <div className="col-md-2 col-md-offset-4">
                    <input
                      id="btn-signup"
                      type="submit"
                      className="btn btn-info"
                      defaultValue="Sign Up"
                    />
                  </div>
                  <div className="col-md-6">
                    <Link href="/login">
                      <a
                        style={{
                          fontSize: 13,
                        }}
                      >
                        Already had an account?Log in now!
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="panel panel-default">
          <p
            className="panel-heading rule"
            style={{ backgroundColor: "#b4b4b4" }}
          >
            <strong>
              N???i quy &amp; H?????ng d???n s??? d???ng (Rules and manual - Vietnamese)
            </strong>
          </p>
          <div className="panel-body text">
            <p> I. Quy ?????nh v??? t??i kho???n:</p>
            <div className="text1">
              <p>
                1. Username ph???i d??ng 6 k?? t??? tr??? l??n v?? kh??ng ch???a k?? t??? ?????c
                bi???t.{" "}
              </p>
              <p>
                2. Password ph???i d??ng 6 k?? t??? tr??? l??n k???t h???p v???i ch??? s??? v?? bi???u
                t?????ng.
              </p>
              <p>3. Ph???i ghi r?? ?????y ????? h??? v?? t??n.</p>
              <p>
                4. Kh??ng ???????c s??? d???ng avatar l?? c??c h??nh ???nh c?? n???i dung kh??ng
                l??nh m???nh,gh?? r???n,b???o l???c,sexy,vi ph???m thu???n phong m??? t???c c???a
                Vi???t Nam.
              </p>
            </div>
            <p> II. Quy ?????nh v??? n???i dung ???????c ????ng t???i:</p>
            <div className="text1">
              <p>
                {" "}
                1. ?????i v???i nh???ng b??i vi???t b???ng ti???ng Vi???t n??n s??? d???ng ti???ng Vi???t
                c?? d???u.
              </p>
              <p>
                {" "}
                2. ?????i v???i nh???ng b??i vi???t b???ng ti???ng n?????c ngo??i, th??nh vi??n ph???i
                t??? ch???u tr??ch nhi???m to??n b??? v??? n???i dung b??i vi???t.
              </p>
              <p>
                {" "}
                3. Kh??ng s??? d???ng ng??n t??? thi???u v??n h??a, khi??u d??m, ??e d???a, l??ng
                nh???c c??c th??nh vi??n kh??c c??ng nh?? l??m ???nh h?????ng ?????n uy t??n chung
                c???a c???ng ?????ng, g??y m???t ??o??n k???t trong di???n ????n.{" "}
              </p>
              <p>
                {" "}
                4. Kh??ng ???????c ????a c??c h??nh ???nh b???o l???c, ?????i tr???y, gh?? r???n, c??
                t??nh ch???t kh??ng l??nh m???nh, kh??ng ph?? h???p v???i truy???n th???ng v??n
                h??a Vi???t Nam.
              </p>
            </div>
            <p> III. Quy ?????nh v??? h??nh vi ???ng x??? c???a c??c th??nh vi??n</p>
            <div className="text1">
              <p>
                {" "}
                1. Kh??ng ????? x?????ng v?? tham gia b??n lu???n c??c v???n ????? li??n quan ?????n
                nh???ng n???i dung ???????c ????? c???p trong m???c (II.4).
              </p>
              <p>
                {" "}
                2. C?? th??i ????? ????ng m???c, t??n tr???ng l???n nhau trong qu?? tr??nh trao
                ?????i v?? tranh lu???n.
              </p>
            </div>
            <p> IV. H?????ng d???n s??? d???ng:</p>
            <div className="text1">
              <p>
                {" "}
                1. ????y l?? trang web ??n luy???n TOEIC tr???c tuy???n,????? tham gia c??c
                b???n c???n ph???i c?? m???t t??i kho???n.C??c b???n ????ng k?? t??i kho???n theo quy
                ?????nh ???? ???????c n??u r?? ??? m???c (I).{" "}
              </p>
              <p>
                {" "}
                2. Sau khi ????ng k?? c??c b???n c???n ph???i ????ng nh???p v??o web th??ng qua
                trang Log In.{" "}
              </p>
              <p>
                {" "}
                3. Sau khi ????ng nh???p s??? chuy???n qua trang Newsfeed,t???i ????y s???
                hi???n t???t c??? b??i ????ng c???a m???i ng?????i.T???i ????y c??c b???n c?? th??? tham
                gia tranh lu???n v??? c??c c??u h???i trong b??i ????ng v?? c?? th??? l??u l???i
                n???u th???y b??? ??ch.C??c b???n c??ng c?? th??? theo d??i b???t k?? m???t ai m??
                c??c b???n mu???n.{" "}
              </p>
              <p>
                {" "}
                4. ????? ????ng b??i c??c b???n v??o m???c Post ??? thanh Menu b??n tr??i m??n
                h??nh,sau ???? ??i???n ?????y ????? th??ng tin li??n quan t???i b??i ????ng theo
                m???u c?? s???n v?? ???n ????ng b??i. Nh??? tu??n theo quy ?????nh ???? n??u ??? m???c
                (II) .
              </p>
              <p>
                {" "}
                5. ????? thay ?????i c??c th??ng tin c?? nh??n nh??: T??n ?????y ?????, h??nh ?????i
                di???n, ... c??c b???n c?? th??? v??o trang c?? nh??n ????? ?????i.{" "}
              </p>
              <p>
                {" "}
                6. N???u c??c b???n mu???n ?????i m???t kh???u c?? th??? v??o m???c Change Password
                ??? thanh Menu b??n tr??i m??n h??nh, sau ???? ??i???n theo m???u c?? s???n v??
                ???n ho??n t???t.{" "}
              </p>
              <p>
                {" "}
                7. ????? xem l???i c??c b??i ???? l??u c??c b???n v??o m???c Saved ??? thanh Menu
                b??n tr??i m??n h??nh.{" "}
              </p>
              <p>
                {" "}
                8. ????? xem trang c???a nh???ng ng?????i m??nh ???? theo d??i c??c b???n v??o m???c
                Following{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
      <Script src="/js/Signup.js"></Script>
    </>
  );
};

export default Signup;
