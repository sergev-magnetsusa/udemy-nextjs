import Link from 'next/link';

const AuthForm = () => {
  return (
  <form id="auth-form">
    <div>
      <img src="/images/auth-icon.jpg" alt="A lock icon"/>
    </div>

    <p>
      <label htmlFor="email">Email</label>
      <input type="email" name="email" id="email" placeholder="Email" />
    </p>

    <p>
      <label htmlFor="password">Password</label>
      <input type="password" name="password" id="password" placeholder="Password" />
    </p>

    <p>
      <button type="submit">
        Create Account
      </button>
    </p>

    <p>
      <Link href="/">
        Login with existing account
      </Link>
    </p>

  </form>
  );
}

export default AuthForm