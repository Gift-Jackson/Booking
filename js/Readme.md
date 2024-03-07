 ## Celebrity Booking App

This is a celebrity booking app that allows users to search for celebrities and book them for events. The app uses a JSON file to store the celebrity data and a search bar to filter the celebrities by name. When a user clicks on a celebrity, they are taken to a checkout page where they can book the celebrity.

### Step-by-Step Explanation

#### 1. Import the celebrities JSON file

The first step is to import the celebrities JSON file. This file contains the data for all of the celebrities that are available for booking.

```javascript
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


Generated by [BlackboxAI](https://www.blackbox.ai)