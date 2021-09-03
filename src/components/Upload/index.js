import React, {Component} from "react";
import Dropzone from 'react-dropzone';
import { DropContainer, UploadMessage } from './style';

export default class Upload extends Component {

    renderDragMessage = ( isDragActive, isDragReject ) => {
        if(!isDragActive){
            return <UploadMessage> Arraste seus arquivos aqui...</UploadMessage>
        }
    };


    render(){
        return(
            <Dropzone accept="image/*" onDropAccepted={() => {}}>
                {({ getRootProps, getInputProps, isDragActive, isDragReject }) => (
                    < DropContainer
                        { ...getRootProps()}
                        isDragActive={isDragActive}
                        isDragReject={isDragReject}
                    >
                        <input { ...getInputProps()} />
                        <h1>Click ou Arraste aqui suas imagem</h1>
                        { this.renderDragMessage( isDragActive, isDragReject)}
                    </DropContainer>
                )}
            </Dropzone>
        )
    }
}