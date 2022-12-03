import { Container, Links, Content } from './styles';

import { Header } from '../../components/Header';
import { Button } from '../../components/Button';
import { Section } from '../../components/Section';
import { Tag } from '../../components/Tag';
import { ButtonText } from '../../components/ButtonText';

export function Details() {

  return(
    <Container>

      <Header/>

      <main>
        <Content>
          
          <ButtonText title="Excluir nota" />

            <h1>
              Introdução ao React
            </h1>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse necessitatibus numquam reprehenderit, consequatur modi unde architecto, culpa amet hic odit laborum harum natus eum, sequi voluptatum nesciunt nulla explicabo! Deserunt!
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque quos voluptates odio aspernatur magnam odit, eaque, molestiae eos distinctio aperiam qui vitae aliquam rem. Dolor impedit ullam aut repellat? Repellendus?
            </p>

            <Section title="Links úteis">
              <Links>
               <li>
                 <a href="#">Item 1</a>
               </li>
               <li>
                 <a href="#">Item 2</a>
               </li>
              </Links>
            </Section>

            <Section title="Marcadores">
             <Tag title="express"/>
             <Tag title="note"/>
           </Section>

          <Button title="Voltar" />

        </Content>
      </main>
      

    </Container>
  );

};

