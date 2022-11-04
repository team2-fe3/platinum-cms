import React from "react";
import DeleteImage from "../../assets/image/img-delete.png";
import { Button } from "react-bootstrap";
import "./Index.css";

const DeleteCars = () => {
  return (
    <div className="delete-sec">
      <div className="delete-data">
        <img src={DeleteImage} alt="delete-img" className="delete-img" />
        <h1>Menghapus Data Mobil</h1>
        <p>Setelah dihapus, data mobil tidak dapat dikembalikan.</p>
        <p>Yakin ingin menghapus?</p>
      </div>
      <div className="pt-4">
        <Button variant="primary" type="submit" className="btn-save">
          Ya
        </Button>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <Button variant="primary" type="submit" className="btn-cancel">
          Tidak
        </Button>
      </div>
    </div>
  );
};

export default DeleteCars;
