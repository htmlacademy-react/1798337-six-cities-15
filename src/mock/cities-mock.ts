export type CitiesType = {
  id: number;
  title: string;
}
export const cities: CitiesType[] = [
  { id: 1, title: 'Paris' },
  { id: 2, title: 'Cologne' },
  { id: 3, title: 'Brussels' },
  { id: 4, title: 'Amsterdam' },
  { id: 5, title: 'Hamburg' },
  { id: 6, title: 'Dusseldorf' },
];

export type CitiesType1 = {
  name: string;
  id: number;
  location: {
    latitude: number;
    longitude: number;
    zoom: number;
  };
}

export const cities1:CitiesType1[] = [
  {
    name: 'Paris',
    id: 1,
    location: {
      latitude: 55.755864,
      longitude: 37.617698,
      zoom: 10,
    }
  },
  {
    name: 'Cologne',
    id: 2,
    location: {
      latitude: 59.938784,
      longitude: 30.314997,
      zoom: 10,
    }
  },
  {
    name: 'Brussels',
    id: 3,
    location: {
      latitude: 54.782635,
      longitude: 32.045287,
      zoom: 14,
    }
  },
  {
    name: 'Amsterdam',
    id: 4,
    location: {
      latitude: 54.782635,
      longitude: 32.045287,
      zoom: 14,
    }
  },
  {
    name: 'Hamburg',
    id: 5,
    location: {
      latitude: 54.782635,
      longitude: 32.045287,
      zoom: 14,
    }
  },
  {
    name: 'Dusseldorf',
    id: 6,
    location: {
      latitude: 54.782635,
      longitude: 32.045287,
      zoom: 14,
    }
  },
];
