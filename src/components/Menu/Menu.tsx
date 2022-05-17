import { Topo } from "./styles";


export function Menu() {
    return (

        <div>
            <Topo>
                <div className="name">
                    <h1><span> Alyson</span> Kevin</h1>
                </div>
                <nav className="navBar">
                    <ul>
                        <li><a href="">Home</a></li>
                        <li><a href="">About me</a></li>
                        <li><a href="">Contact</a></li>
                    </ul>
                </nav>
            </Topo>
        </div>

    )
}