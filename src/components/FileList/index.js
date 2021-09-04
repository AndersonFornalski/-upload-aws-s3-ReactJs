import { Container, FileInfo, Preview } from "./styles";
import  CircularProgressbar  from 'react-circular-progressbar'; 
import { MdCheckCircle, MdError, MdLink } from 'react-icons/md';

const FileList = ({files, onDelete }) => (
    <Container> 
       { files.map( uploadedFile => (
        <li key={uploadedFile.id}>
            <FileInfo>
                <Preview src={ uploadedFile.preview }/>                
                <div>
                    <strong> { uploadedFile.name} </strong>
                    <span> { uploadedFile.readImageSize} 
                    <button onClick={() => onDelete(uploadedFile.id)}>Excluir</button></span>
                </div>
            </FileInfo>
            <div>
                { !uploadedFile.uploaded && !uploadedFile.error && (
                <CircularProgressbar 
                    styles={{
                        root: { width: 40 },
                        path: { stroke: 'orange' },
                    }} 
                    strokeWidth={20}
                    percentage={uploadedFile.progress}   
                 />   
                )}               
                
                 { uploadedFile.url && (
                     <a
                     href={ uploadedFile.preview } 
                     target="_blank"
                     rel="noopener noreferrer"
                  >
                  <MdLink style={{ marginRight: 8}} size={24} color="blue" />
                  </a>
                 )}

                 { uploadedFile.uploaded && <MdCheckCircle size={24} color="green"/> }
                 { uploadedFile.error && <MdError size={24} color="red"/> } 
            </div>
        </li>
       ))}
    </Container>
)

export default FileList;