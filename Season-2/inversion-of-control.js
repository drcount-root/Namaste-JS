const cart = ["Shoes", "Pants", "Kurta"];

api.createOrder(cart, function () {
  api.proceedToPayment();
});

// Not completed
