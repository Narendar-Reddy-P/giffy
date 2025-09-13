
const img = document.createElement('img');
const key="g7LVOonZave5nJQYHqyBwNvyXjHy2MuP";
let s="dog";
const p=document.createElement("p");
function search(){
   fetch(`https://api.giphy.com/v1/gifs/translate?api_key=${key}&s=${s}`)
   .then(function(response) {
      return response.json();
   })
   .then(function(response) {
      img.setAttribute("src",response.data.images.original.url);
      if(document.body.contains(p)){
         document.body.removeChild(p);
      };
      document.body.appendChild(img);
   }).catch(message=>{
      p.textContent=`Unable to find the gif. search with proper spelling`;
      let a=document.body.childNodes;
      if(document.body.contains(img)){
         document.body.removeChild(img);
      };
      document.body.appendChild(p);
   });
}

const btn=document.querySelector("button");
const input=document.querySelector("input");
btn.addEventListener("click",()=>{
   s=input.value;
   search();
})