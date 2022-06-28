import { getProviders, signIn as SignIntoProvider } from 'next-auth/react'
import Header from '../../components/Header'
function SignIn({ providers }) {
  return (
    <>
      <div className="  flex  flex-col items-center justify-center py-2 px-3 text-center">
        <img className=" w-40" src="https://links.papareact.com/t4i" alt="" />

        <div className="mt-40 flex flex-col items-center justify-center space-y-6">
          {providers &&
            !!Object.keys(providers).length &&
            Object.values(providers).map((provider) => (
              <div key={provider.name}>
                {' '}
                <button onClick={() => SignIntoProvider(provider.id)}>
                  {' '}
                  Sign in with {provider.name}{' '}
                </button>{' '}
              </div>
            ))}
        </div>
      </div>
    </>
  )
}
export async function getServerSideProps() {
  const providers = await getProviders()
  return {
    props: {
      providers,
    },
  }
}
export default SignIn

function Provider({ Name }) {
  console.log(Name)
  return (
    <Name className="h-8 w-8 rounded-full   text-blue-800 transition-all  duration-500  ease-out hover:h-12 hover:w-12 " />
  )
}
