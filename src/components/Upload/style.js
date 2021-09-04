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

    h1 {
       color: orange;
       padding: 10px;
       text-align: center;
    }

    ${ props => props.isDragActive && dragActive} 
    ${ props => props.isDragReject && dragReject} 
 `;

 const messageColors = {
    default:'#999',
    error:'red',
    success:'green'
 } 

 export const UploadMessage = styled.p`
    display: flex;
    color: ${ props => messageColors[props.type || 'default']};
    justify-content: center;
    align-items: center;
    padding: 15px 0;
 `;