import React from 'react';
import { CssBaseline } from '@mui/material';
import { RecoilRoot } from 'recoil';
import { ErrorBoundary } from 'react-error-boundary';
import { Toaster } from 'react-hot-toast';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import ThemeProvierContainer from './components/frame/ThemeProvierContainer';
import Router from './Router';
import ErrorFallback from './components/frame/ErrorFallback';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 0,
      useErrorBoundary: true,
      refetchOnWindowFocus: false,
    },
    mutations: {
      useErrorBoundary: true,
    },
  },
});

function App() {
  return (
    <ThemeProvierContainer>
      <RecoilRoot>
        <CssBaseline />
        <Toaster />
        <QueryClientProvider client={queryClient}>
          <ErrorBoundary FallbackComponent={ErrorFallback} onReset={() => {}}>
            {/* 여기에 오류가 발생할 수 있는 컴포넌트를 추가 */}
            <Router />
          </ErrorBoundary>
        </QueryClientProvider>
      </RecoilRoot>
    </ThemeProvierContainer>
  );
}

export default App;
