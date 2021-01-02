
const searchBtn = document.getElementById('search-btn');

searchBtn.addEventListener('click', function(){
  searchResult();
})


function searchResult(){
  document.getElementById('top').innerHTML = "";
const songTitle = document.getElementById('title-input').value
  fetch(`https://api.lyrics.ovh/suggest/${songTitle}`)
  .then(response => response.json())
  .then(data => {
    fetchdata = data;

    for(let i = 0; i < data.data.length; i++){
    const title =data.data[i].title  
    const artist = data.data[i].artist.name

    document.getElementById('top').innerHTML += `<div class="" id="search-result">
    <p class="author lead"><strong>${title}</strong> Album by <span>${artist}</span> <a href="#lyrics"><button onclick="getLyrics(${i})" class="btn btn-success">Get Lyrics</button></a></p>
</div>`/*`${title} ${artist}` */
      if(i==9){
        break;
      }
}})
}

function getLyrics (index){
  const title = fetchdata.data[index].title
  const artist = fetchdata.data[index].artist.name

  fetch(`https://api.lyrics.ovh/v1/${artist}/${title}`)
  .then(response => response.json())
  .then(data => {
    const lyrics = data.lyrics
    if(lyrics == undefined){
      alert("lyrics not found")
    }

    document.getElementById("single").innerHTML = `<button class="btn go-back">&lsaquo;</button>
    <h2 class="text-success mb-4">${title}</h2>
    <pre id="lyrics" class="lyric text-white">${lyrics}</pre>`
  })
}
// fetch('https://api.lyrics.ovh/suggest/summer')
//   .then(response => response.json())
//   .then(data => {

//     for(let i = 0; i < data.data.length; i++){
//     const title =data.data[i].title  
//     const artist = data.data[i].artist.name

 
//     document.getElementById('search-result').innerHTML += `<p class="author lead"><strong>`${title}` Noon</strong> Album by <span>Washed Out</span> <button class="btn btn-success">Get Lyrics</button></p>
//     <p class="author lead"><strong>Purple Noon</strong> Album by <span>Washed Out</span> <button class="btn btn-success">Get Lyrics</button></p>
//     <p class="author lead"><strong>Purple Noon</strong> Album by <span>Washed Out</span> <button class="btn btn-success">Get Lyrics</button></p>
//     <p class="author lead"><strong>Purple Noon</strong> Album by <span>Washed Out</span> <button class="btn btn-success">Get Lyrics</button></p>
//     <p class="author lead"><strong>Purple Noon</strong> Album by <span>Washed Out</span> <button class="btn btn-success">Get Lyrics</button></p>`/*`${title} ${artist}` */
// }})