document.addEventListener('DOMContentLoaded', function() {
    // Your sref data
    const srefData = [
        { id: '610458393', image: '/img/pic1.png', title: 'Lost in Thought' },
        { id: '1977305493', image: '/img/pic2.png', title: 'Beauty in thought' },
        { id: '2555281841', image: '/img/pic5.png', title: 'Jazz' },
        { id: '3010087591', image: '/img/pic11.png', title: 'Black Beauty' },
        { id: '865500053', image: '/img/pic12.png', title: 'Stars is the limit' },
        { id: '76', image: '/img/pic13.png', title: 'Fashion Model' },
        { id: '930242007', image: '/img/pic10.png', title: 'Confused' },
        { id: '3128439279', image: '/img/pic9.png', title: 'Wolf' },
        { id: '2254099361', image: '/img/pic6.png', title: 'Evil Twins' },
        { id: '1977305493', image: '/img/pic7.png', title: 'Sadness' },
        { id: '2732593321', image: '/img/pic14.png', title: 'Red Light District' },
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