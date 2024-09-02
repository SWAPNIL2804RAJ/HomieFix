import React from 'react';
import './AboutBody.css';
import { useNavigate } from 'react-router-dom';

const officeLocations = [
    { name: "Delhi, New Delhi", coordinates: [77.2090, 28.6139], address: "Connaught Place, New Delhi, Delhi, 110001" },
    { name: "Korba, Chhattisgarh", coordinates: [82.7501, 22.3595], address: "Korba, Chhattisgarh, 495677" },
    { name: "Bhubaneswar, Odisha", coordinates: [85.8245, 20.2961], address: "Saheed Nagar, Bhubaneswar, Odisha, 751007" },
    { name: "Bhagalpur, Bihar", coordinates: [86.9842, 25.2425], address: "Tilka Manjhi, Bhagalpur, Bihar, 812001" }
];

const AboutBody = () => {
  const navigate = useNavigate();
  return (
    <div className="about-us-page">
      <header className="about-us-header">
        <h1>About HomieFix</h1>
        <p>Your Trusted Partner for Home Maintenance and Repair Services.</p>
        <p>At HomieFix, we connect homeowners with top-rated tradespeople, ensuring reliable, efficient, and high-quality home improvement services across multiple locations in India.</p>
      </header>
      <section className="mission-section">
        <h2>Our Mission</h2>
        <p>At HomieFix, our mission is to revolutionize the way homeowners maintain and improve their living spaces. We strive to create a seamless, stress-free experience that brings together the best tradespeople and homeowners under one roof. Our goal is to become the go-to platform for all home maintenance and repair needs, offering unparalleled convenience, quality, and trust. Empowering Homeowners: We understand that finding reliable professionals for home repairs and improvements can be daunting. Our mission is to empower homeowners by connecting them with trusted, vetted tradespeople who are committed to delivering exceptional service. We aim to simplify the entire process, making it easier for you to keep your home in top condition without the hassle of endless searches or uncertainty.

Supporting Tradespeople: At HomieFix, we recognize the hard work and dedication of tradespeople. Our mission extends to supporting these professionals by providing them with a platform to showcase their skills, connect with clients, and grow their businesses. We believe that by fostering a community of skilled and trustworthy tradespeople, we can elevate the standard of home services across the country.

Ensuring Quality and Trust: Quality and trust are at the heart of everything we do. We are committed to maintaining the highest standards by carefully vetting every tradesperson on our platform. Our mission is to ensure that every job completed through HomieFix meets or exceeds expectations, leaving homeowners satisfied and confident in their choice.

Fostering Innovation: We are dedicated to continuous improvement and innovation in the home services industry. Our mission includes leveraging technology to enhance the user experience, from easy booking and secure payments to real-time updates and transparent reviews. We are constantly exploring new ways to make home maintenance more accessible, efficient, and enjoyable for everyone involved.

Building Strong Communities: Beyond individual homes, our mission is to contribute to the well-being of entire communities. By connecting homeowners with local tradespeople, we support the growth of small businesses and foster stronger, more resilient communities. We believe that when homes are well-maintained, neighborhoods thrive.</p>
      </section>
      <section className="values-section">
        <h2>Our Values</h2>
        <ul>
          <li><strong>Reliability</strong> At HomieFix, reliability is at the core of our service. We understand that when it comes to home maintenance and repair, trust is paramount. That’s why we go above and beyond to ensure that every tradesperson on our platform is thoroughly vetted and certified. Our rigorous screening process includes background checks, verification of credentials, and assessments of past work to confirm their competence and professionalism. We prioritize reliability not only in our tradespeople but also in our platform's functionality. From secure transactions to timely updates, we strive to deliver a seamless experience for both homeowners and professionals. Our commitment to reliability means you can confidently rely on HomieFix for prompt and dependable service every time. Our goal is to build lasting trust by consistently exceeding your expectations and ensuring that every job is completed with the highest level of integrity and quality. At HomieFix, we believe that reliability is not just about meeting expectations—it's about setting a new standard for excellence in home services.</li>
          <li><strong>Customer Satisfaction</strong> At HomieFix, customer satisfaction is our top priority. We recognize that a positive experience is key to fostering long-term relationships and earning your trust. That’s why we are dedicated to providing exceptional service at every stage of your journey with us. From the moment you first interact with our platform to the completion of your service, we are committed to ensuring your needs are met with professionalism and care. Our user-friendly interface is designed to make finding and booking trusted tradespeople as easy and efficient as possible. We listen to your feedback and continually refine our services to better meet your expectations. Our commitment to customer satisfaction goes beyond just the service itself. We offer transparent pricing, clear communication, and a responsive support team to address any concerns you may have. After the job is completed, we encourage you to leave a review, helping us maintain high standards and allowing future customers to make informed decisions. We believe that your satisfaction is a reflection of our success. By consistently delivering high-quality services and exceeding expectations, we aim to create a seamless and enjoyable experience for every homeowner. At HomieFix, your happiness is our greatest reward.</li>
          <li><strong>Transparency</strong> At HomieFix, transparency is fundamental to building trust and ensuring a positive experience for our users. We believe that clear and open communication is essential for fostering confidence and satisfaction in our services. We are committed to providing complete visibility into every aspect of our process. From upfront pricing to detailed service descriptions, we ensure that you have all the information you need to make informed decisions. Our platform features transparent pricing models with no hidden fees, so you know exactly what to expect before you commit to a service. Our commitment to transparency extends to the interactions between homeowners and tradespeople. We provide detailed profiles and reviews for each professional, allowing you to evaluate their qualifications and past performance. This openness helps you choose the right person for the job and ensures that you are never left in the dark about who will be working on your home. Moreover, we value your feedback and encourage open dialogue. Our support team is readily available to address any questions or concerns you might have. We actively seek your input to continuously improve our services and address any areas of concern. At HomieFix, transparency is not just a policy—it's a practice embedded in everything we do. By maintaining clear communication and providing accessible information, we aim to create a trustworthy environment where you can feel confident and secure in every interaction.</li>
        </ul>
      </section>
      <div className="map-and-details">
        <div className="details-container">
          <h2>Our Offices</h2>
          {officeLocations.map(({ name, address }) => (
            <div className="office" key={name}>
              <h3>{name}</h3>
              <p>{address}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="contact-section">
        <div className="contact-info">
          <div>
            <h3>Support</h3>
            <p>Our friendly team is here to help.</p>
            <a href="mailto:homiefixsos@gmail.com">homiefixsos@gmail.com</a>
          </div>
          <div>
            <h3>Sales</h3>
            <p>Questions or queries? Get in touch!</p>
            <a href="mailto:sales@homiefix.com">sales@homiefix.com</a>
          </div>
          <div>
            <h3>Phone</h3>
            <p>Mon-Fri from 9am to 8pm.</p>
            <a href="tel:+91 74895 89201">+91 74895 89201</a>
            <br />
            <a href="tel:+91 93518 80281">+91 93518 80281</a>
          </div>
        </div>
        <hr className="line" />
      </div>
    </div>
  );
}

export default AboutBody;
