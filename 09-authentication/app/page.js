import AuthForm from '@/components/AuthForm';

const RootPage = async ({searchParams}) => {
  const formMode = (await searchParams).mode || 'login';

  return <AuthForm mode={formMode}/>
}

export default RootPage