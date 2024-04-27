import '../../../styles/about.css';
import communityImage from '../../../assets/images/community.png';
import topicsImage from '../../../assets/images/topics.jpg';

function About() {
  return (
    <div className='about-page'>
      <img src={communityImage} alt="Community" className="page-background-image"/>
      <div className='app-container'>
        <h1 className='page-title'>About Us</h1>
        <div className="about-content">
          <p className='page-description'>
            Welcome to our blog where we bring a wide array of topics right to your fingertips.
            Our mission is to provide insightful content that caters to diverse interests, from technology
            and science to arts and lifestyle. Each category is curated to ensure you find the
            information you're passionate about.
          </p>
        </div>
        <div className="about-content">
          <img src={topicsImage} alt="Diverse Topics" className="about-image"/>
          <p className='page-description'>
            Dive into our extensive collection of articles by using the search feature or by
            selecting categories that interest you. Our dynamic card system allows you to quickly
            get an overview of each topic with the option to delve deeper into your areas of interest.
          </p>
        </div>
        <p className='page-description'>
          We are committed to regularly updating our content to keep you informed and engaged.
          Whether you're looking for the latest tech trends, tips on health and wellness, or creative
          inspiration, our blog is designed to be your go-to resource. Get started by exploring
          our categories or searching for specific topics.
        </p>
      </div>
    </div>
  );
}

export default About;
