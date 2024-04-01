import { useRef, useEffect } from 'react';
import { CitiesType1 } from '../../mock/cities-mock';
import { OfferType } from '../../mock/offers-mock';
import { defaultMapIcon, currentMapIcon } from './consts';
import useMap from './use-map';
import leaflet from 'leaflet';

export type MapPropsType = {
  activeCity: CitiesType1;
  offers: OfferType[];
  activeOffer: OfferType | null;
  // activeCity: CityType['name'];
};

export default function Map({activeCity, offers, activeOffer}: MapPropsType): JSX.Element {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const map = useMap(mapContainerRef, activeCity);
  // const currentCity = offers.find((offer) => offer.city.name === activeCity.name);

  // useEffect((): void => {
  //   if (map && currentCity) {
  //     map.setView([currentCity.city.location.latitude, currentCity.city.location.longitude], activeCity.location.zoom);
  //   }
  // }, [currentCity]);

  useEffect((): void => {
    if (map) {
      offers.forEach((offer) => {
        leaflet.marker({
          lat: offer.location.latitude,
          lng: offer.location.longitude
        },
        {icon: activeOffer && offer.id === activeOffer.id ? currentMapIcon : defaultMapIcon}
        )
          .addTo(map);
      });
    }
  }, [map, offers, activeOffer]);

  return (
    <section className="cities__map map" style={{ height: '200px' }} ref={mapContainerRef}></section>
  );
}

// export function getOffersByCity(offers: TOffer[]): TOffersByCity[] {
//   const offersByCity: TOffersByCity[] = [];
//   offers.forEach((offer) => {
//     const cityIndex: number = offersByCity.findIndex((group) => group.city.name === offer.city.name);
//     if (cityIndex !== -1) {
//       offersByCity[cityIndex].offers.push(offer);
//     } else {
//       offersByCity.push({city: offer.city, offers: [offer]});
//     }
//   });

//   return offersByCity;
// }
