import React from "react";
import { Form, Col, Row, Button } from "react-bootstrap";
import Uploader from "../MediaHandling/Uploader";
const AddComponent = (props) => {
  const { title, text } = props;
  return (
    <div>
      <Form.Group as={Row} className="mb-3">
        <Form.Label column sm="2">
          {title}
        </Form.Label>
        <Col sm="4">
          {title === "Foto" && <Uploader />}
          {title === "Foto" && text}
          {title === "Kategori" && (
            <Form.Select>
              <option key="blankChoice" hidden>
                {text}
              </option>
              <option value="2 - 4 orang">2 - 4 Orang</option>
              <option value="4 - 6 orang">4 - 6 Orang</option>
              <option value="6 - 8 orang">6 - 8 Orang</option>
            </Form.Select>
          )}
          <Form.Control
            type="text"
            placeholder={text}
            hidden={
              (title === "Foto" ||
                title === "Kategori" ||
                title === "Created at" ||
                title === "Updated at") &&
              true
            }
          />
        </Col>
      </Form.Group>
    </div>
  );
};

export default AddComponent;
