import React from "react";
import { 
  Container,
  Header,
  Title,
  Icon,
  Footer,
  Amount,
  LastTransaction,
} from "./styles"

interface HighilghtCardProps {
  title: string;
  amount: string;
  lastTransaction: string;
  type: "up" | "down" | "total"
}

export function HighilghtCard({ 
  title, 
  amount, 
  lastTransaction 
}: HighilghtCardProps) {

  return (
    <Container>
      <Header>
        <Title>{title}</Title>
        <Icon name="arrow-up-circle"/>
      </Header>

      <Footer>
        <Amount>{amount}</Amount>
        <LastTransaction>{lastTransaction}</LastTransaction>
      </Footer>
    </Container>
  );
}