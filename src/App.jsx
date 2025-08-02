
import { motion, useScroll, useTransform, AnimatePresence } from 'motion/react'
import './App.css'
import { useState } from 'react';


function App() {
  console.log(useScroll());// to see its attribute
  const { scrollYProgress } = useScroll()
  const scale = useTransform(scrollYProgress, [0, 1], [1, 2]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  //variant
  // const boxVariants = {
  //   hidden: { opacity: 0, y: -100 },
  //   visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  // };
  //last--------------


  const [show, setShow] = useState(true);// animated presence
  return (
    <>

      <button onClick={() => setShow(!show)} className="mb-5 bg-black text-white px-4 py-2 rounded">
        Toggle Box
      </button>
      <AnimatePresence>
        {show && (
          <motion.div
            className="h-64 w-60 bg-yellow-500"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            // exit={{ opacity: 0, scale: 0.5 }}
            transition={{ duration: 5 }}
          />
        )}
      </AnimatePresence>






      {/* Animated Box */}


      {/* <motion.div
        className="  h-64 w-60 bg-red-600 border-green-300 border-8"
        initial={{
          X:100
        }}
        animate={{
          x: 300,       
                
          scale:  0.5,
          rotate: 360  // Shrink, then return to full size
        }}
        transition={{
          duration: 3,
          ease: "anticipate",
          repeat: Infinity
        }}
      >


      </motion.div> */}

      {/* <motion.h1 className='text-3xl text-red-300'
        animate={{x:200}}
        transition={{duration:2}}

      >
        subscribe
      </motion.h1> */}

      {/* kyeframe animation */}
      {/* <motion.div className=' h-64 w-60 bg-red-600 border-green-300
       border-8'
       initial={{x:0,y:0}}
       animate={{
        x:[0, 500 ,500 ,0, 0],
        y:[0,  0,  300 , 300, 0],
        rotate:[0,360,0, -360, 0]
      
      }}
       transition={{duration:10}}
       >

      </motion.div> */}
      {/* <motion.div className=' h-64 w-60 bg-red-600 border-green-300
       border-8'
       
       whileHover={{background:'green'}}
       whileTap={{scale:0.5}}
       >

      </motion.div> */}
      {/* <motion.div className=' h-64 w-60 bg-red-600 border-green-300
       border-8'
       drag
      //  whileDrag={{
      //   scale:0.2
      //  }}
       dragConstraints={{
        left:0,
        top:0,
        right:500,
        bottom:400
       }}
      //  dragDirectionLock='true' //one direction at a time
      
       >

      </motion.div> */}
      <motion.div className='bg-red-400 origin-left  w-full h-3 fixed top-0 left-0'
        style={{ scaleX: scrollYProgress }}
      //  scrollYProgress detact the vlaue from the screen where the position or scroll
      >

      </motion.div>
      <div className='p-5 text-center '>
        <h2 className='text-5xl text-red-300 font-bold mb-5'>Framer mothion</h2>
        <p className='font-mono'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta veritatis libero odit quae, repellendus ipsum maiores reiciendis perferendis! Aliquid, perferendis. Alias perspiciatis iure maxime nesciunt?  <br /> <br /> <br />
          Ipsa eius voluptate sapiente dignissimos, architecto odit enim saepe facilis laborum perferendis. Mollitia, voluptate. Consequuntur impedit in a sunt delectus inventore ducimus facere neque, cupiditate, rerum unde veniam esse?
          <br /> <br /> <br />Quibusdam maxime inventore quisquam cupiditate vel! Voluptate, consequatur doloribus! Illum labore molestias ullam reprehenderit est recusandae, illo vitae accusamus officia sunt temporibus iure animi et repellendus rerum totam a. Nam est inventore explicabo veritatis dicta voluptatem, illo laborum sapiente itaque vel consectetur asperiores, ratione dignissimos quos!</p>
        <p className='font-mono'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta veritatis libero odit quae, repellendus ipsum maiores reiciendis perferendis! Aliquid, perferendis. Alias perspiciatis iure maxime nesciunt?  <br /> <br /> <br />
          Ipsa eius voluptate sapiente dignissimos, architecto odit enim saepe facilis laborum perferendis. Mollitia, voluptate. Consequuntur impedit in a sunt delectus inventore ducimus facere neque, cupiditate, rerum unde veniam esse?
          <br /> <br /> <br />Quibusdam maxime inventore quisquam cupiditate vel! Voluptate, consequatur doloribus! Illum labore molestias ullam reprehenderit est recusandae, illo vitae accusamus officia sunt temporibus iure animi et repellendus rerum totam a. Nam est inventore explicabo veritatis dicta voluptatem, illo laborum sapiente itaque vel consectetur asperiores, ratione dignissimos quos!</p>
        <p className='font-mono'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta veritatis libero odit quae, repellendus ipsum maiores reiciendis perferendis! Aliquid, perferendis. Alias perspiciatis iure maxime nesciunt?  <br /> <br /> <br />
          Ipsa eius voluptate sapiente dignissimos, architecto odit enim saepe facilis laborum perferendis. Mollitia, voluptate. Consequuntur impedit in a sunt delectus inventore ducimus facere neque, cupiditate, rerum unde veniam esse?
          <br /> <br /> <br />Quibusdam maxime inventore quisquam cupiditate vel! Voluptate, consequatur doloribus! Illum labore molestias ullam reprehenderit est recusandae, illo vitae accusamus officia sunt temporibus iure animi et repellendus rerum totam a. Nam est inventore explicabo veritatis dicta voluptatem, illo laborum sapiente itaque vel consectetur asperiores, ratione dignissimos quos!</p>
        <p className='font-mono'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta veritatis libero odit quae, repellendus ipsum maiores reiciendis perferendis! Aliquid, perferendis. Alias perspiciatis iure maxime nesciunt?  <br /> <br /> <br />
          Ipsa eius voluptate sapiente dignissimos, architecto odit enim saepe facilis laborum perferendis. Mollitia, voluptate. Consequuntur impedit in a sunt delectus inventore ducimus facere neque, cupiditate, rerum unde veniam esse?
          <br /> <br /> <br />Quibusdam maxime inventore quisquam cupiditate vel! Voluptate, consequatur doloribus! Illum labore molestias ullam reprehenderit est recusandae, illo vitae accusamus officia sunt temporibus iure animi et repellendus rerum totam a. Nam est inventore explicabo veritatis dicta voluptatem, illo laborum sapiente itaque vel consectetur asperiores, ratione dignissimos quos!</p>
        <p className='font-mono'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta veritatis libero odit quae, repellendus ipsum maiores reiciendis perferendis! Aliquid, perferendis. Alias perspiciatis iure maxime nesciunt?  <br /> <br /> <br />
          Ipsa eius voluptate sapiente dignissimos, architecto odit enim saepe facilis laborum perferendis. Mollitia, voluptate. Consequuntur impedit in a sunt delectus inventore ducimus facere neque, cupiditate, rerum unde veniam esse?
          <br /> <br /> <br />Quibusdam maxime inventore quisquam cupiditate vel! Voluptate, consequatur doloribus! Illum labore molestias ullam reprehenderit est recusandae, illo vitae accusamus officia sunt temporibus iure animi et repellendus rerum totam a. Nam est inventore explicabo veritatis dicta voluptatem, illo laborum sapiente itaque vel consectetur asperiores, ratione dignissimos quos!</p>
        <p className='font-mono'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta veritatis libero odit quae, repellendus ipsum maiores reiciendis perferendis! Aliquid, perferendis. Alias perspiciatis iure maxime nesciunt?  <br /> <br /> <br />
          Ipsa eius voluptate sapiente dignissimos, architecto odit enim saepe facilis laborum perferendis. Mollitia, voluptate. Consequuntur impedit in a sunt delectus inventore ducimus facere neque, cupiditate, rerum unde veniam esse?
          <br /> <br /> <br />Quibusdam maxime inventore quisquam cupiditate vel! Voluptate, consequatur doloribus! Illum labore molestias ullam reprehenderit est recusandae, illo vitae accusamus officia sunt temporibus iure animi et repellendus rerum totam a. Nam est inventore explicabo veritatis dicta voluptatem, illo laborum sapiente itaque vel consectetur asperiores, ratione dignissimos quos!</p>
      </div>

      {/* Animated Box */}
      <motion.div
        style={{ scale, opacity }}
        className="h-64 w-60 bg-blue-500 mx-auto my-20"
      />

      {/* Spacer to allow scrolling */}
      <div className="h-[2000px]" />


      {/* while in view ******************* */}
      {/* varient
 <motion.div
      className="h-64 w-60 bg-purple-500 mx-auto my-20"
      variants={boxVariants}
      initial="hidden"
      animate="visible"
    /> */}

      <motion.div
        initial={{ opacity: 0, x: 500, y: 100 }}
        whileInView={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 2 }}
      >
        <h1 className="text-4xl font-bold text-center">Hello World</h1>
      </motion.div>


      {/* More space after to scroll back up */}


      {/* last */}

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="bg-indigo-600 text-white px-6 py-3 rounded-lg shadow-lg mt-10 mx-auto block"
      >
        Click Me
      </motion.button>
      <motion.button
        whileHover={{ scale: 1.05, x: -10, y: -10 }}
        whileTap={{ scale: 0.9 }}
        className="bg-indigo-600 text-white px-6 py-3 rounded-lg shadow-lg mt-10 mx-auto block"
      >
        Click Me
      </motion.button>


    </>
  )
}

export default App
