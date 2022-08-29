import { NextPage } from "next";
import Form from "../components/form";
import Nav from "../components/navbar";

const Add: NextPage = () => {
  return (
    <>
      <Nav></Nav>
      <div>this is the add recipe page</div>
      <Form></Form>
    </>
  );
};

export default Add;
