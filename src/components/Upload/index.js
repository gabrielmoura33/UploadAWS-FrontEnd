import React from 'react';

import Dropzone from 'react-dropzone';
import { DropContainer, UploadMessage } from './styles';

function Upload({ onUpload }) {
  const renderDragMessage = (isDragActive, isDragReject) => {
    if(!isDragActive) {
      return <UploadMessage>Arraste arquivos aqui...</UploadMessage>
    }
    if(isDragReject) {
      return <UploadMessage type="error">Arquivo não suportado</UploadMessage>
    }

    return <UploadMessage type="sucess">Solte os arquivos aqui</UploadMessage>
  }
  return (
      <Dropzone accept={["image/*", "video/*"]} onDropAccepted={onUpload} >
        {({getRootProps, getInputProps, isDragActive, isDragReject}) => (
          <DropContainer 
            {...getRootProps()}
            isDragActive={isDragActive}
            isDragReject={isDragReject}
          >
            <input {...getInputProps()}/>
          { renderDragMessage(isDragActive, isDragReject) }
          </DropContainer>
        )}
      </Dropzone>
    );
}

export default Upload;