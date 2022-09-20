import styled from "styled-components";
interface IPropsContainer {
    isVisible: boolean;
}
export const Container = styled.section<IPropsContainer>`
position: absolute;
backdrop-filter:blur(3px) ;
width: 100%;
height: 100%;
top: 0;
bottom: 0;
left: 0;
right: 0;
z-index:5;
display:flex;
justify-content: center;
align-items: center;

background: rgb(99,38,250);
background: linear-gradient(351deg, rgba(99,38,250,1) 0%, rgba(32,57,214,1) 82%, rgba(121,49,245,1) 100%);

>svg {
    position:absolute;
    top:1rem;
    right:1rem;
    color: #fff;
}

nav {
    display: flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    gap:2rem;


    a {
        text-decoration: none;
        color: #fff;
        font-family: 'Poppins', sans-serif;    }
}


`