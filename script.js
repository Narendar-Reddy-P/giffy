
const img = document.querySelector('img');
const key="g7LVOonZave5nJQYHqyBwNvyXjHy2MuP";
let s="dog";
function search(){
   fetch(`https://api.giphy.com/v1/gifs/translate?api_key=${key}&s=${s}`)
   .then(function(response) {
      return response.json();
   })
   .then(function(response) {
      img.src = response.data.images.original.url;
   });
}

const btn=document.querySelector("button");
const input=document.querySelector("input");
btn.addEventListener("click",()=>{
   s=input.value;
   search();
})
search();