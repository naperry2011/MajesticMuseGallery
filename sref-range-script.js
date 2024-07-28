document.addEventListener('DOMContentLoaded', function() {
    const srefGallery = document.getElementById('srefGallery');
    const pageTitle = document.querySelector('h2').textContent;
    let startSref, endSref;

    if (pageTitle.includes('0 - 99')) {
        startSref = 0;
        endSref = 99;
    } else if (pageTitle.includes('100 - 199')) {
        startSref = 100;
        endSref = 199;
    } else if (pageTitle.includes('200 - 299')) {
        startSref = 200;
        endSref = 299;
    } else {
        // Handle random srefs pages here
        // For this example, we'll show 20 random srefs
        const allSrefs = Array.from({length: 300}, (_, i) => i);
        const randomSrefs = shuffleArray(allSrefs).slice(0, 20);
        populateRandomSrefs(randomSrefs);
        return;
    }

    for (let i = startSref; i <= endSref; i++) {
        const srefItem = document.createElement('div');
        srefItem.className = 'sref-item';
        srefItem.innerHTML = `
            <img src="img/sref${i}.png" alt="Sref ${i}" onerror="this.src='img/placeholder.png'">
            <p>--sref ${i}</p>
            <p class="artwork-title">Artwork Title ${i}</p>
        `;
        srefGallery.appendChild(srefItem);
    }
});

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function populateRandomSrefs(randomSrefs) {
    const srefGallery = document.getElementById('srefGallery');
    randomSrefs.forEach(i => {
        const srefItem = document.createElement('div');
        srefItem.className = 'sref-item';
        srefItem.innerHTML = `
            <img src="img/sref${i}.png" alt="Sref ${i}" onerror="this.src='img/placeholder.png'">
            <p>--sref ${i}</p>
            <p class="artwork-title">Artwork Title ${i}</p>
        `;
        srefGallery.appendChild(srefItem);
    });
}