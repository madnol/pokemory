import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
 body {
    font-family: ${({ theme }) => theme.fontFamily};
    background-color: ${({ theme }) => theme.backgroundColor};
 }

 h1 {
    color: ${({ theme }) => theme.primaryColor};
 } 
 button {
    background-color: ${({ theme }) => theme.primaryColor};
 }
 *{
        margin:0;
        padding:0;
        box-sizing:border-box;
    }
    html {
        &::-webkit-scrollbar{
            width: 0.5rem;
        }
        &::-webkit-scrollbar-thumb{
            background-color: darkgray;
        }
    }
    body {
        font-family: Montserrat, sans-serif;
        width: 100%;
    }
    h2 {
        font-size:3rem;
        font-family: 'Abril Fatface',cursive;
        font-weight:lighter;
        color: #333;
    }

    h3{
        font-size:1.3rem;
        color: #333;
        padding:1.5rem;
    }

    p{
        font-size: 1.2rem;
        line-height:200%;
        color: #696969
    }

    a{
        text-decoration: none;
        color: #333;
    }
    img{
        display:block;
    }
    input{
        font-weight: bold;
        font-family: "Montserrat", sans-serif;
    }
`;

export default GlobalStyle;
