// import {
//   FileUploadContainer,
//   FormField,
//   DragDropText,
//   UploadFileBtn,
//   FilePreviewContainer,
//   ImagePreview,
//   PreviewContainer,
//   PreviewList,
//   FileMetaData,
//   RemoveFileIcon,
//   InputLabel
// } from "./FileUpload.styles";

// const KILO_BYTES_PER_BYTE = 1000;
// const DEFAULT_MAX_FILE_SIZE_IN_BYTES = 500000;

// const convertNestedObjectToArray = (nestedObj) =>
//   Object.keys(nestedObj).map((key) => nestedObj[key]);

// const convertBytesToKB = (bytes) => Math.round(bytes / KILO_BYTES_PER_BYTE);

// const FileUpload = ({
//   label,
//   updateFilesCb,
//   maxFileSizeInBytes = DEFAULT_MAX_FILE_SIZE_IN_BYTES,
//   ...otherProps
// }) => {
//   const fileInputField = useRef(null);
//   const [files, setFiles] = useState({});
//   const user = useUser();
//   console.log(user);
//   const handleUploadBtnClick = () => {
//     fileInputField.current.click();
//   };

//   const addNewFiles = (newFiles) => {
//     for (let file of newFiles) {
//       if (file.size <= maxFileSizeInBytes) {
//         if (!otherProps.multiple) {
//           return { file };
//         }
//         files[file.name] = file;
//       }
//     }
//     return { ...files };
//   };

//   const callUpdateFilesCb = (files) => {
//     const filesAsArray = convertNestedObjectToArray(files);
//     updateFilesCb(filesAsArray);
//   };

//   const handleNewFileUpload = (e) => {
//     const { files: newFiles } = e.target;
//     if (newFiles.length) {
//       let updatedFiles = addNewFiles(newFiles);
//       setFiles(updatedFiles);
//       callUpdateFilesCb(updatedFiles);
//     }
//   };

//   const removeFile = (fileName) => {
//     delete files[fileName];
//     setFiles({ ...files });
//     callUpdateFilesCb({ ...files });
//   };

//   return (
//     <>
//       <FileUploadContainer>
//         <InputLabel>{label}</InputLabel>
//         <DragDropText>Drag and drop your files anywhere or</DragDropText>
//         <UploadFileBtn type="button" onClick={handleUploadBtnClick}>
//           <i className="fas fa-file-upload" />
//           <span> Upload {otherProps.multiple ? "files" : "a file"}</span>
//         </UploadFileBtn>
//         <FormField
//           type="file"
//           ref={fileInputField}
//           onChange={handleNewFileUpload}
//           title=""
//           value=""
//           {...otherProps}
//         />
//       </FileUploadContainer>
//       <FilePreviewContainer>
//         <span>To Upload</span>
//         <PreviewList>
//           {Object.keys(files).map((fileName, index) => {
//             let file = files[fileName];
//             let isImageFile = file.type.split("/")[0] === "image";
//             return (
//               <PreviewContainer key={fileName}>
//                 <div>
//                   {isImageFile && (
//                     <ImagePreview
//                       src={URL.createObjectURL(file)}
//                       alt={`file preview ${index}`}
//                     />
//                   )}
//                   <FileMetaData isImageFile={isImageFile}>
//                     <span>{file.name}</span>
//                     <aside>
//                       <span>{convertBytesToKB(file.size)} kb</span>
//                       <RemoveFileIcon
//                         className="fas fa-trash-alt"
//                         onClick={() => removeFile(fileName)}
//                       />
//                     </aside>
//                   </FileMetaData>
//                 </div>
//               </PreviewContainer>
//             );
//           })}
//         </PreviewList>
//       </FilePreviewContainer>
//     </>
//   );
// };

// import React, { useRef, useState } from "react";
// import useUser from "../../hooks/useUser";
// import { axios } from "../../utils/axiosPublic";

// const FileUpload = () => {
//   const [file, setFile] = useState(null);

//   const handleChange = (e) => {
//     setFile(e?.target?.files[0]);
//     // console.log(file?.type);
//   };
//   const submit = () => {
//     const data = new FormData();

//     data.append("file", file);
//     console.warn(file);

//     // data.append
//   };

//   return (
//     <div>
//       <from>
//         <input
//           type="file"
//           name="file"
//           value={file}
//           onChange={() => handleChange()}
//         />
//       </from>
//     </div>
//   );
// };

// export default FileUpload;


import React from 'react'
import {axios} from '../../utils/axiosPublic';

class FileUpload extends React.Component{

    constructor(){
        super();
        this.state = {
            selectedFile:'',
        }

        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        this.setState({
            selectedFile: event.target.files[0],
          })
    }

    submit(){
        const data = new FormData() 
        data.append('file', this.state.selectedFile)
        console.warn(this.state.selectedFile);
        // let url = "http://localhost:8000/upload.php";

        axios.post("/api/services/CT_LIS/", data, { // receive two parameter endpoint url ,form data 
        })
        .then(res => { // then print response status
            console.log(res);
        }).catch(err => console.log(err))

    }

    render(){
        return(
            <div>
                <div className="row">
                    <div className="col-md-6 offset-md-3">
                        <br /><br />

                            <h3 className="text-white">React File Upload - Nicesnippets.com</h3>
                            <br />
                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <label className="text-white">Select File :</label>
                                    <input type="file" className="form-control" name="upload_file" onChange={this.handleInputChange} />
                                </div>
                            </div>

                            <div className="form-row">
                                <div className="col-md-6">
                                    <button type="submit" className="btn btn-dark" onClick={()=>this.submit()}>Save</button>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        )  
    }
}

export default FileUpload;