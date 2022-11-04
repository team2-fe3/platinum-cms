import React from "react";
import "./Index.css";
import { Form, Button } from "react-bootstrap";
import EditComponent from "./EditComponent";

const EditCars = () => {
  const data = [
    {
      title: "Nama/Tipe Mobil",
      text: "Input Nama/Tipe Mobil",
    },
    {
      title: "Harga",
      text: "Input Harga Sewa Mobil",
    },
    {
      title: "Foto",
      text: "File Size Max 2MB",
    },
    {
      title: "Kategori",
      text: "Pilih Kategori Mobil",
    },
    {
      title: "Created at",
      text: "-",
    },
    {
      title: "Updated at",
      text: "-",
    },
  ];
  return (
    <div>
      <div className="add-sec p-4">
        <div className="add-title">
          <p>Cars &gt; List Cars &gt; Edit Car</p>
          <h1>Edit Car</h1>
        </div>
        <Form>
          <div className="add-forms">
            {data.map((item, index) => {
              return (
                <EditComponent key={index} title={item.title} text={item.text} />
              );
            })}
          </div>
          <div className="btn-actions">
            <Button variant="primary" type="submit" className="btn-cancel">
              Cancel
            </Button>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <Button variant="primary" type="submit" className="btn-save">
              Save
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default EditCars;
