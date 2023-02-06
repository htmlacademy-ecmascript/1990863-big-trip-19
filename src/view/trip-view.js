import AbstractView from '../framework/view/abstract-view.js';
import {humanizeDate, MONTH_FORMAT, DAY_FORMAT} from '../utils/point.js';

function createCities(values) {
  const cities = new Set();
  values.forEach( (city) => {
    cities.add(city.destination);
  });
  return Array.from(cities.keys()).map(
    (city, index, arr) => {
      if(index < arr.length - 1) {
        return `${city} &mdash; `;
      } return `${city}`;
    }
  ).join('');
}
function calculateTotalPrice(point) {
  const initialValue = 0;
  const price = point.reduce(
    (accumulatorPrice, currentPrice) =>
      accumulatorPrice + currentPrice.basePrice, initialValue
  );
  return price;
}
function createDateInfo(values) {
  const dateFrom = humanizeDate(values[0].dateFrom, DAY_FORMAT);
  const monthFrom = humanizeDate(values[0].dateFrom, MONTH_FORMAT);
  const monthTo = humanizeDate(values[values.length - 1].dateTo, MONTH_FORMAT);
  const dateTo = humanizeDate(values[values.length - 1].dateTo, DAY_FORMAT);
  if(monthFrom === monthTo) {
    return `${monthFrom} ${dateFrom}&nbsp;&mdash;&nbsp;${dateTo}`;
  }
  return `${monthFrom} ${dateFrom}&nbsp;&mdash;&nbsp;${monthTo} ${dateTo}`;
}

function createTripTemplate(point) {
  const cities = createCities(point);
  const totalPrice = calculateTotalPrice(point);
  const date = createDateInfo(point);

  return(
    `
    <section class="trip-main__trip-info  trip-info">
            <div class="trip-info__main">
              <h1 class="trip-info__title">${cities}</h1>

              <p class="trip-info__dates">${date} Mar 18&nbsp;&mdash;&nbsp;20</p>
            </div>

            <p class="trip-info__cost">
              Total: &euro;&nbsp;<span class="trip-info__cost-value">${totalPrice}</span>
            </p>
          </section>
          `
  );
}
export default class TripView extends AbstractView{
  #point = null;
  constructor({point}) {
    super();
    this.#point = point;

  }

  get template() {
    return createTripTemplate(this.#point);
  }
}