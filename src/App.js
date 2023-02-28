import logo from "./logo.svg";
import "./App.css";
import styled from "styled-components";
import { Image } from "./assets";
import { useEffect, useState } from "react";

function App() {
    return (
        <S.card>
            <S.imageContainer>
                <img src={Image.productDesktop} alt="mobile" />
            </S.imageContainer>
            <S.detailContainer>
                <p>perfume</p>
                <S.heading>Gabrielle Essence Eau De Parfum</S.heading>
                <S.description>
                    A floral, solar and voluptuous interpretation composed by
                    Olivier Polge, Perfumer-Creator for the House of CHANEL.
                </S.description>
                <S.priceTag>
                    <S.price>$149.99</S.price>
                    <span>$169.99</span>
                </S.priceTag>
                <S.button>
                    <img src={Image.cartIcon} alt="add top cart" />
                    Add to cart
                </S.button>
            </S.detailContainer>
        </S.card>
    );
}

const S = {
    card: styled.div`
        max-width: 100%;
        margin: 2.8rem 1.6rem;
        background-color: white;
        border-radius: 1rem;

        @media only screen and (min-width: 600px) {
            max-width: 60rem;
            margin: auto;
            display: flex;
        }
    `,
    imageContainer: styled.div`
        max-width: 100%;
        @media only screen and (min-width: 600px) {
            width: 50%;
        }
        img {
            border-top-left-radius: 1rem;
            border-top-right-radius: 1rem;
            width: 100%;
            height: 30rem;
            @media only screen and (min-width: 600px) {
                border-top-left-radius: 1rem;
                border-bottom-left-radius: 1rem;
                border-top-right-radius: 0rem;
                height: 100%;
            }
        }
    `,
    detailContainer: styled.div`
        max-width: 100%;
        padding: 2.4rem;
        @media only screen and (min-width: 600px) {
            width: 50%;
        }
        p {
            font-size: 1.2rem;
            text-transform: uppercase;
            letter-spacing: 0.5rem;
            font-weight: 500;
            line-height: 1.5rem;
            font-family: "Space Mono", monospace;
        }
    `,
    heading: styled.h1`
        margin-top: 1.2rem;
        font-family: "Fraunces", serif;
        font-weight: 700;
        font-size: 3.2rem;
        line-height: 3.3rem;
    `,
    description: styled.h6`
        font-family: "Space Mono", monospace;
        line-height: 2.3rem;
        font-size: 1.4rem;
        font-weight: 500;
        margin-top: 1.6rem;
    `,

    priceTag: styled.div`
        margin-top: 2.4rem;
        display: flex;
        justify-content: start;
        align-items: center;
        span {
            text-decoration: line-through;
            margin-left: 1.9rem;
        }
    `,

    price: styled.p`
        color: #3d8168;
        font-weight: 700 !important;
        font-size: 3.2rem !important;
        font-family: "Fraunces", serif !important;
        line-height: 3.2rem !important;
    `,
    button: styled.button`
        width: 100%;
        margin-top: 2rem;
        padding: 1.9rem 0rem;
        border-radius: 0.8rem;
        background-color: #3d8168;
        color: white;
        outline: 0px;
        border: 0px;
        font-size: 1.4rem;
        line-height: 1.7rem;
        font-weight: 700;
        cursor: pointer;
        img {
            margin-right: 1rem;
        }

        &:hover {
            background-color: #1a4032;
        }
    `,
};

export default App;
