"use client";

import { motion } from "framer-motion";
import { SkillBadge } from "@/components/skill-badge";

const education = [
  {
    degree: "Bachelor of Science in Electrical & Computer Engineering",
    institution: "Cornell University",
    period: "2024 - 2027",
    description: "Currently pursuing degree in Electrical & Computer Engineering",
  },
  {
    degree: "University of California Irvine",
    institution: "UCI",
    period: "2023 - 2024",
    description: "Transferred to Cornell University",
  },
  {
    degree: "High School Diploma",
    institution: "Foothill High School",
    period: "2018 - 2023",
    description: "GPA: 4.6 weighted",
  },
  {
    degree: "Engineering From 2D Sketch to 3D",
    institution: "Case Western Reserve University",
    period: "Additional Certification",
    description: "Certification in 3D design and engineering",
  },
];

const experience = [
  {
    title: "Lead Staff, Mentor, Coach",
    organization: "Tech X Robotics Internship",
    period: "2025",
    description:
      "Taught robotic fundamentals to 30+ students ranging from grade 3-8 in rigorous courses. Developed curriculum to optimize learning and workflow to prepare students for competitive season.",
  },
  {
    title: "Robotic Mentor",
    organization: "Orchard Hill Middle School Student Mentoring Internship",
    period: "2021 - 2024",
    description:
      "Worked with 100+ Orchard Hills Middle School students to prepare for the Vex Robotics Competition season. Facilitated scrimmages and traveled to signature events and world championships to assist students.",
  },
  {
    title: "Videographer, Editor, Employee",
    organization: "Friday Night Lights",
    period: "2022 - 2023",
    description:
      "Filmed and recorded athletes at the Tustin/Irvine Friday Night Lights football games. Used Canon EOS 7D camera to film action shots of athletes; edited using Da Vinci Resolve for social media.",
  },
  {
    title: "Video Tech Commissioner",
    organization: "Associated Student Body (ASB)",
    period: "2021 - 2022",
    description:
      "Led 6+ members in the Video Tech committee in the production of all videos displayed on campus. Created quality videos to be played during livestreams and live school events.",
  },
  {
    title: "Coach, Employee",
    organization: "Rolling Robotics",
    period: "2022 - 2024",
    description:
      "Coached and mentored 20+ students in an advanced private organization for VEX robotics. All teams coached were able to advance to the World Championships and rank high enough for elimination brackets.",
  },
  {
    title: "Intern/Mentor",
    organization: "TPSF Tustin Summer Academy Internship",
    period: "2021 - 2023",
    description:
      "Helped youth in our community, ages Kindergarten through 8th grade, learn fundamental concepts of engineering and design. Led 40+ students in a scrimmage match to display accumulated skills to local coaches and parents.",
  },
  {
    title: "Student",
    organization: "Regional Drone Program (Santa Ana Community College)",
    period: "2022",
    description:
      "Learned about and researched the advantage of drone-based careers and their influence on everyday applications. Practiced basic flight drills and learned the controls of basic drone flight.",
  },
];

const activities = [
  {
    title: "Executive Board, Social Media Chair",
    organization: "Cornell Society of Asian Scientists and Engineers (SASE)",
    period: "2025 - 2026",
    description:
      "Attend STEM Connect conference with 100+ tech corporations; network with 15,000+ students/professionals. Work to connect undergraduate STEM major students with tech corporations and accelerate career growth. Manage social media accounts for Cornell SASE boosting student engagement.",
  },
  {
    title: "Captain, Driver, Builder",
    organization: "Vex Robotics Team 6627A",
    period: "2017 - 2023",
    description:
      "Brainstormed, assembled, and competed at global competitive level against 50 countries and 20,000+ teams. Promoted program through our high performance to raise $10,000+ from companies such as RAISE3D/Code Ninjas.",
  },
  {
    title: "Member",
    organization: "Global Youth Missions, NPO",
    period: "2019 - 2021",
    description:
      "Attended monthly meetings to educate ourselves alongside impact global controversies such as Black Rights or poverty. Coordinated activities to support social/ethical controversies via small crafts and article readings to raise awareness.",
  },
];

const skills = [
  "Python",
  "AutoDesk Inventor",
  "Fusion 360",
  "Da Vinci Resolve",
  "Robotics",
  "VEX Robotics",
  "3D Design & Modeling",
  "Video Editing",
  "Mentoring & Coaching",
  "Leadership",
  "Team Management",
  "Social Media Management",
  "Curriculum Development",
  "Competitive Robotics",
];

const bio = `I'm Jay Jinwoo Yoon, an Electrical & Computer Engineering student at Cornell University with a passion for robotics, engineering, and mentorship. With over 6 years of competitive VEX Robotics experience, including placing 1st in the 2023 VEX Worlds Championships Opportunity Division, I've developed expertise in robot design, programming, and team leadership. I'm actively involved in Cornell SASE as Social Media Chair, connecting STEM students with tech corporations, and I've mentored 100+ students in robotics programs. My skills span from 3D design (AutoDesk Inventor, Fusion 360) to video editing (Da Vinci Resolve) and Python programming. I'm dedicated to building innovative solutions and helping the next generation of engineers succeed.`;

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export default function About() {
  return (
    <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="mx-auto max-w-4xl"
      >
        {/* Bio Section */}
        <motion.section variants={itemVariants} className="mb-16">
          <h1 className="mb-6 text-4xl font-bold tracking-tight">
            About Me
          </h1>
          <p className="text-lg leading-8 text-muted-foreground">{bio}</p>
        </motion.section>

        {/* Education Section */}
        <motion.section variants={itemVariants} className="mb-16">
          <h2 className="mb-6 text-3xl font-bold tracking-tight">Education</h2>
          <div className="space-y-6">
            {education.map((item, index) => (
              <div key={index} className="border-l-2 border-foreground pl-6">
                <h3 className="text-xl font-semibold">{item.degree}</h3>
                <p className="mt-1 text-muted-foreground">
                  {item.institution} • {item.period}
                </p>
                <p className="mt-2 text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Experience Section */}
        <motion.section variants={itemVariants} className="mb-16">
          <h2 className="mb-6 text-3xl font-bold tracking-tight">
            Experience
          </h2>
          <div className="space-y-6">
            {experience.map((item, index) => (
              <div key={index} className="border-l-2 border-foreground pl-6">
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="mt-1 text-muted-foreground">
                  {item.organization} • {item.period}
                </p>
                <p className="mt-2 text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Activities Section */}
        <motion.section variants={itemVariants} className="mb-16">
          <h2 className="mb-6 text-3xl font-bold tracking-tight">
            Activities
          </h2>
          <div className="space-y-6">
            {activities.map((item, index) => (
              <div key={index} className="border-l-2 border-foreground pl-6">
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="mt-1 text-muted-foreground">
                  {item.organization} • {item.period}
                </p>
                <p className="mt-2 text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Honors & Awards Section */}
        <motion.section variants={itemVariants} className="mb-16">
          <h2 className="mb-6 text-3xl font-bold tracking-tight">
            Honors & Awards
          </h2>
          <div className="space-y-6">
            <div className="border-l-2 border-foreground pl-6">
              <h3 className="text-xl font-semibold">
                VEX Worlds Championships: Opportunity Division 1st Place
              </h3>
              <p className="mt-1 text-muted-foreground">2023</p>
              <p className="mt-2 text-muted-foreground">
                Ranked 1st out of 80 international teams within our division
              </p>
            </div>
            <div className="border-l-2 border-foreground pl-6">
              <h3 className="text-xl font-semibold">
                VEX Worlds Championships: Amaze Award
              </h3>
              <p className="mt-1 text-muted-foreground">2023</p>
              <p className="mt-2 text-muted-foreground">
                Award received for having the most well-rounded, and top performing robot
              </p>
            </div>
            <div className="border-l-2 border-foreground pl-6">
              <h3 className="text-xl font-semibold">
                VEX Online Challenges: Promote Challenge Winner
              </h3>
              <p className="mt-1 text-muted-foreground">2023</p>
              <p className="mt-2 text-muted-foreground">
                Won 1st place amongst 10,000+ teams/participants
              </p>
            </div>
            <div className="border-l-2 border-foreground pl-6">
              <h3 className="text-xl font-semibold">
                VEX Robotics San Diego State Championship: Think Award
              </h3>
              <p className="mt-1 text-muted-foreground">2023</p>
              <p className="mt-2 text-muted-foreground">
                Awarded for having the most effective coding and programming capabilities amongst 40 state qualifying teams
              </p>
            </div>
            <div className="border-l-2 border-foreground pl-6">
              <h3 className="text-xl font-semibold">
                TUSD Film Festival: Commercial Contest Winner
              </h3>
              <p className="mt-1 text-muted-foreground">2023</p>
              <p className="mt-2 text-muted-foreground">
                Received an award for developing the most creative and well facilitated commercial film submission
              </p>
            </div>
            <div className="border-l-2 border-foreground pl-6">
              <h3 className="text-xl font-semibold">
                TUSD Film Festival: Best Editor Award
              </h3>
              <p className="mt-1 text-muted-foreground">2023</p>
              <p className="mt-2 text-muted-foreground">
                Award received for having the best editing ability and capabilities amongst other participants
              </p>
            </div>
          </div>
        </motion.section>

        {/* Skills Section */}
        <motion.section variants={itemVariants}>
          <h2 className="mb-6 text-3xl font-bold tracking-tight">Skills</h2>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <SkillBadge skill={skill} />
              </motion.div>
            ))}
          </div>
        </motion.section>
      </motion.div>
    </div>
  );
}

