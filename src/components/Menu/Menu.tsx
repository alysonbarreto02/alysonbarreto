import { Name, NavBar, NavBarTwo, Topo } from "./styles";


export function Menu() {
    return (
            <Topo>
                <NavBar>
                    <ul>
                        <li><a href="">HOME</a></li>
                        <li><a href="">ABOUT ME</a></li>
                    </ul>
                </NavBar>

                <Name>
                    <h1><span>Alyson</span> Kevin</h1>
                </Name>

                <NavBarTwo>
                    <ul>
                        <li><a href="">SKILLS</a></li>
                        <li><a href="">CONTACT</a></li>
                    </ul>
                </NavBarTwo>
            </Topo>
    )
}