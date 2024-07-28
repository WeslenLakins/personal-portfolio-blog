import { ReactNode } from 'react'
import type { Authors } from 'contentlayer/generated'
import SocialIcon from '@/components/social-icons'
import Image from '@/components/Image'
import experienceData from '@/data/experienceData.json'
import licenseData from '@/data/licenseData.json'

interface Props {
  children: ReactNode
  content: Omit<Authors, '_id' | '_raw' | 'body'>
}

export default function AuthorLayout({ children, content }: Props) {
  const { name, avatar, occupation, company, email, twitter, linkedin, github } = content
  return (
    <>
      <div className="space-y-8">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            About
          </h1>
        </div>
        <div className="items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0">
          <div className="flex flex-col items-center space-x-2 pt-8">
            {avatar && (
              <Image
                src={avatar}
                alt="avatar"
                width={192}
                height={192}
                className="h-48 w-48 rounded-full"
              />
            )}
            <h3 className="pb-2 pt-4 text-2xl font-bold leading-8 tracking-tight">{name}</h3>
            <div className="text-gray-500 dark:text-gray-400">{occupation}</div>
            <div className="text-gray-500 dark:text-gray-400">{company}</div>
            <div className="flex space-x-3 pt-6">
              <SocialIcon kind="mail" href={`mailto:${email}`} />
              <SocialIcon kind="github" href={github} />
              <SocialIcon kind="linkedin" href={linkedin} />
              <SocialIcon kind="x" href={twitter} />
            </div>
            <div className="pb-4 pt-4">
              <a
                href="/pgp-key.txt"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline dark:text-blue-400"
              >
                GPG Public Key
              </a>
            </div>
          </div>
          <div className="prose max-w-none pb-8 pt-8 dark:prose-invert xl:col-span-2">
            <h2 className="text-2xl font-bold leading-8 tracking-tight text-gray-900 dark:text-gray-100">
              Bio
            </h2>
            {children}
          </div>
        </div>

        <div className="space-y-8 pt-8">
          <h2 className="text-2xl font-bold leading-8 tracking-tight text-gray-900 dark:text-gray-100">
            Degrees, Licenses, and Certifications
          </h2>
          <ul className="relative space-y-4">
            {licenseData.map((lic, index) => (
              <li key={lic.title} className="flex items-center space-x-4 pb-4">
                <div className="relative">
                  <img
                    src={lic.logo}
                    alt={`${lic.issuer} logo`}
                    className="h-12 w-12 rounded-full"
                  />
                  {index !== licenseData.length - 1 && (
                    <div className="absolute left-1/2 top-14 h-full w-px -translate-x-1/2 transform bg-gray-300"></div>
                  )}
                </div>
                <div className="ml-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                    <a
                      href={lic.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      {lic.title}
                    </a>
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    {lic.issuer} - {lic.date}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <hr className="my-8 border-t-2 border-gray-300 dark:border-gray-700" />
        <div className="space-y-8 pt-8">
          <h2 className="text-2xl font-bold leading-8 tracking-tight text-gray-900 dark:text-gray-100">
            Experience
          </h2>
          <ul className="relative space-y-4">
            {experienceData.map((exp, index) => (
              <li key={exp.company} className="flex items-center space-x-4 pb-4">
                <div className="relative">
                  <img
                    src={exp.logo}
                    alt={`${exp.company} logo`}
                    className="h-12 w-12 rounded-full"
                  />
                  {index !== experienceData.length - 1 && (
                    <div className="absolute left-1/2 top-14 h-full w-px -translate-x-1/2 transform bg-gray-300"></div>
                  )}
                </div>
                <div className="ml-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                    {exp.company}
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    {exp.position} - {exp.type}
                  </p>
                  <p className="text-gray-500 dark:text-gray-400">
                    {exp.start_date} - {exp.end_date}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  )
}
