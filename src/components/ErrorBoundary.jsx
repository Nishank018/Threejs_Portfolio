import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("ErrorBoundary caught an error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{
          padding: '40px 20px',
          color: '#ff6b6b',
          background: '#09090b',
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'system-ui, sans-serif',
          textAlign: 'center'
        }}>
          <h1 style={{ fontSize: '2rem', marginBottom: '10px', color: '#f4f4f5' }}>
            Oops! The portfolio encountered a rendering error.
          </h1>
          <p style={{ color: '#a1a1aa', maxWidth: '600px', marginBottom: '30px' }}>
            A runtime error occurred in one of the 3D components or assets. Below is the error detail:
          </p>
          <pre style={{
            background: '#18181b',
            border: '1px solid #27272a',
            padding: '20px',
            borderRadius: '8px',
            overflowX: 'auto',
            color: '#fda4af',
            fontSize: '0.95rem',
            textAlign: 'left',
            maxWidth: '90%',
            width: '600px',
            fontFamily: 'monospace'
          }}>
            {this.state.error && this.state.error.toString()}
          </pre>
          <p style={{ marginTop: '20px', color: '#71717a', fontSize: '0.9rem' }}>
            Please check the browser console logs for a full stack trace.
          </p>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
