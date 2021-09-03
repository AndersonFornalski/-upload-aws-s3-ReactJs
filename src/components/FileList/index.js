import { Container, FileInfo, Preview } from "./styles";
import {CircularProgressbar} from 'react-circular-progressbar'; 
import { MdCheckCircle, MdError, MdLink } from 'react-icons/md';

const FileList = () => (
    <Container> 
        <li>
            <FileInfo>
                <Preview src="https://upload-cloud-2.s3.amazonaws.com/163c6314c8104308a08c8a7da1006b80-Lamborghini-Countach-LPI-800-4.jpg" />                
                <div>
                    <strong>lamborghini-coutach.jpg</strong>
                    <span>64kb <button onClick={() => {}}>Excluir</button></span>
                </div>
            </FileInfo>
            <div>
                <CircularProgressbar 
                    styles={{
                        root: { width: 24 },
                        path: { stroke: 'purple' }
                    }} 
                    strokeWidth={10}
                    percentage={50}   
                 />   
                 <a
                    href="https://upload-cloud-2.s3.amazonaws.com/163c6314c8104308a08c8a7da1006b80-Lamborghini-Countach-LPI-800-4.jpg" 
                    target="_blank"
                    rel="noopener noreferrer"
                 >
                     <MdLink style={{ marginRight: 8}} size={24} color="blue" />
                 </a>
                 <MdCheckCircle size={24} color="green"/>
                 <MdError size={24} color="red"/>
            </div>
        </li>
    </Container>
)

export default FileList;