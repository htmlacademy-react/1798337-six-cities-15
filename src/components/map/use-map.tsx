import { useEffect, useRef, useState } from 'react';
import leaflet, {Map as LeafletMap} from 'leaflet';
import { CitiesType1 } from '../../mock/cities-mock';

export default function useMap(MapContainerRef: React.RefObject<HTMLDivElement | null>, city: CitiesType1) {
  const [map, setMap] = useState<LeafletMap | null>(null);
  const isRenderRef = useRef(false);
  useEffect((): void => {
    if (MapContainerRef.current !== null && !isRenderRef.current) {
      const instance = leaflet.map(MapContainerRef.current, {
        center: {
          lat: city.location.latitude,
          lng: city.location.longitude
        },
        zoom: 10
      }
      );
      leaflet
        .tileLayer(
          'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
          {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
          },
        )
        .addTo(instance);
      setMap(instance);
      isRenderRef.current = true;
    }
  }, [MapContainerRef, city]);

  return map;
}
