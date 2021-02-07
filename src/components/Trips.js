import React from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const Trips = ({ heading }) => {
    const data = useStaticQuery(graphql`
    query TripsQuery {
        allTripsJson {
          edges {
            node {
              img {
                childImageSharp {
                  fluid {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      }
    `)

    function getTrips(data) {
        const tripsArray = []
        data.allTripsJson.edges.forEach((item, index) => {
            tripsArray.push(
                <ProductCard key={index}>
                    <ProductImg
                        alt={item.node.alt}
                        fluid={item.node.img.childImageSharp.fluid}
                    />
                    <ProductInfo>
                        <TextWrap>
                            
                            <ProductTitle>{item.node.name}</ProductTitle>
                        </TextWrap>
                       
                    </ProductInfo>
                </ProductCard>
            )
        })
        return tripsArray
    }
    return (
        <ProductsContainer id="project">
            <ProductsHeading >{heading}</ProductsHeading>
            <ProductsWrapper>{getTrips(data)}</ProductsWrapper>
        </ProductsContainer>
    )
}

export default Trips

const ProductsContainer = styled.div`
    background: #fcfcfc;
    min-height: 100 vh;
    padding: 3rem calc((100vw - 1300px) / 2);
    color: #fff;
    
    padding-top: 10rem;
    padding-bottom: 10rem;
        @media screen and (max-width: 768px) {
        padding-top: 5rem;
        }
`

const ProductsHeading = styled.div`
    font-size: clamp(1rem, 5vw, 3rem);
    text-align: center;
    
    color: #000;
    font-weight: 600;
    padding: 0 2rem 5rem;

   
`

const ProductsWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 10px;
    justify-items: center;
    padding: 0 2rem;

    @media screen and (max-width: 960px) {
        grid-template-columns: 1fr;
    }

`
const ProductCard = styled.div`
    line-height: 2;
    width: 100%;
    height: 500px;
    position: relative;
    transition: 0.2s ease;
`
const ProductImg = styled(Img)`
    height: 100%;
    max-width: 100%;
    position: relative;
    filter: brightness(70%);
    transition: 0.4s cubic-bezier (0.075, 0.82, 0.165, 1);
    
    &:hover {
        filter: brightness(100%);
    }
`

const ProductInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-ítems: flex-start;
    padding: 0 2rem;
    color: #fff;
    @media screen and (max-width: 280px) {
        padding: 0 1rem;
    }
`
const TextWrap = styled.div`
    display: flex;
    align-ítems: center;
    position: absolute;
    top: 375px;
`

const ProductTitle = styled.div`
    font-weight: 400;
    font-size: 1rem;
    margin-left: 0.5rem;
`