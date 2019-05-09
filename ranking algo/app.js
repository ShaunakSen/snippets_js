/*
Overview of the ranking process
----------------------------------------------
1. We source data from: https://cy.ons.gov.uk/peoplepopulationandcommunity/crimeandjustice/datasets/crimeseverityscoredatatool
2. This data is designed to provide Crime Severity Scores for different crime categories
3. We identify the crime categories in the data tool corresponding to the categories the API returns
4. Each category of crime is given a series of weights from the weights provided in the Crime Severity Scores dataset
5. The "all-crime" category has wt calculated by avg of wts of all crimes in the Crime Severity Scores dataset
6. For each of the categories, the mean of the weights is indicative of the overall severity of that category of crime
7. A region consists of many listings. For each listing, the freq of a particular crime category is multiplied by the Severity Score for that crime category
8. This gives us a weighted measure of the crime in that listing
9. The sum of the weighted measures of the crime for each listing gives us an est of crime for overall reg
10. For each listing [1-(weighted measure of the crime in that listing)/(total crime in the region)]*100 gives a safety score for the particular listing
11. Additionally (est of crime for overall reg)/(number of crimes in region * wt of "all-crime") gives us an estimate of crime in the region overall 
*/


// define the crime data
var crime_data = [
  {
    "url": "all-crime",
    "name": "All crime",
    "weight": [534.531]    
  },
  {
    "url": "anti-social-behaviour",
    "name": "Anti-social behaviour",
    "weight": [10]
  },
  {
    "url": "bicycle-theft",
    "name": "Bicycle theft",
    "weight": [10]
  },
  {
    "url": "burglary",
    "name": "Burglary",
    "weight": [438,438,438,438,438,438,438,438,2127,2127,117,117,117,117,1513,1513]
  },
  {
    "url": "criminal-damage-arson",
    "name": "Criminal damage and arson",
    "weight": [439, 837, 185, 7,7,7,7, 19,19,19,19,19]
  },
  {
    "url": "drugs",
    "name": "Drugs",
    "weight": [497,5,11,9,3]
  },
  {
    "url": "other-theft",
    "name": "Other theft",
    "weight": [33]
  },
  {
    "url": "possession-of-weapons",
    "name": "Possession of weapons",
    "weight": [75, 635, 327, 58, 55, 1365, 55]
  },
  {
    "url": "public-order",
    "name": "Public order",
    "weight": [10,24,365,365,365,1880,365,78]
  },
  {
    "url": "robbery",
    "name": "Robbery",
    "weight": [746, 746]
  },
  {
    "url": "shoplifting",
    "name": "Shoplifting",
    "weight": [13]
  },
  {
    "url": "theft-from-the-person",
    "name": "Theft from the person",
    "weight": [86]
  },
  {
    "url": "vehicle-crime",
    "name": "Vehicle crime",
    "weight": [7,19,8,722,48,34,124,12]
  },
  {
    "url": "violent-crime",
    "name": "Violence and sexual offences",
    "weight": [
       7978.79308113648
      ,4662.78644445245
      ,15
      ,1092.34479240094
      ,1595.24709501025
      ,112.15659045088
      ,677.244392560494
      ,1918.80482502285
      ,1965.33792360212
      ,1492.156822371
      ,2892.75843998986
      ,1965.33792360212
      ,1325.82468619707
      ,53.5240188470067
      ,40.2480244755245
      ,332.815555280363
      ,469.244602272727
      ,722.136363636364
      ,1005.5671641791
      ,135.976363636364
      ,184.099471420817
      ,127.372669975046
      ,285.423603960396
      ,250.822004278075
      ,50.1512284301347
      ,184.094705907588
      ,285.423603960396
      ,371.520132073593
      ,367.201013787313
      ,2019.12524510752
      ,279.527477076785
      ,38.659764628808
      ,40.1898039535136
      ,50.9681061812391
      ,14.5845789366883
      ,146.132016520093
      ,146.03627137713
      ,106.784090909091
      ,292.944257511556
      ,1019.57142857143
      ,1213.35552301863
      ,9.33492305934955
      ,16.0743773639636
      ,36.206513017905
      ,1480.20600840336
      ,3240.75114092519
      ,3261.05462317906
      ,2895.21186046374
      ,3871.56327084556
      ,3229.46355731849
      ,3006.50064137593
      ,2929.97657657658
      ,3905.26442960177
      ,2535.15019243852
      ,582.617735198269
      ,762.66610629548
      ,561.971001722212
      ,582.617735198269
      ,746.543262666188
      ,817.052578372558
      ,442.845698585596
      ,1143.13564649771
      ,719.132192927729
      ,753.177388029433
      ,709.253820030277
      ,719.132192927729
      ,753.177388029433
      ,709.253820030277
      ,3344.01221004469
      ,752.333333333333
      ,923.369623233909
      ,1046.4691883963
      ,284.666666666667
      ,1410.34600262123
      ,869.8871951601
      ,1599.915625
      ,243.065348484848
      ,688.851395640432
      ,495.995013082813
      ,71.2298615245973
      ,1001.29649561471
      ,53.0388888888889
      ,40.8871500816836
      ]
  },
  {
    "url": "other-crime",
    "name": "Other crime",
    "weight": [
       164.134151525283
      ,370.054169797145
      ,164.134151525283
      ,4.46024711609694
      ,33.5865597751014
      ,123.224782824522
      ,242.137556531177
      ,123.224782824522
      ,123.285982120685
      ,54.1564644831236
      ,59.0491574317024
      ,54.6913766233766
      ,154.512692562989
      ,198.620318480861
      ,114.085378384913
      ,156.992344497608
      ,175.440939704635
      ,24.6471885521885
      ,4392
      ,447.333184815185
      ,164.545439969489
      ,9.76775479835613
      ,209.131776428165
      ,53.9779166666667
      ,41.6344282080496
      ,411.166570526199
      ,155.336405083384
      ,19.5044483671668
      ,33.2641700404858
      ,11.1459269253634
      ,37.4284515872665
      ,16.1109937611408
      ,175.440939704635
      ,153.406185506759
      ,119.776807251307
      ,7.52498996271867

    ]
  }
]


// utility function
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}


var listings_data = []

var crime_data_processed = {}

// function to calculate mean of wts for each crime type

function processCrimeData(method='mean'){
  crime_data.forEach(crime => {
    var crime_name = crime['url'];
    var crime_wts = crime['weight'];
    sum_wts = 0
    crime_wts.forEach(wt => {
      sum_wts += wt
    });
    var average_wt = sum_wts/crime_wts.length;
    crime_data_processed[crime_name] = average_wt

  });
}
processCrimeData('mean');

// function to randomly generate listings data
function populateListingData(num_listings){
  for (var i=0; i<num_listings; ++i){
    var listing_obj = {}
    Object.keys(crime_data_processed).forEach(crime_category => {
      var crime_count = getRandomInt(31);
      listing_obj[crime_category] = crime_count;
    });
    listings_data.push(listing_obj)
  }
}

// populate listing data randomly
populateListingData(5);



var total_crime_for_region = 0;
var total_number_of_crimes_in_region = 0;


// for each listing
listings_data.forEach(listing => {

  // set crime est of listing to 0

  var crime_for_listing = 0
  // for each crime category in listing
  for(var crime_category in listing){
    // get wt of that crime category
    var crime_weight = crime_data_processed[crime_category];
    // get freq of the crime cat
    var crime_count = listing[crime_category];
    // add to total crime est of region
    total_crime_for_region += crime_weight*crime_count;
    // add to total crime est of listing
    crime_for_listing += crime_weight*crime_count;

    
    total_number_of_crimes_in_region += crime_count;
  }
  // total crime for entire region updated
  // crime for this listing finalized
  listing['crime_estimate'] = crime_for_listing;
});

//console.log(listings_data)

console.log(total_crime_for_region, total_number_of_crimes_in_region);


// sanitary check

var check_total=0

listings_data.forEach(listing => {
  check_total += listing['crime_estimate']
});

console.log(Math.round(check_total) == Math.round(total_crime_for_region))


// get safety est of region overall
var region_crime_overall = total_crime_for_region/(total_number_of_crimes_in_region*crime_data_processed['all-crime'])

console.log("Overall crime in region:", region_crime_overall)


// calculate safety score for each listing  

var acceptabe_perc = 100/listings_data.length;



listings_data.forEach(listing => {
  var crime_score = listing['crime_estimate']*100/total_crime_for_region
  listing['crime_contribution'] = crime_score
});



console.log(listings_data);

var safety_contributions = []


for (var i=0; i<listings_data.length; ++i){
  safety_contributions.push(100 - listings_data[i]['crime_contribution'])
}

console.log(safety_contributions)


// calculating safety scores

var max_safety_perc = Math.max.apply(null, safety_contributions)

var safety_scores = []

for (var i=0; i<safety_contributions.length; ++i){
  safety_scores.push((100/max_safety_perc)*safety_contributions[i])
}

console.log(safety_scores)

// log these safety scores into the main listings obj

for (var i=0; i<listings_data.length; ++i){
  listings_data[i]['safety_score'] = safety_scores[i]
}

console.log(listings_data)

// the current safety scores are relative to the current region

// normalize them by the overall safety of the region

var region_safety_metadata = [0.5, 0.6]

listings_data.forEach(listing => {
  if (region_crime_overall < region_safety_metadata[0]){
    // very safe region
    listing['safety_score_normalized'] = listing['safety_score']
  }
  else if (region_crime_overall > region_safety_metadata[0] && region_crime_overall < region_safety_metadata[1]){
    // medium safe
    listing['safety_score_normalized'] = listing['safety_score'] - 5;
  }
  else {
    // unsafe
    listing['safety_score_normalized'] = listing['safety_score'] - 10;
  }
});

console.log(listings_data)


function rankingAlgorithm(){
  
}









