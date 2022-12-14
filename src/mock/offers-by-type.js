import { OFFER } from './offer.js';
import {getRandomArrayElement} from '../utils.js';

const returnArrayOffer = (keyId) => {
  const arrayOffer = OFFER.filter((item) => item.id === keyId);
  return arrayOffer;
};
const offersByType = [
  {
    type: 'taxi',
    offers: returnArrayOffer(1),
  },
  {
    type: 'bus',
    offers: returnArrayOffer(2),
  },
  {
    type: 'train',
    offers: returnArrayOffer(3),
  },
  {
    type: 'ship',
    offers: returnArrayOffer(4),
  },
  {
    type: 'drive',
    offers: returnArrayOffer(5),
  },
  {
    type: 'flight',
    offers: returnArrayOffer(6),
  },
  {
    type: 'check-in',
    offers: returnArrayOffer(7),
  },
  {
    type: 'sightseeing',
    offers: returnArrayOffer(8),
  },
  {
    type: 'restaurant',
    offers: returnArrayOffer(9),
  },
];
const returnOffers = (type) => {
  const objectType = offersByType.filter((item) => item.type === type);
  const offers = getRandomArrayElement(objectType);
  return getRandomArrayElement(offers.offers);
};

export {offersByType, returnOffers};
