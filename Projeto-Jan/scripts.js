document.addEventListener("DOMContentLoaded", () => {

    const artistData = [
        { name: "Henrique & Juliano", image: "./img/artista-henrique-juliano.jpg" },
        { name: "Jorge & Mateus", image: "./img/artista-jorge-mateus.jpg" },
        { name: "Zé Neto & Cristiano", image: "./img/artista-ze-neto.jpg" },
        { name: "Gusttavo Lima", image: "./img/artista-gustavo-limma.jpg" },
        { name: "Luan Santana", image: "./img/artista-luan-santana.jpg" },
        { name: "Matheus & Kauan", image: "./img/artista-mateus-kauan.jpg" },
        { name: "Jhonatas Dias", image: "./img/jhonatasd.jpeg" }
    ];

    const albumsData = [
        { name: "White Noise", artist: "Sleepy John", image: "./img/album-white-noise.jpg" },
        { name: "O Céu Explica Tudo", artist: "Henrique & Juliano", image: "./img/album-ceu-explica.jpg" },
        { name: "Nada como um dia após o outro", artist: "Racionais", image: "./img/album-vida-loka.jpg" },
        { name: "HIT ME HARD AND SOFT", artist: "Billie Eilish", image: "./img/album-hit-me.jpg" },
        { name: "CAJU", artist: "Liniker", image: "./img/album-caju.jpg" },
        { name: "Escândalo Íntimo", artist: "Luísa Sonza", image: "./img/album-escandalo.jpg" },
        { name: "EchoLine Z", artist: "Jhonatas Dias", image: "./img/violao.jpg" }
    ];

    const artistGrid = document.querySelector(".artists-grid");
    const albumsGrid = document.querySelector(".albums-grid");

    artistData.forEach(artist => {
        artistGrid.innerHTML += `
            <div class="artist-card">
                <img src="${artist.image}">
                <div class="play-button">
                    <i class="fa-solid fa-play"></i>
                </div>
                <h3>${artist.name}</h3>
                <p>Artista</p>
            </div>
        `;
    });

    albumsData.forEach(album => {
        albumsGrid.innerHTML += `
            <div class="album-card">
                <img src="${album.image}">
                <div class="play-button">
                    <i class="fa-solid fa-play"></i>
                </div>
                <h3>${album.name}</h3>
                <p>${album.artist}</p>
            </div>
        `;
    });

    

});

document.addEventListener("click", (e) => {
    const playButton = e.target.closest(".play-button");

    if (!playButton) return;

    const card = playButton.closest(".artist-card, .album-card");
    const title = card.querySelector("h3").innerText;

    playButton.style.transform = "scale(0.9)";
    setTimeout(() => {
        playButton.style.transform = "";
    }, 150);

});

