/*
 * ============================================================
 *  EDIT THIS FILE to put in your group's real content.
 * ============================================================
 *
 *  Folder structure:
 *
 *  app/
 *  └── files/
 *      ├── member-1/
 *      │   ├── prelim/
 *      │   ├── midterm/
 *      │   └── finals/
 *      ├── member-2/
 *      │   ├── prelim/
 *      │   ├── midterm/
 *      │   └── finals/
 *      ├── member-3/
 *      │   ├── prelim/
 *      │   ├── midterm/
 *      │   └── finals/
 *      └── member-4/
 *          ├── prelim/
 *          ├── midterm/
 *          └── finals/
 *
 *
 *  HOA STRUCTURE:
 *
 *  PRELIM
 *    HOA 1-3  -> PDF onlyf
 *    HOA 4-5  -> PDF + YAML
 *
 *  MIDTERM
 *    HOA 6-10 -> PDF + YAML
 *
 *  FINALS
 *    HOA 11-15 -> PDF + YAML
 *
 * ============================================================
 */

const GROUP = {
  name: "Group Portfolio",
  course: "Automating Server Management",
  section: "CPE212-S2",
  tagline: "ADD YOUR TAGLINE HERE"
};



const prelimActivities = (n) => [1, 2, 3, 4, 5].map(i => ({
  title: `Hands-on Activity ${i}`,
  date: "July 16, 2026 - August 26, 2026",
  summary: `Basic setup, SSH, and Ansible introduction.`,
  pdf: `files/member-${n}/prelim/hoa-${i}.pdf`
}));

const midtermActivities = (n) => [6, 7, 8, 9, 10].map(i => ({
  title: `Hands-on Activity ${i}`,
  date: "September 1, 2026 - October 6, 2026",
  summary: `Ansible playbooks, roles, and advanced configuration management.`,
  pdf: `files/member-${n}/midterm/hoa-${i}.pdf`
}));

const finalsActivities = (n) => [11, 12, 13, 14, 15].map(i => ({
  title: `Hands-on Activity ${i}`,
  date: "October 8, 2026 - December 2026",
  summary: `Docker, containerization, and deployment`,
  pdf: `files/member-${n}/finals/hoa-${i}.pdf`
}));


// ============================================================
// MEMBER ITEMS
// ============================================================

const placeholderItems = (n) => ({

  // ----------------------------------------------------------
  // PRELIM
  // ----------------------------------------------------------

  prelimHoa: {
    summary: `Five hands-on activities from the Prelim period (HOA 1-5).`,
    activities: prelimActivities(n)
  },

  prelimExam: {
    date: "August 13, 2026",
    summary: `Basic Ansible setup and configuration.`,
    image: `files/member-${n}/prelim_skills_exam.png`,
    file: `files/member-${n}/prelim_skills_exam.pdf`
  },


  // ----------------------------------------------------------
  // MIDTERM
  // ----------------------------------------------------------

  midtermHoa: {
    summary: `Five hands-on activities from the Midterm period (HOA 6-10).`,
    activities: midtermActivities(n)
  },

  midtermExam: {
    date: "September 24, 2026",
    summary: `Applying Ansible concepts, roles, and playbooks to install and configure Prometheus`,
    image: `files/member-${n}/midterm_skills_exam.png`,
    file: `files/member-${n}/midterm_skills_exam.pdf`
  },


  // ----------------------------------------------------------
  // FINALS
  // ----------------------------------------------------------

  finalsHoa: {
    summary: `Five hands-on activities from the Finals period (HOA 11-15).`,
    activities: finalsActivities(n)
  },

  finalExam: {
    date: "October 8, 2026",
    summary: `Applying Ansible automation to deploy a Dockerized web page.`,
    image: `files/member-${n}/finals_skills_exam.png`,
    file: `files/member-${n}/finals_skills_exam.pdf`
  },


  // ----------------------------------------------------------
  // REFLECTION
  // ----------------------------------------------------------

  reflection: {
    summary: `My reflection on the whole course. What was the hardest, what clicked, and how I will use it in the future`,

    learnings: [
      "SSH and Ansible are essential tools for automating server management and configuration.",
      "Automation is a powerful tool for system administration and can save time and reduce errors.",
      "Containers and virtualization are important concepts for modern software development and deployment.",
      "These skills, combined with scripting and networking knowledge, will be valuable in my future career as a DevOps or System Administration Engineer.",
    ]
  }
});


// ============================================================
// MEMBERS
// ============================================================

const MEMBERS = [

  // ==========================================================
  // MEMBER 1
  // ==========================================================

  {
    id: "member-1",

    name: "Mark David Loterte",

    role: "Developer",

    bio: "Computer Engineering student with a focus on System Administration and Computer Networks.",

    photo: "files/member-1/photo.jpg",

    nav: "",

    accent: "#7c5cff",

    links: {
      github: "https://github.com/qmdmlot",
      email: "lotertemd@gmail.com"
    },

    skills: [
      "Computer Networks",
      "Linux System Administration",
      "Bash Scripting",
    ],

    items: placeholderItems(1)
  },


  // ==========================================================
  // MEMBER 2
  // ==========================================================

  {
    id: "member-2",

    name: "Irick Marvin Galan",

    role: "Developer",

    bio: "Skills in Linux Scripting, Ansible, and Cisco Networking buildin to a future career towards DevOps / Cloud Engineer",

    photo: "files/member-2/Galan_2x2_Formal.png",

    nav: "",

    accent: "#22c3a6",

    links: {
      github: "https://github.com/IrickMarvinGalan/CPE212_Galan/tree/home",
      email: "qimagalan@tip.edu.ph | irickmarvingalan.1321@gmail.com"
    },

    skills: [
      "Cisco Networking I and II",
      "Linux CLI",
      "Bash Scripting",
    ],

    items: placeholderItems(2)
  },


  // ==========================================================
  // MEMBER 3
  // ==========================================================

  {
    id: "member-3",

    name: "David Owen A. Santiago",

    role: "Developer",

    bio: "Prospect DevOps Engineer with a strong foundation in Linux system administration, networking, and automation.",

    photo: "files/member-3/2x2_DavidOwenSantiago.png",

    nav: "",

    accent: "#FDDC5C",

    links: {
      github: "https://github.com/owen-s-dotdev/CPE212-Santiago.git",
      email: "owensantiago115@gmail.com"
    },

    skills: [
      "Ubuntu",
      "Shell Scripting",
      "Ansible",
      "Docker",
    ],

    items: placeholderItems(3)
  },


  // ==========================================================
  // MEMBER 4
  // ==========================================================

  {
    id: "member-4",

    name: "Christopher Fegalan",

    role: "Developer",

    bio: "Computer Engineering student aspiring to become a Cloud Engineer with a strong foundation in Linux system administration, networking, and automation.",

    photo: "files/member-4/2x2_fegalan.png",

    nav: "",

    accent: "#3ba7ff",

    links: {
      github: "https://github.com/christopherfegalan/CPE212_fegalan",
      email: "pherfegalan@gmail.com"
    },

    skills: [
      "Ubuntu",
      "Cisco Networking",
      "Arduino Scripting",
      "Bash Scripting"

    ],

    items: placeholderItems(4)
  }

];
