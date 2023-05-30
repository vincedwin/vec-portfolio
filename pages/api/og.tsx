import { ImageResponse } from '@vercel/og';
import { NextRequest } from 'next/server';

export const config = {
    runtime:'edge'
}

export default function(req : NextRequest){

    const {searchParams} = req.nextUrl;

    const titlePost = searchParams.get('title')
    const subtitlePost = searchParams.get('subtitle')

    console.log(titlePost)
    return new ImageResponse(
        (
            <div
              style={{
                display:'flex',
                fontSize: 100,
                color: '#e6e6e6',
                background:'#c9a91c',
                width: '100%',
                height: '100%',
                padding: '50px 200px',
                textAlign: 'center',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            ><div tw='flex flex-col items-center justify-center'>
                <div>👋</div>
                <div tw='font-light text-[60px]'>A humble developer </div>
                <div>VEC</div>
              </div>
            </div>
          ),
          {
            width: 1200,
            height: 630,
            // Supported options: 'twemoji', 'blobmoji', 'noto', 'openmoji', 'fluent' and 'fluentFlat'
            // Default to 'twemoji'
            emoji: 'twemoji',
          },
    );

}