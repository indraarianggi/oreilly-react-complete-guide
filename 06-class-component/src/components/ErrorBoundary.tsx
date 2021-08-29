import React, { Component } from "react";

type TErrorBoundaryProps = {};

type TErrorBoundaryState = {
  hasError: boolean;
};

class ErrorBoundary extends Component<
  TErrorBoundaryProps,
  TErrorBoundaryState
> {
  state: TErrorBoundaryState = {
    hasError: false,
  };

  constructor(props: TErrorBoundaryProps) {
    super(props);
  }

  // Error Boundary is regular class component that implement componentDidCatch lifecycle method
  componentDidCatch(error: Error) {
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return <p>Something went wrong!</p>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
