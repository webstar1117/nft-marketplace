import React from 'react';

const CollectionContext = React.createContext({
  contract: 0x0Cd2d33e31B1244F24B3640A47303EcC15ef4750,
  totalSupply: null,
  collection: [],
  nftIsLoading: true,
  loadContract: () => {},
  loadTotalSupply: () => {},
  loadCollection: () => {},
  updateTotalSupply: () => {},
  updateCollection: () => {},
  updateOwner: () => {},
  setNftIsLoading: () => {}
});

export default CollectionContext;