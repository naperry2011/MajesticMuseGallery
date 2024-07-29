document.addEventListener('DOMContentLoaded', function() {
    const srefGallery = document.getElementById('srefGallery');
    const pageTitle = document.querySelector('h2').textContent;
    let startSref, endSref, folderName;

    if (pageTitle.includes('0 - 99')) {
        startSref = 0;
        endSref = 99;
        folderName = 'sref0-99';
    } else if (pageTitle.includes('100 - 199')) {
        startSref = 100;
        endSref = 199;
        folderName = 'sref100-199';
    } else if (pageTitle.includes('200 - 299')) {
        startSref = 200;
        endSref = 299;
        folderName = 'sref200-299';
    } else {
        // Handle random srefs pages
        handleRandomSrefs();
        return;
    }

    populateSrefRange(startSref, endSref, folderName);
});

function populateSrefRange(start, end, folder) {
    const srefGallery = document.getElementById('srefGallery');
    for (let i = start; i <= end; i++) {
        const srefItem = document.createElement('div');
        srefItem.className = 'sref-item';
        srefItem.innerHTML = `
            <img src="img/${folder}/sref${i}.png" alt="Sref ${i}" onerror="this.src='img/placeholder.png'">
            <p>--sref ${i}</p>
        `;
        srefGallery.appendChild(srefItem);
    }
}

function handleRandomSrefs() {
    const srefGallery = document.getElementById('srefGallery');
    const allSrefs = [];
    const folders = ['sref0-99', 'sref100-199', 'sref200-299'];

    folders.forEach((folder, index) => {
        const start = index * 100;
        const end = start + 99;
        for (let i = start; i <= end; i++) {
            allSrefs.push({ number: i, folder: folder });
        }
    });

    const randomSrefs = shuffleArray(allSrefs).slice(0, 20);

    randomSrefs.forEach(sref => {
        const srefItem = document.createElement('div');
        srefItem.className = 'sref-item';
        srefItem.innerHTML = `
            <img src="img/${sref.folder}/sref${sref.number}.png" alt="Sref ${sref.number}" onerror="this.src='img/placeholder.png'">
            <p>--sref ${sref.number}</p>
        `;
        srefGallery.appendChild(srefItem);
    });
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}