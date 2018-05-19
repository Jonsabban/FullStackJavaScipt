import React, { Component } from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";

import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

const client = new ApolloClient({
    uri: `https://nx9zvp49q7.lp.gql.zone/graphql`
});

const GET_DOGS = gql`
  {
    dogs {
      id
      breed
    }
  }
`;

const Dogs = ({ onDogSelected }) => (
    <Query query={GET_DOGS}>
        {({ loading, error, data }) => {
            if (loading) return "Loading...";
            if (error) return `Error! ${error.message}`;

            return (
                <select name="dog" onChange={onDogSelected}>
                    {data.dogs.map(dog => (
                        <option key={dog.id} value={dog.breed}>
                            {dog.breed}
                        </option>
                    ))}
                </select>
            );
        }}
    </Query>
);

export default class queryDemo1 extends Component {
    state = { selectedDog: null };

    onDogSelected = ({ target }) => {
        console.log(target.value)
        this.setState(() => ({ selectedDog: target.value }));
    };

    render() {
        return (
            <ApolloProvider client={client}>
                <div>
                    <h2>Building Query components 🚀</h2>
                    <Dogs onDogSelected={this.onDogSelected}/>
                </div>
            </ApolloProvider>
        );
    }
}

