import LayoutContainer from "@/Components/Layout";
import ParamsContext from "@/Context";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "react-query";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <LayoutContainer>
      <ParamsContext>
        <Component {...pageProps} />
        <ToastContainer position="top-right" autoClose={2000} theme="colored" hideProgressBar newestOnTop />
      </ParamsContext>
    </LayoutContainer>
    </QueryClientProvider>
  );
};