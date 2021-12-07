import React, { useState, useEffect } from "react";
import CryptoBoyNFTImage from "../CryptoBoyNFTImage/CryptoBoyNFTImage";
import CryptoBoyNFTDetails from "../CryptoBoyNFTDetails/CryptoBoyNFTDetails";
import Loading from "../Loading/Loading";

const AllCryptoBoys = ({
  cryptoBoys,
  accountAddress,
  totalTokensMinted,
  changeTokenPrice,
  changeBidTokenPrice,
  toggleforBidding,
  buyCryptoBoy,
  setBidBtnTime,
  
}) => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (cryptoBoys.length !== 0) {
      if (cryptoBoys[0].metaData !== undefined) {
        setLoading(loading);
      } else {
        setLoading(false);
      }
    }
  }, [cryptoBoys]);

  return (
    <div>
      <div className="card mt-1">
        <div className="bg card-body align-items-center d-flex justify-content-center">
          <h5>
            Total No. of CryptoSmilys Minted On The Platform :{" "}
            {totalTokensMinted}
          </h5>
        </div>
      </div>
      <div className="d-flex flex-wrap mb-2">
        {cryptoBoys.map((cryptoboy) => {
          return (
            <div
              key={cryptoboy.tokenId.toNumber()}
              className="w-50 p-4 mt-1 border"
            >
              {!loading ? (
                <CryptoBoyNFTImage
                  colors={
                    cryptoboy.metaData !== undefined
                      ? cryptoboy.metaData.metaData.colors
                      : ""
                  }
                />
              ) : (
                <Loading />
              )}
              <CryptoBoyNFTDetails
                cryptoboy={cryptoboy}
                accountAddress={accountAddress}
                changeTokenPrice={changeTokenPrice}
                changeBidTokenPrice ={changeBidTokenPrice}
                toggleforBidding={toggleforBidding}
                buyCryptoBoy={buyCryptoBoy}
                setBidBtnTime={setBidBtnTime}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AllCryptoBoys;
