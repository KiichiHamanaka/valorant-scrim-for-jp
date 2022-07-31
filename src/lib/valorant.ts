import ValorantApi from 'valorant-api-ts'

export const Valorant = new ValorantApi({
    clientId:process.env.RIOT_CLIENT_ID,
    clientSecret:process.env.RIOT_CLIENT_SECRET,
})

