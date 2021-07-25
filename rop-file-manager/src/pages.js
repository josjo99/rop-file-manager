import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useContext, useState} from 'react';

import { FileContext,FileContextProvider,PaymentContext, PaymentContextProvider } from './contexts';

function LoginForm(){
    return(
        <Form>
        <Form.Group id="user-id">
            <Form.Label>User ID</Form.Label>
            <Form.Control></Form.Control>
        </Form.Group>
        <Form.Group id="password">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password"></Form.Control>
        </Form.Group>
        <Button type="submit">Login</Button>
        </Form>
    );
}

function LoginPage(){
    return(
      <div>
        <LoginForm/>
      </div>
    );
}

function PaySearchForm(){
  const [payId,setPayId] = useContext(PaymentContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    setPayId(event.target['payid'].value);
  };

  return(
    <div>
      <Form id="docs-search" onSubmit={handleSubmit}>
        <Form.Group controlId="payid">
          <Form.Label>Payment ID</Form.Label>
          <Form.Control type="text"/>
        </Form.Group>
        <Button type="submit">Search</Button>
      </Form>
      <Table>
        <thead>
        </thead>
        <tbody></tbody>
      </Table>
    </div>
  );
}

function AddFile(){
  const [files,setFiles] = useContext(FileContext);

  const addFiles=(data) => {
    const f = files;
    f.push(data);
    setFiles(f);
  };

  const handleSubmit = (event) =>{
    event.preventDefault();
    const form = event.target;
    const data ={}
    data["fileType"] = form["fileType"].value;
    data["file"] = form["file"].value;
    addFiles(data);
  }

  return(
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="fileType">
          <Form.Select>
            <option>Document Type</option>
            <option value="1">PO</option>
            <option value="2">Cheque</option>
            <option value="3">Invoice</option>
          </Form.Select>
        </Form.Group>
        <Form.Group controlId="file">
          <Form.Control type="file"/>
        </Form.Group>
        <Button type="submit">Add File</Button>
      </Form>
    </div>
  );
}

function FileForm(){
  const [fileForms,setFileForm] = useState([]);

  const addFiles=() => {
    setFileForm(fileForms => [...fileForms,<AddFile key={fileForms.length}/>]);
  };

  const handleClick= (event) => {
    event.preventDefault();
    addFiles();
  }

  return(
    <div id="form-collection">
      {fileForms}
      <Button onClick={handleClick}>Add More Files</Button>
      <Button type="submit" >Upload All</Button>
    </div>
  );
}

function MainPage(){
  return(
    <PaymentContextProvider value={0}>
      <PaySearchForm/>
      <FileContextProvider>
        <FileForm />
      </FileContextProvider>
    </PaymentContextProvider>
  );
}

export {LoginPage,MainPage};