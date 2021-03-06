import React from "react";
import {
  GetServerSideProps,
  GetServerSidePropsContext,
  GetStaticProps,
  GetStaticPropsContext,
  NextPage,
} from "next";
import ServiceCard from "../components/ServiceCard";
import { services } from "../data";
import { Service } from "../types";
import { motion } from "framer-motion";
import { fadeInUp, routeAnimation, stagger } from "../animations";

const About: NextPage = () => {
  // console.log(services);

  return (
    <motion.div
      className='flex flex-col flex-grow px-6 pt-1 '
      variants={routeAnimation}
      initial='initial'
      animate='animate'
      exit='exit'
    >
      <h6 className='my-3 text-base font-medium'>
        A relentless learner, a passionate problem solver who loves to do
        experiments and always tries to maximize productivity. Enthusiastic
        about Web Development and Machine Learning.
      </h6>
      <div
        className='flex-grow p-4 mt-5 bg-gray-400 dark:bg-dark-100 '
        style={{ marginLeft: "-1.5rem", marginRight: "-1.5rem" }}
      >
        <h4 className='my-3 text-xl font-semibold tracking-wide'>
          What I am doing
        </h4>

        <motion.div
          className='grid gap-6 my-3 md:grid-cols-2'
          variants={stagger}
          initial='initial'
          animate='animate'
        >
          {/* children's initial and animate property should be same as the parent during a stagger effect  */}
          {services.map((service) => (
            <motion.div
              variants={fadeInUp}
              className='col-span-2 p-2 bg-gray-200 rounded-lg dark:bg-dark-200 md:col-span-1 '
              key={service.title}
            >
              <ServiceCard service={service} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default About;
