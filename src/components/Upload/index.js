import React, {Component} from "react";
import Dropzone from 'react-dropzone';
import { DropContainer, UploadMessage } from './style';

export default class Upload extends Component { 

    renderDragMessage = ( isDragActive, isDragReject ) => {
        if(!isDragActive){
            return <UploadMessage> Arraste e solte suas imagens aqui...</UploadMessage>
        }
        if(isDragReject) {
            return <UploadMessage type="error"> Somente imagens jpg e gif </UploadMessage>
        }
            return <UploadMessage type="success"> Solte suas imagens aqui</UploadMessage>
    };
    render(){
        const { onUpload } = this.props;
        return(
            <Dropzone accept="image/*" onDropAccepted={onUpload}>
                {({ getRootProps, getInputProps, isDragActive, isDragReject }) => (
                    < DropContainer
                        { ...getRootProps()}
                        isDragActive={isDragActive}
                        isDragReject={isDragReject}
                    >
                        <input { ...getInputProps()} />
                        <h1>Clique ou Arraste aqui suas imagem</h1>
                        { this.renderDragMessage( isDragActive, isDragReject)}
                    </DropContainer>
                )}
            </Dropzone>
        )
    }
}