export const createProcessSlice = (set, get) => ({
  resetNewListingData: () =>
    set({
      locationType: undefined,
      placetype: undefined,
      mapData: undefined,
      locationData: undefined,
      placeSpace: { bathrooms: 1, beds: 1, guests: 4 },
      placeAmeneites: [],
      photos: [],
      title: "",
      description: "",
      price: 0,
    }),
  locationType: undefined,
  setLocationType: (locationType) => set({ locationType }),
  placetype: undefined,
  setPlaceType: (placetype) => set({ placetype }),
  mapData: undefined,
  setMapData: (mapData) => set({ mapData }),
  locationData: undefined,
  setLocationData: (locationData) => set({ locationData }),
  placeSpace: { bathrooms: 1, beds: 1, guests: 4 },
  setPlaceSpace: (placeSpace) => set({ placeSpace }),
  placeAmeneites: [],
  setPlaceAmenities: (placeAmeneites) => set({ placeAmeneites }),
  photos: [],
  setPhotos: (photos) => set({ photos }),
  title: "",
  setTitle: (title) => set({ title }),
  description: "",
  setDescription: (description) => set({ description }),
  price: 0,
  setPrice: (price) => set({ price }),
});
