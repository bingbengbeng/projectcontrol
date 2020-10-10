import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { Provider } from "react-redux";
import Routes from "Core/routes";
import { Container } from "@material-ui/core";

class Root extends React.Component {
  render() {
    const { store, history } = this.props;

    return (
      <Container>
        <Provider store={store}>
          <ConnectedRouter history={history}>
            <Routes></Routes>
          </ConnectedRouter>
        </Provider>
      </Container>
    );
  }
}

export default Root;
