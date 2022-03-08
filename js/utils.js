async function displayErrorMessage(message, timed=true) {
    if (!($("#error-popup").length)) {
        let fakeJSX = `<div id="error-popup"><p>${message}</p></div>`;
        $("body").append(fakeJSX);
        let height = $(document).height();
        $("body").append(`<div id='block-screen-error' style="height:${height}px"></div>`);
        if (timed) {
            await sleep(2500);
            $("#error-popup").remove();
            $("#block-screen-error").remove();
        }
    }
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const fixHeight = async() => {
    let claimContainers = [];
    $("#claim-sections > div").each((index, elem) => {
        claimContainers.push(elem.id);
    });

    let tallestClaim = $(`#${claimContainers[0]}`).height();
    for (let i=1; i< claimContainers.length; i++) {
        if ($(`#${claimContainers[i]}`).height() > tallestClaim) {
            tallestClaim = $(`#${claimContainers[i]}`).height();
        } 
    }

    for (let i=0; i< claimContainers.length; i++) {
        $(`#${claimContainers[i]}`).height(tallestClaim);
    }
};

function showLive() {
    $('#past-collections').addClass('hidden');
    $('#live-collections').removeClass('hidden');
    $("#scroll-indicator-past").addClass("hidden");
    $("#scroll-indicator-live").removeClass("hidden");
    $("#live-button").addClass("active");
    $("#past-button").removeClass("active");
}

function showPast() {
    $('#live-collections').addClass('hidden');
    $('#past-collections').removeClass('hidden');
    $("#scroll-indicator-past").removeClass("hidden");
    $("#scroll-indicator-live").addClass("hidden");
    $("#past-button").addClass("active");
    $("#live-button").removeClass("active");
}

function toggleMenu() {
    const el = document.getElementById("mobile-nav-menu")
    el.classList.toggle('expanded')
    el.classList.toggle('collapsed')
 }

function clearPendingTxs() {
    localStorage.removeItem("ExpandablesPendingTxs");
    localStorage.removeItem("BambooMarketPendingTxs");
    pendingTransactions.clear();
    location.reload();
};

const loadInfuraListings = async() => {
    const listings = await fetch(`https://www.expandables.io/.netlify/functions/listings?get=true`).then(res => res.text());
    const jsonData = listings ? JSON.parse(listings) : [];
    $("#live-collections").empty();
    $("#past-collections").empty();
    $("#live-collections").append(jsonData.liveJSX);
    $("#past-collections").append(jsonData.pastJSX);
    $("#num-live").text(` (${jsonData.numLive})`);
    $("#num-past").text(` (${jsonData.numPast})`);
    if (jsonData.numLive > 3) {
        $("#scroll-indicator-live").html(`<img class="down-arrow" src="images/down-arrow.png"> SCROLL<span class="hide-on-mobile"> FOR MORE</span> <img class="down-arrow" src="images/down-arrow.png">`);
    }
    if (jsonData.numPast > 3) {
        $("#scroll-indicator-past").html(`<img class="down-arrow" src="images/down-arrow.png"> SCROLL <span class="hide-on-mobile"> FOR MORE</span> <img class="down-arrow" src="images/down-arrow.png">`);
    }
}