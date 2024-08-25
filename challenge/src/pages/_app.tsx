import LayoutContainer from "@/Components/Layout";
import ParamsContext from "@/Context";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <LayoutContainer>
      <ParamsContext>
        <Component {...pageProps} />
        <ToastContainer position="top-right" autoClose={2000} theme="colored" hideProgressBar newestOnTop />
      </ParamsContext>
    </LayoutContainer>
  );
};