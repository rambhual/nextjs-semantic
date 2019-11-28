import styled from 'styled-components';
import { Button } from 'semantic-ui-react';

const StyledContainer = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column;
  margin: 2rem 8rem
`;

const Home = () => (
  <StyledContainer>
    <div>
      <h1>Next.js + Semantic UI!</h1>
    </div>
    <div>
      <Button primary>Primary</Button>
      <Button secondary>Secondary</Button>
    </div>
  </StyledContainer>
);
export default Home;
