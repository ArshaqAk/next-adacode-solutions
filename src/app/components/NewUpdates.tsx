"use client"
import React, { useState, useEffect } from 'react';
import instagram from "../assets/instagram.png";
import Image from 'next/image';
import axios from 'axios';

const NewUpdates = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchInstagramData = async () => {
      try {
        const response = await axios.get(process.env.NEXT_PUBLIC_INSTAGRAM_URI);
        setPosts(response.data.data);
      } catch (error) {
        console.error('Error fetching Instagram data:', error);
      }
    };

    fetchInstagramData();
  }, []);
  return (
    <div className='updates_container'>
      <div className="header">
        <Image
          src={instagram}
          width={45}
          height={45}
          alt="Instagram Logo"
        />
        <h1>Instagram <span>Updates</span></h1>
      </div>

      <div className='feed_container'>
        <div className="row">
          {posts.map((item, index) => (
            item.media_type !== 'VIDEO' &&
            <a key={item.id} href={item.permalink}>
                  <img  className='image' src={item.media_url} alt="Instagram post" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewUpdates;
