import React, { ReactNode } from 'react'
import { PageError } from '@/widgets/components/PageError'
import { PSuspense } from '../../Suspense';

interface ErrorBoundaryProps {
  children: ReactNode
}

interface ErrorBoundaryState {
  hasError: boolean;
  errorMessage?: string;
  errorStack?: string;
  errorInfo?: React.ErrorInfo;
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, errorMessage: error.message, errorStack: error.stack };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.log(error, errorInfo);
    this.setState({ errorInfo });
  }

  render() {
    const { children } = this.props;
    const { hasError, errorMessage, errorStack, errorInfo } = this.state;

    if (hasError) {
      return (
        <PSuspense>
          <PageError
            errorMessage={errorMessage}
            errorStack={errorStack}
            errorInfo={errorInfo}
          />
        </PSuspense>
      );
    }

    return children;
  }
}


export default ErrorBoundary
