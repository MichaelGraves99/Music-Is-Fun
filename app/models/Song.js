export default class Song {
    constructor(song) {
        this.title = song.trackName
        //Change 250x250 if you want a larger image
        this.albumArt = song.artworkUrl60.replace(/60x60/g, "250x250")
        this.artist = song.artistName
        this.collection = song.collectionName
        this.price = song.collectionPrice
        this.preview = song.previewUrl
        this.kind = song.kind
    }


    get Template() {
        return `
        <div class="col-lg-3 col-md-4 col-sm-12 card">
        <img src="${this.albumArt}" class="card-img-top img-fluid cen pd-3" alt="...">
            <div class="card-body">
                <h5 class="card-title">${this.title}</h5>
            </div>
            <ul class="list-group list-group-flush cen pd-3">
                <li class="list-group-item">${this.artist}</li>
                <li class="list-group-item">${this.price}</li>
            </ul>
           <div>
            <audio controls class="cen pd-3">
                <source src="${this.preview}" type="audio/mpeg"/>
                Your browser does not support the audio element.
            </audio >
           </div >
        </div> `
    }

}