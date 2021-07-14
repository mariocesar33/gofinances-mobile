import React from "react";
import { HighilghtCard } from "../../components/HighlightCard";
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
        <HighilghtCard />
        <HighilghtCard />
        <HighilghtCard />
      </HighilghtCards>
    </Container>
  );
}