import React, { Component } from "react";


class CryptoBoyNFTDetails extends Component {
  constructor(props) {
    super(props);
    
    
    this.state = {
      newCryptoBoyPrice: "",
      newPrice:"",
      
    };
  }

  
     
  

  callChangeTokenPriceFromApp = (tokenId, newPrice) => {
    this.props.changeTokenPrice(tokenId, newPrice);
  };

  callChangeBidTokenPriceFromApp = (tokenId, newPrice) => {
    this.props.changeBidTokenPrice(tokenId, newPrice);
    
  };
  

  render() {
    return (
      <div key={this.props.cryptoboy.tokenId.toNumber()} className="mt-4">
        
        <p>
          <span className="font-weight-bold">Token Id</span> :{" "}
          {this.props.cryptoboy.tokenId.toNumber()}
        </p>
        <p>
          <span className="font-weight-bold">Name</span> :{" "}
          {this.props.cryptoboy.tokenName}
        </p>
      
        <p>
          <span className="font-weight-bold">Minted By</span> :{" "}
          {this.props.cryptoboy.mintedBy.substr(0, 5) +
            "..." +
            this.props.cryptoboy.mintedBy.slice(
              this.props.cryptoboy.mintedBy.length - 5
            )}
        </p>
        <p>
          <span className="font-weight-bold">Owned By</span> :{" "}
          {this.props.cryptoboy.currentOwner.substr(0, 5) +
            "..." +
            this.props.cryptoboy.currentOwner.slice(
              this.props.cryptoboy.currentOwner.length - 5
            )}
        </p>
        <p>
          <span className="font-weight-bold">Previous Owner</span> :{" "}
          {this.props.cryptoboy.previousOwner.substr(0, 5) +
            "..." +
            this.props.cryptoboy.previousOwner.slice(
              this.props.cryptoboy.previousOwner.length - 5
            )}
        </p>
        <p>
          <span className="font-weight-bold">Price</span> :{" "}
          {window.web3.utils.fromWei(
            this.props.cryptoboy.price.toString(),
            "Ether"
          )}{" "}
          Ξ
        </p>
        
        <p>
          <span className="font-weight-bold">No. of Transfers</span> :{" "}
          {this.props.cryptoboy.numberOfTransfers.toNumber()}
        </p>
        <p>
          <span className="font-weight-bold">Current Bid In Price</span> :{" "}
          {window.web3.utils.fromWei(
                    this.props.cryptoboy.biddingPrice.toString(),
                    "Ether"
                  )==="0" ? window.web3.utils.fromWei(
            this.props.cryptoboy.price.toString(),
            "Ether"
          ):window.web3.utils.fromWei(
            this.props.cryptoboy.biddingPrice.toString(),
            "Ether")
          }{" "}
          Ξ
        </p>
        <div>
          {this.props.accountAddress === this.props.cryptoboy.currentOwner ? (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                this.callChangeTokenPriceFromApp(
                  this.props.cryptoboy.tokenId.toNumber(),
                  this.state.newCryptoBoyPrice
                );
              }}
            >
              <div className="form-group mt-4 ">
                <label htmlFor="newCryptoBoyPrice">
                  <span className="font-weight-bold">Change Token Price</span> :
                </label>{" "}
                <input
                  required
                  type="number"
                  name="newCryptoBoyPrice"
                  id="newCryptoBoyPrice"
                  value={this.state.newCryptoBoyPrice}
                  className="form-control w-50"
                  placeholder="Enter new price"
                  onChange={(e) =>
                    this.setState({
                      newCryptoBoyPrice: e.target.value,
                    })
                  }
                />
              </div>
              <button
                type="submit"
                style={{ fontSize: "0.8rem", letterSpacing: "0.14rem" }}
                className="btn-width btn-color mt-4 btn-block"
              >
                change price
              </button>
            </form>
          ) : null}
        </div>
        <div>
          {this.props.accountAddress !== this.props.cryptoboy.currentOwner && this.props.cryptoboy.forBidding  ? (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                this.callChangeBidTokenPriceFromApp(
                  this.props.cryptoboy.tokenId.toNumber(),
                  this.state.newPrice
                );
              }}
            >
              <div className="form-group mt-4 ">
                <label htmlFor="newPrice">
                  <span className="font-weight-bold">Change Bid Price</span> :
                </label>{" "}
                <input
                  required
                  type="number"
                  name="newPrice"
                  id="newPrice"
                  value={this.state.newPrice}
                  className="form-control w-50"
                  placeholder="Bid for Art"
                  onChange={(e) =>
                    this.setState({
                      newPrice: e.target.value,
                    })
                  }
                />
              </div>
              <button
                type="submit"
                id = "timerBtn"
                style={{ fontSize: "0.8rem", letterSpacing: "0.14rem" }}
                className="btn-width btn-color mt-4 btn-block"
              >
                change price
              </button>

            </form>
          ) : null}


        </div>
        
        <div>
          {this.props.accountAddress === this.props.cryptoboy.currentOwner ? (
            this.props.cryptoboy.forBidding ? (
              <button
                className="btn-width btn-color mt-4 btn-block"
                style={{ fontSize: "0.8rem", letterSpacing: "0.14rem" }}
                onClick={() =>
                  this.props.toggleforBidding(
                    this.props.cryptoboy.tokenId.toNumber()
                  )
                }
              >
                Remove from sales
              </button>
            ) : (
              <button
                className="btn-width btn-color mt-4 btn-block"
                style={{ fontSize: "0.8rem", letterSpacing: "0.14rem" }}
                onClick={() =>
                  this.props.toggleforBidding(
                    this.props.cryptoboy.tokenId.toNumber()
                  )
                }
              >
                Keep for sales
              </button>
            )
          ) : null}
        </div>
        <div>
          {this.props.accountAddress !== this.props.cryptoboy.currentOwner ? (
            this.props.cryptoboy.forBidding && this.props.cryptoboy.currentBidder === this.props.accountAddress? (
              <button
               
                className="btn-width btn-color mt-4 btn-block"
                id="buyBtn"
                value={this.props.cryptoboy.biddingPrice}
                style={{ fontSize: "0.8rem", letterSpacing: "0.14rem" }}
                onClick={(e) =>
                  this.props.buyCryptoBoy(
                    this.props.cryptoboy.tokenId.toNumber(),
                    e.target.value
                  )
                }
              >
                Buy For{" "}
                {window.web3.utils.fromWei(
                    this.props.cryptoboy.biddingPrice.toString(),
                    "Ether"
                  )==="0" ?window.web3.utils.fromWei(
                    this.props.cryptoboy.price.toString(),
                    "Ether"
                  ):window.web3.utils.fromWei(
                    this.props.cryptoboy.biddingPrice.toString(),
                    "Ether"
                  )}{" "}
                Ξ
              </button>
            ) : (
              <>
                <button
                 
                  style={{ fontSize: "0.8rem", letterSpacing: "0.14rem" }}
                  className="btn-width btn-color1 mt-4 btn-block"
                >
                  Buy For{" "}
                  {window.web3.utils.fromWei(
                    this.props.cryptoboy.biddingPrice.toString(),
                    "Ether"
                  )==="0"?window.web3.utils.fromWei(
                    this.props.cryptoboy.price.toString(),
                    "Ether"
                  ):window.web3.utils.fromWei(
                    this.props.cryptoboy.biddingPrice.toString(),
                    "Ether"
                  )}{" "}
                  Ξ
                </button>
                <p className="mt-2">Currently you cannot buy!</p>
              </>
            )
          ) : null}
        </div>
      </div>
    );
  }
}

export default CryptoBoyNFTDetails;
