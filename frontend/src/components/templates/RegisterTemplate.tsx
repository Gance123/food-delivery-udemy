import React from "react";
import {
  Button,
  Col,
  Container,
  Form,
  FormGroup,
  Input,
  Label,
  Row,
} from "reactstrap";
import { Layout } from "../../layout/Layout";
import { RegisterFunk } from "../organisms/RegisterFunk";

export const RegisterTemplate = () => {
  return (
    <Layout>
      <RegisterFunk />
    </Layout>
  );
};
