import styled from "styled-components";

export const Topo = styled.header`
    display: flex;
    height: 5rem;
    width: 100%;



;
`
export const Name = styled.div`
    height: 5rem;
    line-height: 5rem;
    margin-left: 4rem;

    span{
        color: #C8DE4E;
    }
    h1{
        color: white;
        font-size: 40px;
    }
`

export const NavBar = styled.nav`
    ul{
        font-size: 24px;

        display: flex;
        margin-left: 60rem;
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
    }
`
