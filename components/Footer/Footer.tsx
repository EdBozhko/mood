import React, { FC, useEffect, useRef } from 'react';
import { FooterStyled, MapBox } from './Footer.styles';
import ContactForm from './components/ContactForm';
import { Loader } from '@googlemaps/js-api-loader';
import Marker from '../../public/MarkerS.png';
import InfoBox from './components/InfoBox';

interface FooterProps {
  page?: boolean;
  title?: string;
  subtitle?: string;
}

const data = {
  infoBox: {
    address: `м.Ужгород,</br>пл.Петефі 29,</br>2 поверх`,
    addressHref: 'https://goo.gl/maps/TJFAXFpw2t9zpTgh7',
    workingHours: `Пн-Пт: 9.00-18.00</br>Сб: 10.00-15.00</br>Нд - вихідний`,
  },
};

const Footer: FC<FooterProps> = ({ title, subtitle }) => {
  const googlemap = useRef(null);
  useEffect(() => {
    const loader = new Loader({
      apiKey: 'AIzaSyANzEYNJmN08j7hnOHuM2rGIe7QRJwE4dE',
      version: 'weekly',
    });
    let map;
    loader.load().then(() => {
      const google = window.google;
      map = new google.maps.Map(googlemap.current, {
        center: { lat: 48.6189163, lng: 22.2980622 },
        zoom: 16,
        streetViewControl: false,
        fullscreenControl: false,
        mapTypeControl: false,

        styles: [
          { elementType: 'geometry', stylers: [{ color: '#242f3e' }] },
          { elementType: 'labels.text.stroke', stylers: [{ color: '#242f3e' }] },
          { elementType: 'labels.text.fill', stylers: [{ color: '#746855' }] },
          {
            featureType: 'administrative.locality',
            elementType: 'labels.text.fill',
            stylers: [{ color: '#d59563' }],
          },
          {
            featureType: 'poi',
            elementType: 'labels.text.fill',
            stylers: [{ color: '#706760' }],
          },
          {
            featureType: 'poi.park',
            elementType: 'geometry',
            stylers: [{ color: '#263c3f' }],
          },
          {
            featureType: 'poi.park',
            elementType: 'labels.text.fill',
            stylers: [{ color: '#6b9a76' }],
          },
          {
            featureType: 'road',
            elementType: 'geometry',
            stylers: [{ color: '#38414e' }],
          },
          {
            featureType: 'road',
            elementType: 'geometry.stroke',
            stylers: [{ color: '#212a37' }],
          },
          {
            featureType: 'road',
            elementType: 'labels.text.fill',
            stylers: [{ color: '#9ca5b3' }],
          },
          {
            featureType: 'road.highway',
            elementType: 'geometry',
            stylers: [{ color: '#746855' }],
          },
          {
            featureType: 'road.highway',
            elementType: 'geometry.stroke',
            stylers: [{ color: '#1f2835' }],
          },
          {
            featureType: 'road.highway',
            elementType: 'labels.text.fill',
            stylers: [{ color: '#f3d19c' }],
          },
          {
            featureType: 'transit',
            elementType: 'geometry',
            stylers: [{ color: '#2f3948' }],
          },
          {
            featureType: 'transit.station',
            elementType: 'labels.text.fill',
            stylers: [{ color: '#d59563' }],
          },
          {
            featureType: 'water',
            elementType: 'geometry',
            stylers: [{ color: '#17263c' }],
          },
          {
            featureType: 'water',
            elementType: 'labels.text.fill',
            stylers: [{ color: '#515c6d' }],
          },
          {
            featureType: 'water',
            elementType: 'labels.text.stroke',
            stylers: [{ color: '#17263c' }],
          },
        ],
      });

      const iconBase = 'https://maps.google.com/mapfiles/kml/shapes/';
      const marker = new google.maps.Marker({
        position: { lat: 48.6190173, lng: 22.2988042 },
        map: map,
        icon: Marker,
      });
    });
  }, []);

  return (
    <>
      <FooterStyled>
        <ContactForm title={title} subtitle={subtitle} />
        <MapBox>
          <InfoBox address={data.infoBox.address} addressHref={data.infoBox.addressHref} workingHours={data.infoBox.workingHours} />
          <div id="map" ref={googlemap}></div>
        </MapBox>
      </FooterStyled>
    </>
  );
};

export default Footer;
