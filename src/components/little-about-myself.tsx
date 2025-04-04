import Link from "next/link";
//import { PropsWithChildren } from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsGithub, BsLinkedin } from "react-icons/bs";
//import Link from "next/link";
import { PropsWithChildren, ReactElement, ReactNode } from "react";
import { BsArrowUpRight } from "react-icons/bs";



type Props = PropsWithChildren;

type ExperienceType = {
  orgName: string;
  orgHref: string;
  position: string;
  from: string;
  to: string;
  desc: ReactNode;
  techStack: string[];
};

type Tech = {
  name: string;
  href: string;
  desc: string;
};

type Tool = {
  name: string;
  href: string;
  desc: string;
};


const MyExperience: ExperienceType[] = [
  {
    orgName: "GfK - An NIQ Company",
    orgHref: "https://www.gfk.com/home",
    position: "Software Test Engineer",
    from: "October 2021",
    to: "Present",
    desc: (
      <>
        <ul>
          <li className="ml-5 mb-2 list-disc">
            Setting up test automation frameworks for new products being introduced.
          </li>
          <li className="ml-5 mb-2 list-disc">
            Functional, regression, performance, and exploratory testing for quality improvement.
          </li>
          <li className="ml-5 mb-2 list-disc">
            Continuously updating and maintaining test documentation and creating detailed plans, and proposing software solutions.
          </li>
          <li className="ml-5 mb-2 list-disc">
            Designing and executing test scenarios to ensure usability and functionality.
          </li>
          <li className="ml-5 mb-2 list-disc">
            Automating tasks (API, UI, database) for improved efficiency and accuracy.
          </li>
        </ul>
        <br />
        <br />
      </>
    ),
    techStack: ["Playwright", "Protractor", "Cucumber", "Miro", "Figma", "Typescript", "Swagger API"],
  },
  {
    orgName: "Auriga Solutions",
    orgHref: "https://aurigasolutions.com/",
    position: "Software Quality Assurance Engineer",
    from: "October 2017",
    to: "September 2021",
    desc: (
      <>
        PROJECT: GORELO
        <br />
        Worked on a Managed Service Provider application targeting US market. The MSP application named Gorleo (www.gorelo.io) is a complex system in terms of business model/flow with many intense features which may include Asset requisition, Contracts and Billing, RMM, etc.
        <ul>
          <li className="ml-5 mb-2 list-disc">
            Web Automation using Selenium and NUnit
          </li>
          <li className="ml-5 mb-2 list-disc">
            Implementation of Selenium Framework
          </li>
          <li className="ml-5 mb-2 list-disc">
            Troubleshooting and debugging
          </li>
          <li className="ml-5 mb-2 list-disc">
            RMM testing and documentation
          </li>
          <li className="ml-5 mb-2 list-disc">
            Microsoft Azure Devops
          </li>
        </ul>
        <br />
        <br />

        PROJECT: COLDWELL BANKER BAIN
        <br />
        Worked on a Real Estate application targeting US market. The application named CBBAIN (https://www.coldwellbanker.com/) had multiple child applicaton that consisted of an intense business flow w.r.t indiviual entities and teams/groups.
        <ul>
          <li className="ml-5 mb-2 list-disc">
            Coordinating with Software Developers and Project Managers and executing feature specific Test
            Cases.

          </li>
          <li className="ml-5 mb-2 list-disc">
            Coordinating with Software Developers and Project Managers and executing feature specific Test
            Cases.

          </li>
          <li className="ml-5 mb-2 list-disc">
            Performing different Functional and Non-Functional Testing techniques
          </li>
          <li className="ml-5 mb-2 list-disc">
            Created detailed test cases for functionality, regression, and release acceptance testing

          </li>
          <li className="ml-5 mb-2 list-disc">
            Created detailed test cases for functionality, regression, and release acceptance testing

          </li>
        </ul>
        <br />
      </>

    ),
    techStack: ["Test Planning", "C#", "Swagger", "Selenium", "NUnit", "AzureDevOps"],
  },
  {
    orgName: "Deloitte.",
    orgHref: "https://www2.deloitte.com/us/en.html",
    position: "Associate Risk Advisory Consultant",
    from: "July 2017",
    to: "October 2017",
    desc: (
      <>
        IT Auditor

        <ul>
          <li className="ml-5 mb-2 list-disc">
            Thatta Cement
          </li>
          <li className="ml-5 mb-2 list-disc">
            Summit Bank
          </li>
          <li className="ml-5 mb-2 list-disc">
            Etisalat
          </li>
        </ul>
        <br />
      </>
    ),
    techStack: ["Quality Control", "Policy and Compliance", "Documentation"],
  },
  {
    orgName: "Zara Mobility Services",
    orgHref: "https://pk.linkedin.com/company/zara-mobility-services",
    position: "Desktop and Web Application developer - Intern",
    from: "June 2016",
    to: "Aug 2016",
    desc: (
      <>
        PROJECT: MOBILELINK US


        <ul>
          <li className="ml-5 mb-2 list-disc">
            As part of my internship program, I Worked as a Junior Web and Desktop Application Developer.
          </li>
          <li className="ml-5 mb-2 list-disc">
            Played part in different Web and Desktop Data Handling applications.
          </li>
        </ul>
      </>
    ),
    techStack: [".NET Framework", "SQL", "MySQL"],
  },
];

const Technologies: Tech[] = [
  {
    name: "Protractor",
    href: "https://www.protractortest.org/",
    desc: "Obsolete now but hands on experience",
  },
  {
    href: "https://playwright.dev/",
    name: "Playwright",
    desc: "Current framework that am cleaning my hands on",
  },
  {
    href: "https://swagger.io/",
    name: "Swagger",
    desc: "My goto for API testing",
  },
  { href: "https://www.mysql.com/", name: "MySQL", desc: "Good old RDBMS" },
  {
    href: "https://www.postgresql.org/",
    name: "Postgresql",
    desc: "Actively working on it",
  },
  {
    href: "https://www.selenium.dev/",
    name: "Selenium",
    desc: "Goto for ui automation for everyone.",
  },
  {
    href: "https://www.testrail.com/",
    name: "Testrail",
    desc: "Goto for Test Management.",
  },
  {
    href: "https://kubernetes.io/",
    name: "kubernetes - CI/CD deployment",
    desc: "Deployment through Kubernetees flux files.",
  },
  {
    href: "https://octopus.com/",
    name: "Octopus deployment",
    desc: "Used for deployment when on TFS",
  },
];

const UsedTools: Tool[] = [
  {
    name: "Visual Studio Code",
    href: "https://code.visualstudio.com/",
    desc: "My All time favourite text editor with super powers.",
  },
  {
    name: "Figma",
    href: "https://www.figma.com/",
    desc: "Figma for turning UI/UX design into real Product",
  },
  {
    name: "GitHub",
    href: "https://github.com/",
    desc: "For versioning my code, transfer my code to remote and to share it with other devs",
  },
  {
    name: "Miro",
    href: "https://miro.com/",
    desc: "Best visual planning for transperency",
  },
  {
    name: "Jira",
    href: "https://www.atlassian.com/software/jira/",
    desc: "Goto for story mapping, bugtracking and many more. ",
  },
];


const Cert: Tool[] = [
  {
    name: "Project Management Professional ",
    href: "https://www.linkedin.com/learning/certificates/aa9f3ac1298d8682755552f97659707b4abe2874c07c5eaedcd492884520ca79?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3B4FQ7MluKRHGRXjG%2FyLOvGQ%3D%3D",
    desc: "Atlassian Agile Project Management Professional Certificate",
  },
  {
    name: "Software Testing Professional",
    href: "https://www.linkedin.com/learning/certificates/0277b7cb5d5bedb693047454623497b8bcc7a5a6cb6e0f233d35aa3880796daa?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3B4FQ7MluKRHGRXjG%2FyLOvGQ%3D%3D",
    desc: "LambdaTest Software Testing Professional Certificate",
  },
  {
    name: "English Language Proficency",
    href: "",
    desc: "PTE Cerified",
  },
  {
    name: "Digital Tansformation",
    href: "https://www.linkedin.com/learning/certificates/c10eb0beca87b16a82c627d492b334375ef809f48c9a5565b5b30fdde0955ff0?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3B4FQ7MluKRHGRXjG%2FyLOvGQ%3D%3D",
    desc: "Effectively Leading Digital Transformation",
  }
];


const Proj: Tool[] = [
  {
    name: "Abrahamic Timeline ",
    href: "https://abrahamic-timeline.netlify.app/",
    desc: "Explore the journey of faith through time, from the origins of humanity with Prophet Adam",
  },
  {
    name: "Clothing Static Site",
    href: "https://kap-pk.netlify.app",
    desc: "Clothing Site for KAP",
  },
  {
    name: "Hotel Business Site",
    href: "https://chogho-sar.netlify.app",
    desc: "Hotel Site for first point of contact",
  },
  {
    name: "Pottery Startup business",
    href: "https://peacheslimes.netlify.app/",
    desc: "Pottery site for placing orders",
  }
];

export default function Experience({ children }: Props) {
  return (

    <section className="my-8">
      <div className="flex flex-col gap-5 items-center justify-center w-full h-full mb-10">
        <div className="flex flex-col gap-2 text-7xl mb-10">
          <p className="font-space text-slate-500">Heya,</p>
          <div className="flex flex-wrap gap-3 md:gap-5 items-center">
            <p className="font-space text-slate-500 line-clamp-6 text-lg md:text-2xl lg:text-3xl">
              I&apos;m
            </p>
            <h3 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white font-space font-bold line-clamp-7">
              <div className="content">
                <h3 className="text" data-text="Ahsan Uddin">Ahsan Uddin</h3>
              </div>
            </h3>
          </div>

          <p className="font-space text-slate-500">Software Test Engineer.</p>
        </div>
      </div>
      {/* ==============================DP========================================== */}
      <div className="flex flex-col gap-5 items-center justify-center w-full h-full mb-10">
        <div className="flex gap-5 items-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={"https://avatars.githubusercontent.com/u/20052056?s=400&u=e1a799b96ad8684c6f2434eddde3ecfb50526e81&v=4"}
            alt="akshay-bharadva"
            className="w-32 rounded-full"
          />
        </div>
      </div>
      {/* ==================================LINKEDIN=================================== */}
      <div className="flex flex-col gap-5 items-center justify-center w-full h-full mb-10">
        <div className="flex gap-5">
          {/* <Link
            className="mr-2 p-2 text-2xl text-white justify-center items-center gap-1 hover:bg-zinc-700 transition-all rounded-lg"
            href="https://github.com/akshay-bharadva"
            rel="noreferrer"
            target="_blank"
          >
            <BsGithub />
          </Link> */}
          <Link
            className="mr-2 p-2 text-2xl text-white justify-center items-center gap-1 hover:bg-zinc-700 transition-all rounded-lg"
            href="https://www.linkedin.com/in/ahsanud/"
            rel="noreferrer"
            target="_blank"
          >
            <BsLinkedin />
          </Link>
          <Link
            className="mr-2 p-2 text-2xl text-white justify-center items-center gap-1 hover:bg-zinc-700 transition-all rounded-lg"
            href="mailto: syed.ahsan934@gmail.com"
            rel="noreferrer"
            target="_blank"
          >
            <AiOutlineMail />
          </Link>
        </div>
      </div>
      {/* ==========================================BRIEFING ABOUT ME===================================== */}
      <div className="flex gap-10 items-center justify-between">
        <div className="">
          {/* 
          <h2 className="text-3xl font-bold text-white font-space mb-4">
            Akshay Bharadva <small className="text-sm">(He/Him)</small>
          </h2>
           */}
          <p className="font-space mb-2">
            Computer scientist who loves solving complex
            problems. I enjoy learning new technologies and collaborating with
            other developers to make products a reality. I also enjoy
            open-source, and despite having a full-time job, I devote time to
            exploring open-source projects and studying their tech stack and
            coding conventions. My expertise includes Manual, Automation,
            Functional, Non-Functional and GUI testing for Web
            and Native Apps. I further hold a very good command on Jira and MS Azure for bug tracking, Story creation
            with combination of Miro Board for PI planning under Agile Framework.
          </p>
          <p className="font-space">
            Fun fact: I always try to create custom xpaths regardless if the test ids are provided, deriving complex custom xpaths are always fun for me rather than using boring ids, which is wrong obviously. <span className="text-primary-400">#LetsMakeThingsMoreComplicated</span>
          </p>
        </div>
      </div>
      {/* ==============================EXPERIENCE========================================== */}
      <br></br>
      <br></br>
      <br></br>
      <h2 className="text-3xl font-bold text-white font-space mb-4">
        Experience
      </h2>
      <div className="relative pl-5 py-10 flex flex-col after:content-[''] after:absolute after:w-[1px] after:h-full after:bg-slate-100 after:top-0">
        {MyExperience.map((experience) => (
          <div
            key={experience.position}
            className="pl-10 relative mb-10 last-of-type:mb-0 group"
          >
            <span className="absolute w-5 h-5 rounded-full border-2 bg-current top-7 -left-2.5 group-hover:text-primary-500 group-hover:border-primary-500 transition z-20" />
            <Link
              href={experience.orgHref}
              className=""
              rel="noopener noreferrer nofollow"
              target="_blank"
            >
              <p className="font-space">
                {experience.from} - {experience.to}
              </p>
              <h3 className="text-xl text-white font-space mb-0 group-hover:text-primary-500 transition">
                {experience.orgName} <BsArrowUpRight className="inline-block" />
              </h3>
            </Link>
            <p className="font-space">{experience.position}</p>
            <p className="font-space my-1">
              {experience.techStack.map((tech) => (
                <small
                key={tech}
                className="inline-block rounded-full bg-slate-400/20 px-2 py-1 text-xs mr-3 mb-2"
              >
                {tech}
              </small>
              ))}
            </p>
            <div className="font-space">{experience.desc}</div>
          </div>
        ))}
        <p className="mb-2 font-space"></p>
      </div>
      {/* =======================================================Technologies==================================================  */}
      <br></br>
      <br></br>
      <br></br>
      <h2 className="text-3xl font-bold text-white font-space mb-4">
        Tech Stack
      </h2>
      <div>
        {Technologies.map((tech) => (
          <p className="mb-2 font-space" key={tech.href}>
            <a
              href={tech.href}
              rel="noreferrer"
              target="_blank"
              className="text-primary-400 hover:text-primary-600 transition"
            >
              <span>
                {tech.name} <BsArrowUpRight className="inline" />
              </span>
            </a>
            : {tech.desc}
          </p>
        ))}
        <p className="mb-2 font-space">and many more to get the work done.</p>
      </div>
      {/* =======================================================Tools==================================================  */}
      <br></br>
      <br></br>
      <br></br>
      <h2 className="text-3xl font-bold text-white font-space mb-4">Tools</h2>
      <div>
        {UsedTools.map((tech) => (
          <p className="mb-2 font-space" key={tech.href}>
            <a
              href={tech.href}
              rel="noreferrer"
              target="_blank"
              className="text-primary-400 hover:text-primary-600 transition"
            >
              <span>
                {tech.name} <BsArrowUpRight className="inline" />
              </span>
            </a>
            : {tech.desc}
          </p>
        ))}
        <p className="mb-2 font-space">and many more.</p>
      </div>
      {/* =======================================================Certifications==================================================  */}
      <br></br>
      <br></br>
      <br></br>
      <h2 className="text-3xl font-bold text-white font-space mb-4">Certifications</h2>
      <div>
        {Cert.map((tech) => (
          <p className="mb-2 font-space" key={tech.href}>
            <a
              href={tech.href}
              rel="noreferrer"
              target="_blank"
              className="text-primary-400 hover:text-primary-600 transition"
            >
              <span>
                {tech.name} <BsArrowUpRight className="inline" />
              </span>
            </a>
            : {tech.desc}
          </p>
        ))}
      </div>

        {/* =======================================================Projects==================================================  */}
        <br></br>
      <br></br>
      <br></br>
      <h2 className="text-3xl font-bold text-white font-space mb-4">Personal Projects</h2>
      <div>
        {Proj.map((tech) => (
          <p className="mb-2 font-space" key={tech.href}>
            <a
              href={tech.href}
              rel="noreferrer"
              target="_blank"
              className="text-primary-400 hover:text-primary-600 transition"
            >
              <span>
                {tech.name} <BsArrowUpRight className="inline" />
              </span>
            </a>
            : {tech.desc}
          </p>
        ))}
      </div>
    </section>
  );
}
