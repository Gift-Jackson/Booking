document.addEventListener("DOMContentLoaded", () => {
    // Retrieve the selected celebrity from local storage
    const selectedCelebrity = JSON.parse(localStorage.getItem("selectedCelebrity"));

    document.querySelector(".celebrityImage").src = selectedCelebrity.image
    document.querySelector(".celebrityName").textContent = selectedCelebrity.name
    document.querySelector(".celebrityRole").textContent = selectedCelebrity.role
    document.querySelector(".celebrityCountry").textContent = selectedCelebrity.country
    document.querySelector("#celebrityInput").value = selectedCelebrity.name

})