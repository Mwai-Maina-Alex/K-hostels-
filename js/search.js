document.getElementById("searchBtn").addEventListener("click", () => {
  const input = document.getElementById("priceInput").value;
  const price = parseInt(input, 10);

  const listings = document.querySelectorAll(".listing-card");
  listings.forEach(listing => {
    const hostelPrice = parseInt(listing.dataset.price, 10);
    if (price && hostelPrice <= price) {
      listing.style.display = "flex";
    } else {
      listing.style.display = "none";
    }
  });
});