import Link from "next/link";
import Layout from "../components/Layout";
import {useProfile} from "../components/UserContext";

function Profile() {
  const profile = useProfile();

  return (
      <Layout title="Profile">
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
            </div>
            :
            <div className="buttons">
              Not logged in yet
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
        `}</style>
      </Layout>
  )}

export default Profile;