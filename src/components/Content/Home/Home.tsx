import { Alyson, BodyText, Welcome } from "./Style";

export function Home() {
    return (
        <BodyText>
            
            <Welcome>
                <p className="typing-animation">                    
                    Hey! My name is
                    <Alyson>Alyson <span>Kevin</span></Alyson>
                    software developer. 
                </p>
            </Welcome>
            {/* <Vetor>
                <img src={require('../../../assets/images/Astronauta.svg')} alt="Vetor"/>
            </Vetor> */}

        </BodyText>
    )
}