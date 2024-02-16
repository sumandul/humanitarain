import NavBar from "@/components/NavBar";
import "@/styles/globals.css";
import "bootstrap-icons/font/bootstrap-icons.css"
export default function App({ Component, pageProps }) {
  return (
    <>
     <NavBar />
  <Component {...pageProps} />
    </>
   
  );
}
