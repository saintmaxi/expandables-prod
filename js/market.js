// a saintmaxi joint
/*********************************************************************************/
/********************************PRODUCTION CONFIG********************************/
/*********************************************************************************/

const bambooAddress = "0xA75F96760B715A5958a62FDe3D739eB8b2A50A7C";
const bambooAbi = ()=>{
    return `[{"inputs":[{"internalType":"string","name":"name","type":"string"},{"internalType":"string","name":"symbol","type":"string"},{"internalType":"address","name":"_pandaContract","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Paused","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"RewardsClaimed","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":false,"internalType":"uint256[]","name":"tokenIds","type":"uint256[]"}],"name":"Staked","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Unpaused","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":false,"internalType":"uint256[]","name":"tokenIds","type":"uint256[]"}],"name":"Unstaked","type":"event"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burn","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burnFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"calculateHolderRewards","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenID","type":"uint256"}],"name":"calculateStakingRewards","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"calculateStakingRewardsByAccount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"claimHolderRewards","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256[]","name":"tokens","type":"uint256[]"}],"name":"claimStakingRewards","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"finalizeRewardsEnd","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"lastClaimedBlockForToken","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"bytes","name":"","type":"bytes"}],"name":"onERC721Received","outputs":[{"internalType":"bytes4","name":"","type":"bytes4"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pandaContract","outputs":[{"internalType":"contract IERC721Enumerable","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"paused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_rewardsEnd","type":"uint256"}],"name":"setEndingBlock","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256[]","name":"tokenIds","type":"uint256[]"}],"name":"stakePandas","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"stakedPandasOf","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"unpause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256[]","name":"tokens","type":"uint256[]"}],"name":"unstakePandas","outputs":[],"stateMutability":"nonpayable","type":"function"}]`;
};

const marketAddress = "0x240B8Be3e54fd643Ba9D034641b0971534660D5c";
const marketAbi = () => { 
    return `[{"inputs":[{"internalType":"address","name":"_bambooAddress","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"_id","type":"uint256"},{"indexed":true,"internalType":"address","name":"_address","type":"address"}],"name":"Purchase","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"_id","type":"uint256"},{"indexed":true,"internalType":"address","name":"_address","type":"address"},{"indexed":false,"internalType":"string","name":"name","type":"string"}],"name":"PurchasedWithName","type":"event"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"},{"internalType":"uint256","name":"_price","type":"uint256"}],"name":"addWhitelist","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"bambooAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_id","type":"uint256"}],"name":"getWhitelist","outputs":[{"components":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"uint256","name":"price","type":"uint256"},{"internalType":"uint256","name":"amount","type":"uint256"}],"internalType":"struct ExpandablesMarketplace.Whitelist","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_id","type":"uint256"},{"internalType":"address","name":"_address","type":"address"}],"name":"hasPurchased","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"names","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_id","type":"uint256"}],"name":"purchase","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_id","type":"uint256"},{"internalType":"string","name":"name","type":"string"}],"name":"purchaseWithName","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_bambooAddress","type":"address"}],"name":"setBambooAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"whitelistCounter","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}]`;
};

const etherscanBase = `https://etherscan.io/tx/`;
const correctChain = 1;
const bambooImgURL = "./images/bamboo-icon.png";

/*********************************************************************************/
/***********************************DEV CONFIG************************************/
/*********************************************************************************/

// const bambooAddress = "0xC1D99066D8973B59eb0cC36cE6b1a1bD968a43D1";
// const bambooAbi = ()=>{
//     return `[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"mint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"}]`;
// };

// const marketAddress = "0x07dEaD541c239D80F9643b5B6a0c241a9db97c8D";
// const marketAbi = () => { 
//     return `[{"inputs":[{"internalType":"address","name":"_bambooAddress","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"_id","type":"uint256"},{"indexed":true,"internalType":"address","name":"_address","type":"address"}],"name":"Purchase","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"_id","type":"uint256"},{"indexed":true,"internalType":"address","name":"_address","type":"address"},{"indexed":false,"internalType":"string","name":"name","type":"string"}],"name":"PurchasedWithName","type":"event"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"},{"internalType":"uint256","name":"_price","type":"uint256"}],"name":"addWhitelist","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"bambooAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_id","type":"uint256"}],"name":"getWhitelist","outputs":[{"components":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"uint256","name":"price","type":"uint256"},{"internalType":"uint256","name":"amount","type":"uint256"}],"internalType":"struct ExpandablesMarketplace.Whitelist","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_id","type":"uint256"},{"internalType":"address","name":"_address","type":"address"}],"name":"hasPurchased","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"names","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_id","type":"uint256"}],"name":"purchase","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_id","type":"uint256"},{"internalType":"string","name":"name","type":"string"}],"name":"purchaseWithName","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_bambooAddress","type":"address"}],"name":"setBambooAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"whitelistCounter","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}]`;
// };

// const etherscanBase = `https://rinkeby.etherscan.io/tx/`;
// const correctChain = 4;
// const bambooImgURL = "./images/bamboo-icon.png";

/*********************************END CONFIG************************************/

if (window.ethereum == undefined) {
    displayErrorMessage('Use a web3 enabled browser to purchase listings!');
    loadInfuraListings();
}

// Initiate Provider 
const provider = new ethers.providers.Web3Provider(window.ethereum, "any");
const signer = provider.getSigner();

// Initiate Contracts
const bamboo = new ethers.Contract(bambooAddress, bambooAbi(), signer);
const market = new ethers.Contract(marketAddress, marketAbi(), signer);

// General Functions
const connect = async() => { await provider.send("eth_requestAccounts", []) };
const getAddress = async() => { try { return await signer.getAddress(); } catch { return false; }}; 
const formatEther = (balance_) => { return ethers.utils.formatEther(balance_) }; // divides by 18 modulus
const parseEther = (eth_) => { return ethers.utils.parseEther(eth_) }; // multiplies by 18 modulus
const getChainId = async() => { return await signer.getChainId() };

const updateCurrentChain = async() => {
    if ((await getChainId()) !== correctChain) {
        displayErrorMessage("Error: Wrong Network!", false);
    }
    else {
        $("#error-popup").remove();
        $("#block-screen-error").remove();
    }
}

// General Variables
const maxInt = "115792089237316195423570985008687907853269984665640564039457584007913129639934";

// Approval Functions

const approveBambooToMarket = async() => {
    await bamboo.approve(marketAddress, maxInt).then (async(tx_) => {
        await waitForTransaction(tx_);
        $("#approval-button").html(`Approving<span class="one">.</span><span class="two">.</span><span class="three">.</span>`)
    });
}

const checkBambooApproval = async() => {
    const userAddress = await getAddress();
    if (Number(await bamboo.allowance(userAddress, marketAddress)) >= maxInt) {
        $("#approval-container").remove();
    }
    else {
        $("#approval-container").removeClass("hidden");
    }
};

const promptForDiscord = async(id) => {
    if (!($("#discord-popup").length)) {
        let fakeJSX = `<div id="discord-popup">
                        <div id="content">
                         <p>Enter Discord User ID to associate with purchase.</p>
                         <br>
                         <input id="discord-name" type="text" spellcheck="false" value="" placeholder="Joona#9042">
                         <button class="button" onclick="purchaseWithName(${id})"">COMPLETE PURCHASE</button>
                        </div>
                       </div>`;
        $("body").append(fakeJSX);
        let height = $(document).height();
        $("body").append(`<div id='block-screen-discord' style="height:${height}px" onclick="$('#discord-popup').remove();$('#block-screen-discord').remove()"></div>`);
    }
}

const purchaseWithName  = async(id) => {
    try {
        let name =$("#discord-name").val();
        if (name == "") {
            await displayErrorMessage(`Error: No User ID provided!`);

        }
        else if (!(name.includes("#"))) {
            await displayErrorMessage(`Error: Must include "#" and numbers in ID!`);
        }
        else {
            await market.purchaseWithName(id, name).then( async(tx_) => {
                await waitForTransaction(tx_);
                $('#discord-popup').remove();
                $('#block-screen-discord').remove()
            });
        }
    }
    catch (error) {
        if ((error.message).includes("Address has already purchased")) {
            await displayErrorMessage(`Error: You already purchased a slot!`);
        }
        else if ((error.message).includes("No spots left")) {
            await displayErrorMessage(`Error: No spots left!`);
        }
        else if ((error.message).includes("transfer amount exceeds balance")) {
            await displayErrorMessage(`Error: Insufficent $BAMBOO balance!`);
        }
        else if ((error.message).includes("burn amount exceeds balance")) {
            await displayErrorMessage(`Error: Insufficent $BAMBOO balance!`);
        }
        else if ((error.message).includes("burn amount exceeds allowance")) {
            await displayErrorMessage(`Error: Market not approved to spend $BAMBOO!`);
        }
        else if ((error.message).includes("User denied transaction signature")) {
            console.log("Transaction rejected.");
        }
        else {
            await displayErrorMessage("An error occurred. See console and window alert for details...")
            window.alert(error);
            console.log(error);
        }
    }
}

const purchase  = async(id) => {
    try {
        await market.purchase(id).then( async(tx_) => {
            await waitForTransaction(tx_);
        });
    }
    catch (error) {
        if ((error.message).includes("Address has already purchased")) {
            await displayErrorMessage(`Error: You already purchased a slot!`);
        }
        else if ((error.message).includes("No spots left")) {
            await displayErrorMessage(`Error: No spots left!`);
        }
        else if ((error.message).includes("transfer amount exceeds balance")) {
            await displayErrorMessage(`Error: Insufficent $BAMBOO balance!`);
        }
        else if ((error.message).includes("burn amount exceeds balance")) {
            await displayErrorMessage(`Error: Insufficent $BAMBOO balance!`);
        }
        else if ((error.message).includes("burn amount exceeds allowance")) {
            await displayErrorMessage(`Error: Market not approved to spend $BAMBOO!`);
        }
        else if ((error.message).includes("User denied transaction signature")) {
            console.log("Transaction rejected.");
        }
        else {
            await displayErrorMessage("An error occurred. See console and window alert for details...")
            window.alert(error);
            console.log(error);
        }
    }
}

const splitArrayToChunks = (array_, chunkSize_) => {
    let _arrays = Array(Math.ceil(array_.length / chunkSize_))
    .fill()
    .map((_, index) => index * chunkSize_)
    .map((begin) => array_.slice(begin, begin + chunkSize_));

    console.log(_arrays);
    return _arrays;
};

var loadedCollections = false;

const loadCollections = async() => {
    let liveJSX = "";
    let pastJSX = "";
    let numLive = 0;
    let numPast = 0;
    let projectIDs = Object.keys(collectionsData);
    const chunks = splitArrayToChunks(projectIDs, 5)
    for (const chunk of chunks) {
        await Promise.all( chunk.map( async(i) => {
            // WL data from contract
            let id = Number(i);
            let WLinfo = await market.getWhitelist(id);
            let collectionPrice = Number(formatEther(WLinfo.price));

            // Data from JSON file
            let collection = collectionsData[String(id)];
            let maxSlots = collection["max-slots"];
            let minted = maxSlots - WLinfo.amount;
            let discordRequired = (collectionsData[String(id)]["discord-required"] == "true");

            let winners = [];
            if (discordRequired) {
                let eventFilterName = market.filters.PurchasedWithName(id);
                let eventsName = await market.queryFilter(eventFilterName);
                for (let i = 0; i < eventsName.length; i++) {
                    winners.push(`${eventsName[i].args._address}`);
                }
            }
            else {
                let eventFilter = market.filters.Purchase(id);
                let events = await market.queryFilter(eventFilter);
                for (let i = 0; i < events.length; i++) {
                    winners.push(`${events[i].args._address}`);
                }
            }

            let link = collection["website"] != "" ? `href="${collection["website"]}" target="_blank"` : "nohref";
            let arrow = collection["website"] != "" ? "⬈" : "";

            if (minted != maxSlots) {
                numLive += 1;
                let button;
                if (winners.includes(await getAddress())) {
                    button = `<button disabled class="mint-prompt-button button purchased" id="${id}-mint-button">BOUGHT!</button>`;
                }
                else {
                    if (discordRequired) {
                        button = `<button class="mint-prompt-button button" id="${id}-mint-button" onclick="promptForDiscord(${id})">BUY</button>`;
                    }
                    else {
                        button = `<button class="mint-prompt-button button" id="${id}-mint-button" onclick="purchase(${id})">BUY</button>`;
                    }
                }
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
                                ${button}
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
                                <button disabled class="mint-prompt-button button purchased" id="${id}-mint-button">SOLD OUT</button>
                                </div>`
            pastJSX = fakeJSX + pastJSX;
            }
        }));
    }

    // for (let i = 0; i < projectIDs.length; i++) {
    //     // WL data from contract
    //     let id = Number(projectIDs[i]);
    //     let WLinfo = await market.getWhitelist(id);
    //     let collectionPrice = Number(formatEther(WLinfo.price));

    //     // Data from JSON file
    //     let collection = collectionsData[String(id)];
    //     let maxSlots = collection["max-slots"];
    //     let minted = maxSlots - WLinfo.amount;
    //     let discordRequired = (collectionsData[String(id)]["discord-required"] == "true");

    //     let winners = [];
    //     if (discordRequired) {
    //         let eventFilterName = market.filters.PurchasedWithName(id);
    //         let eventsName = await market.queryFilter(eventFilterName);
    //         for (let i = 0; i < eventsName.length; i++) {
    //             winners.push(`${eventsName[i].args._address}`);
    //         }
    //     }
    //     else {
    //         let eventFilter = market.filters.Purchase(id);
    //         let events = await market.queryFilter(eventFilter);
    //         for (let i = 0; i < events.length; i++) {
    //             winners.push(`${events[i].args._address}`);
    //         }
    //     }

    //     let link = collection["website"] != "" ? `href="${collection["website"]}" target="_blank"` : "nohref";
    //     let arrow = collection["website"] != "" ? "⬈" : "";

    //     if (minted != maxSlots) {
    //         numLive += 1;
    //         let button;
    //         if (winners.includes(await getAddress())) {
    //             button = `<button disabled class="mint-prompt-button button purchased" id="${id}-mint-button">BOUGHT!</button>`;
    //         }
    //         else {
    //             if (discordRequired) {
    //                 button = `<button class="mint-prompt-button button" id="${id}-mint-button" onclick="promptForDiscord(${id})">BUY</button>`;
    //             }
    //             else {
    //                 button = `<button class="mint-prompt-button button" id="${id}-mint-button" onclick="purchase(${id})">BUY</button>`;
    //             }
    //         }
    //         let fakeJSX = `<div class="partner-collection" id="project-${id}">
    //                         <a href="${collection["twitter"]}" target="_blank">
    //                             <img class="collection-twitter" src="./images/twitter-white.png">
    //                         </a>
    //                         <div class="collection-img-container">
    //                             <img class="collection-img" src="${collection["image"]}">
    //                             <h4 class="collection-price-div">
    //                                 <div class="collection-price">${collectionPrice} <img src="${bambooImgURL}" class="bamboo-icon"></div>
    //                             </h4>
    //                         </div>
    //                         <br class="hide-on-mobile">
    //                         <br class="hide-on-mobile">
    //                         <div class="collection-info">
    //                             <h3><a class="clickable link" ${link} style="text-decoration: none;">${collection["name"]}${arrow}</a></h3>
    //                             <div class="inside-text collection-description">
    //                             ${collection["description"]}
    //                             </div>
    //                             <h4 class="num-bought-div">
    //                                 <span id="${id}-supply">${minted}</span>/<span id="${id}-max-supply">${maxSlots}</span> Filled                                
    //                             </h4>
    //                         </div>
    //                         ${button}
    //                         </div>`
    //         liveJSX = fakeJSX + liveJSX;
    //     }
    //     else {
    //         numPast +=1;
    //         let fakeJSX = `<div class="partner-collection" id="project-${id}">
    //                         <a href="${collection["twitter"]}" target="_blank">
    //                             <img class="collection-twitter" src="./images/twitter-white.png">
    //                         </a>
    //                         <div class="collection-img-container">
    //                             <img class="collection-img" src="${collection["image"]}">
    //                             <h4 class="collection-price-div">
    //                                 <div class="collection-price">${collectionPrice} <img src="${bambooImgURL}" class="bamboo-icon"></div>
    //                             </h4>
    //                         </div>
    //                         <br class="hide-on-mobile">
    //                         <br class="hide-on-mobile">
    //                         <div class="collection-info">
    //                             <h3><a class="clickable link" ${link} style="text-decoration: none;">${collection["name"]}${arrow}</a></h3>
    //                             <div class="inside-text collection-description">
    //                             ${collection["description"]}
    //                             </div>
    //                             <h4 class="num-bought-div">
    //                                 <span id="${id}-supply">${minted}</span>/<span id="${id}-max-supply">${maxSlots}</span> Filled                                
    //                             </h4>
    //                         </div>
    //                         <button disabled class="mint-prompt-button button purchased" id="${id}-mint-button">SOLD OUT</button>
    //                         </div>`
    //     pastJSX = fakeJSX + pastJSX;
    //     }
    // }
    $("#live-collections").empty();
    $("#past-collections").empty();
    $("#live-collections").append(liveJSX);
    $("#past-collections").append(pastJSX);
    $("#num-live").text(` (${numLive})`);
    $("#num-past").text(` (${numPast})`);
    if (numLive >= 4) {
        $("#scroll-indicator-live").html(`<img class="down-arrow" src="images/down-arrow.png"> SCROLL<span class="hide-on-mobile"> FOR MORE</span> <img class="down-arrow" src="images/down-arrow.png">`);
    }
    if (numPast >= 4) {
        $("#scroll-indicator-past").html(`<img class="down-arrow" src="images/down-arrow.png"> SCROLL <span class="hide-on-mobile"> FOR MORE</span> <img class="down-arrow" src="images/down-arrow.png">`);
    }
    loadedCollections = true;
}

var collectionsData;

async function loadCollectionsData() {
    collectionsData = await $.getJSON('./data/partner-collections.json');
}

const updateSupplies = async() => {
    let projectIDs = Object.keys(collectionsData);
    for (let i = 0; i < projectIDs.length; i++) {
        let id = Number(projectIDs[i]);
        let WLinfo = await market.getWhitelist(id);
        let collection = collectionsData[String(id)];
        let max = collection["max-slots"];
        let minted = max - WLinfo.amount;
        if (minted == max) {
            $(`#${id}-mint-button`).text("SOLD OUT");
            $(`#${id}-mint-button`).addClass("purchased");
            $(`#${id}-mint-button`).prop("disabled", true);
        }
        $(`#${id}-supply`).text(minted);
    }
}

// Processing txs

// After Tx Hook
const waitForTransaction = async(tx_) => {
    startLoading(tx_);
    provider.once(tx_.hash, async (transaction_) => {
        await endLoading(tx_, transaction_.status);
    });
};

// Resuming UI display, refreshing market for pending txs across pages
var pendingTransactions = localStorage.getItem("BambooMarketPendingTxs");

if (!pendingTransactions) {
    pendingTransactions = new Set();
}
else {
    pendingTransactions = new Set(Array.from(JSON.parse(pendingTransactions)));
    pendingTxArray = Array.from(pendingTransactions);
    pendingTransactions = new Set();

    for (let i =0; i < pendingTxArray.length; i++) {
        waitForTransaction(pendingTxArray[i]);
    }
    localStorage.removeItem("BambooMarketPendingTxs");
}

function cachePendingTransactions() {
    localStorage.setItem("BambooMarketPendingTxs", JSON.stringify(Array.from(pendingTransactions)));
}

function startLoading(tx) {
    let txHash = tx.hash;
    const etherscanLink = `${etherscanBase}${txHash}`;
    const loadingDiv = `<a href="${etherscanLink}" class="etherscan-link" id="etherscan-link-${txHash}" target="_blank" rel="noopener noreferrer"><div class="loading-div" id="loading-div-${txHash}">PROCESSING<span class="one">.</span><span class="two">.</span><span class="three">.</span><br>CLICK FOR ETHERSCAN</div></a><br>`;
    $("#pending-transactions").append(loadingDiv);
    pendingTransactions.add(tx);
}

async function endLoading(tx, txStatus) {
    let txHash = tx.hash;
    $(`#loading-div-${txHash}`).html("");
    let status = txStatus == 1 ? "SUCCESS" : "ERROR";
    $(`#loading-div-${txHash}`).addClass("blinking");
    if (txStatus == 1) {
        $(`#loading-div-${txHash}`).addClass("success");
    }
    else if (txStatus == 0) {
        $(`#loading-div-${txHash}`).addClass("failure");
    }
    $(`#loading-div-${txHash}`).append(`TRANSACTION ${status}.<br>VIEW ON ETHERSCAN.`);
    await sleep(7000);
    $(`#etherscan-link-${txHash}`).remove();
    pendingTransactions.delete(tx);
    if (pendingTransactions.size == 0) {
        await updateSupplies();
    }
}

const updateInfo = async () => {
    await checkBambooApproval();
    let userAddress = await getAddress();
    $("#account").text(`${userAddress.substr(0,9)}..`);
    $("#mobile-account").text(`${userAddress.substr(0,9)}...`);
};

setInterval( async() => {
    await updateCurrentChain();
    await updateInfo();
    if (loadedCollections) {
        await updateSupplies();
    }
}, 5000)

ethereum.on("accountsChanged", async (accounts_) => { 
    await updateInfo();
    location.reload();
});

provider.on("network", async(newNetwork, oldNetwork) => {
    if (oldNetwork) {
        location.reload();
    }
});

window.onload = async() => {
    if (!(await getAddress())) {
        console.log("using infura")
        await loadInfuraListings();
    }
    else {
        console.log("using wallet")
        await updateCurrentChain();
        await updateInfo();
        await loadCollectionsData();
        await loadCollections();
        $("#bamboo-balance").html((formatEther(await bamboo.balanceOf((await getAddress())))));
    }
};

window.onunload = async()=>{
    cachePendingTransactions();
}