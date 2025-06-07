import React from "react";
import Contact from "./components/Contact";

const projects = [
  {
    title: "Fake News Detection",
    description: "The model helps us to detect the fake news using ML model",
    image: "/images/fake_news.jpg",
    link: "https://github.com/sanjana22-opp/FAKE-NEWS-DETECTING-SYSTEM",
  },
  {
    title: "Email Spam Filtering",
    description: "Helps us to Predict wether the Email is Spam (or) Ham",
    image: "/images/email_spam.jpg",
    link: "https://github.com/sanjana22-opp/Email-spam-filteration",
  },
  {
    title: "Credit Card Fraud Detection",
    description: "This project helps us from credit card frauds",
    image: "/images/creditcard_fraud.jpg",
    link: "https://github.com/sanjana22-opp/Creditcard-Fraud-detection",
  },
  {
    title: "Animated Web Page",
    description: "This is animated login page",
    image: "/images/web_page.jpg",
    link: "https://github.com/sanjana22-opp/Animated-login-page",
  },
  {
    title: "Churn Prediction",
    description: "This helps us to know how many coustomers are churned at a particular time",
    image: "/images/churn_pred.jpg",
    link: "https://github.com/sanjana22-opp/CHURN-PREDICTION",
  },
];

const App = () => {
  return (
    <div className="min-h-screen px-4 py-8 bg-gray-900 text-white">
      <header className="text-center mb-10">
        <h1 className="text-4xl font-bold">Ravulakolla Sanjana</h1>
        <p className="text-gray-400 mt-2">Aspiring Developer | Python | Flask</p>
      </header>

      <section className="flex flex-col items-center mb-12">
        <img
          src="/images/Profile.jpg"
          alt="Profile"
          className="rounded-full w-32 h-32 mb-4 border-4 border-gray-700 object-cover"
        />
        <p className="text-center max-w-xl text-gray-300">
          Hello! I'm Sanjana - a passionate developer focused on building efficient and scalable we applications. I specialized in python and Flask, and enjoy working on data-driven projects that solve real-world problems.With a strong foundation in software development and data analytics.
        </p>
        <a href="/resume.pdf" download className="mt-4 text-blue-400 hover:underline">
          Resume
        </a>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-6 text-center">My Projects</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project, idx) => (
            <div key={idx} className="bg-gray-800 rounded-xl shadow-md p-4">
              <img
                src={project.image}
                alt={project.title}
                className="rounded-md h-40 w-full object-cover mb-3"
              />
              <h3 className="text-xl font-bold">{project.title}</h3>
              <p className="text-gray-400 mb-2">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline"
              >
                View on GitHub
              </a>
            </div>
          ))}
        </div>
      </section>

      <Contact />

      <footer className="mt-16 text-center text-gray-500 text-sm">
        <p>© 2025 Ravulakolla Sanjana — All rights reserved</p>
        <div className="flex justify-center space-x-4 mt-2">
          <a href="https://github.com/sanjana22-opp" className="hover:underline">
            GitHub
          </a>
          <a href="https://linkedin.com/in/sanjana-ravulakola/" className="hover:underline">
            LinkedIn
          </a>
        </div>
      </footer>
    </div>
  );
};

export default App;
