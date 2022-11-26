import { Container, Profile } from "./styles";

export function Header(){

  return(
    <Container>

        <Profile>

          <img 
            src="https://avatars.githubusercontent.com/u/18670313?v=4"
            alt="Texto alternativo" 
            />

            <div>
              <span>Bem-vindo</span>
              <strong>William Magnabosco</strong>
            </div>

        </Profile>
      
    </Container>
  )

}