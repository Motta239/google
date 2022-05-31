import {getProviders,signIn as SignIntoProvider}from "next-auth/react";
import Header from "../../components/Header"
function SignIn({ providers }) {
    return (
      <>
      <Header/>
      <div className=" flex flex-col items-center justify-center min-h-screen py-2 -mt-56 px-14 text-center">
        <img className="fixed w-80" src="https://links.papareact.com/ocw" alt="" />
      <div className="mt-40">
        {Object.values(providers).map((provider) => (
          <div key={provider.name}>
            <button className="p-3 bg-blue-500 rounded-lg text-white items-center"  onClick={() => SignIntoProvider(provider.id,{callbackUrl:"http://localhost:3000"})}>
              Sign in with {provider.name}
            </button>
          </div>
        ))}
      </div>
      </div>
      </>
    )
      }
export async function getServerSideProps(){
    const providers= await getProviders()
    return {
        props:{
            providers,
        }
    }
}
export default SignIn