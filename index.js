var featureElements = [
    {
        id: 1, 
        name: 'អង្ករវត្ត', 
        page: 'description',
        type: 'DESTINATION',
        image: 'https://brightcove04pmdo-a.akamaihd.net/5104226627001/5104226627001_5434711148001_5413965430001-vs.jpg?pubId=5104226627001&videoId=5413965430001', 
        owner: 'សៀមរាបដើរលេង'
    },
    {
        id: 2, 
        name: 'បន្ទាយស្រី', 
        page: 'description',
        type: 'DESTINATION',
        image: 'https://previews.123rf.com/images/bloodua/bloodua1810/bloodua181000382/109267035-panorama-of-banteay-srei-temple-in-complex-angkor-wat-in-siem-reap-cambodia-in-a-summer-day.jpg', 
        owner: 'សៀមរាបដើរលេង'
    },
    {
        id: 3, 
        name: 'បាយ័ន', 
        page: 'description',
        type: 'DESTINATION',
        image: 'https://d10vk5dg0puvhi.cloudfront.net/images/destinations/origin/5d01caca24c71.png', 
        owner: 'សៀមរាបដើរលេង'
    },
    {
        id: 4, 
        name: 'ព្រះរូព', 
        page: 'description',
        type: 'DESTINATION',
        image: 'https://www.siemreap.net/wp-content/uploads/2019/05/pre-rup.jpg', 
        owner: 'សៀមរាបដើរលេង'
    },
    {
        id: 5, 
        name: 'ព្រះខាន', 
        page: 'description',
        type: 'DESTINATION',
        image: 'https://www.renown-travel.com/images/preah-khan-l.jpg', 
        owner: 'សៀមរាបដើរលេង'
    },
    {
        id: 6, 
        name: 'តាព្រហ្ម', 
        page: 'description',
        type: 'DESTINATION',
        image: 'https://asiatourist.co/wp-content/uploads/2017/10/cambodia-1.jpg', 
        owner: 'សៀមរាបដើរលេង'
    },
    {
        id: 7, 
        name: 'នាគពោន', 
        page: 'description',
        type: 'DESTINATION',
        image: 'https://live.staticflickr.com/4905/45026391855_796d80a851_b.jpg', 
        owner: 'សៀមរាបដើរលេង'
    },
    {
        id: 8, 
        name: 'បន្ទាយក្តី', 
        page: 'description',
        type: 'DESTINATION',
        image: 'https://justsiemreap.com/wp-content/uploads/2018/05/banteay-kdei-temple-guide.jpg', 
        owner: 'សៀមរាបដើរលេង'
    }
]

featureElements.forEach(extractCard);

function extractCard(item){
    const root = document.querySelector('.card-row');

    const card_content = `<div id="`+ item.id +`" class="card-column" onclick="openDescription()">` + 
                        `<div class="card">` +
                            `<img class="card-image" src="`+ item.image + `">` +
                            `<div class="card-footer">`+
                                `<p class="card-text">`+ item.type +`</p>` +
                                `<h3 class="card-title">`+ item.name +`</h3>` +
                                `<p class="card-text">by ` +
                                    `<span class="card-owner" >`+ item.owner +`</span>` +
                                `</p>`+
                            `</div>`+
                        `</div>` +
                    `</div>`;

    root.insertAdjacentHTML('beforeend', card_content);
}

function openDescription(){
    window.open('description.html','_self');
}