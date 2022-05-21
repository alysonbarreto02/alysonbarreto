import styled from "styled-components";

export const About = styled.section`
background-color: var(--background-second);
display: flex;

width: 100vw;
height: 100vh;
`
export const Me = styled.div`
width: 30vw;
height: 100vh;

display: flex;
align-items: center;
justify-content: center;

img{
    width: 400px;
    height: 400px;

    border-radius: 100rem;
    background: #CA12FA;
    padding: 7px;
}
`
export const TextAbout = styled.div`
display: flex;
justify-content: center;
align-items: center;

width: 70vw;
height: 100vh;
p{
    display: flex;

    background-color: var(--background);
    border-radius: 40px;
    padding: 40px 40px;

    line-height: 40px;

    color: var(--pink);
    font-size: 30px;
    font-family:'Roboto Mono', monospace;
}
`
export const Title = styled.label`
display: flex;
margin-top: 4rem;

font-size: 50px;
color: var(--green);
span{
    margin-left: 78px;
}
`