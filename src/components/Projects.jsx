'use client'

import { Card } from 'flowbite-react';

export default function Projects() {
  return (
    <div className='m-9 mt-2'>
      <h1 className='font-bold text-2xl'>Projects</h1>

      <Card>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <Card
              imgAlt="Open Watch Map"
              imgSrc="/openwatch.png"
            >
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                <p>
                  OpenWatchAB
                </p>
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                <p>
                  OpenWatchAB is an open data portal made for Albertans. We provide real-time road conditions, live traffic cameras, weather updates, and emergency alerts, ensuring safety and convenience. Further, we provide access to search for government documents, reinforcing our commitment to transparency. With OpenWatchAB, we equip users with reliable, up-to-the-minute information, fostering informed communities throughout Alberta.
                </p>
              </p>
            </Card>
          </div>


          <div>
            <Card
              imgAlt="Open Watch CKAN Library"
              imgSrc="/ckan.png"
            >
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                <p>
                  Open Watch CKAN Library
                </p>
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                <p>
                  Open Watch CKAN is a JavaScript Library For Interfacing with CKAN APIs. <a href="https://ckan.org/" className='text-blue-500'>CKAN</a> is an open source data management system used by national and regional government organisations throughout the European Union, the Americas, Asia and Oceania to power a variety of official and community data portals. The OpenWatchAB application utilizes this library to interface with Alberta and Canadian data. This lirbary is available on NPM and recieves regular updates.
                </p>
              </p>
            </Card>
          </div>
        </div >
      </Card >
    </div >
  );
}