import MaterialTable from 'material-table';
import React, { useEffect } from 'react';
import { AddBox, ArrowDownward } from '@material-ui/icons';
import { HOST } from '../contains';
import Axios from 'axios';
import { Redirect } from 'react-router-dom';
function ManageOrder() {
  const { useState } = React;

  const [columns, setColumns] = useState([
    { title: '_id', field: '_id', editable: 'never', minWidth: 100 },
    { title: 'email', field: 'email', editable: 'never' },
    { title: 'phone', field: 'phone', editable: 'never' },
    {
      title: 'products',
      field: 'products',
      editable: 'never',
      width: 400,
      render: (rowData) => {
        if (rowData.products) {
          return rowData.products.map((product, index) => {
            return (
              <div
                key={index}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                }}>
                <img
                  alt="imgPic"
                  src={HOST + product.pictureItem}
                  style={{ width: 50, height: 50, borderRadius: '50%' }}
                />
                <p>
                  {product.name} x {product.quantity}
                </p>
              </div>
            );
          });
        }
      },
    },
    {
      title: 'address',
      field: 'address',
      editable: 'never',
      // headerStyle: { width: '190%', backgroundColor: '#ddd', height: 10, textAlign: 'center' },
    },
    { title: 'more', field: 'more', editable: 'never' },
    { title: 'price', field: 'price', editable: 'never' },
    {
      title: 'status',
      field: 'status',
      lookup: { 1: 'cho xac nhan', 2: 'da xac nhan', 3: 'Dang Van Chuyen', 4: 'Da Van Chuyen' },
    },
  ]);
  const [data, setData] = useState([
    { name: 'Mehmet', surname: 'Baran', birthYear: 1987, birthCity: 63 },
    { name: 'Zerya Betül', surname: 'Baran', birthYear: 2017, birthCity: 34 },
  ]);
  useEffect(() => {
    const productsData = Axios.get(HOST + 'orders/all')
      .then((res) => {
        console.log(res.data);
        setData([...res.data]);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <MaterialTable
      title="Editable Product"
      columns={columns}
      data={data}
      editable={{
        onRowAdd: (newData) =>
          new Promise((resolve, reject) => {
            setTimeout(() => {
              setData([...data, newData]);
              // return <Redirect to="/home/addProduct/" />;
              resolve();
            }, 1000);
          }),
        onRowUpdate: (newData, oldData) =>
          new Promise((resolve, reject) => {
            setTimeout(() => {
              const dataUpdate = [...data];
              const index = oldData.tableData.id;
              dataUpdate[index] = newData;
              setData([...dataUpdate]);
              console.log(newData);
              Axios.post(HOST + 'orders/update', newData)
                .then((res) => console.log(res.data))
                .catch((err) => console.log(err));
              resolve();
            }, 1000);
          }),
        onRowDelete: (oldData) =>
          new Promise((resolve, reject) => {
            setTimeout(() => {
              const dataDelete = [...data];
              const index = oldData.tableData.id;
              dataDelete.splice(index, 1);
              setData([...dataDelete]);

              resolve();
            }, 1000);
          }),
      }}
    />
  );
}

export default ManageOrder;
