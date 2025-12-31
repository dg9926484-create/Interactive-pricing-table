// js/script.js

// Expandable rows
const buttons = document.querySelectorAll('.expand-btn');
buttons.forEach(btn => {
  btn.addEventListener('click', () => {
      const extraInfo = btn.nextElementSibling;
          if (extraInfo.style.maxHeight) {
                extraInfo.style.maxHeight = null;
                    } else {
                          extraInfo.style.maxHeight = extraInfo.scrollHeight + "px";
                              }
                                });
                                });

                                // Dynamic price calculation (example: select features)
                                const plans = document.querySelectorAll('.plan');
                                plans.forEach(plan => {
                                  plan.addEventListener('click', () => {
                                      // Add logic if user selects add-ons for dynamic pricing
                                        });
                                        });