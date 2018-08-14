import React, { Component } from 'react';
import { Query } from "react-apollo";
import gql from "graphql-tag";

const companiesQuery = gql`
  query {
    companies {
      name
      catchPhrase
    }
  }
`;

const Companies = () => (
  <Query query={companiesQuery}>
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Something went wrong :(</p>;

      return (
        <ul>
          { data.companies.map(({ name, catchPhrase }) => (
            <li>
              <strong>{ name }</strong>: { catchPhrase }
            </li>
          ))}
        </ul>
      );
    }}
  </Query>
);

export default Companies;
