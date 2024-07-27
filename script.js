document.addEventListener('DOMContentLoaded', function() {
    // Your sref data
    const srefData = [
        { id: '6002', image: '/img/sref1.png', title: 'Artwork Title 1' },
        { id: '6045', image: '/img/sref2.png', title: 'Artwork Title 2' },
        { id: '6074', image: '/img/sref10.png', title: 'Artwork Title 3' },
        { id: '6078', image: '/img/sref11.png', title: 'Artwork Title 4' },
        { id: '6098', image: '/img/sref5.png', title: 'Artwork Title 5' },
        { id: '5258', image: '/img/sref6.png', title: 'Artwork Title 6' },
        { id: '5258', image: '/img/sref7.png', title: 'Artwork Title 6' },
        { id: '5258', image: '/img/sref8.png', title: 'Artwork Title 6' },
        { id: '5258', image: '/img/sref9.png', title: 'Artwork Title 6' },
        { id: '5258', image: '/img/sref12.png', title: 'Artwork Title 6' },
        // Add more artwork entries as needed
    ];

    // Populate featured srefs
    const srefGallery = document.querySelector('.sref-gallery');
    srefData.forEach(sref => {
        const srefItem = document.createElement('div');
        srefItem.className = 'sref-item';
        srefItem.innerHTML = `
            <img src="${sref.image}" alt="${sref.title}">
            <p>--sref ${sref.id}</p>
            <p class="artwork-title">${sref.title}</p>
        `;
        srefGallery.appendChild(srefItem);
    });

    // Handle index button clicks
    const indexButtons = document.querySelectorAll('.index-buttons button');
    indexButtons.forEach(button => {
        button.addEventListener('click', function() {
            indexButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            // Here you would typically load different content based on the selected button
        });
    });

    // Handle smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});