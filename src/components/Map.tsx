import mapboxgl from 'mapbox-gl';
import React, { useEffect, useLayoutEffect, useRef } from 'react';
import styled from 'styled-components';

import Colors from '../materials/colors';

interface Props {
  lng: number;
  lat: number;
  zoom: number;
}
const MapContainer = styled.div`
  min-width: 250px;
  max-width: 100%;
  height: 320px;

  @media only screen and (min-width: 600px) {
    min-width: 320px;
    height: 320px;
  }
`;

mapboxgl.accessToken = 'pk.eyJ1IjoiYWl3YXRrbyIsImEiOiJjaXBncnI5ejgwMDE0dmJucTA5aDRrb2wzIn0.B2zm8WB9M_qiS1tNESWslg';

const Map: React.SFC<Props> = ({ lng, lat, zoom }) => {
  let map: mapboxgl.Map;
  const mapRef = useRef(null);

  useLayoutEffect(() => {
    // @ts-ignore
    map = new mapboxgl.Map({
      container: mapRef.current,
      style: 'mapbox://styles/mapbox/light-v9',
      center: [lng, lat],
      zoom,
    });

    new mapboxgl.Marker({ color: `rgb(${Colors.darkBlue})` }).setLngLat([lng, lat]).addTo(map);
  }, []);

  useEffect(
    () => () => {
      map.remove();
    },
    [],
  );

  return <MapContainer ref={mapRef} />;
};

export default Map;
