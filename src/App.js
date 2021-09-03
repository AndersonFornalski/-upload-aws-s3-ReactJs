import GlobalStyled from './styles/global';
import Upload from "./components/Upload";
import { Container, Content } from './styles';

function App() {
  return (
    <div className="App">
      <GlobalStyled/>
      <Container>
        <Content>
          <Upload/>
        </Content>
      </Container>
    </div>
  );
}

export default App;
