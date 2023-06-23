'use client'

import Image from 'next/image';
import { Card, Timeline } from 'flowbite-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function About() {
  return (
    <div className='m-9 mt-2'>
      <h1 className='font-bold text-2xl'>About</h1>

      <Card>
        <div className="grid sm:grid-cols-1 md:grid-cols-2">
          <div className="flex flex-col items-center pb-10 mt-20">
            <Image
              alt="Oscar image"
              className="mb-3 rounded-full shadow-lg"
              height="126"
              src="/oscjaimes.jpeg"
              width="126"
            />
            <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
              Oscar Jaimes
            </h5>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              Full Stack Software Developer
            </span>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              BSc, Computing Science Specialization
            </span>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              University of Alberta
            </span>
            <div className="mt-4 flex space-x-3 lg:mt-6">
              <a
                className="inline-flex items-center rounded-lg bg-cyan-700 px-4 py-2 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
                href="https://github.com/oscj"
                target="_blank"
              >
                <p>
                  <FaGithub size={20} />
                </p>
              </a>
              <a
                className="items-center rounded-lg border border-gray-300 bg-white px-4 py-2 text-center text-sm font-medium text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
                href="https://www.linkedin.com/in/oscj/"
                target="_blank"
              >
                <p>
                  <FaLinkedin size={20} />
                </p>
              </a>
            </div>
          </div>

          <div>
            <Timeline>
              <Timeline.Item>
                <Timeline.Point />
                <Timeline.Content>
                  <Timeline.Title>
                    Full Stack Developer At Heart
                  </Timeline.Title>
                  <Timeline.Body>
                    <p>
                      Most of my interest lies in full stack development, as I aim to leverage tools such as React, Typescript, and NextJS, to create
                      web applications that provide meaningful interactions with data. I hold professional full stack development experience having mostly worked
                      in the IoT space, mainly writing software to interface with agricultural and industiral transportation data.
                    </p>
                  </Timeline.Body>
                </Timeline.Content>
              </Timeline.Item>
              <Timeline.Item>
                <Timeline.Point />
                <Timeline.Content>
                  <Timeline.Title>
                    IoT & Sensor Data Processing Experience
                  </Timeline.Title>
                  <Timeline.Body>
                    <p>
                      So far most of my work has revolved around using IoT technologies to collect sensor data from remote devices via backend services, and simultaneously
                      creating meaningful web interfaces to interact with the data. My experience lies in transportation IoT devices, having worked on the <a href="https://www.blackberry.com/us/en/products/asset-tracking" className='text-blue-500'>BlackBerry Radar Team</a>,
                      and industrial-grade agricultural equipment at leading AgTech startup, <a href="https://www.livestockwaterrecycling.com" className='text-blue-500'>Livestock Water Recycling</a>.
                    </p>
                  </Timeline.Body>
                </Timeline.Content>
              </Timeline.Item>
              <Timeline.Item>
                <Timeline.Point />
                <Timeline.Content>
                  <Timeline.Title>
                    Passionate About Open Data
                  </Timeline.Title>
                  <Timeline.Body>
                    <p>
                      My personal projects mostly aim to provide people with publicly available data, that may be hard to find on its own. My aim as a developer is to create
                      applications that have a net-positive impact for users.
                    </p>
                  </Timeline.Body>
                </Timeline.Content>
              </Timeline.Item>

            </Timeline>
          </div>
        </div>
      </Card>
    </div >
  );
}
