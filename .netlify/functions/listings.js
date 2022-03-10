const ethers = require('ethers');

const infuraKey = process.env.INFURA_KEY;
const provider = new ethers.providers.InfuraProvider("mainnet", infuraKey);
const bambooImgURL = "https://github.com/saintmaxi/expandables/blob/master/images/bamboo-icon.png?raw=true";

const marketAddress = "0x240B8Be3e54fd643Ba9D034641b0971534660D5c";
const marketAbi = () => { 
    return `[{"inputs":[{"internalType":"address","name":"_bambooAddress","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"_id","type":"uint256"},{"indexed":true,"internalType":"address","name":"_address","type":"address"}],"name":"Purchase","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"_id","type":"uint256"},{"indexed":true,"internalType":"address","name":"_address","type":"address"},{"indexed":false,"internalType":"string","name":"name","type":"string"}],"name":"PurchasedWithName","type":"event"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"},{"internalType":"uint256","name":"_price","type":"uint256"}],"name":"addWhitelist","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"bambooAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_id","type":"uint256"}],"name":"getWhitelist","outputs":[{"components":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"uint256","name":"price","type":"uint256"},{"internalType":"uint256","name":"amount","type":"uint256"}],"internalType":"struct ExpandablesMarketplace.Whitelist","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_id","type":"uint256"},{"internalType":"address","name":"_address","type":"address"}],"name":"hasPurchased","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"names","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_id","type":"uint256"}],"name":"purchase","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_id","type":"uint256"},{"internalType":"string","name":"name","type":"string"}],"name":"purchaseWithName","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_bambooAddress","type":"address"}],"name":"setBambooAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"whitelistCounter","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}]`;
};

const market = new ethers.Contract(marketAddress, marketAbi(), provider);

var collectionsData = require("./partner-collections.json");

const getCollections = async() => {
    let liveJSX = "";
    let pastJSX = "";
    let numLive = 0;
    let numPast = 0;
    let projectIDs = Object.keys(collectionsData);
    for (let i = 0; i < projectIDs.length; i++) {
        // WL data from contract
        let id = Number(projectIDs[i]);
        let WLinfo = await market.getWhitelist(id);
        let collectionPrice = Number(ethers.utils.formatEther(WLinfo.price));

        // Data from JSON file
        let collection = collectionsData[String(id)];
        let maxSlots = collection["max-slots"];
        let minted = maxSlots - WLinfo.amount;

        let link = collection["website"] != "" ? `href="${collection["website"]}" target="_blank"` : "nohref";
        let arrow = collection["website"] != "" ? "⬈" : "";

        if (minted != maxSlots) {
            numLive += 1;
            let fakeJSX = `<div class="partner-collection" id="project-${id}">
                            <a href="${collection["twitter"]}" target="_blank">
                                <img class="collection-twitter" src="./images/twitter-white.png">
                            </a>
                            <div class="collection-img-container">
                                <img class="collection-img" src="${collection["image"]}">
                                <h4 class="collection-price-div">
                                    <div class="collection-price">${collectionPrice} <img src="${bambooImgURL}" class="bamboo-icon"></div>
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
            liveJSX = fakeJSX + liveJSX;
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
                                    <div class="collection-price">${collectionPrice} <img src="${bambooImgURL}" class="bamboo-icon"></div>
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
            pastJSX = fakeJSX + pastJSX;
        }
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

