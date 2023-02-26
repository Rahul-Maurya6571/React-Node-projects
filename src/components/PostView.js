import logo from "../images/logo.JPG";
import headerCamera from "../images/header_camera.JPG";
import like from "../images/like.JPG";
import share from "../images/share.JPG";

import React from "react";
import { Link } from "react-router-dom";
import posts from "./data";

export default function PostView() {
  return (
    <div>
      <div className="header">
        <img id="header-logo" src={logo} alt="logo" />
        <Link to="/post">
          <img id="header-camera" src={headerCamera} alt="uploadPost" />
        </Link>
      </div>
      {posts.map((post, index) => {
        return (
          <>
            <div className="post-container" key={index}>
              <section className="top">
                <span className="name">{post.name}</span>
                <br />
                <span className="location">{post.location}</span>
                <div className="menu">
                  <div className="dot"></div>
                  <div className="dot"></div>
                  <div className="dot"></div>
                </div>
              </section>
              <section className="imgSection">
                <img src={post.PostImage} alt="post" />
              </section>
              <section className="like-share">
                <img id="like" src={like} alt="number of likes" />
                <img id="share" src={share} alt="number of share" />
                {/* <span className='date'>{post.date}</span> */}
                <div className="like">{post.likes} likes</div>
              </section>
              <div className="description">{post.description}</div>
            </div>
          </>
        );
      })}
    </div>
  );
}
