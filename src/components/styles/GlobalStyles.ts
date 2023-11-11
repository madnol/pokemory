import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @-webkit-keyframes color-change-2x {
  0% {
    background: #19dcea;
  }
  100% {
    background: #b22cff;
  }
}
@keyframes color-change-2x {
  0% {
    background: #19dcea;
  }
  100% {
    background: #b22cff;
  }
}

 html, body, #root   {
  width: 100vw;
  height: 100vh;
 }
 
 body {
    font-family: ${({ theme }) => theme.fontFamily};
    background-color: ${({ theme }) => '#fff'};
    -webkit-animation: color-change-2x 2s linear infinite alternate both;
	        animation: color-change-2x 2s linear infinite alternate both;
 }

 h1 {
    color: ${({ theme }) => theme.primaryColor};
 } 
 button {
    background-color: ${({ theme }) => theme.primaryColor};
 }
 * {
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
        font-weight:lighter;
        color: #333;
    }

h3{
        font-size:1.3rem;
        color: #333;
    }

span {
  font-size: calc(10px + (16 - 10) * ((100vw - 300px) / (1920 - 300)));

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
