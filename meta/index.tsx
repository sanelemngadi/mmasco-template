import Head from 'next/head';
import React, { FC } from 'react';

interface Props {
    title: string
    subtitle: string,
    image: string,
    path?: string
}
const MetaData: FC<Props> = ({ title, subtitle, image, path }) => {

    const date = new Date();
    return (
        <Head>
            <title>{title}</title>
            <link rel="canonical" href={`https://nqabanqaba.netlify.app${path}`} />
            <meta name="description" content={subtitle} />
            <meta property='og:title' content={title} />
            <meta property='og:description' content={subtitle} />
            <meta property='og:image' content={image} />
            <meta property="og:type" content="guesthouse. break and breakfast" />
            <meta property="og:url" content={`https://nqabanqaba.netlify.app${path}`} />

            <meta property="og:site_name" content="Nqabanqaba" />
            <meta property="og:updated_time" content="1440432930" />
            <meta property="og:image:width" content="300" />
            <meta property="og:image:height" content="225" />

            {/* Twitter meta card  */}
            <meta property='twitter:title' content={title} />
            <meta property='twitter:description' content={subtitle} />
            <meta property='twitter:image' content={image} />
        </Head>
    )
}

export default MetaData