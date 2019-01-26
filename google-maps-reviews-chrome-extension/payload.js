// Store data as JSON
data = {}

// Get element blocks to iterate
var results = document.querySelectorAll("div.section-result-text-content");

// Iterate and add to JSON
dataArray = []
for (i = 0; i < results.length; i++) {
   
   coName = results[i].querySelector("h3").innerText
   stars = results[i].querySelector("span.cards-rating-score").innerText
   reviews = results[i].querySelector("span.section-result-num-ratings").innerText.match(/\((.*)\)/)[1]
   
   entry = {}
   entry["Name"] = coName
   entry["Stars"] = stars
   entry["Reviews"] = reviews
   
   dataArray.push(entry)
}

data["Results"] = dataArray;
 
//console.log(data)

// send scraped data as a chrome message
chrome.runtime.sendMessage(data);


