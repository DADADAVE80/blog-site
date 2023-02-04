import Header from "../components/Header";
 
const AuthorPage = () => {
  return ( 
    <div>
      <Header/>
      <div className="container">
        <div className="inner-container">
          <h1 className="page-title">About the Author: daveproxy80</h1>
          <img src="./img/header.jpg" className="hero-image" alt="" />
          <div className="blog-content">
            <p className="blog-text">daveproxy80 has always been interested in developing solutions for all technological platforms including the web. Back then, in 2015, he started learning JavaScript on Coursera using Atom text editor as his native IDE and CodePen.io to see development progress in realtime. Today, he is into Android Development and enjoys the learning process a lot, anticipating the launch of his first mobile app hit. He is also looking for internship roles as an Android Developer worldwide.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
 
export default AuthorPage;