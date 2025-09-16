document.addEventListener('DOMContentLoaded', () => {

    const mainButtons = document.querySelector('.main-buttons');
    const homeSection = document.querySelector('.home-section');
    const sections = {
        'film-content': document.getElementById('film-content'),
        'agenda-content': document.getElementById('agenda-content'),
        'pengumuman-content': document.getElementById('pengumuman-content'),
    };
    
    // Fungsi untuk menampilkan konten yang dipilih
    function showSection(sectionId) {
        // Sembunyikan semua bagian konten
        Object.values(sections).forEach(section => {
            section.classList.add('hidden');
        });
        // Tampilkan hanya bagian yang dipilih
        if (sections[sectionId]) {
            sections[sectionId].classList.remove('hidden');
        }
        mainButtons.classList.add('hidden');
        homeSection.classList.add('hidden');
    }

    // Data Film (simulasi dari server)
    const films = [
        { title: "Judul Film 1", desc: "Deskripsi singkat tentang film ini.", imageUrl: "https://via.placeholder.com/250x150?text=Film+1" },
        { title: "Judul Film 2", desc: "Film ini bercerita tentang petualangan seru.", imageUrl: "https://via.placeholder.com/250x150?text=Film+2" },
        { title: "Judul Film 3", desc: "Film komedi yang bisa membuat Anda tertawa.", imageUrl: "https://via.placeholder.com/250x150?text=Film+3" },
        { title: "Judul Film 4", desc: "Film dokumenter tentang alam liar.", imageUrl: "https://via.placeholder.com/250x150?text=Film+4" }
    ];

    // Fungsi untuk memuat film ke halaman
    function loadFilms() {
        const filmListContainer = document.getElementById('film-list');
        films.forEach(film => {
            const filmCard = document.createElement('div');
            filmCard.classList.add('card');
            filmCard.innerHTML = `
                <img src="${film.imageUrl}" alt="${film.title}">
                <h3>${film.title}</h3>
                <p>${film.desc}</p>
            `;
            filmListContainer.appendChild(filmCard);
        });
    }

    // Tambahkan event listener untuk tombol Film & TV
    document.getElementById('film-btn').addEventListener('click', (event) => {
        event.preventDefault(); // Mencegah halaman reload
        showSection('film-content');
        loadFilms();
    });

    // Tambahkan event listener untuk tombol Home
    document.querySelector('nav ul li:first-child a').addEventListener('click', (event) => {
        event.preventDefault();
        // Sembunyikan semua konten dan tampilkan kembali konten Home
        Object.values(sections).forEach(section => {
            section.classList.add('hidden');
        });
        mainButtons.classList.remove('hidden');
        homeSection.classList.remove('hidden');
    });

});
