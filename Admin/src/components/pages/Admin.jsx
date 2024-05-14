import React, { useEffect, useReducer, useState } from "react";
import Table from "react-bootstrap/Table";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import Button from "react-bootstrap/Button";

function reducer({state, action}) {
  switch (action.type) {
    case "SetData":
      return { ...state, data: action.data };
    case "DeleteData":
      const updatedDataAfterDelete = state.data.filter(
        (elem) => elem.id !== action.id
      );
      const updatedBasketAfterDelete = state.basket.filter(
        (item) => item.id !== action.id
      );
      return {
        ...state,
        data: updatedDataAfterDelete,
        basket: updatedBasketAfterDelete,
      };
    default:
      break;
  }
}

const Admin = () => {


  useEffect(() => {
    axios("https://northwind.vercel.app/api/products")
      .then((res) => {
        dispatch({ type: "SetData", data: res.data });
      })
  }, []);

  function DeleteData(id) {
    axios
      .delete(`https://northwind.vercel.app/api/products/${id}`)
      .then(() => {
        dispatch({ type: "DeleteData", id: id });
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }
 

  return (
    <div className="admin-table">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>UnitPrice</th>
            <th>Delete</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
          {state.data.map((el) => {
            return (
              <tr key={uuidv4()}>
                <td>{el.id}</td>
                <td>{el.name}</td>
                <td>{el.unitPrice}</td>
                <td>
                  <Button
                    onClick={() => {
                      DeleteData(el.id);
                    }}
                    variant="danger"
                  >
                    Delete
                  </Button>
                </td>
                <td>
                  <Button href="edit"onClick={()=>{
                    dispatch({
                      type:"SetEdit",
                    })
                  }}>
                    Edit
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default Admin;
