import React, { useState } from "react";
import LoadingMask from "react-loadingmask";
import "react-loadingmask/dist/react-loadingmask.css";
import Modal from "react-modal";
import { useDispatch, useSelector } from "react-redux";
import { startDeletedImage } from "../actions/images";
import { uiCloseModal } from "../actions/uiActions";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    padding: "0",
    transform: "translate(-50%, -50%)",
  },
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement("#root");

export const ModalSchreen = () => {
  const dispatch = useDispatch();
  const [Loading, setLoading] = useState(false);
  const [deleted, setDeleted] = useState("");
  const { modalOpen } = useSelector((state) => state);
  let subtitle;

  const afterOpenModal = () => {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#fffff";
  };

  const closeModal = () => {
    dispatch(uiCloseModal());
  };

  const handleDelete = async () => {
    setLoading(true);
    const resp = await dispatch(startDeletedImage());
    if (resp.ok) {
      setDeleted(resp.msg);
      closeModal();
    }

    setLoading(false);
  };
  return (
    <Modal
      isOpen={modalOpen}
      onAfterOpen={afterOpenModal}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Delete Modal"
      overlayClassName="modal-fondo"
    >
      <div className="card">
        <div className="card-header">
          <button
            onClick={closeModal}
            type="button"
            className="close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
          <h2
            className="card-title"
            ref={(_subtitle) => (subtitle = _subtitle)}
          >
            Eliminacion de Imagen
          </h2>
        </div>
        <div className="card-body">
          {!!deleted ? (
            <h3>{deleted}</h3>
          ) : Loading ? (
            <div>
              <LoadingMask
                style={{ backgroundColor: "#999999", heigth: "100%" }}
                loading={Loading}
                text={"loading..."}
              >
                <h3>Estas seguro de eliminarla?</h3>
              </LoadingMask>
            </div>
          ) : (
            <h5>Estas seguro de eliminarla?</h5>
          )}
        </div>
        <div className="card-footer d-flex justify-content-between">
          <button
            type="button"
            className="btn btn-primary"
            onClick={handleDelete}
          >
            Si, borrala
          </button>
          <button
            type="button"
            className="btn btn-secondary"
            onClick={closeModal}
          >
            cerrar
          </button>
        </div>
      </div>
    </Modal>
  );
};
