import Header from "./Header"
import React from 'react';
import yang from '../assets/yang_480.jpg';
import sookar from '../assets/Sookar_photo.jpg'
const About = () => {
  const people = [
    {
      name: 'Axoltyl',
      role: 'Co-Founders / CEOs',
      imageUrl:
        'data:image/jpeg;base64,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',
    },
    {
      name: 'Will',
      role: 'User Authentication & Back-end Developer',
      imageUrl: 'https://media.licdn.com/dms/image/D4E03AQHnoMfq-IyBTw/profile-displayphoto-shrink_100_100/0/1697138455670?e=1720051200&v=beta&t=Aor-05AHjqPcdLIlzufxyYs2YglXJdsCMPjvYbh2xo4',
    },
    {
      name: 'Nicolette',
      role: 'OpenAI & Full Stack Developer',
      imageUrl: `${sookar}`,
    },  {
      name: 'Yang',
      role: 'Itinerary & Full Stack Developer',
      imageUrl: `${yang}`,
    },
    {
      name: 'Ashley ',
      role: 'Google Mapping & Full Stack Developer',
      imageUrl: 'https://media.licdn.com/dms/image/D4E03AQGXJ0hgaPEgRA/profile-displayphoto-shrink_400_400/0/1701100323576?e=1720051200&v=beta&t=tkqL_CDAxLPTGgAVZWC539AauVvWfXUFXzuoqCwiXdU',
    },
    // More people...
  ]
    return (
      <>
      <Header />
      <div className="bg-white py-24 sm:py-32 ">
        <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Meet the Team</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600 text-justify">
              Travelotl was created and designed by Team Axoltyl to enhance your honeymoon planning experience. In collaboration with Crystal Gems, Travelotl is recently new and improved. 
            </p>
          </div>
          <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
            {people.map((person) => (
              <li key={person.name}>
                <div className="flex items-center gap-x-6">
                  <img className="h-16 w-16 rounded-full" src={person.imageUrl} alt="" />
                  <div>
                    <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">{person.name}</h3>
                    <p className="text-sm font-semibold leading-6 text-indigo-600">{person.role}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      </>
    )
  }
 
export default About