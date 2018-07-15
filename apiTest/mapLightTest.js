//SETUP VARIABLES
//===============================================

//Variables to hold our API key:
const MLKey = "48f0d8d61de56094a9fda246fe636298";

//Variable to hold the search term
let donorInput = "";
let candidateNames = [];


//Constant to hold the parts of the API endpoint/call
const MLbase = "https://api.maplight.org/maplight-api/fec/contributions?donor_organization=" + donorInput + "&apikey=" + MLKey;

//FUNCTIONS
//===============================================

//This function will only ask for the final URL to download data from.
function donorSearch(queryURL) {

    //AJAX function to GET the data, which is then stored in variable called: "respData"
    $.ajax({
        url: queryURL,
        method: "GET"
    }).done(function(respData) {
            console.log("-----------------------");
            console.log("URL: " + queryURL);
            console.log("-----------------------");

            respData.data.rows.forEach(function(transaction) { 
                checkName(transaction)    
            });

            console.log("candidateNames without: " + candidateNames + " You can do it!");
            console.log("-----------------------");

         for (let index = 0; index < candidateNames.length; index++) {
             const candidate = $("<p>");
             candidate.html(candidateNames[index]);
             $("#well-section").append(candidate);
             
         }
    });
};


function checkName (transaction) {

    if (candidateNames.includes(transaction.CandidateName)) {
    } else {
        candidateNames.push(transaction.CandidateName)
        console.log("You did it!");
    }  
};

//METHODS
//================================================

//This buttons clears the candidateNames array (in openSecretsTest it also clears the div displaying the results)
$("#clear-all").on("click", function() {
    candidateNames = [];
});

//onClick for the donorButton
$("#donorButton").on("click", function(event) {
    event.preventDefault();
    $("#well-section").empty();
    donorInput = $("#search-term").val();
    let searchURL = "https://api.maplight.org/maplight-api/fec/contributions?donor_organization=" + donorInput + "&apikey=" + MLKey;

    donorSearch(searchURL);
});


