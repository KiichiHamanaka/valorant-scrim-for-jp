import React from 'react'
import Head from 'next/head'

interface CustomHeadProps {
    title: string
    url: string
    imageUrl?: string
    description?: string
    ogDescription?: string
    ogType?: string
    noindex?: boolean
    nofollow?: boolean
}

const CustomHead = (props: CustomHeadProps) => {
    const {
        title,
        url,
        imageUrl,
        description,
        ogDescription,
        ogType,
        noindex,
        nofollow,
    } = props

    return (
        <Head>
            <title>{title}</title>
            <link rel="icon" href="/public/favicon.ico"/>
            <link rel="canonical" href={url}/>
            <meta property="og:title" content={title}/>
            <meta name="twitter:title" content={title}/>
            <meta name="description" content={description}/>
            {!!ogDescription && (
                <meta property="og:description" content={ogDescription}/>
            )}
            {!!ogDescription && (
                <meta property="twitter:description" content={ogDescription}/>
            )}
            {!!url && <meta property="og:url" content={url}/>}
            {!!url && (
                <meta key="twitter-url" name="twitter:url" content={url}/>
            )}
            {!!imageUrl && <meta property="og:image" content={imageUrl}/>}
            {!!imageUrl && <meta name="twitter:image" content={imageUrl}/>}
            <meta property="og:type" content={ogType}/>
            <meta name="twitter:card" content="summary_large_image"/>
            <meta name="twitter:site" content="@V_SCRIM"/>
            {noindex && <meta name="robots" content="noindex"/>}
            {nofollow && <meta name="robots" content="nofollow"/>}
        </Head>
    )
}

export default CustomHead
