import { Component, type ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export default class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Portfolio Error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div
          style={{
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '2rem',
            background: '#0F0E13',
            color: '#F5F0EB',
            fontFamily: 'JetBrains Mono, monospace',
          }}
        >
          <h1 style={{ color: '#D4849A', marginBottom: '1rem' }}>
            // something broke
          </h1>
          <p style={{ color: '#A8A3B3', marginBottom: '2rem', textAlign: 'center' }}>
            The portfolio encountered an error. Check the browser console for details.
          </p>
          {this.state.error && (
            <pre
              style={{
                background: '#1E1C27',
                padding: '1rem',
                borderRadius: '8px',
                fontSize: '12px',
                color: '#D4849A',
                maxWidth: '600px',
                overflow: 'auto',
              }}
            >
              {this.state.error.message}
            </pre>
          )}
          <button
            onClick={() => window.location.reload()}
            style={{
              marginTop: '2rem',
              padding: '12px 24px',
              background: '#D4849A',
              color: '#0F0E13',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              fontFamily: 'JetBrains Mono, monospace',
            }}
          >
            Reload Page
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}
