
import React from 'react';

// Reusable Section Heading Component
const SectionHeading = ({ children }) => (
    <h2 className="text-4xl relative inline-block pb-2 mb-8 text-center md:text-left font-bold text-slate-900 section-heading">
        {children}
    </h2>
);

// Hero Section Component
const Hero = () => (
    <section id="hero" className="relative bg-gradient-to-br from-pink-500 to-purple-600 text-white py-24 px-6 text-center rounded-b-3xl shadow-lg">
        <div className="container mx-auto max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-4 animate-fade-in-down">
                Hi, I'm <span className="text-pink-200">Teresa Pahl (Tessa)</span>
            </h1>
            <p className="text-2xl md:text-3xl font-light mb-8 animate-fade-in-up">
                A Passionate Full Stack Developer
            </p>
            <p className="text-lg md:text-xl mb-10 opacity-90 animate-fade-in">
                Crafting robust and scalable web applications from front to back.
            </p>
            <a href="#projects" className="inline-block bg-white text-pink-600 hover:bg-pink-100 px-8 py-4 rounded-full text-lg font-semibold shadow-xl transition duration-300 transform hover:scale-105">
                View My Work
            </a>
        </div>
    </section>
);

// About Section Component
const About = () => (
    <section id="about" className="py-16 px-6 bg-white rounded-lg shadow-md mx-auto my-12 max-w-6xl">
        <div className="container mx-auto">
            <SectionHeading>About Me</SectionHeading>
            <div className="flex flex-col md:flex-row items-center md:space-x-12">
                <div className="md:w-1/3 mb-8 md:mb-0 flex justify-center">
                    <img src="../images/IMG_5071.JPG" alt="Teresa Pahl (Tessa) Profile" className="rounded-full shadow-lg border-4 border-pink-200 w-64 h-64 object-cover" />
                </div>
                <div className="md:w-2/3 text-lg leading-relaxed text-gray-700">
                    <p className="mb-4">
                        Hello!! I'm Teresa Pahl, but you can call me Tessa. I'm a dedicated Full Stack Developer with a knack for building dynamic, user-friendly, and efficient web applications. My journey in tech began with a curiosity for how things work, evolving into a passion for bringing ideas to life through code.
                    </p>
                    <p className="mb-4">
                        With a strong foundation in both front-end aesthetics and back-end logic, I thrive on creating seamless digital experiences. I enjoy tackling complex challenges and continuously learning new technologies to stay at the forefront of the ever-evolving web development landscape.
                    </p>
                    <p>
                        When I'm not coding, you can find me gaming, completing 1000 piece puzzles, or diving into a good book. I'm always open to new opportunities and collaborations, so feel free to reach out!!
                    </p>
                </div>
            </div>
        </div>
    </section>
);

// Skills Section Component
const Skills = () => (
    <section id="skills" className="py-16 px-6 bg-gray-50 rounded-lg shadow-md mx-auto my-12 max-w-6xl">
        <div className="container mx-auto">
            <SectionHeading>My Skills</SectionHeading>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                {/* Frontend Skills */}
                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                    <h3 className="text-2xl font-semibold text-pink-600 mb-4">Frontend</h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                        <li>HTML5, CSS3, JavaScript (ES6+)**</li>
                        <li>React.js, Vue.js</li>
                        <li>Tailwind CSS, Bootstrap</li>
                        <li>Responsive Design</li>
                        <li>UI/UX Principles</li>
                    </ul>
                </div>

                {/* Backend Skills */}
                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                    <h3 className="text-2xl font-semibold text-pink-600 mb-4">Backend</h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                        <li>Node.js, Express.js</li>
                        <li>RESTful APIs, GraphQL</li>
                        <li>Authentication & Authorization</li>
                        <li>WebSockets</li>
                    </ul>
                </div>

                {/* Databases & Tools */}
                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                    <h3 className="text-2xl font-semibold text-pink-600 mb-4">Databases & Tools</h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                        <li>MongoDB, PostgreSQL, MySQL</li>
                        <li>Git, GitHub</li>
                        <li>Docker, Docker Compose</li>
                        <li>AWS, Azure</li>
                        <li>Webpack, Babel</li>
                        <li>Jest, Supertest</li>
                        <li>Nginx, Winston</li>
                    </ul>
                </div>

                {/* AI / Generative AI Skills */}
                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                    <h3 className="text-2xl font-semibold text-pink-600 mb-4">AI / Generative AI</h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                        <li>Google Gemini API Integration</li>
                        <li>Conversational AI Logic</li>
                        <li>Prompt Engineering</li>
                        <li>Natural Language Processing (NLP) Concepts</li>
                    </ul>
                </div>

                {/* Development Practices / Other Skills */}
                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                    <h3 className="text-2xl font-semibold text-pink-600 mb-4">Development Practices</h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                        <li>Full Stack Development</li>
                        <li>API Design & Integration</li>
                        <li>Containerization</li>
                        <li>Version Control (Git)</li>
                        <li>Agile Methodologies</li>
                        <li>Problem Solving & Debugging</li>
                    </ul>
                </div>

            </div>
        </div>
    </section>
);

// Project Card Component
const ProjectCard = ({ title, description, technologies, liveDemoLink, githubRepoLink }) => (
    <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 flex flex-col">
        <h3 className="text-2xl font-semibold text-pink-700 mb-3">{title}</h3>
        <p className="text-gray-700 mb-4 flex-grow">{description}</p>
        <div className="mb-4">
            {technologies.map((tech, index) => (
                <span key={index} className="inline-block bg-pink-100 text-pink-800 text-xs font-semibold px-2.5 py-0.5 rounded-full mr-2 mb-2">
                    {tech}
                </span>
            ))}
        </div>
        <div className="flex space-x-4 mt-auto">
            {liveDemoLink && (
                <a href={liveDemoLink} target="_blank" rel="noopener noreferrer" className="inline-block bg-pink-600 text-white px-5 py-2 rounded-lg hover:bg-pink-700 transition duration-300 shadow-md">
                    Live Demo
                </a>
            )}
            {githubRepoLink && (
                <a href={githubRepoLink} target="_blank" rel="noopener noreferrer" className="inline-block bg-gray-700 text-white px-5 py-2 rounded-lg hover:bg-gray-800 transition duration-300 shadow-md">
                    GitHub Repo
                </a>
            )}
        </div>
    </div>
);

// Projects Section Component
const Projects = () => {
    const projects = [
        {
            title: "AI Mock Interviewer",
            description: "A collaborative AI-powered application designed to boost interview confidence. It provides realistic, role-specific interview simulations, dynamically adapts questions based on user input, and offers personalized, constructive feedback after a set number of questions. Built with a React frontend and Node.js/Express backend, powered by Google Gemini.",
            technologies: ["React", "Node.js", "Express.js", "Google Gemini API", "Jest", "Supertest", "Azure"],
            githubRepoLink: "https://github.com/VikingQueen85/Mission-03"
        },
        {
            title: "Amara: AI Insurance Consultant",
            description: "An AI-powered virtual insurance consultant that guides users through a conversational needs assessment to recommend the most suitable car insurance policies. Leveraging Google Gemini, Amara applies dynamic questioning and rule-based logic to provide tailored, reasoned recommendations for Mechanical Breakdown, Comprehensive, and Third-Party Car Insurance.",
            technologies: ["React", "Node.js", "Express.js", "Google Gemini API", "Docker", "Nginx", "Winston"],
            githubRepoLink: "https://github.com/VikingQueen85/Mission-04"
        }
    ];

    return (
        <section id="projects" className="py-16 px-6 bg-white rounded-lg shadow-md mx-auto my-12 max-w-6xl">
            <div className="container mx-auto">
                <SectionHeading>My Projects</SectionHeading>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {projects.map((project, index) => (
                        <ProjectCard key={index} {...project} />
                    ))}
                </div>
            </div>
        </section>
    );
};

// Contact Section Component
const Contact = () => {
    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData.entries());

        console.log("Form submitted with data:", data);

        try {
            alert("Thank you for your message! I'll get back to you soon.");
            e.target.reset();
        } catch (error) {
            console.error('Error submitting form:', error);
            alert("There was an error sending your message. Please try again later.");
        }
    };

    return (
        <section id="contact" className="py-16 px-6 bg-gray-50 rounded-lg shadow-md mx-auto my-12 max-w-6xl">
            <div className="container mx-auto">
                <SectionHeading>Get In Touch</SectionHeading>
                <div className="flex flex-col md:flex-row items-center md:space-x-12">
                    <div className="md:w-1/2 mb-8 md:mb-0 text-lg text-gray-700">
                        <p className="mb-4">
                            I'm always excited to connect with fellow developers, discuss new opportunities, or just chat about technology. Feel free to reach out through the form or connect with me on social media.
                        </p>
                        <p className="mb-2"><strong>Email:</strong>{' '}<a href="mailto:missrn1985@gmail.com" className="text-pink-600 hover:underline">missrn1985@gmail.com</a></p>
                        <p className="mb-2"><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/teresa-pahl" target="_blank" rel="noopener noreferrer" className="text-pink-600 hover:underline">linkedin.com/in/teresapahl</a></p>
                        <p><strong>GitHub:</strong> <a href="https://github.com/VikingQueen85" target="_blank" rel="noopener noreferrer" className="text-pink-600 hover:underline">github.com/teresapahl</a></p>
                    </div>
                    <div className="md:w-1/2 w-full">
                        <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md">
                            <div className="mb-4">
                                <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Name</label>
                                <input type="text" id="name" name="name" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-pink-500" placeholder="Your Name" required />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email</label>
                                <input type="email" id="email" name="email" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-pink-500" placeholder="your.email@example.com" required />
                            </div>
                            <div className="mb-6">
                                <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">Message</label>
                                <textarea id="message" name="message" rows="5" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-pink-500" placeholder="Your message..." required></textarea>
                            </div>
                            <div className="flex items-center justify-between">
                                <button type="submit" className="bg-pink-600 hover:bg-pink-700 text-white font-bold py-2 px-6 rounded-lg focus:outline-none focus:shadow-outline transition duration-300 shadow-md">
                                    Send Message
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

// Main App Component
const App = () => {
    return (
        <div className="antialiased">
            {/* Header */}
            <header className="bg-white shadow-sm py-4 px-6 fixed w-full z-50 rounded-b-lg">
                <nav className="container mx-auto flex justify-between items-center">
                    <a href="#hero" className="text-2xl font-bold text-pink-600 hover:text-pink-700 transition duration-300">Teresa Pahl (Tessa)</a>
                    <ul className="flex space-x-6">
                        <li><a href="#about" className="text-gray-600 hover:text-pink-600 font-medium transition duration-300">About</a></li>
                        <li><a href="#skills" className="text-gray-600 hover:text-pink-600 font-medium transition duration-300">Skills</a></li>
                        <li><a href="#projects" className="text-gray-600 hover:text-pink-600 font-medium transition duration-300">Projects</a></li>
                        <li><a href="#contact" className="text-gray-600 hover:text-pink-600 font-medium transition duration-300">Contact</a></li>
                    </ul>
                </nav>
            </header>

            <main className="pt-20">
                <Hero />
                <About />
                <Skills />
                <Projects />
                <Contact />
            </main>

            {/* Footer */}
            <footer className="bg-gray-800 text-white py-8 px-6 text-center rounded-t-lg">
                <div className="container mx-auto">
                    <p>&copy; 2025 Teresa Pahl (Tessa). All rights reserved.</p>
                    <div className="flex justify-center space-x-6 mt-4">
                        <a href="https://linkedin.com/in/teresapahl" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-pink-400 transition duration-300">LinkedIn</a>
                        <a href="https://github.com/VikingQueen85" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-pink-400 transition duration-300">GitHub</a>
                        <a href="mailto:tessa.pahl@example.com" className="text-gray-400 hover:text-pink-400 transition duration-300">Email</a>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default App;