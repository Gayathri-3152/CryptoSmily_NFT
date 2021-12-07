import React, { Component } from "react";
import CryptoBoyNFTImage from "../CryptoBoyNFTImage/CryptoBoyNFTImage";

class FormAndPreview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userSelectedColors: [
        {
          cardBorderColor: "",
          cardBackgroundColor: "",
          leftEyeTopColor: "",
          leftEyeRightColor: "",
          leftEyeBottumColor: "",
          leftEyeLeftColor: "",
          leftEyeBackgroundColor: "",
          rightEyeTopColor: "",
          rightEyeRightColor: "",
          rightEyeLeftColor: "",
          rightEyeBottumColor: "",
          mouthColor: "",
          toungueColor: "",
          rightEyeBackgroundColor: "",
        },
      ],
      cryptoBoyName: "",
      cryptoBoyPrice: "",
    };
  }

  componentDidMount = async () => {
    await this.props.setMintBtnTimer();
  };

  callMintMyNFTFromApp = (e) => {
    e.preventDefault();
    this.props.mintMyNFT(
      this.state.userSelectedColors[0],
      this.state.cryptoBoyName,
      this.state.cryptoBoyPrice
    );
  };

  render() {
    return (
      <div>
        <div className="card mt-1">
          <div className="bg card-body align-items-center d-flex justify-content-center">
            <h5>Color Your Crypto Smily As You Want It To be!</h5>
          </div>
        </div>
        <form onSubmit={this.callMintMyNFTFromApp} className="pt-4 mt-1">
          <div className="row">
            <div className="col-md-6 d-flex justify-content-center align-items-center">
              <CryptoBoyNFTImage colors={this.state.userSelectedColors[0]} />
            </div>            
            <div className="col-md-3">
              <div className="form-group">
                <label htmlFor="cardBorderColor">Face Border Color</label>
                <input
                  required
                  type="color"
                  name="cardBorderColor"
                  id="cardBorderColor"
                  value={this.state.userSelectedColors[0].cardBorderColor}
                  className="color-radius"
                  onChange={(e) =>
                    this.setState({
                      userSelectedColors: [
                        {
                          ...this.state.userSelectedColors[0],
                          cardBorderColor: e.target.value,
                        },
                      ],
                    })
                  }
                />
              </div>
              <div className="form-group">
                <label htmlFor="cardBackgroundColor">
                  Face Background Color
                </label>
                <input
                  required
                  type="color"
                  name="cardBackgroundColor"
                  id="cardBackgroundColor"
                  value={this.state.userSelectedColors[0].cardBackgroundColor}
                  className="color-radius"
                  onChange={(e) =>
                    this.setState({
                      userSelectedColors: [
                        {
                          ...this.state.userSelectedColors[0],
                          cardBackgroundColor: e.target.value,
                        },
                      ],
                    })
                  }
                />
              </div>
              <div className="form-group">
                <label htmlFor="leftEyeTopColor">Left Eye Top Color</label>
                <input
                  required
                  type="color"
                  name="leftEyeTopColor"
                  id="leftEyeTopColor"
                  value={this.state.userSelectedColors[0].leftEyeTopColor}
                  className="color-radius"
                  onChange={(e) =>
                    this.setState({
                      userSelectedColors: [
                        {
                          ...this.state.userSelectedColors[0],
                          leftEyeTopColor: e.target.value,
                        },
                      ],
                    })
                  }
                />
              </div>
              <div className="form-group">
                <label htmlFor="leftEyeRightColor">
                Left Eye Right Color
                </label>
                <input
                  required
                  type="color"
                  name="leftEyeRightColor"
                  id="leftEyeRightColor"
                  value={this.state.userSelectedColors[0].leftEyeRightColor}
                  className="color-radius"
                  onChange={(e) =>
                    this.setState({
                      userSelectedColors: [
                        {
                          ...this.state.userSelectedColors[0],
                          leftEyeRightColor: e.target.value,
                        },
                      ],
                    })
                  }
                />
              </div>
            </div>
            
            <div className="col-md-3">
              <div className="form-group">
                <label htmlFor="leftEyeBottumColor">
                Left Eye Bottum Color
                </label>
                <input
                  required
                  type="color"
                  name="leftEyeBottumColor"
                  id="leftEyeBottumColor"
                  value={this.state.userSelectedColors[0].leftEyeBottumColor}
                  className="color-radius"
                  onChange={(e) =>
                    this.setState({
                      userSelectedColors: [
                        {
                          ...this.state.userSelectedColors[0],
                          leftEyeBottumColor: e.target.value,
                        },
                      ],
                    })
                  }
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="leftEyeLeftColor">
                Left Eye Left Color
                </label>
                <input
                  required
                  type="color"
                  name="leftEyeLeftColor"
                  id="leftEyeLeftColor"
                  value={this.state.userSelectedColors[0].leftEyeLeftColor}
                  className="color-radius"
                  onChange={(e) =>
                    this.setState({
                      userSelectedColors: [
                        {
                          ...this.state.userSelectedColors[0],
                          leftEyeLeftColor: e.target.value,
                        },
                      ],
                    })
                  }
                />
              </div>
              <div className="form-group">
                <label htmlFor="leftEyeBackgroundColor">
                  Left Eye Background Color
                </label>
                <input
                  required
                  type="color"
                  name="leftEyeBackgroundColor"
                  id="leftEyeBackgroundColor"
                  value={
                    this.state.userSelectedColors[0].leftEyeBackgroundColor
                  }
                  className="color-radius"
                  onChange={(e) =>
                    this.setState({
                      userSelectedColors: [
                        {
                          ...this.state.userSelectedColors[0],
                          leftEyeBackgroundColor: e.target.value,
                        },
                      ],
                    })
                  }
                />
              </div>
              <div className="form-group">
                <label htmlFor="rightEyeBackgroundColor">
                  Right Eye Background Color
                </label>
                <input
                  required
                  type="color"
                  name="rightEyeBackgroundColor"
                  id="rightEyeBackgroundColor"
                  value={
                    this.state.userSelectedColors[0].rightEyeBackgroundColor
                  }
                  className="color-radius"
                  onChange={(e) =>
                    this.setState({
                      userSelectedColors: [
                        {
                          ...this.state.userSelectedColors[0],
                          rightEyeBackgroundColor: e.target.value,
                        },
                      ],
                    })
                  }
                />
              </div>
            </div>
            
          </div>

          <div className="row">
          <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="cryptoBoyName">Name</label>
                <input
                  required
                  type="text"
                  value={this.state.cryptoBoyName}
                  className="form-control"
                  placeholder="Enter Your Crypto Smily's Name"
                  onChange={(e) =>
                    this.setState({ cryptoBoyName: e.target.value })
                  }
                />
              </div>
              <div>
                <label htmlFor="price">Price</label>
                <input
                  required
                  type="number"
                  name="price"
                  id="cryptoBoyPrice"
                  value={this.state.cryptoBoyPrice}
                  className="form-control"
                  placeholder="Enter Price In Ξ"
                  onChange={(e) =>
                    this.setState({ cryptoBoyPrice: e.target.value })
                  }
                />
              </div>
              <button
                id="mintBtn"
                style={{ fontSize: "0.9rem", letterSpacing: "0.14rem" }}
                type="submit"
                className=" btn-color mt-4 btn-block"
              >
                Mint My Crypto Smily
              </button>
              <div className="mt-4">
                {this.props.nameIsUsed ? (
                  <div className="alert alert-danger alert-dissmissible">
                    <button
                      type="button"
                      className="close"
                      data-dismiss="alert"
                    >
                      <span>&times;</span>
                    </button>
                    <strong>This name is taken!</strong>
                  </div>
                ) : this.props.colorIsUsed ? (
                  <>
                    <div className="alert alert-danger alert-dissmissible">
                      <button
                        type="button"
                        className="close"
                        data-dismiss="alert"
                      >
                        <span>&times;</span>
                      </button>
                      {this.props.colorsUsed.length > 1 ? (
                        <strong>These colors are taken!</strong>
                      ) : (
                        <strong>This color is taken!</strong>
                      )}
                    </div>
                    <div
                      style={{
                        display: "flex",
                        flexWrap: "wrap",
                        marginTop: "1rem",
                        marginBottom: "3rem",
                      }}
                    >
                      {this.props.colorsUsed.map((color, index) => (
                        <div
                          key={index}
                          style={{
                            background: `${color}`,
                            width: "50%",
                            height: "50px",
                          }}
                        ></div>
                      ))}
                    </div>
                  </>
                ) : null}
              </div>
            </div>
            <div className="col-md-3">
              <div className="form-group">
                <label htmlFor="rightEyeTopColor">
                Right Eye Top Color
                </label>
                <input
                  required
                  type="color"
                  name="rightEyeTopColor"
                  id="rightEyeTopColor"
                  value={
                    this.state.userSelectedColors[0].rightEyeTopColor
                  }
                  className="color-radius"
                  onChange={(e) =>
                    this.setState({
                      userSelectedColors: [
                        {
                          ...this.state.userSelectedColors[0],
                          rightEyeTopColor: e.target.value,
                        },
                      ],
                    })
                  }
                />
              </div>
              <div className="form-group">
                <label htmlFor="rightEyeRightColor">
                Right Eye Right Color
                </label>
                <input
                  required
                  type="color"
                  name="rightEyeRightColor"
                  id="rightEyeRightColor"
                  value={
                    this.state.userSelectedColors[0].rightEyeRightColor
                  }
                  className="color-radius"
                  onChange={(e) =>
                    this.setState({
                      userSelectedColors: [
                        {
                          ...this.state.userSelectedColors[0],
                          rightEyeRightColor: e.target.value,
                        },
                      ],
                    })
                  }
                />
              </div>
              <div className="form-group">
                <label htmlFor="rightEyeLeftColor">Right Eye Left Color</label>
                <input
                  required
                  type="color"
                  name="rightEyeLeftColor"
                  id="rightEyeLeftColor"
                  value={this.state.userSelectedColors[0].rightEyeLeftColor}
                  className="color-radius"
                  onChange={(e) =>
                    this.setState({
                      userSelectedColors: [
                        {
                          ...this.state.userSelectedColors[0],
                          rightEyeLeftColor: e.target.value,
                        },
                      ],
                    })
                  }
                />
              </div>
              </div>
            <div className="col-md-3">
            <div className="form-group">
                <label htmlFor="rightEyeBottumColor">
                Right Eye Bottum Color
                </label>
                <input
                  required
                  type="color"
                  name="rightEyeBottumColor"
                  id="rightEyeBottumColor"
                  value={this.state.userSelectedColors[0].rightEyeBottumColor}
                  className="color-radius"
                  onChange={(e) =>
                    this.setState({
                      userSelectedColors: [
                        {
                          ...this.state.userSelectedColors[0],
                          rightEyeBottumColor: e.target.value,
                        },
                      ],
                    })
                  }
                />
              </div>
            
              <div className="form-group">
                <label htmlFor="mouthColor">Mouth Color</label>
                <input
                  required
                  type="color"
                  name="mouthColor"
                  id="mouthColor"
                  value={this.state.userSelectedColors[0].mouthColor}
                  className="color-radius"
                  onChange={(e) =>
                    this.setState({
                      userSelectedColors: [
                        {
                          ...this.state.userSelectedColors[0],
                          mouthColor: e.target.value,
                        },
                      ],
                    })
                  }
                />
              </div>
              <div className="form-group">
                <label htmlFor="toungueColor" >
                Toungue Color
                </label>
                <input
                  required
                  type="color"
                  name="toungueColor"
                  id="toungueColor"
                  value={this.state.userSelectedColors[0].toungueColor}
                  className="color-radius"
                  onChange={(e) =>
                    this.setState({
                      userSelectedColors: [
                        {
                          ...this.state.userSelectedColors[0],
                          toungueColor: e.target.value,
                        },
                      ],
                    })
                  }
                />
              </div>
              
            </div>
            
          </div>
        </form>
      </div>
    );
  }
}

export default FormAndPreview;
