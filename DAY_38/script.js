function changeImage(section) {
    const image = document.getElementById('main-image');
    const navItems = document.querySelectorAll('.nav div');

    // Retire la classe active de tous les éléments
    navItems.forEach(item => {
        item.classList.remove('active');
        item.querySelector('a').classList.remove('active'); // Retire la classe active du lien
    });

    // Ajoute la classe active à l'élément cliqué
    const activeItem = document.querySelector(`.${section}`);
    activeItem.classList.add('active');
    activeItem.querySelector('a').classList.add('active'); // Ajoute la classe active au lien

    switch (section) {
        case 'home':
            image.src = 'https://media.istockphoto.com/id/1396856251/photo/colonial-house.jpg?s=612x612&w=is&k=20&c=5DrAjZcPcemQote6YW_ky9VSo77ljb1j_NeFpnmR_og=';
            break;
        case 'work':
            image.src = 'https://images.freeimages.com/image/previews/c8e/may-1st-labor-day-cartoon-workers-5690902.jpg';
            break;
        case 'blog':
            image.src = 'https://media.istockphoto.com/id/1469907264/vector/content-writer-blogger-or-bullet-journal-publishing-editor-or-writing-article-online.webp?s=612x612&w=is&k=20&c=GRf0ewf80N2Uf-op6XH2l_fdQ178BVAI54hQ11T2HWE=';
            break;
        case 'about':
            image.src = 'https://media.istockphoto.com/id/1402604850/photo/the-word-about-us-on-wooden-cubes-business-communication-and-information.jpg?s=612x612&w=is&k=20&c=5R9e6DC0O_cdANUcdrIxMJqJGkniY-3QQbGFNdl4Oic=';
            break;
    }
}
