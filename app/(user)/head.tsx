export default async function Head() {
    return (
      <>
        <title>VEC Portfolio</title>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <meta name="apple-touch-fullscreen" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent"/>
        <link rel="icon" href="../favicon.ico" />
        <link rel="apple-touch-icon" href="/LogoW.png"/>
        <link rel="apple-touch-icon" sizes="152x152" href="LogoW.png"/>
        <link rel="apple-touch-icon" sizes="180x180" href="LogoW.png"/>
        <link rel="apple-touch-icon" sizes="167x167" href="LogoW.png"/>
        <link rel="manifest" href="manifest.json"></link>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        {/* <link href="https://fonts.googleapis.com/css2?family=Cinzel&family=Cormorant+Upright:wght@300&family=IM+Fell+English&family=Italianno&family=Philosopher&display=swap" rel="stylesheet"/> */}
        <meta name="title" content="Vincent"/>
        <meta name="description" content="Vincent"/>
        <meta name="copyright"content="Vincent"/>
        {/*Facebook*/}
        <meta property="og:type" content="website"/>
        <meta property="og:title" content="Vincent"/>
        <meta property="og:description" content="Vincent"/>
        <meta property="og:image" content="http://vecvec.vercel.app/api/og"/>
        <meta property="og:image:alt" content="About Vincent" />
        {/*Twitter*/}
        <meta property="twitter:card" content="summary_large_image"/>
        <meta property="twitter:title" content="Vincent"/>
        <meta property="twitter:description" content="Vincent"/>
        <meta property="twitter:image" content="https://vecvec.vercel.app/"/>
        <meta name='viewport' content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0' ></meta>
        <link rel="icon" href="../favicon.ico" />
      </>
    )
  }