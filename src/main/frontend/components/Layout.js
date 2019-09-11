import Head from 'next/head'

export default ({children, title = 'Welcome'}) => {
  return (
      <div className="root">
        <Head>
          <title>{title}</title>
          <meta charSet='utf-8'/>
          <meta name='viewport'
                content='initial-scale=1.0, width=device-width'/>
        </Head>
        <h2>{title}</h2>
        {children}

        {/*language=css*/}
        <style jsx>{`
          .root {
            font-family: sans-serif;
          }
        `}</style>

      </div>
  )
}
