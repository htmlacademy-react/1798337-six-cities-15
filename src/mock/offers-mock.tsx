export type OfferType =
{
  id: string;
  title: string;
  type: string;
  price: number;
  previewImage: string;
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
};

export type LocationType = {
  latitude: number;
  longitude: number;
  zoom: number;
}

export type CityType = {
  name: string;
  location: LocationType;
};
export type HostType = {
    name: string;
    avatarUrl: string;
    isPro: boolean;
}

export type OfferType2 = {
  id: string;
  title: string;
  type: string;
  price: number;
  city: CityType;
  location: LocationType;
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
  description: string;
  bedrooms: number;
  goods: string[];
  host: HostType;
  images: string[];
  maxAdults: number;
}

const OffersMock2: OfferType2[] = [
  {
    'id': '6af6f711-c28d-4121-82cd-e0b462a27f00',
    'title': 'Beautiful & luxurious studio at great location',
    'type': 'apartment',
    'price': 120,
    'city': {
      'name': 'Amsterdam',
      'location': {
        'latitude': 52.35514938496378,
        'longitude': 4.673877537499948,
        'zoom': 8
      } },
    'location': {
      'latitude': 52.35514938496378,
      'longitude': 4.673877537499948,
      'zoom': 8
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 4,
    'description': 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    'bedrooms': 3,
    'goods': [
      'Heating'
    ],
    'host': {
      'name': 'Oliver Conner',
      'avatarUrl': 'https://url-to-image/image.png',
      'isPro': false
    },
    'images': [
      'https://url-to-image/image.png'
    ],
    'maxAdults': 4
  },

  {
    'id': 'a4938522-593f-4b60-8c61-8b21a1e0f319',
    'title': 'Loft Studio in the Central Area 1',
    'type': 'apartment',
    'price': 228,
    'city': {
      'name': 'Amsterdam',
      'location': {
        'latitude': 52.35514938496378,
        'longitude': 4.673877537499948,
        'zoom': 8
      } },
    'location': {
      'latitude': 52.35514938496378,
      'longitude': 4.673877537499948,
      'zoom': 8
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 3,
    'description': 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    'bedrooms': 3,
    'goods': [
      'Heating'
    ],
    'host': {
      'name': 'Oliver Conner',
      'avatarUrl': 'https://url-to-image/image.png',
      'isPro': false
    },
    'images': [
      'https://15.design.htmlacademy.pro/static/hotel/19.jpg'
    ],
    'maxAdults': 4
  },

];

const OffersMock: OfferType[] = [
  {
    'id': 'a4938522-593f-4b60-8c61-8b21a1e0f319',
    'title': 'Loft Studio in the Central Area 1',
    'type': 'apartment',
    'price': 446,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/19.jpg',
    'isFavorite': true,
    'isPremium': true,
    'rating': 4.7
  },

  {
    'id': 'a4938522-593f-4b60-8c61-8b21a1e0f318',
    'title': 'Loft Studio in the Central Area 2',
    'type': 'apartment',
    'price': 447,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/18.jpg',
    'isFavorite': false,
    'isPremium': false,
    'rating': 4.8
  },
  {
    'id': '2553ecac-7e1f-4a40-8f49-7bcd76ab4ad1',
    'title': 'Loft Studio in the Central Area',
    'type': 'house',
    'price': 250,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/4.jpg',
    'isFavorite': false,
    'isPremium': true,
    'rating': 2.4
  },
  {
    'id': '496a6142-36e9-437c-a082-27ed41c03187',
    'title': 'The house among olive ',
    'type': 'apartment',
    'price': 183,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/14.jpg',
    'isFavorite': false,
    'isPremium': false,
    'rating': 3.4
  },
  {
    'id': '357975ea-58b0-4413-b85e-6af96630b74b',
    'title': 'Tile House',
    'type': 'apartment',
    'price': 497,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/13.jpg',
    'isFavorite': false,
    'isPremium': false,
    'rating': 2
  },
  {
    'id': 'eb7d8ba6-0e99-435c-a2b6-6e2c9262286f',
    'title': 'The house among olive ',
    'type': 'hotel',
    'price': 467,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/3.jpg',
    'isFavorite': false,
    'isPremium': true,
    'rating': 4.3
  },
  {
    'id': 'e22b557b-b525-4c98-8fe2-0dcc9142bbd7',
    'title': 'The Joshua Tree House',
    'type': 'hotel',
    'price': 313,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/3.jpg',
    'isFavorite': false,
    'isPremium': true,
    'rating': 4.1
  },
  {
    'id': '0a277736-cc76-4088-883d-07e0ec74e1d9',
    'title': 'Loft Studio in the Central Area',
    'type': 'hotel',
    'price': 297,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/11.jpg',
    'isFavorite': false,
    'isPremium': true,
    'rating': 4.7
  },
  {
    'id': '654a7d5a-9365-4c72-b715-43ff42dced4b',
    'title': 'Penthouse, 4-5 rooms + 5 balconies',
    'type': 'apartment',
    'price': 301,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/1.jpg',
    'isFavorite': false,
    'isPremium': true,
    'rating': 3
  },
];

export {OffersMock, OffersMock2};
