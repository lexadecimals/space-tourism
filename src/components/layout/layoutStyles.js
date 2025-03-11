import styled from 'styled-components';
import backgroundHomeMobile from '/assets/home/background-home-mobile.jpg'
import backgroundCrewMobile from '/assets/crew/background-crew-mobile.jpg'
import backgroundDestinationMobile from '/assets/destination/background-destination-mobile.jpg'
import backgroundTechnologyMobile from '/assets/technology/background-technology-mobile.jpg'
import backgroundHomeTablet from '/assets/home/background-home-tablet.jpg'
import backgroundCrewTablet from '/assets/crew/background-crew-tablet.jpg'
import backgroundDestinationTablet from '/assets/destination/background-destination-tablet.jpg'
import backgroundTechnologyTablet from '/assets/technology/background-technology-tablet.jpg'
import backgroundHomeDesktop from '/assets/home/background-home-desktop.jpg'
import backgroundCrewDesktop from '/assets/crew/background-crew-desktop.jpg'
import backgroundDestinationDesktop from '/assets/destination/background-destination-desktop.jpg'
import backgroundTechnologyDesktop from '/assets/technology/background-technology-desktop.jpg'

export const StyledDiv = styled.div`
  min-height: 100vh;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: grid;
  grid-template-rows: 100px auto;
  background-image: ${(props) =>
        props.$home
            ? `url(${backgroundHomeMobile})`
            : props.$destination
                ? `url(${backgroundDestinationMobile})`
                : props.$crew
                    ? `url(${backgroundCrewMobile})`
                    : props.$technology &&
                    `url(${backgroundTechnologyMobile})`};
  @media (min-width: 700px) {
    grid-template-rows: calc(100px + 2rem) auto;
    background-image: ${(props) =>
        props.$home
            ? `url(${backgroundHomeTablet})`
            : props.$destination
                ? `url(${backgroundDestinationTablet})`
                : props.$crew
                    ? `url(${backgroundCrewTablet})`
                    : props.$technology &&
                    `url(${backgroundTechnologyTablet})`};
  }
  @media (min-width: 1200px) {
    grid-template-rows: calc(100px + 4rem) auto;
    background-image: ${(props) =>
        props.$home
            ? `url(${backgroundHomeDesktop})`
            : props.$destination
                ? `url(${backgroundDestinationDesktop})`
                : props.$crew
                    ? `url(${backgroundCrewDesktop})`
                    : props.$technology &&
                    `url(${backgroundTechnologyDesktop})`};
  }
`;





