import styled from 'styled-components';

export const Container = styled.div`
    display: grid;
    gap: 1.5rem;
    justify-items: center;  
    @media only screen and (min-width: 1200px) {
        grid-template-columns: 1fr 1fr;
        align-items: center;
        gap: 3rem;
      }
`


export const MainContentContainer = styled.div`
  display: grid;
  gap: 1rem;
  @media only screen and (min-width: 700px) {
    max-width: 80%;
  }
  @media only screen and (min-width: 1200px) {
    max-width: initial;
  }
`

export const Image = styled.img`
@media only screen and (min-width: 1200px) {
      max-width: 500px;
}
`
export const Gradient = styled.div`
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 10%;
    background-color: rgba(0, 0, 0, 0);
    background-image: linear-gradient(rgba(0, 0, 0, 0), rgb(12, 14, 25));
`

export const GradientContainer = styled.div`
position: relative;`