
  // Define the pricing data based on options
  const pricingData = {
    "All Windows": {
      "100% Tinted": { cutPrice: 4999, price: 4000 },
      "50% Tinted": { cutPrice: 4999, price: 4000 },
      "25% Tinted": { cutPrice: 4999, price: 4000 }
    },
    "2 Front Windows": {
      "100% Tinted": { cutPrice: 3499, price: 2500 },
      "50% Tinted": { cutPrice: 3499, price: 2500 },
      "25% Tinted": { cutPrice: 3499, price: 2500 }
    },
    "2 Back Windows": {
      "100% Tinted": { cutPrice: 3499, price: 2500 },
      "50% Tinted": { cutPrice: 3499, price: 2500 },
      "25% Tinted": { cutPrice: 3499, price: 2500 }
    }
  };

  // Function to update the price
  function updatePrice() {
    const selectedSides = document.getElementById("Tint-sides").value;
    const selectedPercentage = document.getElementById("Tint-percentage").value;

    // Get the price data from the selected options
    const { cutPrice, price } = pricingData[selectedSides][selectedPercentage];

    // Update the HTML with the new values
    document.getElementById("cut-price").textContent = `PKR ${cutPrice}`;
    document.getElementById("price").innerHTML = `<span id="cut-price">PKR ${cutPrice}</span> PKR ${price} <span id="discount">-${Math.round(((cutPrice - price) / cutPrice) * 100)}% Off</span>`;
  }

  // Add event listeners to update price on change of selection
  document.getElementById("Tint-sides").addEventListener("change", updatePrice);
  document.getElementById("Tint-percentage").addEventListener("change", updatePrice);

  // Initial price update on page load
  updatePrice();

  
document.addEventListener("DOMContentLoaded", function () {
  let lastScrollTop = 0;
  const navbar = document.getElementById("nav");

  window.addEventListener("scroll", function () {
    const currentScroll = window.scrollY || document.documentElement.scrollTop;

    if (currentScroll > lastScrollTop) {
      // Downscroll
      navbar.style.opacity = "0"; // Hide navbar
    } else {
      // Upscroll
      navbar.style.opacity = "1"; // Show navbar
    }
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // For Mobile or negative scrolling
  });
});
