var featureElements = [
    {
        id: 1, 
        name: 'ប្រាសាទអង្គរវត្ត', 
        type: 'DESTINATION',
        image: 'img/ak-01.jpg', 
        owner: 'សៀមរាបដើរលេង'
    },
    {
        id: 2, 
        name: 'ប្រាសាទតាព្រហ្ម', 
        type: 'DESTINATION',
        image: 'img/dest-taprom-01.jpg', 
        owner: 'សៀមរាបដើរលេង'
    },
    {
        id: 3, 
        name: 'ផាប់ស្ត្រីត', 
        type: 'DESTINATION',
        image: 'img/dest-pubst-01.jpg', 
        owner: 'សៀមរាបដើរលេង'
    },
    {
        id: 4, 
        name: 'ឧទ្យានជាតិភ្នំគូលែន', 
        type: 'DESTINATION',
        image: 'img/dest-kulen-01.jpg', 
        owner: 'សៀមរាបដើរលេង'
    }

    // {
    //     id: 5, 
    //     name: 'ព្រះខាន', 
    //     page: 'description',
    //     type: 'DESTINATION',
    //     image: 'https://www.renown-travel.com/images/preah-khan-l.jpg', 
    //     owner: 'សៀមរាបដើរលេង'
    // },
    // {
    //     id: 6, 
    //     name: 'តាព្រហ្ម', 
    //     page: 'description',
    //     type: 'DESTINATION',
    //     image: 'https://asiatourist.co/wp-content/uploads/2017/10/cambodia-1.jpg', 
    //     owner: 'សៀមរាបដើរលេង'
    // },
    // {
    //     id: 7, 
    //     name: 'នាគពោន', 
    //     page: 'description',
    //     type: 'DESTINATION',
    //     image: 'https://live.staticflickr.com/4905/45026391855_796d80a851_b.jpg', 
    //     owner: 'សៀមរាបដើរលេង'
    // },
    // {
    //     id: 8, 
    //     name: 'បន្ទាយក្តី', 
    //     page: 'description',
    //     type: 'DESTINATION',
    //     image: 'https://justsiemreap.com/wp-content/uploads/2018/05/banteay-kdei-temple-guide.jpg', 
    //     owner: 'សៀមរាបដើរលេង'
    // }
]

featureElements.forEach(extractCard);

function extractCard(item){
    const root = document.querySelector('.card-row');

    const card_content = `<div id="`+ item.id +`" class="card-column" onclick="openDescription('`+item.id+`')">` + 
                        `<div class="card">` +
                            `<img class="card-image" src="`+ item.image + `">` +
                            `<div class="card-footer">`+
                                // `<p class="card-text">`+ item.type +`</p>` +
                                `<h3 class="card-title">`+ item.name +`</h3>` +
                                // `<p class="card-text">by ` +
                                    // `<span class="card-owner" >`+ item.owner +`</span>` +
                                // `</p>`+
                            `</div>`+
                        `</div>` +
                    `</div>`;

    root.insertAdjacentHTML('beforeend', card_content);
}

function openDescription(item){
    if(item==1)
        window.open('dest-angkor-wat.html','_self');
    if(item==2)
        window.open('dest-ta-prohm.html','_self');
    if(item==3)
        window.open('dest-pub-street.html','_self');
    if(item==4)
        window.open('dest-kulen.html','_self');
}