import { getProviders, signIn as SignIntoProvider } from 'next-auth/react'
function SignIn({ providers }) {
  return (
    <>
      <div className="  flex  flex-col items-center justify-center py-2 px-3 text-center">
        <img className=" w-40" src="https://links.papareact.com/t4i" alt="" />

        <div className="mt-40 flex flex-col items-center justify-center space-y-6">
          {Object.values(providers).map((provider) => (
            <div key={provider.name}>
              <div className=" flex  items-center justify-center space-x-2">
                <Provider Name={provider.name} />

                <button
                  className="h-12 w-48 items-center space-y-2 rounded-full bg-blue-500 p-4 text-sm  text-white hover:bg-gray-200 hover:text-blue-400"
                  onClick={() =>
                    SignIntoProvider(provider.id, {
                      callbackUrl: 'http://motiyosef.com',
                    })
                  }
                >
                  Sign in with{provider.name}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
export async function getStaticProps() {
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
