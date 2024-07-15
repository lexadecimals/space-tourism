import styled from 'styled-components';

export const StyledDiv = styled.div`
  min-height: 100vh;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: grid;
  grid-template-rows: 100px auto;
  background-image: ${(props) =>
        props.$home
            ? "url('../../assets/home/background-home-mobile.jpg')"
            : props.$destination
                ? "url('../../assets/destination/background-destination-mobile.jpg')"
                : props.$crew
                    ? "url('../../assets/crew/background-crew-mobile.jpg')"
                    : props.$technology &&
                    "url('../../assets/technology/background-technology-mobile.jpg')"};
  @media (min-width: 700px) {
    background-image: ${(props) =>
        props.$home
            ? "url('../../assets/home/background-home-tablet.jpg')"
            : props.$destination
                ? "url('../../assets/destination/background-destination-tablet.jpg')"
                : props.$crew
                    ? "url('../../assets/crew/background-crew-tablet.jpg')"
                    : props.$technology &&
                    "url('../../assets/technology/background-technology-tablet.jpg')"};
  }
  @media (min-width: 1200px) {
    background-image: ${(props) =>
        props.$home
            ? "url('../../assets/home/background-home-desktop.jpg')"
            : props.$destination
                ? "url('../../assets/destination/background-destination-desktop.jpg')"
                : props.$crew
                    ? "url('../../assets/crew/background-crew-desktop.jpg')"
                    : props.$technology &&
                    "url('../../assets/technology/background-technology-desktop.jpg')"};
  }
`;
