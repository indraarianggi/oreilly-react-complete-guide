import styled from "styled-components";
import Card from "../UI/Card/Card";

const HomeWrapper = styled.div`
  width: 90%;
  max-width: 40rem;
  margin: 2rem auto;
  padding: 3rem;
`;

const Message = styled.h1`
  padding: 3rem;
  text-align: center;
`;

const Home = () => {
  return (
    <HomeWrapper>
      <Card>
        <Message>Welcome back!</Message>
      </Card>
    </HomeWrapper>
  );
};

export default Home;
