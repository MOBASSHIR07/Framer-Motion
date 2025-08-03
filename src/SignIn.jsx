import React from 'react';
import { motion } from 'framer-motion';

const SignIn = () => {
  return (
    <div className='min-h-screen bg-gradient-to-tr from-green-50 to-blue-50 flex items-center justify-center p-4'>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className='w-full max-w-4xl bg-white flex rounded-lg overflow-hidden shadow-lg'
      >

        {/* Left Side */}
        <div className='w-1/2 bg-gradient-to-tr from-green-400 to-blue-500 p-8 text-white'>
          <motion.h3
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-2xl font-bold"
          >
            Hi this is testing
          </motion.h3>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-4"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-center mt-6"
          >
            <h2 className="text-2xl font-bold">Welcome Back!</h2>
            <p className="text-green-100 mt-2">Sign in to access your personalized dashboard</p>
          </motion.div>
        </div>

        {/* Right Side */}
        <div className='w-1/2 p-8'>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 1 }}
          >
            <p className='text-black'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Reprehenderit ab rem illo cumque temporibus alias impedit nesciunt voluptates laudantium praesentium.
            </p>
          </motion.div>
        </div>

      </motion.div>

    </div>
  );
};

export default SignIn;
