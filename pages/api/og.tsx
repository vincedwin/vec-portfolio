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
                color: 'black',
                background:'#c9a91c',
                width: '100%',
                height: '100%',
                textAlign: 'center',
                justifyContent: 'flex-start',
                alignItems: 'flex-end',
              }}
            >
              <div
              style={{
                backgroundColor: '#e5e5f7',
                opacity: 0.6,
                backgroundImage:
                  'linear-gradient(135deg, #c9a91c 25%, transparent 25%), linear-gradient(225deg, #c9a91c 25%, transparent 25%), linear-gradient(45deg, #c9a91c 25%, transparent 25%), linear-gradient(315deg, #c9a91c 25%, #e5e5f7 25%)',
                backgroundPosition: '10px 0, 10px 0, 0 0, 0 0',
                backgroundSize: '10px 10px',
                backgroundRepeat: 'repeat',
                width: '100%',
                height: '100%',
                position: 'absolute',}}
              />
              <div tw='flex flex-col p-8 items-start'>
                <div tw='bg-white px-8'>VEC 👋</div>
                <div tw='bg-white font-light text-[60px] px-8'>A humble developer </div>
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