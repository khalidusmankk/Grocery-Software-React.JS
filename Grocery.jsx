import React, { useState } from "react";

const Grocery = () => {
  const [selectedVegetable, setSelectedVegetable] = useState("Onion");
  const [price, setPrice] = useState(10);
  const [tax, setTax] = useState(2);
  const [showAlert, setShowAlert] = useState(false); // For toggling the modal
  const [totalPrice, setTotalPrice] = useState(0); // For showing total price in modal

  const handleVegetableChange = (event) => {
    const value = event.target.value;
    switch (value) {
      case "Onion":
        setPrice(10);
        break;
      case "Tomato":
        setPrice(20);
        break;
      case "Cabbage":
        setPrice(40);
        break;
      case "Carrot":
        setPrice(50);
        break;
      case "Spinach":
        setPrice(60);
        break;
      default:
        setPrice(0);
    }
    setSelectedVegetable(value);
  };

  const handleTaxChange = (event) => {
    const taxValue = parseFloat(event.target.value.replace("%", ""));
    setTax(taxValue);
  };

  const calculateTotalPrice = () => {
    const taxAmount = (price * tax) / 100;
    const total = price + taxAmount;
    setTotalPrice(total.toFixed(2)); // Set the total price in state
    setShowAlert(true); // Show the modal
  };

  const closeAlert = () => {
    setShowAlert(false); // Close the modal
  };

  return (
    <>
      <div className="groceryMain">
        <div className="grocery">
          <label htmlFor="grocery">Select Vegetable:</label>
          <select name="grocery" id="grocery" onChange={handleVegetableChange}>
            <option value="Onion">Onion</option>
            <option value="Tomato">Tomato</option>
            <option value="Cabbage">Cabbage</option>
            <option value="Carrot">Carrot</option>
            <option value="Spinach">Spinach</option>
          </select>
        </div>

        <div className="groceryPrice">
          <label htmlFor="groceryPrice">Price:</label>
          <span id="groceryPrice">${price}</span>
        </div>

        <div className="groceryTax">
          <label htmlFor="groceryTax">Tax:</label>
          <select name="groceryTax" id="groceryTax" onChange={handleTaxChange}>
            <option value="2%">2%</option>
            <option value="3%">3%</option>
          </select>
        </div>

        <div className="groceryTotal">
          <button onClick={calculateTotalPrice}>Calculate Total</button>
        </div>

        {/* Modal for the alert */}
        {showAlert && (
          <div className="modal-overlay">
            <div className="modal">
              <h2>Total Price</h2>
              <p>
                The total price for {selectedVegetable} is ${totalPrice}
              </p>
              <button onClick={closeAlert}>
                Close <i className="fa-solid fa-close" />
              </button>
            </div>
          </div>
        )}
      </div>
      <div className="groceryMain2">
        <h2> Introduction to Grocery Software</h2>
        <p>
          This software is a user-friendly tool designed to simplify the process of grocery shopping. By providing an
          intuitive interface, it allows users to calculate the total price of their selected vegetables, including
          applicable taxes, in just a few clicks.
        </p>
        <h3>Why Choose This Software?</h3>
        <p>
          With rising demands for efficient shopping solutions, this software addresses the need for accurate pricing
          while ensuring an enjoyable and stress-free experience for the user.
        </p>
        <h3>Automatic Price Updates</h3>
        <p>
          As you choose a vegetable, the software automatically updates its price, ensuring you always know the cost of
          your selection without needing manual calculations.
        </p>
        <h3>Enhanced User Experience</h3>
        <p>
          The software features a modal alert that provides users with a clear summary of their total price, making it
          easy to review costs before proceeding with the purchase.
        </p>
        <h3>Perfect for Busy Shoppers</h3>
        <p>
          This software caters to individuals with a fast-paced lifestyle. It removes the guesswork from grocery
          shopping, enabling users to focus on what matters most—choosing the right products.
        </p>
        <h3>Accuracy You Can Trust</h3>
        <p>
          Manual price and tax calculations can lead to errors. This software eliminates such risks by providing
          precise, automated calculations every time.
        </p>
        <h3>Scalable for Future Enhancements</h3>
        <p>
          The current version focuses on vegetable selection and pricing, but the architecture is designed to support
          future upgrades, such as adding more products, discounts, or even multi-currency support.
        </p>
        <h3>Reducing Grocery Shopping Stress</h3>
        <p>
          With this software, you no longer need to worry about miscalculations or hidden costs. Everything is presented
          transparently, giving you peace of mind.
        </p>
      </div>
    </>
  );
};

export default Grocery;
