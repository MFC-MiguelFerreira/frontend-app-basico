import React, { useState } from "react";

import { Form, Button, Row, Col, ListGroup } from "react-bootstrap";

const instituicoes = ["Nubank", "Itaú", "Bradesco"];
const dadosObrigatorios = [
  "Nome Completo",
  "CPF",
  "Instituição Financeira",
  "Número da Conta",
  "Agência",
  "Email",
];
const prazos = ["3 Meses", "6 Meses", "9 Meses", "12 Meses"];

const FormCompartilhamento = () => {
  const [validated, setValidated] = useState(false);
  const [nome, setNome] = useState("");
  const [cpf, setCPF] = useState("");
  const [objetivoCompatilhamento, setObjetivoCompatilhamento] =
    useState("Gestão de Contas");
  const [instituicao, setInstituicao] = useState(instituicoes[0]);
  const [prazo, setPrazo] = useState(prazos[0]);

  async function sendData(){
    const data = {
      nome,
      cpf,
      objetivoCompatilhamento,
      instituicao,
      dadosObrigatorios,
      prazo,
    };

    let sendDataReturn;
    sendDataReturn = fetch("http://192.168.0.118:5001/consent", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json,",
      },
      body: JSON.stringify(data),
    }).then(function (response) {
      return response.json();
    }).then(function (text) {
      console.log('GET response:');
      console.log(text.redirect_url);
      console.log(typeof(text.redirect_url));
      return text.redirect_url;
    }).then(function (redirect_url) {
      console.log('Redirect Url:');
      console.log(redirect_url);
      return redirect_url;
    });

    return sendDataReturn;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      console.log(event);
      console.log(form);
      event.preventDefault();
      event.stopPropagation();
    } else {
      sendData().then(function(value) {
          console.log('SEND DATA RETURN');
          console.log(value);
          global.window && (global.window.location.href = `${value}`);
          return null;
      });
    }
    setValidated(true);
  };

  const renderInstitutosOptions = () => {
    return instituicoes.map((i) => {
      return (
        <option key={i} name={i} value={i}>
          {i}
        </option>
      );
    });
  };

  const renderDadosOptions = () => {
    return dadosObrigatorios.map((i) => {
      return (
        <ListGroup.Item key={i} variant="dark">
          <b>{i}</b>
        </ListGroup.Item>
      );
    });
  };

  const renderPrazosOptions = () => {
    return prazos.map((i) => {
      return (
        <option key={i} name={i} value={i}>
          {i}
        </option>
      );
    });
  };

  return (
    <div className="container">
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        {/* <Form noValidate onSubmit={handleSubmit2}> */}
        <Row className="mb-3">
          <h2>Identificação do Cliente</h2>
        </Row>
        <Row>
          <Col>
            <Form.Group className="mb-3" controlId="validationCustom01">
              <Form.Label>Nome</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder={"Nome Completo"}
                value={"Grande Teste"}
                // value={nome}
                onChange={(e) => setNome(e.target.value)}
              />
              <Form.Control.Feedback type="invalid">
                Insira seu Nome
              </Form.Control.Feedback>
            </Form.Group>
          </Col>

          <Col>
            <Form.Group className="mb-3" controlId="validationCustom01">
              <Form.Label>CPF</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder={"CPF Completo"}
                value={"12345678900"}
                // value={cpf}
                onChange={(e) => setCPF(e.target.value)}
              />
              <Form.Control.Feedback type="invalid">
                Insira seu CPF
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <Col>
            <Row className="mb-3">
              <h2>Objetivo do Compartilhamento</h2>
            </Row>
            <Form.Group className="mb-3" controlId="validationCustom02">
              <Form.Control
                className="mb-3"
                type="text"
                placeholder={objetivoCompatilhamento}
                aria-label="Gestão de Contas example"
                disabled
                readOnly
                value={objetivoCompatilhamento}
                onChange={(e) => setObjetivoCompatilhamento(e.target.value)}
              />
              <Form.Control.Feedback type="invalid">
                Insira o objetivo do seu compartilhamento
              </Form.Control.Feedback>
            </Form.Group>
          </Col>

          <Col>
            <Row className="mb-3">
              <h2>Selecione a Instituição Transmissora</h2>
            </Row>
            <Row className="mb-3">
              <Form.Group className="mb-3" controlId="validationCustom03">
                <Form.Select
                  required
                  aria-label="Default select example"
                  value={instituicao}
                  onChange={(e) => setInstituicao(e.target.value)}
                >
                  {renderInstitutosOptions()}
                </Form.Select>
                <Form.Control.Feedback type="invalid">
                  Selecione uma Instituição
                </Form.Control.Feedback>
              </Form.Group>
            </Row>
          </Col>
        </Row>

        <Row className="mb-4">
          <Col>
            <Row className="mb-3">
              <h2>Dados Obrigatórios</h2>
            </Row>
            <Col>
              <Form.Group className="mb-3" controlId="validationCustom04">
                <ListGroup horizontal="xll">{renderDadosOptions()}</ListGroup>
              </Form.Group>
            </Col>
          </Col>

          <Col>
            <Row className="mb-3">
              <h2>Prazo de Compartilhamento</h2>
            </Row>
            <Row className="mb-3">
              <Col>
                <Form.Group className="mb-3" controlId="validationCustom05">
                  <Form.Select
                    required
                    aria-label="Default select example"
                    value={prazo}
                    onChange={(e) => setPrazo(e.target.value)}
                  >
                    {renderPrazosOptions()}
                  </Form.Select>
                  <Form.Control.Feedback type="invalid">
                    Selecione o Prazo
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>
              <Col></Col>
            </Row>
          </Col>
        </Row>

        <Row className="justify-content-md-center mb-3">
          <Col md="auto">
            <Button variant="primary" type="submit" size="lg">
              Compartilhar
            </Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default FormCompartilhamento;
