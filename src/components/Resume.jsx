'use client'

import { Card, Timeline, Button } from 'flowbite-react';

export default function Projects() {
  return (
    <div className='m-9 mt-2 mb-10'>
      <h1 className='font-bold text-2xl'>Resume</h1>

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
                      May 2023 - Current
                    </Timeline.Time>
                    <Timeline.Title>
                      Full Stack Software Developer <br />Livestock Water Recycling
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
                      September 2022 - May 2023
                    </Timeline.Time>
                    <Timeline.Title>
                      Jr Software Developer (Student) <br />Livestock Water Recycling
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
                      January 2022 - September 2022
                    </Timeline.Time>
                    <Timeline.Title>
                      Full Stack Software Developer (Student) <br /> BlackBerry - Radar Cloud Services Team
                    </Timeline.Title>
                    <Timeline.Body>
                    </Timeline.Body>
                  </Timeline.Content>

                </Timeline.Item>
                <Timeline.Item>
                  <Timeline.Point />
                  <Timeline.Content>
                    <Timeline.Time>
                      May 2020 - September 2021
                    </Timeline.Time>
                    <Timeline.Title>
                      Jr Stack Software Developer (Student) <br /> Livestock Water Recycling
                    </Timeline.Title>
                    <Timeline.Body>
                      <p>
                        {/* <ul>
                          <li>- Developed and deployed a microservice written in Python to process data packets transmitted from agricultural IoT devices to an MQTT message broker.</li>
                          <li>- Created a REST API microservice using JavaScript (NodeJS) and Express to interface with a MongoDB database.</li>
                          <li>- Created a REST API microservice using JavaScript (NodeJS) and Express to interface with a MongoDB database.</li>
                        </ul> */}
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