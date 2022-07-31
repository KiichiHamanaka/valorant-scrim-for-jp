import Link from "next/link";
import React from "react";
import {Valorant} from "../lib/valorant";



const RSOButton:React.FC = () =>{
    const appBaseUrl:string      = process.env.NEXTAUTH_URL!
    const appCallbackUrl:string  = appBaseUrl + "/oauth";

    const link = Valorant.getAuthorizationUrl(appCallbackUrl)

    return(
        <Link href={link} passHref>
            <button>Sign In</button>
        </Link>
    )
}

export default RSOButton