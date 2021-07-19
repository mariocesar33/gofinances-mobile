import React from "react";
import { getBottomSpace } from "react-native-iphone-x-helper";
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
  TransactionList,
} from "./styles";

export function Dashboard() {
  const data = [
    {
      type: "positeve",
      title: "Desenvolvimento de site", 
      amount: "12.000,00 ECV" ,
      category: {
        name: "venda",
        icon: "dollar-sign"
      },
      date: "13/04/2020"
    },
    {
      type: "negative",
      title: "Hamburgueria Pizzy", 
      amount: "- 59,00 ECV" ,
      category: {
        name: "venda",
        icon: "dollar-sign"
      },
      date: "10/04/2020"
    },
    {
      type: "positive",
      title: "Freeler", 
      amount: "20.000,00 ECV" ,
      category: {
        name: "venda",
        icon: "dollar-sign"
      },
      date: "24/04/2020"
    },
    {
      type: "negative",
      title: "Renda da casa", 
      amount: "18.000,00 ECV" ,
      category: {
        name: "venda",
        icon: "dollar-sign"
      },
      date: "20/04/2020"
    },
  ];
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

        <TransactionList 
          data={data}
          renderItem={({ item }) => <TransactionCard data={item}/>}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            paddingBottom: getBottomSpace()
          }}
        />
        
      </Transactions>
    </Container>
  );
}