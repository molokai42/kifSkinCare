import React from "react";
import gql from "graphql-tag";
import { graphql } from "react-apollo";

const Home = ({ data: { allAdmins = [] } }) =>
  allAdmins.map(d => <h1 key={d.id}>{d.email}</h1>);

const allAdminsQuery = gql`
  {
    allAdmins {
      id
      email
    }
  }
`;

export default graphql(allAdminsQuery)(Home);
