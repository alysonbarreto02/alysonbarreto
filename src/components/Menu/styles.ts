import styled from "styled-components";

export const Topo = styled.header`
    display: flex;
    height: 5rem;
    width: 100%;
    margin-left: 19.5rem;
    position: absolute;

;
`
export const Name = styled.div`
    height: 5rem;
    line-height: 5rem;
    margin: 0 5rem;

    span{
        color: #C8DE4E;
    }

    h1{
        color: #F97355;
        font-size: 40px;
    }
`

export const NavBar = styled.nav`
    ul{
        font-size: 24px;

        display: flex;
        height: 5rem;
        line-height: 5rem;

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
        font-size: 24px;

        display: flex;
        //padding-left: 30rem;
        height: 5rem;
        line-height: 5rem;

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
