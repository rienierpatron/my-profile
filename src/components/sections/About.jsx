import { RevealOnScroll } from "../RevealOnScroll";
 
export const About = () => {
  const languages = [
    "PHP",
    "Javascript",
    "MySQL",
    "HTML5",
    "CSS",
    "MongoDB",
    "Redis",
    "PostgreSQL"
  ];
  const frameworks = ["CodeIgniter", "Yii", "Laravel", "NodeJS", "ReactJS", "Fastify", "NextJS"];
  const others = ["RESTful APIs", "AWS", "Git", "Jira", "Agile Development", "Sentry", "Cloudflare", "Stripe", "WhatsApp", "RabbitMQ", "QuickBooks API", "HubSpot", "Salesforce", "MindBody", "Line", "Wordpress", "Customer Support"];
 
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            About Me
          </h2>
          <div className="rounded-xl p-8 border border-white/10 hover:-translate-y-1 transition-all">
            <p className="text-gray-300 mb-6">
              I'm a software engineer with 10+ years of experience in web development, specializing in scalable, full-stack applications. I started with PHP and have expanded my skills to JavaScript—using Node.js and React.js to build clean, reliable solutions that deliver great user experiences.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Languages</h3>
                <div className="flex flex-wrap gap-2">
                  {languages.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Frameworks</h3>
                <div className="flex flex-wrap gap-2">
                  {frameworks.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Others</h3>
                <div className="flex flex-wrap gap-2">
                  {others.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
 
          <div className="grid grid-cols-1 md:grid-cols-1 gap-6 mt-8">
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">🏫 Education</h3>
              <div className="text-2xl">Lipa City Colleges</div>
              <div>
                <strong>Bachelor of Science in Computer Science</strong> (2008-2012)
              </div>
              <div className="text-xl">Cum Laude</div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};