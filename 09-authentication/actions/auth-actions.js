'use server';

import {createUser, getUserByEmail} from '@/lib/user';
import {hashUserPassword, verifyPassword} from '@/lib/hash';
import {redirect} from 'next/navigation';
import {createAuthSession, destroySession} from '@/lib/auth';

export const signup = async (prevState, formData) => {
  const email = formData.get('email');
  const password = formData.get('password');

  const errors = {};

  if (!email.includes('@')) {
    errors.email = 'Please enter a valid email';
  }

  if (password.trim().length < 8) {
    errors.password = 'Password must be at least 8 characters';
  }

  if (Object.keys(errors).length > 0) {
    return {
      errors,
      data: {email, password},
    };
  }

  const hashedPwd = hashUserPassword(password);

  try {
    const id = createUser(email, hashedPwd);
    await createAuthSession(id);
    redirect('/training');
  } catch (error) {
    if (error.code === 'SQLITE_CONSTRAINT_UNIQUE') {
      return {
        errors: {
          email: 'It seems like an account for the chosen email already exists.',
        },
        data: {email, password}
      }
    }
    console.error(error);
    throw error;
  }
}

export const login = async (prevState, formData) => {
  const email = formData.get('email');
  const password = formData.get('password');

  const existingUser = getUserByEmail(email);

  if (!existingUser) {
    return {
      errors: {
        email: 'could not authenticate user, please check your credentials.',
      },
      data: {email, password},
    }
  }

  const isValidPassword = verifyPassword(existingUser.password, password);

  if (!isValidPassword) {
    return {
      errors: {
        email: 'Could not authenticate user, please check your credentials.',
      },
      data: {email, password},
    }
  }

  await createAuthSession(existingUser.id);
  redirect('/training');
}

export const auth = async (mode, prevState, formData) => {
  if (mode === 'login') {
    return login(prevState, formData);
  }
  return signup(prevState, formData);
}

export const logout = async () => {
  await destroySession();
  redirect('/');
}