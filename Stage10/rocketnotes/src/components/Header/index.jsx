import { useNavigate } from 'react-router-dom';
import { RiShutDownLine } from 'react-icons/ri';

import { useAuth } from '../../hooks/auth';

import { Container, Profile, Logout } from "./styles";

import { api } from '../../../../api/src/services/api';


export function Header(){

  const { signOut, user } = useAuth();

  const navigation = useNavigate();

  function handleSignOut(){
    navigation("/");
    signOut();
  }

  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;

  return(
    <Container>

        <Profile to="/Profile">

          <img 
            src={avatarUrl}
            alt={user.name} 
            />

            <div>
              <span>Bem-vindo</span>
              <strong>{user.name}</strong>
            </div>

        </Profile>

        <Logout onClick={handleSignOut}>
          <RiShutDownLine/>
        </Logout>
      
    </Container>
  )

}