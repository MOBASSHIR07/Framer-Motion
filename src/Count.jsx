// src/Count.jsx
import React from 'react';
import CountUp from 'react-countup';

const Count = ({ start = 0, end = 100, duration = 3, suffix = "+" }) => {
    return (
        <div className="bg-white text-black">
            {/* Simulate a long page above the counter */}
            <section className="min-h-screen flex items-center justify-center bg-gray-200">
                <p className="max-w-3xl px-6 text-center">
                    Scroll down to see the counter 👇
                </p>
            </section>

        <div className='text-3xl text-red-400 text-center'>
                <CountUp start={0} end={200} duration={2}>
                {({ countUpRef, start }) => (
                    <div>
                        <span ref={countUpRef} />
                        <button onClick={start}>Start</button>
                    </div>
                )}
            </CountUp>
        </div>


            {/* Scroll-triggered counter section */}
            <section className="min-h-screen flex flex-col items-center justify-center bg-white">
                <h2 className="text-5xl font-bold text-green-600">
                    <CountUp
                        start={start}
                        end={end}
                        duration={duration}
                        suffix={suffix}
                        enableScrollSpy
                    // scrollSpyDelay={200}
                    // scrollSpyOnce
                    />
                </h2>
                <p className="mt-2 text-lg text-gray-600">Countries Worked With</p>
            </section>

            {/* Add more space below to allow scrolling further if needed */}
            <section className="h-[100vh] bg-gray-100 flex items-center justify-center">
                <p>End of page</p>
            </section>
        </div>
    );
};

export default Count;
