const toggle = document.getElementById("billingToggle");
const prices = document.querySelectorAll(".price");

toggle.addEventListener("change", () => {
  prices.forEach(price => {
      const monthly = price.getAttribute("data-month");
          const yearly = price.getAttribute("data-year");

              price.textContent = toggle.checked
                    ? `₹${yearly}`
                          : `₹${monthly}`;
                            });
                            });