import styled from "styled-components";


export const BodyText = styled.section`
    width: 100vw;
    height: 100vh;
    
    display: flex;
    flex-direction: column;
`
export const Welcome = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    
    width: 100vw;
    height: 50vh;
    
    p{
    border-right: 2px solid var(--purple);

    display: flex;
    margin-top: auto;
    margin-left: 40px;

    line-height: 40px;

    color: var(--purple);
    font-size: 30px;
    font-family:'Roboto Mono', monospace;

    white-space: nowrap;
    overflow: hidden;
}

.typing-animation{
    animation: blinkCursor 500ms /*steps(20)*/ infinite normal, typing 4s steps(80) 1s normal;
}

@keyframes typing {
    from {
        width: 0;
    }
    to{
        width: 980px;
    }
}

@keyframes blinkCursor {
    from{
        border-right-color: var(--purple);
    }
    to{
        border-right-color: transparent;
    }
}
`
export const Alyson = styled.h2`
display: flex;
margin: 0 30px;

font-size: 50px;

span{
    margin-left: 10px;
}
`
