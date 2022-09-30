import React from "react";
import "./testimonials.css";
import AVTR1 from "../../assets/avatar11.jpeg";
import AVTR2 from "../../assets/avatar21.jpeg";
import AVTR3 from "../../assets/avatar31.jpg";

const data = [
  {
    avatar: AVTR1,
    name: "Togrul Guliyev",
    review:
      "Nijat Mansimov is one of the most excellent trainers I know in Azerbaijan. He took the initiative to share his teaching skills and 2+ years of engineering experience in the IT field with his students. If you are a beginner in this field or have knowledge to improve it further, it is the right choice for you to join Nijat teacher's programming school.",
  },
  {
    avatar: AVTR2,
    name: "İlkin Zeynalov",
    review:
      "When we met Nijat Mansimov for the first time, I was skeptical about what he told us. Because I came from a completely different field of programming and what I heard sounded far from reality. The reason is that they have always instilled in us the idea that if you don't have a 'man', you won't be able to find a job, that education is useless, and that those who study are stuck in the middle. However, as I progressed in this field, I began to understand that the old ideas were false and what Mr. Nijat said was true.",
  },
  {
    avatar: AVTR3,
    name: "Arif Humbatof",
    review:
      "Nijat Mansimov is one of the most experienced IT specialists I know. During his time as a teacher, he tried to share his experiences with us as much as possible and helped us with every problem. His work experience in the foreign market was of great benefit to us, that is, to the students.",
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from students and clients</h5>
      <h2>Testimonials</h2>
      <div className="container testimonials__container">
        {data.map(({ avatar, name, review }, index) => {
          return (
            <article key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar} alt="" />
              </div>
              <h5 className="client__name">{name}</h5>
              <small className="client__review">{review}</small>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Testimonials;
