const container = document.querySelector(".container");
const seats = document.querySelectorAll(".row .seat:not(.occupied)");
const count = document.getElementById("count");
const total = document.getElementById("total");
const movieSelect = document.getElementById("movie");
const currencySelect = document.getElementById("currency");
const currencySymbols = document.getElementsByClassName("currency_symbol");
const amounts = document.getElementsByClassName("amount");
const values = document.getElementsByClassName("value");

populateUI();

let ticketPrice;

function calculate(selectedSeatsCount) {
  for (let cs of currencySymbols) {
    cs.textContent = currencySelect.value;
  }

  const currency_one = currencySelect.value;
  const currency_two = "USD";

  fetch(`https://api.exchangerate-api.com/v4/latest/${currency_one}`)
    .then((res) => res.json())
    .then((data) => {
      const rate = data.rates[currency_two];
      ticketPrice = (movieSelect.value / rate).toFixed(2);

      Array.from(movieSelect.options).forEach((option) => {
        const basePrice = option.value;
        const convertedPrice = (basePrice / rate).toFixed(2);
        const title = option.getAttribute("data-title");

        option.textContent = `${title} (${convertedPrice} ${currency_one})`;
      });

      total.textContent = (selectedSeatsCount * ticketPrice).toFixed(2);
    });
}

function setMovieData(movieIndex, moviePrice) {
  localStorage.setItem("selectedMovieIndex", movieIndex);
  localStorage.setItem("selectedMoviePrice", moviePrice);
}

function setCurrencyData(currencySelect) {
  localStorage.setItem("currency", currencySelect.value);
}

function updateSelectedCount() {
  const selectedSeats = document.querySelectorAll(".row .seat.selected");

  const seatsIndex = [...selectedSeats].map((seat) => [...seats].indexOf(seat));

  localStorage.setItem("selectedSeats", JSON.stringify(seatsIndex));

  const selectedSeatsCount = selectedSeats.length;

  count.innerText = selectedSeatsCount;

  setMovieData(movieSelect.selectedIndex, movieSelect.value);
  calculate(selectedSeatsCount);
}

function populateUI() {
  const selectedSeats = JSON.parse(localStorage.getItem("selectedSeats"));

  if (selectedSeats !== null && selectedSeats.length > 0) {
    seats.forEach((seat, index) => {
      if (selectedSeats.indexOf(index) > -1) {
        seat.classList.add("selected");
      }
    });
  }

  const selectedMovieIndex = localStorage.getItem("selectedMovieIndex");

  if (selectedMovieIndex !== null) {
    movieSelect.selectedIndex = selectedMovieIndex;
  }

  currencySelect.value = localStorage.getItem("currency");
}

movieSelect.addEventListener("change", (e) => {
  ticketPrice = +e.target.value;
  setMovieData(e.target.selectedIndex, e.target.value);
  updateSelectedCount();
});

currencySelect.addEventListener("change", (e) => {
  setCurrencyData(e.target);
  updateSelectedCount();
});

container.addEventListener("click", (e) => {
  if (
    e.target.classList.contains("seat") &&
    !e.target.classList.contains("occupied")
  ) {
    e.target.classList.toggle("selected");

    updateSelectedCount();
  }
});

updateSelectedCount();
