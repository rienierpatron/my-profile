import { RevealOnScroll } from "../RevealOnScroll";
 
export const Work = () => {
  return (
    <section
      id="work"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Work Experiences
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <h3 className="text-3xl font-bold mb-2 text-blue-400 hover:text-blue-300 transition-colors">
                <a
                  href="https://chaaat.io"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  Chaaat.io
                </a>
              </h3>
              <h4 className="text-2xl font-medium mb-2">Full Stack Developer</h4>
              <h5 className="font-medium mb-2">August 2022 - Present</h5>
              <p className="text-gray-400 mb-4">
                Responsible in developing and maintaining Chaaat website, a campaign management and broadcast sending web portal, mainly using NodeJS and ReactJS for development. Using WhatsApp API (provided by 3rd party - UIB). Also, part of the development team for Gymie.io, a workout program management application, including web portal for the coaches/PT and APIs for the mobile app.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["React", "Node.js", "AWS", "RabbitMQ", "MySQL", "Cloudflare", "Redis", "Fastify", "NextJS", "HubSpot", "Salesforce", "MindBody", "Line", "WhatsApp", "Stripe"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <h3 className="text-3xl font-bold mb-2 text-blue-400 hover:text-blue-300 transition-colors">
                <a
                  href="https://www.b2be.com/"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  B2BE
                </a>
              </h3>
              <h4 className="text-xl font-medium mb-2">Senior Software Engineer</h4>
              <h5 className="font-medium mb-2">March 2018 - August 2022</h5>
              <p className="text-gray-400 mb-4">
                Responsible in maintaining legacy portals and developing new solutions for clients (using customized framework developed using CodeIgniter 3) and Javascript. Also handling support for existing customers. 
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["PHP", "MySQL", "Javascript", "CodeIgniter", "Wordpress", "Customer Support"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <h3 className="text-3xl font-bold mb-2 text-blue-400 hover:text-blue-300 transition-colors">
                <a
                  href="https://www.b2be.com/"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  Circulus Education
                </a>
              </h3>
              <h4 className="text-xl font-medium mb-2">PHP Developer</h4>
              <h5 className="font-medium mb-2">November 2017 - March 2018</h5>
              <p className="text-gray-400 mb-4">
                Responsible for developing / maintaining an LMS web application. Handled frontend and backend development for development using PHP and a customized framework for the business, MySQL for the data storage. Also handled the remake of the marketing website using WordPress. Even part of the support team for clients.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["PHP", "MySQL", "Javascript", "Wordpress", "Customer Support"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <h3 className="text-3xl font-bold mb-2 text-blue-400 hover:text-blue-300 transition-colors">
                <a
                  href="https://emapta.com/"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  EMAPTA
                </a>
              </h3>
              <h4 className="text-xl font-medium mb-2">PHP Developer</h4>
              <h5 className="font-medium mb-2">March 2017 – November 2017</h5>
              <p className="text-gray-400 mb-4">
                Responsible for developing / maintaining an LMS web application for an Australian client (Circulus Education). Handled frontend and backend development for development using PHP and a customized framework for the business, MySQL for the data storage. Also handled the remake of the marketing website using Wordpress. Even part of the support team for clients.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["PHP", "MySQL", "Javascript", "Wordpress", "Customer Support"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <h3 className="text-3xl font-bold mb-2 text-blue-400 hover:text-blue-300 transition-colors">
                <a
                  href="https://oss.hgs.cx/"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  HGS Offshore Staffing Solutions (Former Diversify Offshore Staffing Solutions)
                </a>
              </h3>
              <h4 className="text-xl font-medium mb-2">PHP Developer</h4>
              <h5 className="font-medium mb-2">April 2016 - January 2017</h5>
              <p className="text-gray-400 mb-4">
                Responsible for developing / maintaining web applications for an Australian client (AMBS Offshore Staffing and Digital Marketing and Kidsoft). Handled frontend and backend development using PHP and a customized framework for the development, and PostgreSQL for the storage.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["PHP", "PostgreSQL", "Javascript", "CSS", "Customer Support"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <h3 className="text-3xl font-bold mb-2 text-blue-400 hover:text-blue-300 transition-colors">
                <a
                  href="https://tagcash.com/"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  Tagcash Ltd. Inc. (Former Zeresoft Software Development and Services)
                </a>
              </h3>
              <h4 className="text-xl font-medium mb-2">Web Developer</h4>
              <h5 className="font-medium mb-2">May 2012 - April 2016</h5>
              <p className="text-gray-400 mb-4">
                Responsible for developing / managing web applications under the TAG network. Handled both frontend and backend development using PHP, jQuery, CSS and Yii Framework for the development and, MySQL and MongoDB for the storage. Also handled restful APIs for tagbond.com.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["PHP", "MySQL", "MongoDB", "Yii", "Javascript", "CSS", "Customer Support"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};