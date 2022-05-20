import { Alyson, BodyText, Vetor, Welcome } from "./Style";
import { BsBug } from 'react-icons/bs'

export function Home() {
    return (
        <BodyText>
            <Welcome>
                <p>
                    Hey! My name is
                    <Alyson>Alyson <span>Kevin</span></Alyson>
                    your software developer.
                </p>
            </Welcome>
        <Vetor>
            <BsBug className="bug"/>
        {/* <img src={require('../../assets/images/Pc.png')} alt="logo"/> */}
        </Vetor>

        </BodyText>
    )
}