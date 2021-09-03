import GlobalStyled from './styles/global';
import Upload from "./components/Upload";
import FileList from './components/FileList';
import { Container, Content } from './styles';
import React, { Component } from 'react';

export default class App extends Component {

  state = {
    uploadedFile: [],
  }
  handleUpload = files => {
    console.log(files)
  };
  
render(){
  return (
    <div className="App">
      <GlobalStyled/>
      <Container>
        <Content>
          <Upload onUpload={this.handleUpload}/>
            <FileList/>
        </Content>
      </Container>
    </div>
    );
  }
}
