import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'

import { useStaticQuery, graphql } from "gatsby"

const Testimonials = () => {
    const data = useStaticQuery(graphql`
        query {
        allFile(filter: {ext: {regex: "/(jpg)|(png)|(jpeg)/"}, name: {in: ["Jhonny4"]}}) {
          edges {
            node {
              childImageSharp {
                fluid {
                    ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
      `)
    return (
        <TestimonialsContainer id="about">
            <Description>
                <h1>About</h1>
            </Description>
            <ContentWrapper>
               
            <ColumnOne>
                <Testimonial >
                    <h3>Jhonny Iñíguez</h3>
                    <p> I am a guitarist and singer-songwriter, living in Switzerland for many years. I blend modern percussive latin guitar & traditional flamenco, funk, blues, jazz, reagge styles with emotive/gritty vocals and songwriting to create an immersive acoustic experience. The sole purpose for my music is to emulate it live</p>
                    <br/>
                    <p>Born in Ecuador, I grew up surrounded by music in a family musical environment, where I started playing the guitar and singing at a very early age. I has led many bands and collaborated with many artists over the years.</p>
                </Testimonial>
                
                </ColumnOne>
                <ColumnTwo>
                {data.allFile.edges.map((image, key) => (
                        <Images key={key} fluid={image.node.childImageSharp.fluid} />
                    ))} 
                </ColumnTwo>    
            </ContentWrapper>
            
        </TestimonialsContainer>
    )
}

export default Testimonials

const TestimonialsContainer = styled.div`
    background: #fcfcfc;
    color: #000;
    padding: 3rem calc((100vw - 1300px) / 2);
    width: 100%;
    height: 100%;
    padding-top: 10rem;
    
    @media screen and (max-width: 768px) {
        padding-top: 5rem;
        }
`
const Description = styled.p`
h1 {
    font-family: 'Poppins', sans-serif;
    color: #F26A2E;
    text-align: center;
    margin-bottom: 1rem;
    font-size: clamp(1.2rem,5vw,2.5rem);
    padding: 2rem 2rem 3rem;

    @media screen and (max-width: 768px) {
        padding-bottom: 2rem;
        
        }
    }
`
const ContentWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 0 1rem;
    
    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
    }
`
const ColumnOne = styled.div`
    display: grid;
    grid-template-rows: 1fr;
    
    @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    }
`
const Testimonial = styled.div`
    padding-top: 3rem;
    padding-right: 2rem;

        h3 {
            
            margin-bottom: 1rem;
            font-size: 1.5rem;
            font-style: italic;
            padding-left: 1rem;
            padding-bottom: 1rem;
        }
        p {
            font-size: 18px;
            color: #3b3b3b;
            padding-left: 1rem;
        }
    @media screen and (max-width: 980px) {
        padding-left: 2rem;
        padding-bottom: 2rem;
        
        }    
`
const ColumnTwo = styled.div`
        display: grid;
        grid-template-columns: 1fr;
        @media screen and (max-width: 980px) {
            grid-template-columns: 1fr;
            margin-top: 3rem;
        }
`

const Images = styled(Img)`
        height: 100%;
`