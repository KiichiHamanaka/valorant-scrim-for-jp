import type {NextApiRequest, NextApiResponse} from 'next'
import axios from "axios";

type tokens = {
    refresh_token?: string,
    id_token? : string,
    access_token? : string,
}

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
        const {
            query: {id},
            method,
        } = req;

        switch (method) {
            case "GET": {
                try {
                    const accessCode = req.query.code as string;
                    const provider: string = "https://auth.riotgames.com"
                    const tokenUrl: string = provider + "/token";
                    const clientID: string = process.env.RIOT_CLIENT_ID!
                    const clientSecret = process.env.RIOT_CLIENT_SECRET!
                    const appCallbackUrl: string = process.env.NEXTAUTH_URL! + "/oauth";
                    const resToken: tokens = {
                        refresh_token : undefined,
                        id_token : undefined,
                        access_token : undefined,
                    }
                    const form = new FormData();
                    form.append('grant_type', 'authorization_code');
                    form.append('code', accessCode);
                    form.append('redirect_uri', appCallbackUrl);
                    axios.post(tokenUrl, {
                        auth: {
                            user: clientID,
                            pass: clientSecret
                        },
                        form
                    },).then((res) => {
                        const payload = JSON.parse(res.data);
                        resToken.refresh_token = payload.refresh_token,
                        resToken.id_token = payload.id_token,
                        resToken.access_token = payload.access_token
                    }).catch((e) => {
                        console.error(e)
                    })
                    res.status(200).json(resToken);
                    break;
                } catch (e) {
                    console.error(e);
                    break;
                }
            }
            default: {
                res.status(403).end();
            }
        }
    }
;

