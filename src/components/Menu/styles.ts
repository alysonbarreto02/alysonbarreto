import styled from "styled-components";

export const Topo = styled.header`
    display: flex;
    height: 5rem;
    width: 100%;

    justify-content: center;
    align-items: center;
`
export const Name = styled.div`
    margin-top: 7rem;
    padding: 0 5rem;

    span{
        color: #C8DE4E;
    }

    h1{
        color: #F97355;
        font-size: 5rem;
    }
`

export const NavBar = styled.nav`
    ul{
        display: flex;
        margin-top: 5rem;

        font-size: 24px;
        color: gray;
    }
    
    li{
        margin: 0 30px;
    }
    a{
        color: white;
        font-weight: 500;
        text-decoration: none;

        font-family:'Roboto Mono', monospace;
    }
`
export const NavBarTwo = styled.nav`
    ul{
        display: flex;
        margin-top: 5rem;
        
        font-size: 24px;
        color: gray;
    }
    
    li{
        margin: 0 30px;
    }
    a{
        color: white;
        font-weight: 500;
        text-decoration: none;
        font-family:'Roboto Mono', monospace;
    }
`
