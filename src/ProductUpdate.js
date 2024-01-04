import React, { useState } from 'react'
import { DeleteButton, Edit, NumberInput, SimpleForm, TextInput, useNotify, useRedirect, useRefresh } from 'react-admin'
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { storage } from "./firebaseConfig"
import { v4 } from 'uuid';

const ProductUpdate = (props) => {

  const notify = useNotify();
  const redirect = useRedirect();
  const refresh = useRefresh();
  const [image, setImage] = useState(null);
  const [url, setUrl] = useState('');
  const [urlTextAreaVisible, setUrlTextAreaVisible] = useState(false); // To show/hide the URL textarea

  function uploadImage() {
    if (image == null) return;
  
    // Create a reference to the storage location where you want to store the image.
    const imageRef = ref(storage, `images/${v4()}`);
  
    // Use FileReader to read the selected image file
    const reader = new FileReader();
  
    reader.onload = (event) => {
      // Create an Image object
      const img = new Image();
      
      img.onload = () => {
        // Create a canvas element
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
  
        // Set canvas dimensions to the desired size (e.g., 400x400)
        canvas.width = 400;
        canvas.height = 400;
  
        // Draw the image on the canvas with the desired size
        ctx.drawImage(img, 0, 0, 400, 400);
  
        // Convert the canvas content to a Blob
        canvas.toBlob((blob) => {
          // Upload the resized image file.
          uploadBytes(imageRef, blob)
            .then((snapshot) => {
              console.log('Resized image uploaded successfully', snapshot);
  
              // Get the download URL of the uploaded image.
              getDownloadURL(imageRef)
                .then((downloadURL) => {
                  console.log('Download URL:', downloadURL);
                  setUrl(downloadURL);
                  setUrlTextAreaVisible(true); // Show the URL textarea
                })
                .catch((error) => {
                  console.error('Error getting download URL', error);
                });
            })
            .catch((error) => {
              console.error('Error uploading resized image', error);
            });
        });
      };
  
      // Set the source of the Image object to the loaded image data
      img.src = event.target.result;
    };
  
    // Read the selected image file as a data URL
    reader.readAsDataURL(image);
  }
  
  const handleSave = (values) => {
    // Implement your update logic here
    // Handle the update logic and call notify, refresh, and redirect as needed
    notify('Product updated');
    refresh();
    redirect('/products');
  };

  return (
    <div className='product-create-container'>
      <div className='left'>
        <Edit {...props}>
          <SimpleForm save={handleSave}>
            <TextInput source='ref' />
            <TextInput source='name' />
            <TextInput source='category' />
            <NumberInput source='quantity' />
            <TextInput source='image' />
            <NumberInput source='price' />
            <DeleteButton basePath='/products' />
          </SimpleForm>
        </Edit>
      </div>
      <div className='right'>
        <div className='image-upload-container'>
          <label htmlFor='image'>Image:</label>
          <input type="file" id="image" onChange={(event) => {
            setImage(event.target.files[0]);
          }} />
        </div>
        <button onClick={uploadImage}>Upload Image</button>

        {urlTextAreaVisible && (
          <div>
            <p>Image URL:</p>
            <textarea
              rows="4"
              cols="50"
              readOnly
              value={url}
            />
          </div>
        )}
      </div>
    </div>
  )
}

export default ProductUpdate