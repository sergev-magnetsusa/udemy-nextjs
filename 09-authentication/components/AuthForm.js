'use client';

import Link from 'next/link';
import {useActionState} from 'react';
import {auth} from '@/actions/auth-actions';

const AuthForm = ({mode}) => {
  const [state, formAction, isPending] = useActionState(auth.bind(null, mode), {});

  return (
    <form id="auth-form" action={formAction}>
      <div>
        <img src="/images/auth-icon.jpg" alt="A lock icon"/>
      </div>

      {/* email */}
      <p>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Email"
          defaultValue={state?.data?.email || undefined}
        />
      </p>

      {/* password */}
      <p>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Password"
          defaultValue={state?.data?.password || undefined}
        />
      </p>

      {/* errors */}
      {state?.errors && !isPending && (
        <ul id="form-errors">
          {Object.keys(state.errors).map((key) => (
            <li key={key}>{state.errors[key]}</li>
          ))}
        </ul>
      )}

      {/* submit btn */}
      <p>
        <button>
          {mode === 'login' ? 'Login' : 'Create Account'}
        </button>
      </p>

      {/* login link */}
      <p>
        {mode === 'login' && <Link href="/?mode=signup">Create an account</Link> }
        {mode === 'signup' && (
          <Link href="/?mode=login">Login with existing account</Link>
        )}
      </p>

    </form>
  );
};

export default AuthForm;