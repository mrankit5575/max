// ErrorBoundary.jsx
import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, errorDetails: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, errorDetails: error.message };
  }

  componentDidCatch(error, errorInfo) {
    // Log to error reporting service
    console.error("Error caught by ErrorBoundary:", error, errorInfo);
    this.setState({ errorDetails: error.message });
  }

  handleRefresh = () => {
    window.location.reload();
  };

  handleGoHome = () => {
    window.location.href = "/";
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex items-center justify-center p-4">
          <div className="max-w-md w-full bg-white rounded-xl shadow-lg overflow-hidden border border-blue-100">
            <div className="bg-blue-600 p-4">
              <h2 className="text-white text-xl font-bold text-center">
                {this.props.instituteName || "Educational Institute"} - Technical Error
              </h2>
            </div>
            
            <div className="p-6 space-y-4">
              <div className="flex justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              
              <h3 className="text-lg font-semibold text-center text-gray-800">
                Something went wrong
              </h3>
              
              <p className="text-gray-600 text-center">
                We're experiencing a technical issue. Please try again later.
              </p>
              
              {this.state.errorDetails && (
                <div className="bg-gray-50 p-3 rounded-md text-sm text-gray-500 overflow-x-auto">
                  <details>
                    <summary className="cursor-pointer font-medium">Error Details</summary>
                    <p className="mt-2">{this.state.errorDetails}</p>
                  </details>
                </div>
              )}
              
              <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
                <button
                  onClick={this.handleRefresh}
                  className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition duration-200 font-medium"
                >
                  Refresh Page
                </button>
                <button
                  onClick={this.handleGoHome}
                  className="px-4 py-2 border border-blue-600 text-blue-600 hover:bg-blue-50 rounded-md transition duration-200 font-medium"
                >
                  Return Home
                </button>
              </div>
              
              <p className="text-center text-sm text-gray-500 mt-4">
                Need help? Contact our support team at support@institute.edu
              </p>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;