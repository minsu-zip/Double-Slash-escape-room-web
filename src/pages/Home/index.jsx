import React from "react";
import './homestyle.css';
import './style.js';
import img from './16.jpg';

// components
import PostList from "../../components/Common/PostList";

const Home = () => {
  return (
    <>
      <div className="container">
        <div className='content'>
          <img src={img} />

          <div className='title'>
            <div className='title-text'>
              xx방탈출
            </div>
            <div className='title-text'>
              토론을 시작하거나, 메모를 작성하거나, 아트보드에 주석을 달려면 댓글을 남겨 주십시오.
            </div>
            <button>테마검색</button>
            <button>테마검색</button>
          </div>

        </div>
      </div>
      <PostList></PostList>
    </>
  );
};

export default Home;
