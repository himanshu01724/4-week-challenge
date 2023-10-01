import { useState } from "react";
function ExcelFeature(){
    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileChange = (e) => {
      setSelectedFile(e.target.files[0]);
    };
  
    const handleUpload = () => {
      if (selectedFile) {
        // Create a FormData object to send the file to the server
        const formData = new FormData();
        formData.append('excelFile', selectedFile);
  
        // Make a POST request to your backend API to handle the file upload
        fetch('http://127.0.0.1:3001/api/upload', {
          method: 'POST',
          body: formData,
        })
          .then((response) => response.json())
          .then((data) => {
            console.log('File uploaded successfully:', data);
            // Handle the response from the server
          })
          .catch((error) => {
            console.error('Error uploading file:', error);
            // Handle any errors
          });
      } else {
        alert('Please select a file to upload.');
      }
    };
    return(
        <div>
        <input type="file" onChange={handleFileChange} />
        <button onClick={handleUpload}>Upload</button>
      </div>
    )
}
export default ExcelFeature