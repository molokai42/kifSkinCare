import React from 'react';
import { Form, Message, Button, Container, Header, Input } from 'semantic-ui-react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

class Register extends React.Component {
  state = {
    email: '',
    emailError: '',
    password: '',
    passwordError: '',
    password2: '',
  };
  onChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };
  onSubmit = async () => {
    this.setState({
      emailError: '',
      passwordError: '',
    });

    const { email, password, password2 } = this.state;
    if (password.length > 0 && password2.length > 0 && password === password2) {
      this.setState({
        emailError: '',
        passwordError: '',
      });
      const response = await this.props.mutate({
        variables: { email, password },
      });

      const { ok, errors } = response.data.registerUser;

      if (ok) {
        this.props.history.push('/');
      } else {
        const err = {};
        errors.forEach(({ path, message }) => {
          // err['passwordError'] = 'too long..';
          err[`${path}Error`] = message;
        });

        this.setState(err);
      }

      console.log(response);
    } else {
      this.setState({
        passwordError: 'These Passwords do not match!',
      });
      console.log('These Passwords do not match!');
    }
  };
  render() {
    const {
      email, password, password2, emailError, passwordError,
    } = this.state;
    const errorList = [];

    if (emailError) {
      errorList.push(emailError);
    }

    if (passwordError) {
      errorList.push(passwordError);
    }
    return (
      <Container text>
        <Header as="h2">Register</Header>
        <Form>
          <Form.Field error={!!emailError}>
            <Input
              error={!!emailError}
              name="email"
              onChange={this.onChange}
              value={email}
              placeholder="Email"
              fluid
            />
          </Form.Field>
          <Form.Field error={!!passwordError}>
            <Input
              error={!!passwordError}
              name="password"
              onChange={this.onChange}
              value={password}
              type="password"
              placeholder="Password"
              fluid
            />
          </Form.Field>
          <Form.Field error={!!passwordError}>
            <Input
              name="password2"
              onChange={this.onChange}
              value={password2}
              type="password"
              placeholder="Password"
              fluid
            />
          </Form.Field>
          <Button onClick={this.onSubmit}>Submit</Button>
        </Form>
        {emailError || passwordError ? (
          <Message error header="There was some errors with your submission" list={errorList} />
        ) : null}
      </Container>
    );
  }
}

const registerMutation = gql`
  mutation($email: String!, $password: String!) {
    registerUser(email: $email, password: $password) {
      ok
      errors {
        path
        message
      }
    }
  }
`;

export default graphql(registerMutation)(Register);
