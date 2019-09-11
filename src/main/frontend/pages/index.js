import React from 'react';
import {useProfile, login, logout} from "../components/UserContext";
import Layout from "../components/Layout";

function Index() {
  const profile = useProfile();

  const title = profile ? 'Profile' : 'Welcome';

  return (
      <Layout title={title}>
        {profile ?
            <div>
              <div className="item">
                <label>Name</label>
                <div>{profile.name}</div>
              </div>
              <div className="item">
                <label>E-mail</label>
                <div>{profile.email}</div>
              </div>
              <div className="item">
                <label>Picture</label>
                <div><img alt="profile picture" style={{width: 50, height: 50}}
                          src={profile.picture}/></div>
              </div>

              <div className="buttons">
                <button onClick={logout}>Logout</button>
              </div>
            </div> :
            <div className="buttons">
              <button onClick={login}>Login!</button>
            </div>
        }

        {/*language=css*/}
        <style jsx>{`
          .item {
            margin-top: 10px;
          }
          
          label {
            font-weight: bold;
          }
          
          button {
            padding: 10px;
            font-size: 1.1em;
            font-weight: bold;
          }
          
          .buttons {
            margin-top: 20px;
          }
        `}</style>
      </Layout>
  )

}

export default Index;