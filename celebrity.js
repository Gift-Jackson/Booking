const celebrities = [
    {
        id: 0,
        image: "/assets/paul wesley.webp",
        name: "Paul Wesley",
        country: "New Jersey",
        role: "Actor, Director, and Producer"
    },
    {
        id: 1,
        image: "/assets/dwanye johnson.webp",
        name: "Dwayne Johnson",
        country: "California",
        role: "Actor and Wrestler"
    },
    {
        id: 2,
        image: "/assets/nick Jonas.jpg",
        name: "Nick Jonas",
        country: "USA",
        role: "Actor and singer"
    },
   
    {
        id: 3,
        image: "/assets/zendaya.webp",
        name: "Zendaya Coleman",
        country: "California",
        role: "Actress"
    },
    {
        id: 4,
        image: "/assets/James-Bond.webp",
        name: "Daniel Craig",
        country: "Chester",
        role: "Actor"
    },
    {
        id: 5,
        image: "/assets/johnny depp.webp",
        name: "John Christopher Depp II",
        country: "Kentucky",
        role: "Actor"
    },
    {
        id: 6,
        image: "/assets/nico.webp",
        name: "Nicholas Galitzine",
        country: "London",
        role: "Actor"
    },
    {
        id: 7,
        image: "/assets/michele.webp",
        name: "Michele Morrone",
        country: "Bitonto",
        role: "Actor and Singer"
    },
    {
        id: 8,
        image: "/assets/levi.webp",
        name: "Zachary Levi Pugh",
        country: "Louisiana",
        role: "Actor"
    },
    {
        id: 9,
        image: "/assets/Joseph.webp",
        name: "Joseph Morgan",
        country: "London",
        role: "Actor"
    },
    {
        id: 10,
        image: "/assets/channing tatum.webp",
        name: "Channing Tatum",
        country: "Alabama",
        role: "Actor"
    },
    {
        id: 11,
        image: "/assets/Cole Sprouse.jpg",
        name: "Cole Sprouse",
        country: "Arezzo, Italy",
        role: "Actor and Photographer"
    },
    {
        id: 12,
        image: "/assets/Matthew McConaughey.jpg",
        name: "Matthew McConaughey",
        country: "USA",
        role: "Actor"
    },
    {
        id: 13,
        image: "/assets/Kenny Chesney.jpg",
        name: "Kenny Chesney",
        country: "USA",
        role: "Musician"
    },
    {
        id: 14,
        image: "/assets/billy burke.jpg",
        name: "Billy Burke",
        country: "USA",
        role: "Actor"
    },
    {
        id: 15,
        image: "/assets/hugh jackman.jpg",
        name: "Hugh Jackman",
        country: "Austrialia",
        role: "Actor"
    },
    {
        id: 16,
        image: "../assets/Elizabeth Hurley.jpg",
        name: "Elizabeth Hurley",
        country: "United Kingdom",
        role: "Actress and Model"
    },
    {
        id: 17,
        image: "../assets/Coco Gauff.jpeg",
        name: "Coco Gauff",
        country: "USA",
        role: "Tennis Player"
    },
    {
        id: 18,
        image: "../assets/Mark Harmon.jpg",
        name: "Mark Harmon",
        country: "USA",
        role: "Actor"
    },
];

const categories = [...new Set(celebrities.map((item) => {
    return item
}))];

const searchBar = document.getElementById("search");
searchBar.addEventListener("keyup", (e) => {
    const searchData = e.target.value.toLowerCase();
    
    const filterData = celebrities.filter((item) => {
        return item.name.toLowerCase().includes(searchData);
    });

    displayItem(filterData);
});

const displayItem = (items) => {
    const celebrityContainer = document.querySelector(".celebrity-container");

    if (items.length === 0) {
        celebrityContainer.innerHTML = `
            <h3 class="no-result">No results found!</h3>
        `;
    } else {
        celebrityContainer.innerHTML = items.map((item) => {
            var { image, name, role, country } = item;
            return (
                `
                <div class="celebrity-box" data-aos="zoom-in">
                    <img src="${image}" alt="${name}" />
                    <div class="profile">
                        <h3 class="name">${name}</h3>
                        <p class="role">${role}</p>
                        <p class="nationality">${country}</p>
                    </div>
                    <button class="checkout-btn" onclick="book(${item.id})">Book Now!</button>
                </div>
                `
            );
        }).join('');
    }
};

displayItem(categories)

function book(itemId) {
    const selectedCelebrity = celebrities.find(celebrity => celebrity.id === itemId);

    localStorage.setItem("selectedCelebrity", JSON.stringify(selectedCelebrity));

    window.location.href = "/checkout.html";
}




