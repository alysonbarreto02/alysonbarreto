import { Name, NavBar, Topo } from "./styles";


export function Menu() {
    return (

        <div>
            <Topo>
                <Name>
                    <h1><span>Alyson</span> Kevin</h1>
                </Name>
                <NavBar>
                        <ul>
                            <li><a href="">Home</a></li>
                            <li><a href="">About me</a></li>
                            <li><a href="">Skills</a></li>
                            <li><a href="">Contact</a></li>
                        </ul>
                </NavBar>
            </Topo>
            <hr />
        </div>

    )
}