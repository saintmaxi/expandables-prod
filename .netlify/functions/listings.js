const ethers = require('ethers');

const infuraKey = process.env.INFURA_KEY;
const provider = new ethers.providers.InfuraProvider("mainnet", infuraKey);
const V2_START = 114;
const bambooImgURL = "./images/bamboo-icon.png";
let supportedTokens = {"0xA75F96760B715A5958a62FDe3D739eB8b2A50A7C" : "./images/bamboo-icon.png",
                        "0xd137561C20BE8e870D62e2aE92269f0950702f77": "./images/exp-icon.png"};

const oldMarketAddress = "0x240B8Be3e54fd643Ba9D034641b0971534660D5c";
const oldMarketAbi = () => { 
    return `[{"inputs":[{"internalType":"address","name":"_bambooAddress","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"_id","type":"uint256"},{"indexed":true,"internalType":"address","name":"_address","type":"address"}],"name":"Purchase","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"_id","type":"uint256"},{"indexed":true,"internalType":"address","name":"_address","type":"address"},{"indexed":false,"internalType":"string","name":"name","type":"string"}],"name":"PurchasedWithName","type":"event"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"},{"internalType":"uint256","name":"_price","type":"uint256"}],"name":"addWhitelist","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"bambooAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_id","type":"uint256"}],"name":"getWhitelist","outputs":[{"components":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"uint256","name":"price","type":"uint256"},{"internalType":"uint256","name":"amount","type":"uint256"}],"internalType":"struct ExpandablesMarketplace.Whitelist","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_id","type":"uint256"},{"internalType":"address","name":"_address","type":"address"}],"name":"hasPurchased","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"names","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_id","type":"uint256"}],"name":"purchase","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_id","type":"uint256"},{"internalType":"string","name":"name","type":"string"}],"name":"purchaseWithName","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_bambooAddress","type":"address"}],"name":"setBambooAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"whitelistCounter","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}]`;
};

const marketAddress = "0x3DC6a9DFD765889406A16b33D14579C5dbfCe9Dd";
const marketAbi = () => { 
    return `[{"inputs":[{"internalType":"address","name":"_paymentReceiver","type":"address"},{"internalType":"address","name":"_stakingAddress","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"_id","type":"uint256"},{"indexed":true,"internalType":"address","name":"_address","type":"address"}],"name":"Purchase","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"_id","type":"uint256"},{"indexed":true,"internalType":"address","name":"_address","type":"address"},{"indexed":false,"internalType":"string","name":"name","type":"string"}],"name":"PurchasedWithName","type":"event"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"},{"internalType":"uint256","name":"_price","type":"uint256"},{"internalType":"address","name":"_acceptedCurrency","type":"address"},{"internalType":"uint128","name":"_percentPerToken","type":"uint128"},{"internalType":"uint128","name":"_maxTotalPercent","type":"uint128"}],"name":"addWhitelist","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_id","type":"uint256"}],"name":"getWhitelist","outputs":[{"components":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"uint256","name":"price","type":"uint256"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"address","name":"acceptedCurrency","type":"address"},{"internalType":"uint128","name":"percentPerToken","type":"uint128"},{"internalType":"uint128","name":"maxTotalPercent","type":"uint128"}],"internalType":"struct ExpandablesMarketplace.Whitelist","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_id","type":"uint256"},{"internalType":"address","name":"_address","type":"address"}],"name":"hasPurchased","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"names","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_id","type":"uint256"}],"name":"purchase","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_id","type":"uint256"},{"internalType":"string","name":"name","type":"string"}],"name":"purchaseWithName","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_paymentReceiver","type":"address"}],"name":"setPaymentReceiver","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"whitelistCounter","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}]`;
};

const oldMarket = new ethers.Contract(oldMarketAddress, oldMarketAbi(), provider);
const market = new ethers.Contract(marketAddress, marketAbi(), provider);

var collectionsData = require("./partner-collections.json");

const splitArrayToChunks = (array_, chunkSize_) => {
    let _arrays = Array(Math.ceil(array_.length / chunkSize_))
    .fill()
    .map((_, index) => index * chunkSize_)
    .map((begin) => array_.slice(begin, begin + chunkSize_));

    console.log(_arrays);
    return _arrays;
};

const getCollections = async() => {
    let liveJSX = "";
    let pastJSX = "";
    let numLive = 0;
    let numPast = 0;
    let projectIDs = Object.keys(collectionsData);
    const chunks = splitArrayToChunks(projectIDs, 5);
    let idToLiveJSX = new Map();
    let idToPastJSX = new Map();
    for (const chunk of chunks) {
        await Promise.all( chunk.map( async(i) => {
            // WL data from contract
            let id = Number(i);
            let marketContract;
            let version;
    
            if (id < V2_START) {
                version = 1;
                marketContract = oldMarket;
            }
            else {
                version = 2;
                marketContract = market;
            }

            let WLinfo;
            if (version == 1) {
                WLinfo = await marketContract.getWhitelist(id);
            }
            else {
                WLinfo = await marketContract.getWhitelist(id - V2_START);
            }

            collectionPrice = Number(ethers.utils.formatEther(WLinfo.price));

            let tokenImg;
            if (version == 2) {
                tokenImg = supportedTokens[WLinfo.acceptedCurrency]
            }
            else {
                tokenImg = bambooImgURL;
            }

            // Data from JSON file
            let collection = collectionsData[String(id)];
            let maxSlots = collection["max-slots"];
            let minted = maxSlots - WLinfo.amount;
            let display = collectionsData[String(id)]["display-on-market"] == "true" ? true : false;

            let winners = [];
            let eventID = id;
            if (version == 2) {
                eventID -= V2_START;
            }

            let link = collection["website"] != "" ? `href="${collection["website"]}" target="_blank"` : "nohref";
            let arrow = collection["website"] != "" ? "⬈" : "";
            if (display) {
                if (minted != maxSlots) {
                    numLive += 1;
                    let fakeJSX = `<div class="partner-collection" id="project-${id}">
                                    <h4 class="discount-amount">${discountCaption}</h4>
                                    <a href="${collection["twitter"]}" target="_blank">
                                        <img class="collection-twitter" src="./images/twitter-white.png">
                                    </a>
                                    <div class="collection-img-container">
                                        <img class="collection-img" src="${collection["image"]}">
                                        <h4 class="collection-price-div">
                                            <div class="collection-price">${collectionPrice} <img src="${tokenImg}" class="bamboo-icon"></div>
                                        </h4>
                                    </div>
                                    <br class="hide-on-mobile">
                                    <br class="hide-on-mobile">
                                    <div class="collection-info">
                                        <h3><a class="clickable link" ${link} style="text-decoration: none;">${collection["name"]}${arrow}</a></h3>
                                        <div class="inside-text collection-description">
                                        ${collection["description"]}
                                        </div>
                                        <h4 class="num-bought-div">
                                            <span id="${id}-supply">${minted}</span>/<span id="${id}-max-supply">${maxSlots}</span> Filled                                
                                        </h4>
                                    </div>
                                    <button class="mint-prompt-button button" id="${id}-mint-button" onclick="connect()">CONNECT</button>
                                    </div>`
                    idToLiveJSX.set(id, fakeJSX);
                }
                else {
                    numPast +=1;
                    let fakeJSX = `<div class="partner-collection" id="project-${id}">
                                    <a href="${collection["twitter"]}" target="_blank">
                                        <img class="collection-twitter" src="./images/twitter-white.png">
                                    </a>
                                    <div class="collection-img-container">
                                        <img class="collection-img" src="${collection["image"]}">
                                        <h4 class="collection-price-div">
                                            <div class="collection-price">${collectionPrice} <img src="${tokenImg}" class="bamboo-icon"></div>
                                        </h4>
                                    </div>
                                    <br class="hide-on-mobile">
                                    <br class="hide-on-mobile">
                                    <div class="collection-info">
                                        <h3><a class="clickable link" ${link} style="text-decoration: none;">${collection["name"]}${arrow}</a></h3>
                                        <div class="inside-text collection-description">
                                        ${collection["description"]}
                                        </div>
                                        <h4 class="num-bought-div">
                                            <span id="${id}-supply">${minted}</span>/<span id="${id}-max-supply">${maxSlots}</span> Filled                                
                                        </h4>
                                    </div>
                                    <button class="mint-prompt-button button" id="${id}-mint-button" onclick="connect()">CONNECT</button>
                                    </div>`
                    idToPastJSX.set(id, fakeJSX);
                }
            }
        }));
    }
    let liveIds = Array.from(idToLiveJSX.keys()).map(Number).sort(function(a, b){return b-a});
    let pastIds = Array.from(idToPastJSX.keys()).map(Number).sort(function(a, b){return b-a});
    for (const liveId of liveIds) {
        liveJSX += idToLiveJSX.get(liveId);
    }
    for (const pastId of pastIds) {
        pastJSX += idToPastJSX.get(pastId);
    }
    return { 
            liveJSX : liveJSX,
            pastJSX : pastJSX,
            numLive : numLive,
            numPast : numPast,
        }
}

exports.handler = async function(event, context) {
    try {
        let { get } = event.queryStringParameters || {};
         if (!get) {
            return { statusCode: 400, body: "Missing query parameters" };
         }

         let listings = await getCollections();

         return {
            statusCode: 200,
            headers: { "content-type": "application/json" },
            body: JSON.stringify(listings)
          }
     
    } 
    catch (err) {
        console.log("invocation error:", err); // output to netlify function log
        return {
            statusCode: 500,
            body: err.message
         };
    }
  };

