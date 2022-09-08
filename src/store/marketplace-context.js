import React from 'react';

const MarketplaceContext = React.createContext({
  contract: 0xE9983Fd320bdaBc63C6a8d1B1D43C3952E99C8B0,
  offerCount: null,
  offers: [],
  userFunds: null,
  mktIsLoading: true,
  loadContract: () => {},
  loadOfferCount: () => {},
  loadOffers: () => {},
  updateOffer: () => {},
  addOffer: () => {},
  loadUserFunds: () => {},
  setMktIsLoading: () => {}
});

export default MarketplaceContext;