import React from "react";
import gql from "graphql-tag";
import { graphql } from "react-apollo";

const Home = ({ data: { allDispensaries = [] } }) =>
  allDispensaries.map(d => <h1 key={d.id}>{d.email}</h1>);

const allDispensariesQuery = gql`
  {
    allDispensaries {
      id
      email
    }
  }
`;

export default graphql(allDispensariesQuery)(Home);
