import { motion, useScroll } from "framer-motion";

export const About = (props) => {
  return (
    <>
      Hi, I'm Arshad Ali, a passionate Web Developer. My skills extend beyond
      Web Development to include Graphic Designing, Excel, and Access
      Development.
      <br /> <br />
      My work experience spans various Industries, from developing Full-Stack
      Web Apps, Portfolio Websites, Marketing Materials, Profile Brochures,
      creating Spreadsheets, generating Reports, Organizing and Managing Data to
      Freelancing.
      <br /> <br />
      My tailored solutions and proven track record of delivering exceptional
      results in a competitive digital landscape make me an asset to any
      organization looking for a dynamic IT professional.
    </>
  );
};

export const Experience = (props) => {
  const Details = ({ position, company, website, time, work, skills }) => {
    return (
      <li className="mx-auto md:flex pt-2 pb-2 md:pt-5 md:pb-5 hover:bg-white/25">
        <div className="w-full md:w-[20%] text-[0.7rem] md:text-[1rem] text-white/80 md:flex md:justify-center md:mt-2">
          {time}
        </div>
        <div className="w-full md:w-[80%] md:ml-4">
          <h3 className="capitalize">
            {position}&nbsp;
            <a href={website} target="_blank" className="text-cyan-400">
              ‣ {company}
            </a>
          </h3>
          <p className="text-[0.65rem] md:text-[1rem] text-white/75">{work}</p>
          <p>
          {skills.map((skill) => {
            return (
              <span className="text-[0.65rem] md:text-[1rem]">• {skill} </span>
            )
          })}
          </p>
        </div>
      </li>
    );
  };
  
  return (
    <div className="mx-auto">
      <ul className="mt-20 md:mt-32 lg:mt-60">
        <Details
          position="Web Developer"
          company="KNK Industrial Contractors"
          time="MAR 23 - Present"
          website="https://knkindustrialcontractors.com"
          work="Built a Portfolio website and profile brochure which effectively promoted the company's business, attracted new customers, and get contract works. This resulted in a great start to success for the organization."
          skills = {["HTML", "CSS", "JavaScript", "Figma"]}
        />
        <div className="mt-3 mb-3  w-full h-[1px] bg-white/50" />
        <Details
          position="Excel Expert | Access Developer | Graphics Designer"
          company="Agri Point Farm & Feeds"
          website="https://agripointfarmandfeeds.com"
          time="JUN 22 - FEB 23"
          location="Mumbai"
          work="Through my Excel skills, I organized data and generated insightful reports, empowering teams to make informed decisions and achieve their objectives. As an Access developer, I built an Inventory and Sales Management System that automated manual inventory methods, saving time and resources while improving efficiency, productivity, and profitability. Additionally, my graphic design expertise has been utilized to create visually appealing marketing and promotional materials across various projects."
          skills={["Google Sheets", "MS Access", "Photoshop", "Illustrator"]}
        />
        <div className="mt-3 mb-3  w-full h-[1px] bg-white/50" />
        <Details
          position="Web Developer"
          company="KNK Builders & Developers"
          website="https://knkbuildersanddevelopers.com"
          time="SEP 21 - MAY 22"
          location="Chiplun"
          work="I designed, built, deployed, and maintained websites and web applications tailored to the organization's needs, enhancing their online presence, attracting and retaining customers, and staying relevant in the competitive digital landscape."
          skills={["HTML / CSS / JS", "Python-Django", "PostgreSQL", "AWS"]}
        />
      </ul>
    </div>
    /*
        Web Developer @ KNK Industrial Contractors
        MAR 23 - Present | Chiplun

        Excel Expert @ Agri Point Farm & Feeds
        DEC 22 - FEB 22 | Mumbai

        Access Developer @ Agri Point Farm & Feeds
        SEP 22 - NOV 22 | Chiplun

        Graphics Designer @ Agri Point Farm & Feeds
        JUN 22 - AUG 22 | Chiplun

        Web Developer @ KNK Builders & Developers
        SEP 21 - MAY 22 | Chiplun
      */

    /*
      SKILLS
        HTML CSS JavaScript | Bootstrap Tailwind MaterializeCSS | ReactJS
        Python - Django Flask
        MySQL PostrgeSQL ORM
        Git Github
        AWS EC2 ElasticBeanStalk
        Figma Photoshop Illustrator
        MS Access Google Sheets
    */
  );
};

export const Education = (props) => {
  const Details = ({ name, course, grade, year }) => {
    return (
      <li className="pt-2 pb-2 md:pt-5 pb-5 hover:bg-white/25">
        <div className="md:flex">
          <div className="md:w-[20%] text-white/75 md:text-center">{year}</div>
          <div className="md:w-[80%]">
            <h3 className="flex justify-between">
              <span className="text-cyan-400">{course}</span>
              <span className="text-white/75">{grade}</span>
            </h3>
            <p className="text-white/60">{name}</p>
          </div>
        </div>
      </li>
    );
  };
  return (
    <ul className="">
      <Details
        name="Dapoli Urban Bank Senior Science College, Dapoli"
        course="B.Sc Computer Science"
        year="2021"
        grade="78 %"
      />
      <div className="mt-3 mb-3  w-full h-[1px] bg-white/50" />
      <Details
        name="Dnyandeep College of Commerce & Science, Dapoli"
        course="H.S.C"
        year="2018"
        grade="62.4 %"
      />
      <div className="mt-3 mb-3  w-full h-[1px] bg-white/50" />
      <Details
        name="U.A. Dalvi English Medium High School, Dapoli"
        course="S.S.C"
        year="2016"
        grade="75.3 %"
      />
    </ul>
    /*
        B.Sc Computer Science
        2021 | Dapoli Urban Bank Senior Science College, Dapoli

        H.S.C
        2018 | Dnyandeep College of Commerce & Science, Dapoli

        S.S.C
        2016 | U.A. Dalvi English Medium High School, Dapoli
        */
  );
};
