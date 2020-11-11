import {
  FormControl,
  IconButton,
  InputLabel,
  makeStyles,
  MenuItem,
  Select,
  TextField,
} from '@material-ui/core';
import { PhotoCamera } from '@material-ui/icons';
import Axios from 'axios';
import React, { useState } from 'react';
import { Button, Container } from 'reactstrap';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 400,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  },
}));
const AddProduct = () => {
  const classes = useStyles();

  const [name, setName] = useState('');
  const [type, setType] = useState('food');
  const [price, setPrice] = useState();
  const [number, setNumber] = useState();
  const [description, setDescription] = useState();

  const [picture, setPicture] = useState([]);

  const uploadProduct = () => {
    console.log('sda', picture);
    const formData = new FormData();
    picture.forEach((pic) => {
      formData.append('photos', pic);
    });
    formData.append('name', name);
    formData.append('type', type);
    formData.append('description', description);
    formData.append('number', number);
    formData.append('price', price);
    console.log(formData);
    const config = { headers: { 'Content-Type': 'multipart/form-data' } };

    Axios.post('http://localhost:3000/products/upload', formData, config)
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <div>
      {/* <h1>Add Product</h1> */}
      <div
        style={{
          margin: 'auto',
          width: '70%',
        }}>
        <div
          style={{
            margin: 'auto',
            // width : 40
          }}>
          <h1
            style={{
              textTransform: 'uppercase',
            }}>
            Add Product
          </h1>
        </div>

        <form className={classes.root} noValidate autoComplete="off">
          <div style={{ margin: 'auto', width: '100%' }}>
            <TextField
              style={{ margin: 'auto', width: '100%', marginTop: 20 }}
              onChange={(text) => setName(text.target.value)}
              id="standard-password-input"
              label="Name"
              type="text"
              autoComplete="current-password"
            />
            {/* <TextField
                                style={{margin:"auto",width:'100%',marginTop:20}}
                                onChange={(text)=>setType(text.target.value)}
                                id="standard-account-input"
                                label="Type"
                                type="text"
                                autoComplete="current-password"
                            /> */}
            <div style={{ marginTop: 20 }}>
              <FormControl style={{ width: '100%' }}>
                <InputLabel id="demo-simple-select-label">Type</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={type}
                  onChange={(text) => setType(text.target.value)}>
                  <MenuItem value="food">food</MenuItem>
                  <MenuItem value="care">care</MenuItem>
                  <MenuItem value="tool">tool</MenuItem>
                  <MenuItem value="other">other</MenuItem>
                </Select>
              </FormControl>
            </div>
            <TextField
              style={{ margin: 'auto', width: '100%', marginTop: 20 }}
              onChange={(text) => setDescription(text.target.value)}
              id="standard-account-input"
              label="description"
              type="text"
              multiline
              autoComplete="current-password"
            />
            <TextField
              style={{ margin: 'auto', width: '100%', marginTop: 20 }}
              onChange={(text) => setNumber(text.target.value)}
              id="standard-account-input"
              label="Number"
              type="number"
              autoComplete="current-password"
            />
            <TextField
              style={{ margin: 'auto', width: '100%', marginTop: 20, marginBottom: 40 }}
              onChange={(text) => setPrice(text.target.value)}
              id="standard-account-input"
              label="Price"
              type="number"
              autoComplete="current-password"
            />

            <div>
              <input
                accept="image/*"
                id="contained-button-file"
                multiple
                type="file"
                onChange={(e) => setPicture([...e.target.files])}
              />
              <label htmlFor="contained-button-file">
                <Button variant="contained" color="primary" component="span">
                  Upload
                </Button>
              </label>
              {/* <input accept="image/*"  id="icon-button-file" type="file" />
                                <label htmlFor="icon-button-file">
                                    <IconButton color="primary" aria-label="upload picture" component="span">
                                    <PhotoCamera />
                                    </IconButton>
                                </label> */}
            </div>
            <Button
              style={{ margin: 'auto', width: '100%', marginTop: 50 }}
              onClick={() => {
                // console.log(picture);
                uploadProduct();
              }}
              variant="contained"
              color="primary">
              add
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
