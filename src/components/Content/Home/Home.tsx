import { Alyson, BodyText, Welcome } from "./Style";
import { BsBug } from 'react-icons/bs'

export function Home() {
    return (
        <BodyText>
            
            <Welcome>
                <p>                    
                    Hey! My name is
                    <Alyson>Alyson <span>Kevin</span></Alyson>
                    software developer. 
                </p>
            </Welcome>

        </BodyText>
    )
}