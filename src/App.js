import GlobalStyled from './styles/global';
import Upload from "./components/Upload";
import FileList from './components/FileList';
import { Container, Content } from './styles';

function App() {
  return (
    <div className="App">
      <GlobalStyled/>
      <Container>
        <Content>
          <Upload/>
            <FileList/>
        </Content>
      </Container>
    </div>
  );
}

export default App;
