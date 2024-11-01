import { login } from '@/app/actions/auth';
import Link from 'next/link';

export function LoginForm() {
  return (
    <form action={login} className="max-w-md mx-auto bg-white p-8 shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Войти в ЛК</h2>
      
      <div className="mb-4">
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="Email"
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
      </div>
      
      <div className="mb-6">
        <label htmlFor="password" className="block text-sm font-medium text-gray-700">Пароль</label>
        <input
          id="password"
          name="password"
          type="password"
          placeholder="Пароль"
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
      </div>
      
      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
      >
        Войти
      </button>

      <p className="mt-4 text-center text-sm text-gray-600">
        Еще нет аккаунта?{' '}
        <Link href="/auth/signup" className="text-blue-600 hover:text-blue-800">
          Зарегистрироваться
        </Link>
      </p>
    </form>
  );
}
