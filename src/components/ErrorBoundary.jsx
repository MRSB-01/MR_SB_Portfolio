// src/components/ErrorBoundary.jsx
import { Component } from 'react';

class ErrorBoundary extends Component {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="text-center p-4 text-red-600">
          Something went wrong with the navigation. Please refresh the page.
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;