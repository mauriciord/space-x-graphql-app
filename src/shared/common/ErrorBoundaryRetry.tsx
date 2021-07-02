import React from 'react';
import { Div, Text, Button } from 'react-native-magnus';

/**
 * A reusable component for handling errors in a React (sub)tree.
 */
// eslint-disable-next-line @typescript-eslint/ban-types
type Props = {};
type State = {
  error: Error | null;
};

class ErrorBoundaryRetry extends React.Component<Props, State> {
  state = {
    error: null,
  };

  static getDerivedStateFromError(error: Error) {
    return {
      error,
    };
  }

  render() {
    const { error } = this.state;

    if (error !== null) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      const { message, source }: never = error;

      return (
        <Div>
          <Text>Error: {message}</Text>
          <Text>{JSON.stringify(source, null, 2)}</Text>
          <Button onPress={() => this.setState({ error: null })}>retry</Button>
        </Div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundaryRetry;
