import React, { ErrorInfo, ReactNode, Suspense } from 'react'
import { PageError } from '@/widget/PageError'
import { Loader } from '@/widget/Loader';

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
        <Suspense fallback={<Loader />}>
          <PageError
            errorMessage={errorMessage}
            errorStack={errorStack}
            errorInfo={errorInfo}
          />
        </Suspense>
      );
    }

    return children;
  }
}


export default ErrorBoundary
