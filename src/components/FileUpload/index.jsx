
import React, { useState } from "react";
import FileUpload from "./FileUpload";

function App() {
  const [newUserInfo, setNewUserInfo] = useState({
    profileImages: []
  });

  const updateUploadedFiles = (files) =>
    setNewUserInfo({ ...newUserInfo, profileImages: files });

  const handleSubmit = (event) => {
    event.preventDefault();
    //logic to create new user...
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <FileUpload
        //   accept=".jpg,.png,.jpeg"
          label="Upload Here"
          multiple
          updateFilesCb={updateUploadedFiles}
        />
        {/* <button type="submit">Create New User</button> */}
      </form>
    </div>
  );
}

export default App;