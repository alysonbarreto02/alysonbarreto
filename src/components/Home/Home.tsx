import { Alyson, BodyText, Vetor, Welcome } from "./Style";

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
        {/* <img src={require('../../assets/images/Pc.png')} alt="logo"/> */}
        </Vetor>

        </BodyText>
    )
}