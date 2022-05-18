import styled from "styled-components";

export const BodyText = styled.section`
    display: flex;

    width: 100%;
    height: calc(1000px - 5rem);
    margin-top: 5rem;

    justify-content: center;
    align-items: center;
`
export const Welcome = styled.div`
    display: flex;
    width: 50%;

p{
    font-size: 4rem;
    line-height: 3rem;

    font-family:'Roboto Mono', monospace;
    color: white;
}

h2{
    color: #F97355;
    font-size: 5rem;
    span{
        color: #C8DE4E;
    }
}
`