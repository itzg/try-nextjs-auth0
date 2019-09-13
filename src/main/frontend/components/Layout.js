import Head from 'next/head'
import {login, logout, useProfile} from "./UserContext";
import Link from "next/link";

export default ({children, title = 'Welcome', headerRight}) => {
  const profile = useProfile();

  return (
      <div className="root">
        <Head>
          <title>{title}</title>
          <meta charSet='utf-8'/>
          <meta name='viewport'
                content='initial-scale=1.0, width=device-width'/>
        </Head>
        <header>
          <div className="title">
            <h2>{title}</h2>
          </div>
          <div className="login-controls">
            {profile ?
                  <button onClick={logout}>Logout</button>
                :
                  <button onClick={login}>Login!</button>
            }
          </div>
        </header>

        <nav>
          <Link href="/">
            <a>Home</a>
          </Link>
          |
          <Link href="/profile">
            <a>Profile</a>
          </Link>
        </nav>

        <main>
          {children}
        </main>

        {/*language=css*/}
        <style jsx>{`
          .root {
            font-family: sans-serif;
          }

          header {
            padding: 10px;
            display: flex;
            flex-direction: row;
            flex-wrap: nowrap;
            justify-content: flex-start;
            align-content: flex-start;
            align-items: stretch;
            background-color: #0074D9;
            color: white;
          }

          header > .title {
            flex: 1 1 auto;
          }

          header > .login-controls {
            flex: 0 0 auto;
          }
          
          .login-controls button {
            height: 100%;
          }
          
          nav {
            margin: 5px 10px;
          }
          
          main {
            margin: 10px;
          }
        `}</style>
        {/*language=css*/}
        <style global jsx>{`
          body {
            margin: 0;
          }
        `}</style>

      </div>
  )
}
