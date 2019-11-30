import styled from "styled-components";
import { Title } from "../components/title/Title.styled";

const StyledContainer = styled.div`
    display: flex;
    height: 100vh;
    flex-direction: column;
    margin: 2rem 8rem;
`;

const Home = () => (
    <StyledContainer>
        <div>
            <Title>Next.js + Semantic UI!</Title>
        </div>
    </StyledContainer>
);
export default Home;
