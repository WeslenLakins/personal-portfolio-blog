interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: 'AI Application Assistant',
    description: `Platform powered by AI for automated cover letter and resume generation, networking tools, and professional headshot creation.`,
    imgSrc: '/static/images/google.png',
    href: 'https://aiapplicationassistant.com/',
  },
  {
    title: 'Tensorflow Image Recognition',
    description: `Multiple object detection machine learning project built with tensorflow.js.`,
    imgSrc: '/static/images/time-machine.jpg',
    href: 'https://simple-machine-learning-project.vercel.app/',
  },
]

export default projectsData
