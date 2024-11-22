// Import the data
const carData = usedCars;

// Render cars
const carList = document.getElementById("carList");

function renderCars(cars) {
  carList.innerHTML = ""; // Clear existing cars
  if (cars.length === 0) {
    carList.innerHTML = "<p>No cars match your criteria. Try again.</p>";
    return;
  }
  cars.forEach((car) => {
    const carCard = document.createElement("div");
    carCard.className = "car-card";
    carCard.innerHTML = `
      <h3>${car.year} ${car.make} ${car.model}</h3>
      <p>Price: $${car.price}</p>
      <p>Mileage: ${car.mileage} miles</p>
      <p>Color: ${car.color}</p>
      <p>Gas Mileage: ${car.gasMileage}</p>
    `;
    carList.appendChild(carCard);
  });
}

renderCars(carData);

// Filter functionality
document.getElementById("filterButton").addEventListener("click", () => {
  const minYear = document.getElementById("minYear").value;
  const maxYear = document.getElementById("maxYear").value;
  const maxMileage = document.getElementById("maxMileage").value;
  const minPrice = document.getElementById("minPrice").value;
  const maxPrice = document.getElementById("maxPrice").value;
  const makes = Array.from(document.getElementById("makes").selectedOptions).map(
    (opt) => opt.value
  );
  const colors = Array.from(document.getElementById("colors").selectedOptions).map(
    (opt) => opt.value
  );

  const filteredCars = carData.filter((car) => {
    return (
      (!minYear || car.year >= minYear) &&
      (!maxYear || car.year <= maxYear) &&
      (!maxMileage || car.mileage <= maxMileage) &&
      (!minPrice || car.price >= minPrice) &&
      (!maxPrice || car.price <= maxPrice) &&
      (makes.length === 0 || makes.includes(car.make)) &&
      (colors.length === 0 || colors.includes(car.color))
    );
  });

  renderCars(filteredCars);
});