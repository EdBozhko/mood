import React, { FC, useEffect, useRef } from 'react';
import { FooterStyled, MapBox } from './Footer.styles';
import ContactForm from './components/ContactForm';
import { Loader } from '@googlemaps/js-api-loader';

interface FooterProps {
  title?: string;
  subtitle?: string;
}

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
            stylers: [{ color: '#d59563' }],
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
    });
  });
  return (
    <>
      <FooterStyled>
        <ContactForm title={title} subtitle={subtitle} />
        <MapBox>
          {/* <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1318.749498237077!2d22.297502019290487!3d48.61943257316012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473919b1d2aa602d%3A0x945a39a0cccdbfc5!2z0L_Qu9C-0YnQsCDQqNCw0L3QtNC-0YDQsCDQn9C10YLQtdGE0ZYsIDIzLCDQo9C20LPQvtGA0L7QtCwg0JfQsNC60LDRgNC_0LDRgtGB0YzQutCwINC-0LHQu9Cw0YHRgtGMLCA4ODAwMA!5e0!3m2!1sru!2sua!4v1628961791977!5m2!1sru!2sua"
            width="100%"
            height="100%"
            loading="lazy"
          ></iframe> */}
          <div id="map" ref={googlemap}></div>
        </MapBox>
      </FooterStyled>
    </>
  );
};

export default Footer;
