import React from "react";
import "./assets/payment";
import Menu from "./pages/home/Menu";
import Footer from "./pages/home/Footer";
import Download from "./pages/layout/Download";
import { Link } from "react-router-dom";

function Unsuccessful(props) {

  const menuData = {
    logo: "https://anima-uploads.s3.amazonaws.com/projects/61f1387fa60ef2351d70a102/releases/61f39622916a8ac11b450146/img/logo-14@2x.png",
    googleplayA1B4Ed6211C913: "https://anima-uploads.s3.amazonaws.com/projects/61f1387fa60ef2351d70a102/releases/61f39622916a8ac11b450146/img/googleplay-a1b4ed6211c9--1--3@2x.png",
    appstore6F955D329Ad713: "https://anima-uploads.s3.amazonaws.com/projects/61f1387fa60ef2351d70a102/releases/61f39622916a8ac11b450146/img/appstore-6f955d329ad7--1--3@2x.png",
};

const property1ImageFailedData = {
    image: "https://anima-uploads.s3.amazonaws.com/projects/61f1387fa60ef2351d70a102/releases/61f39622916a8ac11b450146/img/rectangle-444-6@2x.png",
    image794: "https://anima-uploads.s3.amazonaws.com/projects/61f1387fa60ef2351d70a102/releases/61f39622916a8ac11b450146/img/image-794-2@2x.png",
};

const headerData = {
    transactionSuccessful: "transaction unsuccessful",
    theCueHasBeenAdd: "any amount deducted will be refunded in 7-10 working days. how would you like to proceed?",
};

const logIn2Data = {
    src: "https://anima-uploads.s3.amazonaws.com/projects/61f1387fa60ef2351d70a102/releases/61f39622916a8ac11b450146/img/log-in--2--1@1x.png",
};

const downloadComponentData = {
    logIn2Props: logIn2Data,
};

const group38711Data = {
    fb: "https://anima-uploads.s3.amazonaws.com/projects/61f1387fa60ef2351d70a102/releases/61f139dc31e2102e5db0c9d5/img/fb@2x.png",
    twitter: "https://anima-uploads.s3.amazonaws.com/projects/61f1387fa60ef2351d70a102/releases/61f39622916a8ac11b450146/img/twitter@2x.png",
    insta: "https://anima-uploads.s3.amazonaws.com/projects/61f1387fa60ef2351d70a102/releases/61f2949a21d6481255052506/img/insta@2x.png",
};

const footerData = {
    logo: "https://anima-uploads.s3.amazonaws.com/projects/61f1387fa60ef2351d70a102/releases/61f39622916a8ac11b450146/img/logo@2x.png",
    group38711Props: group38711Data,
};

const w1Data = {
    overlapGroup4: "https://anima-uploads.s3.amazonaws.com/projects/61f1387fa60ef2351d70a102/releases/61f39622916a8ac11b450146/img/bg-card@1x.png",
    overlapGroup1: "https://anima-uploads.s3.amazonaws.com/projects/61f1387fa60ef2351d70a102/releases/61f39622916a8ac11b450146/img/bg-@1x.png",
    overlapGroup2: "https://anima-uploads.s3.amazonaws.com/projects/61f1387fa60ef2351d70a102/releases/61f39622916a8ac11b450146/img/receipt-bg-3@1x.png",
    title: "Ka se Kitab 18- Balbeer Punj in conversation with Himanshu Bajpai",
    address: "08 Aug 21   l   09:30 PM",
    divider: "https://anima-uploads.s3.amazonaws.com/projects/61f1387fa60ef2351d70a102/releases/61f139dc31e2102e5db0c9d5/img/line-34@1x.png",
    amount: "Amount",
    total: "Total",
    surname: "Price - ₹450",
    text9: "₹450",
    retryPayment: "Retry Payment",
    menuProps: menuData,
    property1ImageFailedProps: property1ImageFailedData,
};

  return (
    <div className="container-center-horizontal">
      <form className="w1-a5-b-unsuccessful-error screen" name="form1" action="form1" method="post">

     <Menu/>
     
        <div className="overlap-group4" style={{ backgroundImage: `url(${w1Data.overlapGroup4})` }}>
          <div className="overlap-group1">

            <div className="image" style={{ backgroundImage: `url(${w1Data.property1ImageFailedProps.image})` }}>
              <img className="image-794" src={w1Data.property1ImageFailedProps.image794} />
            </div>

            <div className="header">
              <div className="transaction-un-successful valign-text-middle poppins-normal-eerie-black-24px">
                {headerData.transactionSuccessful}
              </div>
              <div className="any-amount-deducted poppins-normal-granite-gray-18px">{headerData.theCueHasBeenAdd}</div>
            </div>

            <div className="overlap-group2" style={{ backgroundImage: `url(${w1Data.overlapGroup2})` }}>
              <div className="card-information">
                <div className="title poppins-normal-eerie-black-24px">{w1Data.title}</div>
                <div className="time-tag">
                  <p className="address valign-text-middle poppins-normal-white-16px">{w1Data.address}</p>
                </div>
              </div>
              <img className="divider" src={w1Data.divider} />
              <div className="price-information">
                <div className="heading poppins-normal-eerie-black-18px">
                  <div className="amount valign-text-middle">{w1Data.amount}</div>
                  <div className="total valign-text-middle">{w1Data.total}</div>
                </div>
                <div className="price poppins-normal-eerie-black-22px">
                  <div className="surname valign-text-middle">{w1Data.surname}</div>
                  <div className="text-1 valign-text-middle">{w1Data.text9}</div>
                </div>
              </div>
            </div>
            <Link to="/success" className="">
              <div className="retry-payment">
                <div className="overlap-group-btn">
                  <div className="retry-payment-1 valign-text-middle poppins-normal-peach-cream-16px">
                    {w1Data.retryPayment}
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
        
      <Download />

    <Footer />
      </form>
    </div>
  );
}

export default Unsuccessful;
