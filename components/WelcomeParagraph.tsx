import React from 'react'

export default function WelcomeParagraph() {
  return (
    <div className="py-12">
      <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
        Hi, I'm <span className="text-blue-600 dark:text-blue-400">Wes</span>!
      </h1>
      <p className="mt-6 text-lg leading-7 text-gray-500 dark:text-gray-400">
        Thank you for visiting my personal blog and portfolio. This is where I share my insights and
        projects related to law, technology, and various other interests. The views expressed here
        are entirely my own.
      </p>
      <p className="mt-6 text-lg leading-7 text-gray-500 dark:text-gray-400">
        Whether you're looking for in-depth articles on cybersecurity and privacy law, practical
        tutorials on web development, or updates on my latest projects, you'll find a wealth of
        information to explore.
      </p>
      <p className="mt-6 text-lg leading-7 text-gray-500 dark:text-gray-400">
        I hope you enjoy your visit and find the content both informative and engaging. Feel free to
        reach out if you have any questions, are interested in collaborating, or just want to
        connect. Happy browsing!
      </p>
    </div>
  )
}
