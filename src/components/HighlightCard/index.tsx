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
  type: "up" | "down" | "total";
}

export function HighilghtCard({ 
  type,
  title, 
  amount, 
  lastTransaction 
}: HighilghtCardProps) {

  const icon = {
    up: "arrow-up-circle",
    down: "arrow-down-circle",
    total: "dollar-sign"
  }

  return (
    <Container>
      <Header>
        <Title>{title}</Title>
        <Icon name={icon[type]}/>
      </Header>

      <Footer>
        <Amount>{amount}</Amount>
        <LastTransaction>{lastTransaction}</LastTransaction>
      </Footer>
    </Container>
  );
}