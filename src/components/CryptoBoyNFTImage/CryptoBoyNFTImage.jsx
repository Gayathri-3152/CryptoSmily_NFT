import React from "react";

const CryptoBoyNFTImage = ({ colors }) => {
  const {
    cardBorderColor,
    cardBackgroundColor,
    leftEyeTopColor,
    leftEyeRightColor,
    leftEyeBottumColor,
    leftEyeLeftColor,
    leftEyeBackgroundColor,
    rightEyeTopColor,
    rightEyeRightColor,
    rightEyeLeftColor,
    rightEyeBottumColor,
    mouthColor,
    toungueColor,
    rightEyeBackgroundColor,
  } = colors;

  const cryptoboy_card = {
    width: "280px",
    height: "300px",
    borderRadius: "50%",
    margin: "auto",
    backgroundColor: `${cardBackgroundColor}`,
    border: `10px solid ${cardBorderColor}`,
  };

  const container1 = {
    zIndex: "1",
    width: "150px",
    height: "150px",
    borderRadius: "50%",
    margin: "3rem  0",
    position: "relative",
  };
  const container2 = {
    zIndex: "2",
    width: "100px",
    height: "100px",
    borderRadius: "50%",
    float : "right",
    margin: "-12.5rem 2rem",
    position: "relative",
  };
  const container3 = {
    zIndex: "1",
    width: "100px",
    height: "100px",
    borderRadius: "50%",
    margin: "-7rem auto 0",
    position: "relative",
  };
 

  const leftEyeTop = {
    position: "absolute",
    top: "12px",
    left: "5px",
    right: "0",
    height: "60px",
    width: "60px",
    margin: "3px auto",
    borderRadius: "100%",
    backgroundColor: `${leftEyeBackgroundColor}`,
    borderTop: `8px solid ${leftEyeTopColor}`,
  };
  const leftEyeRight = {
    position: "absolute",
    top: "12px",
    left: "22px",
    right: "0",
    height: "60px",
    width: "60px",
    margin: "3px auto",
    borderRadius: "100%",
    borderRight: `8px solid ${leftEyeRightColor}`,
  };
  const leftEyeLeft = {
    position: "absolute",
    top: "22px",
    left: "0",
    right: "0",
    height: "60px",
    width: "60px",
    margin: "3px auto",
    borderRadius: "100%",
    borderLeft: `8px solid ${leftEyeLeftColor}`,
  };
  const leftEyeBottum = {
    position: "absolute",
    top: "22px",
    left: "17px",
    right: "0",
    height: "60px",
    width: "60px",
    margin: "3px auto",
    borderRadius: "100%",
    backgroundColor: `${leftEyeBackgroundColor}`,
    borderBottom: `8px solid ${leftEyeBottumColor}`,
  };
  const rightEyeTop = {
    position: "absolute",
    top: "12px",
    left: "16px",
    right: "0",
    height: "60px",
    width: "60px",
    margin: "3px auto",
    borderRadius: "100%",
    backgroundColor: `${rightEyeBackgroundColor}`,
    borderTop: `8px solid ${rightEyeTopColor}`,
  };
  const rightEyeRight = {
    position: "absolute",
    top: "22px",
    left: "21px",
    right: "0",
    height: "60px",
    width: "60px",
    margin: "3px auto",
    borderRadius: "100%",
    borderRight: `8px solid ${rightEyeRightColor}`,
  };
  const rightEyeLeft = {
    position: "absolute",
    top: "12px",
    left: "0",
    right: "0",
    height: "60px",
    width: "60px",
    margin: "3px auto",
    borderRadius: "100%",
    borderLeft: `8px solid ${rightEyeLeftColor}`,
  };
  const rightEyeBottum = {
    position: "absolute",
    top: "22px",
    left: "5px",
    right: "0",
    height: "60px",
    width: "60px",
    margin: "3px auto",
    borderRadius: "100%",
    backgroundColor: `${rightEyeBackgroundColor}`,
    borderBottom: `8px solid ${rightEyeBottumColor}`,
  };
  
  const mouth = {
    position: "absolute",
    top: "12px",
    left: "0",
    right: "0",
    height: "80px",
    width: "110px",
    margin: "3px auto",
    borderRadius: "100%",
    borderBottom: `35px solid ${mouthColor}`,
  };
  const toungue = {
    position: "absolute",
    top: "17px",
    left: "0",
    right: "0",
    height: "40px",
    width: "50px",
    margin: "39px auto",
    borderRadius: "100%",
    borderTop: `20px solid ${toungueColor}`,
  };
  
  
  return (
   
    <div style={cryptoboy_card}>
      <div style={container1}>
      <div style={leftEyeBottum}></div> 
      <div style={leftEyeTop}></div>
      <div style={leftEyeRight}></div>
      <div style={leftEyeLeft}></div>
      
      </div>

      <div style={container2}>
     
      <div style={rightEyeBottum}></div>
     <div style={rightEyeTop}></div>
     <div style={rightEyeRight}></div>
     <div style={rightEyeLeft}></div>
       
     </div>
     <div style={container3}>
     <div style={mouth}>

     <div style={toungue}></div>
     </div>
     
     </div>
    </div>
  );
};

export default CryptoBoyNFTImage;
