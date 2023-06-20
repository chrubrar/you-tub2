'use client';

import Script from 'next/script'

export default function GoogleTAG({GA_TRACKING_ID} : {GA_TRACKING_ID: string}){
    return(
        <>
            <Script
            src={`https://www.googletagmanager.com/gtag/js/?id=${GA_TRACKING_ID}`}/>
            <Script id="google-analytics" strategy='afterInteractive'>
                {
                    `
                    window.dataLayer = window.dataLayer || [];
                    function gtag() {datalayer.push(arguments);}
                    gtag('js', new Date());

                    gtag)('config', ${GA_TRACKING_ID});
                    `
                }

            </Script>

        </>
    );
};