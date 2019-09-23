import Head from 'next/head'
import {login, logout, useProfile} from "./UserContext";
import Link from "next/link";

export default ({children, title = 'Welcome'}) => {
  const profile = useProfile();

  return (
      <div>
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
          <Link href="/profile">
            <a>Profile</a>
          </Link>
        </nav>

        <main>
          {children}
        </main>

        {/*language=css*/}
        <style jsx>{`
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
          
          .title h2 {
            margin-top: 0;
          }

          .login-controls button {
            font-size: 1.1em;
          }

          nav {
            background-color: #eeeeee;
            padding: 5px 10px;
          }
          
          nav > a {
            margin-right: 5px;
          }

          main {
            margin: 10px;
          }
        `}</style>
        {/*language=css*/}
        <style global jsx>{`
          body {
            margin: 0;
            font-family: sans-serif;
          }
        `}</style>

      </div>
  )
}
