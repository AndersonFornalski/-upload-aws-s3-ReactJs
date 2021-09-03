 import styled, { css } from 'styled-components';

 const dragActive = css `
    border: 2px dashed green;
 `
 const dragReject = css `
    border: 2px dashed red;
 `
 
 export const DropContainer = styled.div.attrs({
     className: "dropzone"
 })`
    border: 1px dashed #ddd;
    border-radius: 10px;
    cursor: pointer;

    transition: height 0.2s ease;

    ${ props => props.isDragActive && dragActive} 
    ${ props => props.isDragReject && dragReject} 
 `;

 export const UploadMessage = styled.div`
    
 `