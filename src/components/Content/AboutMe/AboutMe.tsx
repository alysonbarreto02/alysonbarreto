import { About, Me, TextAbout, Title } from "./Styles";

export function AboutMe(){
    return(
       <About>
           <Me>
               <img src="https://avatars.githubusercontent.com/u/104519462?s=400&u=46823a1adc6bb40334b93ed68b3c447a1f35a485&v=4" alt="Alyson Kevin" />
           </Me>
           <TextAbout>
               <p>
               <Title><h3>About <span>Me</span></h3></Title>
                   Hey brother, my name is Alyson and we're going to code a lot.
                <br />
                Here you will find a guy who is handsome, hot, plays ball and dances.
                <br />
                Who is the best? ME!</p>
           </TextAbout>
       </About> 
    )
}