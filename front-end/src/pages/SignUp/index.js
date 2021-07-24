import React, { Component } from "react"
import { Link, withRouter } from "react-router-dom"
import api from "../../services/api"

import Logo from "../../assets/logo.png"

import { Form, Container } from "./styles"

class SignUp extends Component {
  state = {
    username: "",
    apartment: "",
    email: "",
    password: "",
    error: ""
  }

  handleSignUp = async e => {
    e.preventDefault();
    const { username, apartment, email, password } = this.state;
    if (!username || !apartment || !email || !password) {
      this.setState({ error: "Preencha todos os dados para se cadastrar." })
    } else {
      try {
        const response = await api.post("/register", { username, apartment, email, password })
        if (response.data === 0) {
          alert("Usuário criado com sucesso.")
          this.props.history.push("/")
        } else {
          this.setState({ error: "Ocorreu um erro ao registrar sua conta." })
        }
      } catch (err) {
        console.log(err);
        this.setState({ error: "Ocorreu um erro ao registrar sua conta." })
      }
    }
  };

  render() {
    return (
      <Container>
        <Form onSubmit={this.handleSignUp}>
          <img src={Logo} alt="logo" />
          {this.state.error && <p>{this.state.error}</p>}
          <input
            type="text"
            placeholder="Nome de usuário"
            onChange={e => this.setState({ username: e.target.value })}
          />
          <input
            type="text"
            placeholder="Número do apartamento"
            onChange={e => this.setState({ apartment: e.target.value })}
          />
          <input
            type="email"
            placeholder="Endereço de e-mail"
            onChange={e => this.setState({ email: e.target.value })}
          />
          <input
            type="password"
            placeholder="Senha"
            onChange={e => this.setState({ password: e.target.value })}
          />
          <button type="submit">Cadastrar</button>
          <hr />
          <Link to="/">Fazer login</Link>
        </Form>
      </Container>
    )
  }
}

export default withRouter(SignUp)