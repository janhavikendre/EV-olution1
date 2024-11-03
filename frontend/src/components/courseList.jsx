import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for routing


const courses = [
  {
    id: 1,
    title: 'Introduction to React',
    description: 'Learn the basics of React, including components, state, and props.',
    price: '$99',
    image: 'https://softwaretraininginstitutesinpune.com/wp-content/uploads/2023/11/Full-Stack-React-Course.png',
  },
  {
    id: 2,
    title: 'Advanced JavaScript',
    description: 'Deep dive into JavaScript, including ES6 features and asynchronous programming.',
    price: '$120',
    image: 'https://www.web-development-institute.com/wp-content/uploads/2020/04/javascript-master-plus-course-banner.jpg',
  },
  {
    id: 3,
    title: 'Web Development with HTML & CSS',
    description: 'Build beautiful, responsive websites using HTML and CSS.',
    price: '$80',
    image: 'https://crampete-staticfiles.s3.ap-south-1.amazonaws.com/blogs/Blog-131/Web-Development1.png'
  },
  {
    id: 4,
    title: 'Data Structures and Algorithms',
    description: 'Understand fundamental data structures and algorithms for efficient programming.',
    image: 'https://www.interviewbit.com/blog/wp-content/uploads/2022/03/Best-Data-Structures-and-Algorithms-Courses-800x391.png' 
 },
  {
    id: 5,
    title: 'Introduction to Node.js',
    description: 'Learn the basics of server-side programming with Node.js.',
    image:  'https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:705/https://www.filepicker.io/api/file/xFGq8AjYTIi7QUnNpAhK',
  },
  {
    id: 6,
    title: 'CSS Flexbox and Grid',
    description: 'Master CSS layout techniques with Flexbox and Grid.',
    image: 'https://www.digital4design.com/wp-content/uploads/2024/05/Grid-Vs-Flexbox-2.png',
  },
  {
    id: 7,
    title: 'React Native for Mobile Development',
    description: 'Build mobile applications using React Native for iOS and Android.',
    image: 'https://dicecamp-testing.fra1.cdn.digitaloceanspaces.com/4949/React-Native-Banner.jpg'
},
{
    id: 8,
    title: 'Introduction to Python',
    description: 'Learn the fundamentals of Python programming, including data types and control flow.',
    image: 'https://d1jnx9ba8s6j9r.cloudfront.net/blog/wp-content/uploads/2019/04/Introduction-To-Python-1.jpg'
},
{
    id: 9,
    title: 'Machine Learning Basics',
    description: 'Discover the basics of machine learning and how to implement algorithms.',
    image: 'https://i.ytimg.com/vi/hmOiINgO6tA/maxresdefault.jpg'
},
{
    id: 10,
    title: 'Introduction to TypeScript',
    description: 'Learn how to build scalable and maintainable applications using TypeScript.',
    image: 'https://media.geeksforgeeks.org/wp-content/uploads/20240704122318/Typescript-Tutorial-copy.webp'
},
{
    id: 11,
    title: 'API Development with Express.js',
    description: 'Create robust APIs using Express.js for Node.js applications.',
    image: 'https://i0.wp.com/blog.apilayer.com/wp-content/uploads/2023/08/RESTful-Web-API-Design-A-Comprehensive-Guide.jpg?resize=1140%2C628&ssl=1'
},
{
    id: 12,
    title: 'Building Progressive Web Apps',
    description: 'Learn how to create fast, reliable, and engaging PWAs using modern web technologies.',
    image: 'https://www.metizsoft.com/wp-content/uploads/2021/03/top-progressive-web-apps-frameworks-2-1200x675.jpg'
}
];

const CourseList = () => {
  const [hoveredCourse, setHoveredCourse] = useState(null);

  return (
    <div style={{ display: 'flex', padding: '20px', color: "#E88982" }}>
      {/* Course Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '20px',
        flex: 1,
        position: 'relative', // Set relative positioning for absolute positioning of description
      }}>
        {courses.map(course => (
          <div
            key={course.id}
            style={{
              position: 'relative',
              border: '1px solid #ccc',
              borderRadius: '5px',
              overflow: 'hidden',
              backgroundColor: '#f9f9f9',
              boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
              cursor: 'pointer',
              transition: 'transform 0.2s', // Add transition for hover effect
            }}
            onMouseEnter={() => setHoveredCourse(course.id)}
            onMouseLeave={() => setHoveredCourse(null)}
          >
            <img
              src={course.image}
              alt={course.title}
              style={{ width: '100%', height: 'auto', borderRadius: '5px' }}
            />
            <h2 style={{ fontSize: '18px', color: '#0984e3', padding: '10px' }}>{course.title}</h2>
            <button
              style={{
                backgroundColor: '#0984e3',
                color: 'white',
                border: 'none',
                padding: '10px 15px',
                borderRadius: '5px',
                cursor: 'pointer',
                margin: '10px',
              }}
              onClick={() => alert(`Enrolled in ${course.title}`)}
            >
              Enroll Now
            </button>

            {/* Hovered Description */}
            {hoveredCourse === course.id && (
              <div style={{
                position: 'absolute',
                top: 0,
                left: '100%', // Position to the right of the course card
                width: '250px',
                border: '1px solid #ccc',
                borderRadius: '5px',
                backgroundColor: 'white',
                boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
                padding: '10px',
                zIndex: 10,
              }}>
                <h3 style={{ color: '#0984e3' }}>{course.title}</h3>
                <p>{course.description}</p>
                <p style={{ fontWeight: 'bold' }}>{course.price}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseList;