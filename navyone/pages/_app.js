import "./global.css";
import dotenv from "dotenv"

require('dotenv').config({path:'./env'})

// dotenv.config({
//     path:'./env'
// })

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
