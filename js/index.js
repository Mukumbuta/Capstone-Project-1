const humburger = document.querySelector('.toolbar');
const menuItems = document.querySelector('.mobile-menu-items');

humburger.addEventListener('click', () => {
    humburger.classList.toggle('active');
    menuItems.classList.toggle('active');
    document.documentElement.classList.toggle('scroll-disable');
})
       
// Dynamically populating the Featured speakers section
// An Array holding all presenters' data
const speakersData = [
    {
        image: './images/female-one.jpg',
        name: 'Gearge Janko',
        career: 'CEO LLC BobTOwn',
        intro: 'Gearge Janko is an entrepeneur in the US and one of the bigest influwencers in the clout bisness and stand-up comedian and actor',
    },
    {
        image: './images/female-three.jpg',
        name: 'Ilya Fidy',
        career: 'Partner LLC Dobriks and CEO Xeela',
        intro: 'Ilya Fidy is an entrepeneur in the US with 3 LLC to manage is one of the most proffessional guys out there',
    },
    {
        image: './images/male-three.jpg',
        name: 'Mike Mijlak',
        career: 'Partner LLC Mavric',
        intro: 'Mike mijlak is an entrepeneur in the US and one of the bigest influwencers in the clout bisness writer and podcaster',
    },
    {
        image: './images/male-two.jpg',
        name: 'David Dobrik',
        career: 'Owner LLC Dobriks',
        intro: 'David Dobrik is an entrepeneur in the US and one of the bigest influwencers in the clout bisness at the present and pizza franchise',
    },
    {
        image: './images/male-one.jpg',
        name: 'Greg Paul',
        career: 'Partner LLC Mavric',
        intro: 'Greg paul is a father of an entrepeneur in the US and one of the bigest influwencers in the clout bisness at the present',
    },
    {
        image: './images/female-two.jpg',
        name: 'Jasaet Nash',
        career: 'Social media influencer',
        intro: 'Janaet Nash is a father of two and co host on views podcast and a new owner of the jason nahs nation website for paytrion content',
    }
]

// Function to loop through all the array and populate the presenter section
function getPresenter() {
    const presentersContainer = document.querySelector('.speakers-section');
    const heading = document.createElement('div');
    heading.classList.add('heading');
    heading.innerHTML = `<h2>Featured Speaker</h2>`;
    presentersContainer.appendChild(heading);

    speakersData.forEach((data) => {
        const presenterCard = document.createElement('div');
        presenterCard.classList.add('presenters');
        presenterCard.innerHTML = `<div class="presenter-image">
                                      <img src=${data.image} alt="">
                                    </div>
                                    <div>
                                      <h4>${data.name}</h4>
                                      <h5>${data.career}</h5>
                                      <p>${data.intro}</p>
                                    </div>`;
        presentersContainer.appendChild(presenterCard);
    })
}

getPresenter();
