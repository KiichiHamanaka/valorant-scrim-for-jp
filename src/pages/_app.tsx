import '../styles/globals.css'
import { RecoilRoot } from "recoil";
import {AppProps} from "next/app"; //追加

const MyApp = ({ Component, pageProps }: AppProps) => {
    return (
        <RecoilRoot>
            <Component {...pageProps} />
        </RecoilRoot>
    );
}

export default MyApp;