import { Container, FileInfo, Preview } from "./styles";
import {CircularProgressbar} from 'react-circular-progressbar'; 
import { MdCheckCircle, MdError, MdLink } from 'react-icons/md';

const FileList = ({files}) => (
    <Container> 
       { files.map( uploadedFile => (
        <li>
            <FileInfo>
                <Preview src={ uploadedFile.preview }/>                
                <div>
                    <strong> { uploadedFile.name} </strong>
                    <span> { uploadedFile.readImageSize} <button onClick={() => {}}>Excluir</button></span>
                </div>
            </FileInfo>
            <div>
                { !uploadedFile.uploaded && !uploadedFile.error && (
                    <CircularProgressbar 
                    styles={{
                        root: { width: 24 },
                        path: { stroke: 'purple' }
                    }} 
                    strokeWidth={10}
                    percentage={ uploadedFile.progress}   
                 />   
                )}               
                
                 { uploadedFile.url && (
                     <a
                     href="https://s2.glbimg.com/iOJDmVIqL3xfdZsu7BV6RRCuyGs=/195x143:1722x1165/924x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_cf9d035bf26b4646b105bd958f32089d/internal_photos/bs/2021/u/p/YP2XLtRSaQAUjomVLttA/nc-grigio-showroom.jpg" 
                     target="_blank"
                     rel="noopener noreferrer"
                  >
                  <MdLink style={{ marginRight: 8}} size={24} color="blue" />
                  </a>
                 )}

                 { uploadedFile.success && <MdCheckCircle size={24} color="green"/> }
                 { uploadedFile.error && <MdError size={24} color="red"/> } 
            </div>
        </li>
       ))}
    </Container>
)

export default FileList;