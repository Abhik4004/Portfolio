import "./About.css";
import { LuHistory } from "react-icons/lu";
import { DiCode } from "react-icons/di";

const events = [
  {
    year: 2004,
    title: "Starting",
    desc: "On May 4th, 2004, a new adventure began as I came to earth, ready to explore all its wonders. From that day forward, every moment has been a step in your unique journey, filled with discoveries, challenges, and growth. Each experience has shaped who you are today, adding to the rich tapestry of your life. Embrace the memories and look forward to the many adventures yet to come, as your journey continues to unfold.",
  },
  {
    year: 2016,
    title: "First Achievement",
    desc: "In 2016, I had the incredible opportunity to travel to Delhi for the first time to compete in the Kung Fu nationals. I am proud to share that I secured the 2nd position in this prestigious event. This achievement marked a significant milestone in my martial arts journey. Also, I became the youngest blackbelt that year.",
  },
  {
    year: 2020,
    title: "Moving - I",
    desc: "I successfully passed my Class X board exams from the West Bengal Board with 80% marks and chose the science stream for my future career.",
  },
  {
    year: 2022,
    title: "New Beginning",
    desc: "I scored 80% in my Class XI board exams from the West Bengal Board and have enrolled in the B.Tech Information Technology program at Techno International New Town.",
  },
  {
    year: 2024,
    title: "First Win",
    desc: "I had my first win with my team Exploring Ideas in Hack-o-Nova 2024 where our project got us 2nd place.",
  },
  {
    year: 2024,
    title: "First Win",
    desc: "I had my first win with my team Exploring Ideas in Hack-o-Nova 2024 where our project got us 2nd place.",
  },
];

function About() {
  return (
    <div className="body">
      <h1 className="mystory">
        My Story <LuHistory />
      </h1>
      <hr />
      <section id="timeline">
        {events.map((ev, index) => (
          <Time story={ev} key={index} />
        ))}
      </section>
    </div>
  );
}

function Time({ story }) {
  return (
    <article>
      <div className="inner">
        <span className="date">
          <span className="month">{story.year}</span>
        </span>
        <h2>
          {story.title} <DiCode />
        </h2>
        <p>{story.desc}</p>
      </div>
    </article>
  );
}

export default About;
