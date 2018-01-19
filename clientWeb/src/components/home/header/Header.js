import React from 'react';
import { Button, Container, Input } from 'semantic-ui-react';
import './Header.css';

class Header extends React.Component {
  render() {
    const { email, password, password2 } = this.state;
    return (
      <Container text>
        <Input name="email" onChange={this.onChange} value={email} placeholder="Email" fluid />
        <Input
          name="password"
          onChange={this.onChange}
          value={password}
          type="password"
          placeholder="Password"
          fluid
        />
        <Input
          name="password2"
          onChange={this.onChange}
          value={password2}
          type="email"
          placeholder="Password"
          fluid
        />
        <Button onClick={this.onSubmit}>Submit</Button>
      </Container>
    );
  }
}

const registerMutation = gql`
  mutation($email: String!, $password: String!) {
    registerUser(email: $email, password: $password)
  }
`;

export default graphql(registerMutation)(Register);
