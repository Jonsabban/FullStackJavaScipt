import React, { Component } from 'react';
import gql from "graphql-tag";
import ApolloClient from "apollo-boost";
import { Query } from "react-apollo";
import { ApolloProvider } from "react-apollo";

const client = new ApolloClient({
  uri: "http://localhost:3000/graphql"
});

const AllUsers = () => (
  <Query
    query={gql`
        {
          getAllUsers{
            firstName
            lastName
            userName
          }
        }
      `}
  >
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error :(</p>;

      return data.getAllUsers.map(({ firstName, lastName, userName }) => (
        <div key={firstName}>
          <p>{`${firstName}`} {`${lastName}`} {`${userName}`}</p>
        </div>
      ));
    }}
  </Query>
);

const GetUserByName = ({username}) => (
  <Query
    query={gql`
      {
        getUserByUserName(username: ${username}) {
          firstName
          lastName
          userName
        }
      }
    `}
    variables={{ username }}>
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error :(</p>;

      return (
        <p>{`${data.getUserByUserName.firstName}`} {`${data.getUserByUserName.lastName}`} {`${data.getUserByUserName.userName}`}</p>
      );
    }}
  </Query>
);

class App extends Component {
  constructor() {
    super();
    this.state = {
      username: 'Toby',
    };
  }

  render() {
    return (
      <ApolloProvider client={client}>
        <div>
          <h1> This should work </h1>
          <h2>All Users</h2>
          <AllUsers />
        </div>
        <div>
          <h2> Get 1 user </h2>
          <GetUserByName username={this.state.username} />
        </div>
      </ApolloProvider>
    );
  }
}

export default App;