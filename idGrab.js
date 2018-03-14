//****************************************************
//HERE IS WHERE I STARTED WORKING OUT THE PROBLEM, so you know where I was thinking from
//and what I showed Phil to begin with.
//****************************************************


/* pseudocode for the problem at hand:

what needs to happen:
    state is selected
    call is made to OpenSecrets
    response is JSON for two senators (CardSearch.js)
    value for keys called "cid" and "bioguide_id" grabbed for each senator
        four calls made to OpenSecrets:  (do in an order, separated by .then)
            senator1: using "cid", call for donors and totals
            senator1: using "cid", call for industries and totals
            senator2: using "cid", call for donors and totals
            senator2: using "cid", call for industries and totals

        four calls made to ProPublica:
            senator1: using "bioguide_id", call for introduced
            senator1: using "bioguide_id", call for co-sponsored
            senator2: using "bioguide_id", call for introduced
            senator2: using "bioguide_id", call for co-sponsored
    
    when card is clicked, data is displayed
        in the correct places
            for each senator.
*/

//*************************************
// THIS IS THE ROUGH UNTESTED CODE:
//*************************************
let senator1 = {
    "cid": "",
    "bioguide_id": ""
};

let senator2 = {
    "cid": "",
    "bioguide_id": ""
};

senator1 = {"cid": senators[0].cid, "bioguide_id": senators[0].bioguide_id}; //Yes, if the dot notation is off, please change it as this is untested.
senator2 = {"cid": senators[1].cid, "bioguide_id": senators[1].bioguide_id};

//*******************************************
//  OK, SO HERE'S WHAT NEEDS TO HAPPEN WITH THIS
//*******************************************

// The non-commented code needs to get put into CardSearch: the objects up where the senators array is defined (keep the array as well!)
// and the other two lines in between lines 30-31 of CardSearch.
//
// Then there needs to be a Promise.all set up within that same API.getSenators function (or defined elsewhere and called within that function)
// to perform the actual calls. See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all
// We will need to chain a bunch of promises together to make the calls work with any sense of order. (Otherwise, they would be asynchronous.)
//
// Then we would have to deal with the ProPublica call in the same way. Within the same function.
//
// I did not ask about how to make this display only with the click. Phil was technically still working with the other group.






/*************THIS BIT IS NOT VERY IMPORTANT**************
//This is some notes I was taking when Jack was giving Phil a suggestion on how to handle this
//They ended up deciding on the chaining promises approach kinda sorta.
/* chain .then's, deferred with axios, another promise library, set up flags in each one
whatever is fetched = true; x3, then do the thing. once all the promises have resoved, run a function...
this is for running the calls.
(library called Q for this)  */