import React from "react";
import { HighilghtCard } from "../../components/HighlightCard";
import { TransactionCard } from "../../components/TransactionCard"; 

import { 
  Container, 
  Header,
  UserWrapper,
  UserInfo,
  Photo,
  User,
  UserGreeting,
  UserName,
  Icon,
  HighilghtCards,
  Transactions,
  Title,
} from "./styles";

export function Dashboard() {
  return (
    <Container>
      <Header>
        <UserWrapper>
          <UserInfo>
            <Photo 
              source={{ uri: "https://avatars.githubusercontent.com/u/24758286?v=4"}}
            />

            <User>
              <UserGreeting>Olá,</UserGreeting>
              <UserName>Mário César</UserName>
            </User>
          </UserInfo>
          <Icon name="power" />
        </UserWrapper>
      </Header>
      
      <HighilghtCards>
        <HighilghtCard type="up" title="Entradas" amount="17.400,00 ECV" lastTransaction="Última entrada dia 13 de abril" />
        <HighilghtCard type="down" title="Saídas" amount="1.259,00 ECV" lastTransaction="Última saída dia 03 de abril"/>
        <HighilghtCard type="total" title="Entradas" amount="16.141,00 ECV" lastTransaction="01 à 16 de abril"/>
      </HighilghtCards>
    
      <Transactions>
        <Title>Listagem</Title>

        <TransactionCard />
      </Transactions>
    </Container>
  );
}