'use client'

import { Card, Timeline } from 'flowbite-react';

export default function Projects() {
  return (
    <div className='m-9 mt-2 mb-10'>
      <h1 className='font-bold text-4xl'>Resume</h1>

      <Card>
        <div className="grid grid-cols-1 gap-6">
          <div>
            <Card>
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                <p>
                  Professional Work Experience
                </p>
              </h5>
              <Timeline>
                <Timeline.Item>
                  <Timeline.Point />
                  <Timeline.Content>
                    <Timeline.Time>
                      May 2023 - Current <br />
                      Livestock Water Recycling
                    </Timeline.Time>
                    <Timeline.Title>
                      Full Stack Software Developer
                    </Timeline.Title>
                    <Timeline.Body>
                      <p>
                      </p>
                    </Timeline.Body>
                  </Timeline.Content>
                </Timeline.Item>
                <Timeline.Item>
                  <Timeline.Point />
                  <Timeline.Content>
                    <Timeline.Time>
                      September 2022 - May 2023 <br />
                      Livestock Water Recycling <br />
                      Remote
                    </Timeline.Time>
                    <Timeline.Title>
                      Jr Software Developer (co-op)
                    </Timeline.Title>
                    <Timeline.Body>
                      <p>
                      <ul>
                          <li>- Upraded a python data pipeline microservice for ingesting MQTT messages to handle hundreds of concurrent connections</li>
                          <li>- Migrated multiple microservices running on Heroku to Docker containers running on GCP</li>
                          <li>- Responsible for the maintenance of multiple frontend and backend services used internally and by clients</li>
                          <li>- Developed a web app using Three.js and React for the showcasing of 3D models of industrial agricultural equipment</li>
                          <li>- Tools used: JavaScript, Python, GCP, IBM Cloud, MongoDB, Docker</li>
                        </ul>
                      </p>
                    </Timeline.Body>
                  </Timeline.Content>
                </Timeline.Item>
                <Timeline.Item>
                  <Timeline.Point />
                  <Timeline.Content>
                    <Timeline.Time>
                      January 2022 - September 2022 <br />
                      BlackBerry - Radar Cloud Services Team <br />
                      Ottawa, Canada
                    </Timeline.Time>
                    <Timeline.Title>
                      Full Stack Software Developer (co-op)
                    </Timeline.Title>
                    <Timeline.Body>
                      <p>
                        <ul>
                          <li>- Developed and deployed an MVP data pipeline to interface third-party industrial transportation IoT devices into BlackBerrys cloud platform</li>
                          <li>- Re-engineered the http client layer for a SPA react/angular web application with thousands of users.</li>
                          <li>- Assisted in the maintenance of frontend and backend services relating to the processing and storage of sensor data from IoT devices </li>
                          <li>- Tools used: JavaScript, Docker, Jenkins, Elasticsearch, Git, MySQL, AWS</li>
                        </ul>
                      </p>
                    </Timeline.Body>
                  </Timeline.Content>

                </Timeline.Item>
                <Timeline.Item>
                  <Timeline.Point />
                  <Timeline.Content>
                    <Timeline.Time>
                      May 2020 - September 2021 <br />
                      Livestock Water Recycling
                    </Timeline.Time>
                    <Timeline.Title>
                      Jr Software Developer (co-op)
                    </Timeline.Title>
                    <Timeline.Body>
                      <p>
                        <ul>
                          <li>- Developed and deployed a data pipeline microservice written in Python to process data packets transmitted from agricultural IoT devices to an MQTT message broker.</li>
                          <li>- Created a REST API microservice using JavaScript (NodeJS) and Express to interface with a MongoDB database.</li>
                          <li>- Used React to develop an internal tool to generate reports and analytics for industrial agricultural systems. </li>
                          <li>- Developed a client-facing cross-platform mobile application to provide real-time sensor readings and analytics to users </li>
                          <li>- Tools used: JavaScript, Python, GCP, IBM Cloud, MongoDB, Heroku, MQTT</li>
                        </ul>
                      </p>
                    </Timeline.Body>
                  </Timeline.Content>

                </Timeline.Item>
              </Timeline>
            </Card>
          </div>
          <div>

          </div>
        </div >
      </Card >

      <br />
      <br />
      <br />
      <br />
    </div >
  );
}