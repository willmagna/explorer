import { RiShutDownLine } from 'react-icons/ri';
import { useAuth } from '../../hooks/auth';

import { Container, Profile, Logout } from "./styles";


export function Header(){

  const { signOut } = useAuth();

  return(
    <Container>

        <Profile to="/Profile">

          <img 
            src="https://avatars.githubusercontent.com/u/18670313?v=4"
            alt="Texto alternativo" 
            />

            <div>
              <span>Bem-vindo</span>
              <strong>William Magnabosco</strong>
            </div>

        </Profile>

        <Logout onClick={signOut}>
          <RiShutDownLine/>
        </Logout>
      
    </Container>
  )

}