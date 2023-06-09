import axios from "axios";
import Link from 'next/link';
import Button from '../Button';
import { useState } from "react";
import {FcGoogle} from 'react-icons/fc';
import { signIn } from "next-auth/react";

const SignUpWindow =() => {
  const [isLoading, setIsLoading] = useState(false);

  const handleLoginFormSubmit = async (e) => {
    console.log("HELLO");
    e.preventDefault();
    const form = e.target;

    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;

    try {
      console.log("Hello again")
      setIsLoading(true);
      const response = await axios.post("/api/register", {
        name,
        email,
        password,
      });

      console.log(response.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error.message)
      console.error(error);

      setIsLoading(false);
    }
  };

  return (
          <div className="flex justify-center items-center fixed inset-0 bg-gradient-to-br from-[#C4DAFC] to-[#356dbe]">
            <div className="w-full max-w-md p-6 bg-white rounded-2xl shadow-lg">
              <h2 className="text-3xl font-lufgaExtraBold text-gray-900 text-center mb-6">
                Sign up for an account
              </h2>
              <form onSubmit={handleLoginFormSubmit}>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-md font-lufgaMedium text-gray-700">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="p-4 mt-1 block w-full text-black bg-gray-200 border-gray-600 border-2 font-lufgaMedium rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-md"
                    placeholder="Enter your name"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className="block text-md font-lufgaMedium text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="p-4 mt-1 block w-full text-black bg-gray-200 border-gray-600 border-2 font-lufgaMedium rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-md"
                    placeholder="Enter your email"
                    required
                  />
                </div>
                <div className="mb-6">
                  <label htmlFor="password" className="block text-md font-lufgaMedium text-gray-700">
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    className="p-4 mt-1 block w-full text-black bg-gray-200 border-gray-600 border-2 font-lufgaMedium rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-md"
                    placeholder="Enter your password"
                    required
                  />
                </div>
                <div className="mt-6">
                  <button
                    type="submit"
                    className="w-full py-3 px-4 border border-transparent rounded-md shadow-sm text-md font-lufgaMedium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    Sign up
                  </button>
                </div>
              </form>
              <div className="flex flex-col mt-5 font-lufgaLight">
                <Button
                  outline
                  label="Continue with Google"
                  icon={FcGoogle}
                  onClick={() => signIn('google')}
                />
              </div>
              <div className="mt-6 font-lufgaMedium text-sm text-gray-500 text-center">
                Already have an account?
                <Link href="/login" className="ml-1 font-lufgaMedium text-indigo-600 hover:text-indigo-500">
                  Log in
                </Link>
              </div>
            </div>
          </div>
  );
};

export default SignUpWindow;