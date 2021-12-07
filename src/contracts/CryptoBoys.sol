// SPDX-License-Identifier: MIT
pragma solidity >=0.4.21 <0.8.0;
pragma abicoder v2;

import "./ERC721.sol";

contract CryptoBoys is ERC721 {

  string public collectionName;
  string public collectionNameSymbol;
  uint256 public cryptoBoyCounter;

   struct CryptoBoy {
    uint256 tokenId;
    string tokenName;
    string tokenURI;
    address payable mintedBy;
    address payable currentOwner;
    address payable previousOwner;
    uint256 price;
    uint256 numberOfTransfers;
    //bool forSale;

    bool forBidding;
    uint256 biddingPrice;
    address payable currentBidder;
   

  }
 
  mapping(uint256 => CryptoBoy) public allCryptoBoys;
  mapping(string => bool) public tokenNameExists;
  mapping(string => bool) public colorExists;
  mapping(string => bool) public tokenURIExists;

  constructor() ERC721("Crypto Smily Collection", "CS") {
    collectionName = name();
    collectionNameSymbol = symbol();
  }

  function mintCryptoBoy(string memory _name, string memory _tokenURI, uint256 _price, string[] calldata _colors) external {
    require(msg.sender != address(0));
    cryptoBoyCounter ++;
    require(!_exists(cryptoBoyCounter));

    for(uint i=0; i<_colors.length; i++) {
      require(!colorExists[_colors[i]]);
    }
    require(!tokenURIExists[_tokenURI]);
    require(!tokenNameExists[_name]);

    _mint(msg.sender, cryptoBoyCounter);
    _setTokenURI(cryptoBoyCounter, _tokenURI);

    for (uint i=0; i<_colors.length; i++) {
      colorExists[_colors[i]] = true;
    }
    tokenURIExists[_tokenURI] = true;
    tokenNameExists[_name] = true;

    CryptoBoy memory newCryptoBoy = CryptoBoy(
    cryptoBoyCounter,
    _name,
    _tokenURI,
    msg.sender,
    msg.sender,
    address(0),
    _price,
    0,
    //true,
    false,
    0,
    address(0)
   );
    allCryptoBoys[cryptoBoyCounter] = newCryptoBoy;
  }

  function getTokenOwner(uint256 _tokenId) public view returns(address) {
    address _tokenOwner = ownerOf(_tokenId);
    return _tokenOwner;
  }

  function getTokenMetaData(uint _tokenId) public view returns(string memory) {
    string memory tokenMetaData = tokenURI(_tokenId);
    return tokenMetaData;
  }

  function getNumberOfTokensMinted() public view returns(uint256) {
    uint256 totalNumberOfTokensMinted = totalSupply();
    return totalNumberOfTokensMinted;
  }

  function getTotalNumberOfTokensOwnedByAnAddress(address _owner) public view returns(uint256) {
    uint256 totalNumberOfTokensOwned = balanceOf(_owner);
    return totalNumberOfTokensOwned;
  }

  function getTokenExists(uint256 _tokenId) public view returns(bool) {
    bool tokenExists = _exists(_tokenId);
    return tokenExists;
  }

  /*function buyToken(uint256 _tokenId) public payable {
    // check if the function caller is not an zero account address
    require(msg.sender != address(0));
    // check if the token id of the token being bought exists or not
    require(_exists(_tokenId));
    // get the token's owner
    address tokenOwner = ownerOf(_tokenId);
    // token's owner should not be an zero address account
    require(tokenOwner != address(0));
    // the one who wants to buy the token should not be the token's owner
    require(tokenOwner != msg.sender);
    // get that token from all crypto boys mapping and create a memory of it defined as (struct => CryptoBoy)
    CryptoBoy memory cryptoboy = allCryptoBoys[_tokenId];
    // price sent in to buy should be equal to or more than the token's price
    require(msg.value >= cryptoboy.price);
    // token should be for sale
    require(cryptoboy.forSale);
    // transfer the token from owner to the caller of the function (buyer)
    _transfer(tokenOwner, msg.sender, _tokenId);
    // get owner of the token
    address payable sendTo = cryptoboy.currentOwner;
    // send token's worth of ethers to the owner
    sendTo.transfer(msg.value);
    // update the token's previous owner
    cryptoboy.previousOwner = cryptoboy.currentOwner;
    // update the token's current owner
    cryptoboy.currentOwner = msg.sender;
    // update the how many times this token was transfered
    cryptoboy.numberOfTransfers += 1;
    // set and update that token in the mapping
    allCryptoBoys[_tokenId] = cryptoboy;
  }*/

  function changeTokenPrice(uint256 _tokenId, uint256 _newPrice) public {
    // require caller of the function is not an empty address
    require(msg.sender != address(0));
    // require that token should exist
    require(_exists(_tokenId));
    // get the token's owner
    address tokenOwner = ownerOf(_tokenId);
    // check that token's owner should be equal to the caller of the function
    require(tokenOwner == msg.sender);
    // get that token from all crypto boys mapping and create a memory of it defined as (struct => CryptoBoy)
    CryptoBoy memory cryptoboy = allCryptoBoys[_tokenId];
    // update token's price with new price
    cryptoboy.price = _newPrice;
    // set and update that token in the mapping
    allCryptoBoys[_tokenId] = cryptoboy;
  }

  // switch between set for sale and set not for sale
 /* function toggleForSale(uint256 _tokenId) public {
    // require caller of the function is not an empty address
    require(msg.sender != address(0));
    // require that token should exist
    require(_exists(_tokenId));
    // get the token's owner
    address tokenOwner = ownerOf(_tokenId);
    // check that token's owner should be equal to the caller of the function
    require(tokenOwner == msg.sender);
    // get that token from all crypto boys mapping and create a memory of it defined as (struct => CryptoBoy)
    CryptoBoy memory cryptoboy = allCryptoBoys[_tokenId];
    // if token's forSale is false make it true and vice versa
    if(cryptoboy.forSale) {
      cryptoboy.forSale = false;
    } else {
      cryptoboy.forSale = true;
      //cryptoboy.forBidding = false;
    }
    // set and update that token in the mapping
    allCryptoBoys[_tokenId] = cryptoboy;
  }*/
 
  function toggleforBidding(uint256 _tokenId) public {

    require(msg.sender != address(0));
    require(_exists(_tokenId));
    address tokenOwner = ownerOf(_tokenId);
    require(tokenOwner == msg.sender);

    CryptoBoy memory cryptoboy = allCryptoBoys[_tokenId];
    if(cryptoboy.forBidding) {
      cryptoboy.forBidding = false;
    } else {
      cryptoboy.forBidding = true;
     
    }
       
    allCryptoBoys[_tokenId] = cryptoboy;
 }
 
 function changeBidTokenPrice(uint256 _tokenId,uint256 _newPrice) public payable {
    
    require(msg.sender != address(0));    
    require(_exists(_tokenId));   
    address tokenOwner = ownerOf(_tokenId);    
    require(tokenOwner != address(0));    
    require(tokenOwner != msg.sender);

    CryptoBoy memory cryptoboy = allCryptoBoys[_tokenId];    
    require(_newPrice > cryptoboy.price);    
    require(_newPrice > cryptoboy.biddingPrice);    
    require(cryptoboy.forBidding);

    cryptoboy.biddingPrice = _newPrice;
    cryptoboy.currentBidder = msg.sender;
    allCryptoBoys[_tokenId] = cryptoboy;
  }

  function buyToken(uint256 _tokenId) public payable {

    require(msg.sender != address(0));
    require(_exists(_tokenId));
    address tokenOwner = ownerOf(_tokenId);
    require(tokenOwner != address(0));
    require(tokenOwner != msg.sender);

    CryptoBoy memory cryptoboy = allCryptoBoys[_tokenId];
    require(cryptoboy.forBidding);
    require(msg.value >= cryptoboy.biddingPrice);
    require(cryptoboy.currentBidder == msg.sender);

    _transfer(tokenOwner, msg.sender, _tokenId);
    address payable sendTo = cryptoboy.currentOwner;
    sendTo.transfer(msg.value);
    
    cryptoboy.previousOwner = cryptoboy.currentOwner;
    cryptoboy.currentOwner = msg.sender;
    cryptoboy.numberOfTransfers += 1;
    cryptoboy.price = cryptoboy.biddingPrice;
    cryptoboy.forBidding = false;
    cryptoboy.currentBidder = address(0);
    cryptoboy.biddingPrice = 0;
    allCryptoBoys[_tokenId] = cryptoboy;
  }
}