import React from "react";
import { 
  Container, 
  Header,
  UserWrapper,
  UserInfo,
  Photo,
  User,
  UserGreeting,
  UserName,
  Logout,
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

          <Logout></Logout>
        </UserWrapper>
      </Header>
    </Container>
  );
}