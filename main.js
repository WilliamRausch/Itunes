/*
  Here is a rough idea for the steps you could take:
*/

// 1. First select and store the elements you'll be working with
// 2. Create your `submit` event for getting the user's search term
// 3. Create your `fetch` request that is called after a submission
// 4. Create a way to append the fetch results to your page
// 5. Create a way to listen for a click that will play the song in the audio play
let container = document.querySelector(".container");
let results;
console.log("hello");
var searchInput;
function search() {
    searchInput = document.getElementById("userInput").value;
    alert(searchInput);
    searchItunes();
}
function searchItunes(){
fetch(`https://itunes.apple.com/search?term=${searchInput}`)
  
  .then(
  
    function(response) {
  
      if (response.status !== 200) {
        console.log(response.status);
        return;
      }
      response.json().then(function(data) {
       	console.log(data);
        searchResults = data;
        console.log(results);
        display();
    
      });
    }
  )
  .catch(function(err) {
    console.log("Fetch Error :-S", err);
  });
}
function display(){
  for(i=0;i<searchResults.results.length;i++){
  console.log(searchResults.results[i].artistViewUrl);
  container.innerHTML += `<div class = "card${i}"><p>${searchResults.results[i].trackName}</p><h3>${searchResults.results[i].artistName}</h3><img src = "${searchResults.results[i].artistViewUrl}"></div>`
}
}



