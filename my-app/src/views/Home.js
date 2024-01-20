// views/Home.js
import React, { useState, useEffect } from 'react';
import './Home.css'; // Import your CSS file
import '../components/Form.css';
import image1 from '../assets/images/1.jpg';
import image2 from '../assets/images/1f.jpg';
import image3 from '../assets/images/23.jpg';



// Slideshow section using React state and useEffect
const Home = () => {
  const images = [image1, image2, image3]; // Add more images as needed
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // ---------------------------------------------------------------
  // Effect to change the current image index at a regular interval
  useEffect(() => {
    const slideshowInterval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Adjust the interval time (in milliseconds) as needed

    // Clean up the interval on component unmount
    return () => {
      clearInterval(slideshowInterval);
    };
  }, [images.length]);

  // ---------------------------------------------------------------
  // Guestbook state
  const [guestbookEntries, setGuestbookEntries] = useState([]);
  const [name, setName] = useState('');
  const [comment, setComment] = useState('');

   // Date variable declaration
   const date = new Date().toLocaleDateString();
  // Function to handle guestbook submission
  const handleGuestbookSubmit = (e) => {
    e.preventDefault();

    // Create a new guestbook entry object
    const newEntry = {
      name: name,
      comment: comment,
      date: new Date().toLocaleDateString(),
    };

    // Add the new entry to the guestbookEntries array
    setGuestbookEntries((prevEntries) => [...prevEntries, newEntry]);

    // Clear the form fields
    setName('');
    setComment('');
  };


  return (
      <div className='container'>
        <div className="slideshow-container">
          <div className="slide" style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}>
            {images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Slide ${index + 1}`}
                className={index === currentImageIndex ? 'active' : ''}
              />
            ))}
          </div>
        </div>

        <div className="form-container">
         <h2>Guestbook Reviews</h2>
          <form onSubmit={handleGuestbookSubmit}>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />

            <label htmlFor="comment">Comment:</label>
            <textarea
              id="comment"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              required
            ></textarea>

            <button type="submit">Submit</button>
          </form>

          {/* Display the automatically generated date */}
          {/* {date && <p>Date: {date}</p>} */}
        </div>
        
      </div>
  );
};

export default Home;