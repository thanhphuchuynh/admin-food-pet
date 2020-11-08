import MaterialTable from 'material-table';
import React, { useEffect } from 'react';
import { AddBox, ArrowDownward } from '@material-ui/icons';
import { HOST } from '../contains';
import Axios from 'axios';
import { Redirect } from 'react-router-dom';
function ManageProduct() {
  const { useState } = React;

  const [columns, setColumns] = useState([
    { title: '_id', field: '_id', editable: 'never', minWidth: 100 },
    {
      title: 'picture',
      field: 'picture',
      editable: 'never',
      render: (rowData) => {
        return rowData.picture ? (
          <img
            alt="imgPic"
            src={HOST + rowData.picture[0]}
            style={{ width: 50, height: 50, borderRadius: '50%' }}
          />
        ) : (
          ''
        );
      },
    },
    { title: 'name', field: 'name' },
    {
      title: 'description',
      field: 'description',
      width: 700,
      // headerStyle: { width: '190%', backgroundColor: '#ddd', height: 10, textAlign: 'center' },
    },
    { title: 'number', field: 'number', type: 'numeric' },
    { title: 'Price', field: 'price', type: 'numeric' },
    {
      title: 'type',
      field: 'type',
      lookup: { food: 'food', care: 'care', other: 'other', tool: 'tool' },
    },
  ]);
  const [data, setData] = useState([
    { name: 'Mehmet', surname: 'Baran', birthYear: 1987, birthCity: 63 },
    { name: 'Zerya Betül', surname: 'Baran', birthYear: 2017, birthCity: 34 },
  ]);
  useEffect(() => {
    const productsData = Axios.get(HOST + 'products/all')
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
      // options={{
      //   fixedColumns: {
      //     left: 1,
      //     right: 1,
      //   },
      // }}
      editable={{
        onRowAdd: (newData) =>
          new Promise((resolve, reject) => {
            setTimeout(() => {
              setData([...data, newData]);
              // return <Redirect to="/home/addProduct/" />;
              resolve();
            }, 1000);
            return <Redirect to="/home/addProduct/" />;
          }),
        onRowUpdate: (newData, oldData) =>
          new Promise((resolve, reject) => {
            setTimeout(() => {
              const dataUpdate = [...data];
              const index = oldData.tableData.id;
              dataUpdate[index] = newData;
              setData([...dataUpdate]);
              console.log(newData);
              Axios.post(HOST + 'products/update', newData)
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

export default ManageProduct;
