import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import "../styles/show.css";
function Show() {
  const navigate= useNavigate()
  const images = [
    'https://cdn.britannica.com/43/236443-050-350513F6/Five-glasses-of-boba-with-different-colors-and-flavors.jpg',
    'https://images.hola.com/us/images/0276-1581868aa28c-637554e4d367-1000/horizontal-1200/fresh-made-lemonade.jpg',
    'https://media.istockphoto.com/id/1126893721/photo/low-key-chocolate-smoothies-on-a-table-in-a-rustic-kitchen.jpg?s=612x612&w=0&k=20&c=ubUfrroh2JWOvdqt3lFhfmXK0OZKzCDbGNj5JVcFRVg='
  ];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Function to increment the current image index
  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  useEffect(() => {
    // Automatically switch to the next image every 3 seconds (adjust timing as needed)
    const intervalId = setInterval(nextImage, 3000);

    // Clean up the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []);

  const handleLogin= (e)=>{
    e.preventDefault();
    navigate("/orders")
    
  }

  return (
    <div className="show">
      <div className="image-container">
        <img src={images[currentImageIndex]} alt={`Image ${currentImageIndex + 1}`} />
      </div>
      <button type="submit" class="button" onClick={handleLogin} >Order Now</button>
    </div>
  );
}

export default Show;
