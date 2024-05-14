import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
const Edit = () => {
    function EditData(id) {
        const newName = prompt("Enter new name:", state.data.name); 
        if (newName) {
          axios
            .patch(`https://northwind.vercel.app/api/products/${id}`, {
              name: newName,
            })
            .then(() => {
              const newData = state.data.map((item) => {
                if (item.id === id) {
                  return { ...item, name: newName };
                }
                return item;
              });
              dispatch({ type: "SetData", data: newData });
            })
            .catch((error) => {
              console.error("Error updating product:", error);
            });
        }
      }
  return (
    <div
      className="modal show"
      style={{ display: 'block', position: 'initial' }}
    >
      <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p></p>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary">Close</Button>
          <Button variant="primary">Save changes</Button>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  )
}

export default Edit