interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: 'AI Application Assistant',
    description: `AI Application Assistant is a comprehensive platform that leverages artificial intelligence to streamline the job application process. It includes features such as automated cover letter and resume generation, networking tools to enhance professional connections, and a professional headshot creation tool. This project aims to simplify and enhance the job-seeking experience, making it easier for users to present their best selves to potential employers.`,
    imgSrc: '/static/images/aaa.png',
    href: 'https://aiapplicationassistant.com/',
  },
  {
    title: 'Tensorflow Image Recognition',
    description: `The Tensorflow Image Recognition project utilizes tensorflow.js to create a robust machine learning model capable of detecting multiple objects within images. This project showcases the power of TensorFlow's library for building and deploying machine learning models directly in the browser. It serves as an excellent example of practical applications of machine learning in real-time object detection and recognition tasks.`,
    imgSrc: '/static/images/tfjs.png',
    href: 'https://simple-machine-learning-project.vercel.app/',
  },
  {
    title: 'TensorFlow.js Magic Trick',
    description: `The TensorFlow.js Magic Trick project, also known as the "Disappearing People Project," showcases the power of TensorFlow.js and the BodyPix model to remove people from complex backgrounds in real-time, using only JavaScript. This innovative project demonstrates the application of machine learning and computer vision directly in the browser, making it an exciting exploration for developers, hobbyists, and educators. Key features include real-time person removal from video streams and a demonstration of TensorFlow.js capabilities.`,
    imgSrc: '/static/images/tfjs.png',
    href: 'https://github.com/WeslenLakins/tensorflow-js-magic-trick',
  },
  {
    title: 'Teachable Machine with TensorFlow.js',
    description: `This project allows users to create their own "Teachable Machine" using transfer learning with MobileNet v3 in TensorFlow.js. It enables real-time data collection and model training directly in the browser, providing an immediate and private machine learning experience. Users can teach the model to recognize objects from webcam feeds by collecting samples in real-time. Key features include support for multiple classes of objects, efficient client-side processing, and no server-side data transmission, ensuring user privacy.`,
    imgSrc: '/static/images/tfjs.png',
    href: 'https://github.com/WeslenLakins/tensorflow-js-teachable-machine',
  },
  {
    title: 'TensorFlow.js MNIST Classifier',
    description: `The TensorFlow.js MNIST Classifier is a web application that utilizes a Convolutional Neural Network (CNN) to classify clothing items from the Fashion MNIST dataset. Built with TensorFlow.js, the model is trained directly in the browser, showcasing the power of in-browser machine learning. The project features real-time predictions, interactive controls for adjusting classification speed, and visual feedback indicating the model's accuracy. This project is an excellent example of using modern web technologies and machine learning to create interactive educational tools.`,
    imgSrc: '/static/images/tfjs.png',
    href: 'https://github.com/WeslenLakins/tensorflow-js-mnist-classifier',
  },
  {
    title: 'Calorie Tracking App',
    description: `The Calorie Tracking App is designed to help users monitor their daily calorie intake and the calories burned through exercise. It provides a simple and intuitive interface to track meals and workouts, assisting users in achieving their fitness and dietary goals. Key features include the ability to add and remove meals with calorie counts, log workouts with calories burned, set daily calorie limits, and view total calories consumed and remaining. The app also includes persistent data storage to ensure user information is saved across sessions.`,
    imgSrc: '/static/images/scss.png',
    href: 'https://github.com/WeslenLakins/calorie-tracking-app',
  },
  {
    title: 'REST Countries App',
    description: `The REST Countries App is a application designed to display detailed information about countries using the REST Countries API. Users can view all countries on the homepage, search for specific countries, filter by region, and view detailed information on a separate page. The app also includes features such as navigating through border countries and toggling between light and dark themes. It is built with modern technologies including React, TypeScript, and Styled-components, ensuring a responsive and interactive user experience.`,
    imgSrc: '/static/images/rest.png',
    href: 'https://github.com/WeslenLakins/rest-countries-app',
  },
  {
    title: 'Shopping List',
    description: `The Shopping List project is a simple yet effective web application developed using vanilla JavaScript, HTML, and CSS. It allows users to add, remove, and filter items in their shopping list. The app uses local storage to persist data across sessions, ensuring that users do not lose their lists when they close their browser. This project demonstrates fundamental web development skills, including DOM manipulation, event handling, and state management.`,
    imgSrc: '/static/images/js.png',
    href: 'https://github.com/WeslenLakins/shopping-list',
  },
  {
    title: 'Flixx App',
    description: `Flixx App is a sleek and user-friendly web application developed using vanilla JavaScript, HTML, and CSS. It displays current movie and TV show information by leveraging The Movie Database (TMDb) API. Users can explore now-playing movies, top 20 popular films, and trending TV shows. The app features a responsive design, search functionality, and detailed pages for individual movies and shows. It is an excellent example of integrating external APIs with modern web development practices.`,
    imgSrc: '/static/images/tmdb.png',
    href: 'https://github.com/WeslenLakins/flixx-app',
  },
  {
    title: 'House Marketplace',
    description: `The House Marketplace project is a responsive web application built with React and Firebase, designed to facilitate the listing and searching of houses for sale or rent. Users can create, modify, and delete their own listings. The app integrates Google Geocoding API to obtain coordinates from addresses, enhancing the accuracy of location-based searches. This project demonstrates proficiency in front-end development with React, back-end integration with Firebase, and real-time data handling.`,
    imgSrc: '/static/images/react-firebase.png',
    href: 'https://github.com/WeslenLakins/house-marketplace',
  },
  {
    title: 'Microservice Project',
    description: `The Microservice Project is a comprehensive boilerplate application designed to serve as a template for developing microservices. Built with Spring Boot, it includes various essential components such as an API gateway, service registry, and multiple microservices (e.g., product-service and offer-service). The project demonstrates the implementation of key microservice patterns like service discovery, load balancing, and API routing. It provides a scalable and secure foundation for building production-ready microservices, making it ideal for learning and rapid development.`,
    imgSrc: '/static/images/microservice.png',
    href: 'https://github.com/WeslenLakins/microservice-project',
  },
]

export default projectsData
