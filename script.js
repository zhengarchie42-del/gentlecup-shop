(function () {
  const toast = document.getElementById("toast");
  const countEl = document.getElementById("cart-count");
  const cartBtn = document.getElementById("cart-btn");
  let count = 0;
  let hideTimer;

  function showToast(message) {
    toast.hidden = false;
    toast.textContent = message;
    requestAnimationFrame(function () {
      toast.classList.add("show");
    });
    clearTimeout(hideTimer);
    hideTimer = setTimeout(function () {
      toast.classList.remove("show");
    }, 1800);
  }

  document.querySelectorAll(".add-btn").forEach(function (btn) {
    btn.addEventListener("click", function () {
      const card = btn.closest(".product-card");
      const name = card ? card.getAttribute("data-product") : "GentleCup";
      count += 1;
      countEl.hidden = false;
      countEl.textContent = String(count);
      btn.classList.add("is-added");
      btn.textContent = "Added";
      showToast("Added — " + name);
      setTimeout(function () {
        btn.classList.remove("is-added");
        btn.textContent = "Add to cart";
      }, 1400);
    });
  });

  cartBtn.addEventListener("click", function () {
    if (count === 0) {
      showToast("Your cart is empty");
    } else {
      showToast("This is a class project — checkout is not available");
    }
  });
})();
