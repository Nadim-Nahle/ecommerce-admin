import React, { useState } from 'react';
import { storage } from "./firebaseConfig"
import {
  Create,
  NumberInput,
  SimpleForm,
  TextInput,
  useNotify,
  useRedirect,
  useTranslate,
} from 'react-admin';
import dataProvider from './dataProvider';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { v4 } from 'uuid';

const ProductCreate = (props) => {
  const notify = useNotify();
  const redirect = useRedirect();
  const translate = useTranslate();
  const [image, setImage] = useState(null);
  const [url, setUrl] = useState('');
  const [urlTextAreaVisible, setUrlTextAreaVisible] = useState(false); // To show/hide the URL textarea

  function uploadImage() {
    if (image == null) return;

    // Create a reference to the storage location where you want to store the image.
    const imageRef = ref(storage, `images/${v4()}`);

    // Upload the image file.
    uploadBytes(imageRef, image)
      .then((snapshot) => {
        console.log('Image uploaded successfully', snapshot);

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
        console.error('Error uploading image', error);
      });
  }

  const handleSave = (values) => {
    // Call the create method with your dataProvider
    values.image = url;
    dataProvider
      .create('products', { data: values })
      .then(() => {
        notify(translate('Product created successfully'));
        redirect('/products');
      })
      .catch((error) => {
        notify(error.message, 'error');
      });
  };

  return (
    <div className='product-create-container'>
      <div className='left'>
        <Create {...props}>
          <SimpleForm save={handleSave}>
            <TextInput source='ref' />
            <TextInput source='name' />
            <TextInput source='category' />
            <NumberInput source='quantity' />
            <TextInput source='image' />
            <NumberInput source='price' />
          </SimpleForm>
        </Create>
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
  );
};

export default ProductCreate;
