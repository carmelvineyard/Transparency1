
//SETUP VARIABLES
//===============================================

//Variables to hold our API keys:
const opsKey = "69506b43429a530aad8ad9db12c5d43e";

//Variables to hold our form results:
var stateInput = $("#state-abbr-select").val();
let getLegisInput = $("#legis-select").val();
let legisContribInput = $("#contrib-select").val();
let legisIndInput = $("#industry-select").val();

//Constant to hold the parts of the API endpoint/call
const indBase = "https://www.opensecrets.org/api/?method=candIndustry&cid=" + legisIndInput + "&apikey=" + opsKey + "&output=json";
const contriBase = "https://www.opensecrets.org/api/?method=candContrib&cid=" + legisContribInput + "&apikey=" + opsKey + "&output=json";
var stateBase = "http://www.opensecrets.org/api/?method=getLegislators&id=" + stateInput + "&apikey=" + opsKey + "&output=json";
const legisBase = "http://www.opensecrets.org/api/?method=getLegislators&id=" + getLegisInput + "&apikey=" + opsKey + "&output=json";

//FUNCTIONS
//================================================

//This function will only ask for the final URL to download data from
function runQuery(queryURL) {
    //AJAX uses queryURL and GETs the JSON. Data is then stored in a variable called: "respData"
    $.ajax({
        url: queryURL,
        method: "GET"

    }).done(function(respData) {
        console.log("queryURL: " + queryURL);
        console.log(respData);
        console.log("-----------------------------");

        $("#well-section").html(respData);
    })
}; //end runQuery

function getSenators(queryURL) {
    //AJAX uses queryURL and GETs the JSON. Data is then stored in a variable called: "respData"
    $.ajax({
        url: queryURL,
        method: "GET"

    }).done(function(respData) {
        // var senators = [];
        var data = JSON.parse(respData);
        var attr = "@attributes"
        var senatorsData = data.response.legislator.slice(-2);
        for (var i = 0; i < senatorsData.length; i++) {
            var senator = $("<p>");
            senator.html(senatorsData[i][attr].firstlast + "<br>" +
                "Party: " + senatorsData[i][attr].party);
            $("#well-section").append(senator);
        }

        // senators.push(respData);
        console.log("queryURL: " + queryURL);
        console.log(senatorsData);
        console.log("-----------------------------");

        
    })
}; 

//METHODS
//==================================================

//This buttons clears the search results section
$("#clear-all").on("click", function() {
    $("#well-section").empty();
});

//onClick for the industryButton
$("#industryButton").on("click", function(event) {
    event.preventDefault();
    $("#well-section").empty();

    let searchURL = indBase;

    runQuery(searchURL);
});

//onClick for the contributorButton
$("#contributorButton").on("click", function(event) {
    event.preventDefault();
    $("#well-section").empty();

    let searchURL = contriBase;

    runQuery(searchURL);
});

//onClick for the legislatorButton
$("#contributorButton").on("click", function(event) {
    event.preventDefault();
    $("#well-section").empty();

    let searchURL = legisBase;

    runQuery(searchURL);
});

//onClick for the stateButton
$("#stateButton").on("click", function(event) {
    event.preventDefault();
    $("#well-section").empty();
    stateInput = $("#state-abbr-select").val();
    console.log ("stateInput = " + stateInput);
    console.log ("stateBase = " + stateBase);
    let searchURL = "http://www.opensecrets.org/api/?method=getLegislators&id=" + stateInput + "&apikey=" + opsKey + "&output=json";
    console.log ("searchURL = " + searchURL);
    getSenators(searchURL);


});
