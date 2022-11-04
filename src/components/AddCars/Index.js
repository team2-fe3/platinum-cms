import React, { useState } from "react";
import "./Index.css";
import { Form, Button } from "react-bootstrap";
import AddComponent from "./AddComponent";
import DeleteCars from "../DeleteCars/Index";

const AddCars = () => {
  const [isShown, setIsShown] = useState(false);
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
  const handleClick = (event) => {
    // 👇️ toggle shown state
    setIsShown((current) => !current);

    // 👇️ or simply set it to true
    // setIsShown(true);
  };
  return (
    <div>
      <div className="add-sec p-4">
        <div className="add-title">
          <p>Cars &gt; List Cars &gt; Add New Car</p>
          <h1>Add New Car</h1>
        </div>
        <Form>
          <div className="add-forms">
            {data.map((item, index) => {
              return (
                <AddComponent key={index} title={item.title} text={item.text} />
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
        <button onClick={handleClick}>Click</button>
        {isShown && <DeleteCars />}
      </div>
    </div>
  );
};

export default AddCars;
