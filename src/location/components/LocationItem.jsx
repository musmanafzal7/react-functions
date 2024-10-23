import React, { useState } from "react";
import Button from "../../shared/components/FormElements/Button";
import Modal from "../../shared/components/UIElements/Modal";

const LocationItem = (props) => {
  const [showModal, setShowModal] = useState(false);

  const openModalHandler = () => setShowModal(true);

  const closeModalHandler = () => setShowModal(false);

  return (
    <React.Fragment>
      <Modal
        show={showModal}
        onCancel={closeModalHandler}
        header={props.address}
        contentClass=""
        footerClass=""
        footer={<Button onClick={closeModalHandler}>Close</Button>}
      >
        <div>
          <h2>Modal Heading</h2>
          <p>Modal Content</p>
        </div>
      </Modal>
      <li className="">
        <div>
          <h2>{props.name}</h2>
          <h3>{props.manager}</h3>
          <p>{props.address}</p>
        </div>
        <div>
          <Button inverse onClick={openModalHandler}>View</Button>
          <Button to={`/locations/${props.id}`}>Edit</Button>
          <Button danger>Delete</Button>
        </div>
      </li>
    </React.Fragment>
  );
};

export default LocationItem;
