import { Alyson, BodyText, Welcome } from "./Style";

export function Home() {
    return (
        <BodyText>
            <Welcome>
                <p>
                    Hey! My name is
                </p>

                <Alyson>Alyson <span>Kevin</span></Alyson>

                <p>
                    your software developer.
                </p>

            </Welcome>
        </BodyText>
    )
}