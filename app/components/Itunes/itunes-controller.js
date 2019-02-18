import ItunesService from "./itunes-service.js";
//Private
const itunesService = new ItunesService()

function drawSongs() {
  let template = '';
  let tem1 = itunesService.Songs
  tem1.forEach(song => {
    console.log(song.kind)
    if (song.kind == "song") {
      template += song.Template
    }
  })
  //changes button back to GET MUSIC once songs are loaded
  document.querySelector('#get-music-button').textContent = 'Search'
  document.querySelector('#stuff').innerHTML = template
}


//PUBLIC
class ItunesController {
  constructor() {
    //BE SURE TO REGISTER YOUR SUBSCRIBERS!!!!!!!
    console.log('controller built')
    itunesService.addSubscriber('songs', drawSongs)
  }



  //DO NOT MODIFY THIS METHOD
  getMusic(e) {
    e.preventDefault();
    var artist = e.target.artist.value;
    //changes the button to loading while songs load
    document.querySelector('#get-music-button').textContent = 'Wait for it...'
    itunesService.getMusicByArtist(artist)
  }
}


export default ItunesController