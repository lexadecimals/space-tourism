import styled from 'styled-components'
    ;
export const Description = styled.p`
  font-family: 'Barlow Condensed', sans-serif;
  line-height: 1.8;
  color: #d0d6f9;
  @media only screen and (min-width: 1200px) {
    font-size: 1.125rem;
}
`;


export const SubHeading = styled.h2`
    font-size: 1rem;
    text-transform: uppercase;
    font-family: 'Barlow Condensed', sans-serif;
    line-height: 6rem;
    margin-bottom: 1rem;
    letter-spacing: 3px;
    font-weight: 100;
    @media only screen and (min-width: 700px) {
        font-size: 1.25rem;
    }
    @media only screen and (min-width: 1200px) {
        font-size: 1.75rem;
        margin-bottom: 3rem;
    }
`

export const Span = styled.span`
    opacity: 0.5;
    font-weight: 400;
    padding-right: 1.75rem;
    @media only screen and (min-width: 700px) {
        font-size: 1.25rem;
    }
    @media only screen and (min-width: 1200px) {
        font-size: 1.75rem;
    }
`

export const Container = styled.div`
    text-align: center;
    width: ${props => props.$technology ? "100%" : "90%"};
    margin: 0 auto 2rem;
    @media only screen and (min-width: 1200px) {
        text-align: left;
        width: ${props => props.$technology ? "100%" : "75%"};
    }
    @media only screen and (min-width: 1200px) {
        width: ${props => props.$technology ? "80%" : "65%"};
        margin-left:  ${props => props.$technology && "20%"};
    }
`

export const Heading = styled.h1`
    font-family: Bellefair, serif;
    line-height: 2rem;
    font-weight: 400;
    font-size: ${props => props.$fontsize.small};
    text-transform: uppercase;
    @media only screen and (min-width: 700px) {
      font-size: ${props => props.$fontsize.medium};
      line-height: 3.5rem;
    }
    @media only screen and (min-width: 1200px) {
        font-size: ${props => props.$fontsize.large};
    }
    
`
export const HeadingSpan = styled.span`
    font-size: ${props => props.$fontsize.small};
    opacity: 0.5;
    @media only screen and (min-width: 700px) {
        font-size: ${props => props.$fontsize.medium};
      }
      @media only screen and (min-width: 1200px) {
          font-size: ${props => props.$fontsize.large};
      }
`


