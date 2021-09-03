import React, { Component } from 'react';
import { uniqueId } from 'lodash';
import filesize from 'filesize';

import GlobalStyled from './styles/global';
import { Container, Content } from './styles';

import Upload from "./components/Upload";
import FileList from './components/FileList';

export default class App extends Component {

  state = {
    uploadedFiles: []
  };

  handleUpload = files => {
    console.log(files)
    const uploadedFiles = files.map(file => ({
      file,
      id: uniqueId(),
      name: file.name,
      readImageSize: filesize(file.size),
      preview: URL.createObjectURL(file),
      progress: 0,
      uploaded: false,
      error: false,
      url: null      
    }))
    this.setState({
      uploadedFiles: this.state.uploadedFiles.concat(uploadedFiles)
    });

  };
  
render(){
  const { uploadedFiles } = this.state; 
  return (
    <div className="App">
      <GlobalStyled/>
      <Container>
        <Content>
          <Upload onUpload={this.handleUpload}/>
            { !!uploadedFiles.length && (
              <FileList files={ uploadedFiles }/>
            )}
        </Content>
      </Container>
    </div>
    );
  }
}
