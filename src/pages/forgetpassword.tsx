import React, { useState } from 'react';

const ForgetPassword: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Add your password reset logic here, e.g., send a reset link to the user's email
    setIsSubmitted(true);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="md:py-50 bg-white rounded-2xl shadow-2xl flex flex-col w-full md:w-1/3 items-center max-w-8xl transition duration-1000 ease-out p-8">
        <h2 className="text-4xl font-bold text-blue-400">Reset Password</h2>
        <div className="inline-block border-[1px] w-20 border-blue-600 border-solid my-4"></div>

        {isSubmitted ? (
          <p>
            A password reset link has been sent to your email. Please check your inbox and follow the instructions.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <label>
              Email:
              <input type="email" value={email} onChange={handleEmailChange} className="border p-2 rounded" />
            </label>
            <button type="submit" className="bg-blue-400 text-white p-2 rounded">
              Reset Password
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default ForgetPassword;