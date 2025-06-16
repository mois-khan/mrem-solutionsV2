// course.js

// Full list: 3–5 courses per engineering domain
const courses = [
    // Web Development
    {
      title: "Meta Front-End Developer",
      platform: "Coursera",
      url: "https://www.coursera.org/professional-certificates/meta-front-end-developer",
      description: "Learn HTML, CSS, JavaScript & React. Capstone project included.",
      certificate: "Free (Audit) / Paid Certificate",
      icon: "../assets/meta.png",
      domain: "Web Development",
      keywords: ["html","css","javascript","react","frontend","meta"]
    },
    {
      title: "Responsive Web Design",
      platform: "freeCodeCamp",
      url: "https://www.freecodecamp.org/learn/2022/responsive-web-design/",
      description: "Build responsive layouts with Flexbox & Grid. Projects & free cert.",
      certificate: "Free Certificate",
      icon: "../assets/web-dev.png",
      domain: "Web Development",
      keywords: ["responsive","html","css","grid","flexbox","web"]
    },
    {
      title: "The Complete Node.js Developer",
      platform: "Udemy",
      url: "https://www.udemy.com/course/the-complete-nodejs-developer-course-2/",
      description: "Master Node, Express, MongoDB, and build RESTful APIs.",
      certificate: "Paid Certificate",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-plain-wordmark.svg",
      domain: "Web Development",
      keywords: ["node","express","mongodb","api","backend"]
    },
    {
      title: "Angular - The Complete Guide",
      platform: "Udemy",
      url: "https://www.udemy.com/course/the-complete-guide-to-angular-2/",
      description: "Comprehensive Angular course covering components, services, and RxJS.",
      certificate: "Paid Certificate",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg",
      domain: "Web Development",
      keywords: ["angular","typescript","components","rxjs"]
    },
  
    // Programming & CS Fundamentals
    {
      title: "Python for Everybody",
      platform: "Coursera",
      url: "https://www.coursera.org/specializations/python",
      description: "Introductory specialization covering Python basics and data structures.",
      certificate: "Free (Audit) / Paid Certificate",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
      domain: "Programming",
      keywords: ["python","programming","data structures","coursera"]
    },
    {
      title: "Java Programming: Solving Problems",
      platform: "Coursera",
      url: "https://www.coursera.org/learn/java-programming",
      description: "Learn Java and OOP by solving real-world problems.",
      certificate: "Free (Audit) / Paid Certificate",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
      domain: "Programming",
      keywords: ["java","oop","algorithms","coding"]
    },
    {
      title: "C Programming For Everybody",
      platform: "Coursera",
      url: "https://www.coursera.org/learn/c-programming",
      description: "Beginner course on C language fundamentals and pointers.",
      certificate: "Free (Audit) / Paid Certificate",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
      domain: "Programming",
      keywords: ["c","programming","pointers","basics"]
    },
    {
      title: "C++ For C Programmers",
      platform: "Coursera",
      url: "https://www.coursera.org/learn/c-plus-plus-a",
      description: "Transition from C to C++: OOP, STL, templates.",
      certificate: "Free (Audit) / Paid Certificate",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
      domain: "Programming",
      keywords: ["c++","oop","stl","templates"]
    },
    {
      title: "SQL for Data Science",
      platform: "Coursera",
      url: "https://www.coursera.org/learn/sql-for-data-science",
      description: "Learn SQL queries, joins, and data analysis for beginners.",
      certificate: "Free (Audit) / Paid Certificate",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg",
      domain: "Programming",
      keywords: ["sql","database","queries","data science"]
    },
  
    // Data Science & AI/ML
    {
      title: "Machine Learning",
      platform: "Coursera",
      url: "https://www.coursera.org/learn/machine-learning",
      description: "Andrew Ng’s classic ML course covering regression, SVMs, and neural nets.",
      certificate: "Free (Audit) / Paid Certificate",
      icon: "../assets/ml.png",
      domain: "AI & ML",
      keywords: ["machine learning","ai","andrew ng","neural networks"]
    },
    {
      title: "Applied Data Science with Python",
      platform: "Coursera",
      url: "https://www.coursera.org/specializations/data-science-python",
      description: "University of Michigan specialization on pandas, matplotlib, scikit-learn.",
      certificate: "Free (Audit) / Paid Certificate",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
      domain: "AI & ML",
      keywords: ["data science","python","pandas","scikit-learn"]
    },
    {
      title: "Deep Learning Specialization",
      platform: "Coursera",
      url: "https://www.coursera.org/specializations/deep-learning",
      description: "Five-course Deep Learning series by Andrew Ng teaching neural nets.",
      certificate: "Free (Audit) / Paid Certificate",
      icon: "../assets/deep-learning.png",
      domain: "AI & ML",
      keywords: ["deep learning","neural networks","cnn","rnn"]
    },
    {
      title: "Data Analysis with R",
      platform: "Coursera",
      url: "https://www.coursera.org/learn/data-analysis-with-r",
      description: "Learn data wrangling and visualization in R programming.",
      certificate: "Free (Audit) / Paid Certificate",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/r/r-original.svg",
      domain: "AI & ML",
      keywords: ["r","data analysis","visualization","ggplot2"]
    },
  
    // Cybersecurity
    {
      title: "Google Cybersecurity Certificate",
      platform: "Coursera",
      url: "https://www.coursera.org/professional-certificates/google-cybersecurity",
      description: "Google’s professional cert covering security fundamentals and operations.",
      certificate: "Free (Audit) / Paid Certificate",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg",
      domain: "Cybersecurity",
      keywords: ["cybersecurity","google","security","audit"]
    },
    {
      title: "Introduction to Cyber Security",
      platform: "FutureLearn",
      url: "https://www.futurelearn.com/courses/introduction-to-cyber-security",
      description: "Open University’s course on cybersecurity basics and online safety.",
      certificate: "Free (Limited) / Paid Certificate",
      icon: "../assets/cyber-security.png",
      domain: "Cybersecurity",
      keywords: ["cyber","security","network security","online safety"]
    },
    {
      title: "Practical Ethical Hacking",
      platform: "Udemy",
      url: "https://www.udemy.com/course/practical-ethical-hacking/",
      description: "Learn penetration testing, vulnerability analysis, and more.",
      certificate: "Paid Certificate",
      icon: "../assets/ethical-hacking.png",
      domain: "Cybersecurity",
      keywords: ["ethical hacking","pentest","security"]
    },
  
    // Cloud Computing
    {
      title: "AWS Cloud Practitioner",
      platform: "AWS",
      url: "https://aws.amazon.com/training/path-cloudpractitioner/",
      description: "AWS foundational course for understanding cloud concepts and AWS services.",
      certificate: "Free Training / Paid Exam",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg",
      domain: "Cloud Computing",
      keywords: ["aws","cloud","ec2","s3"]
    },
    {
      title: "Google Cloud Fundamentals",
      platform: "Coursera",
      url: "https://www.coursera.org/learn/gcp-fundamentals",
      description: "Overview of GCP services including compute, storage, and BigQuery.",
      certificate: "Free (Audit) / Paid Certificate",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg",
      domain: "Cloud Computing",
      keywords: ["gcp","cloud","bigquery","compute"]
    },
    {
      title: "Microsoft Azure Fundamentals",
      platform: "Microsoft Learn",
      url: "https://docs.microsoft.com/en-us/learn/paths/azure-fundamentals/",
      description: "Core Azure services, pricing, and support options.",
      certificate: "Free Learner Badge / Paid Exam",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg",
      domain: "Cloud Computing",
      keywords: ["azure","cloud","fundamentals"]
    },
  
    // Core CS Subjects
    {
      title: "Operating Systems and You",
      platform: "Coursera",
      url: "https://www.coursera.org/learn/os-power-user",
      description: "Google IT course covering Linux, processes, and system management.",
      certificate: "Free (Audit) / Paid Certificate",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
      domain: "Core CS",
      keywords: ["os","linux","process","system"]
    },
    {
      title: "Database Management Essentials",
      platform: "Coursera",
      url: "https://www.coursera.org/learn/database-management",
      description: "SQL, schema design, transactions and indexing with hands-on labs.",
      certificate: "Free (Audit) / Paid Certificate",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg",
      domain: "Core CS",
      keywords: ["sql","database","transactions","indexing"]
    },
    {
      title: "Computer Networking Basics",
      platform: "Udemy",
      url: "https://www.udemy.com/course/computer-networking-basics/",
      description: "Fundamental networking concepts: OSI model, TCP/IP, routing, switching.",
      certificate: "Paid Certificate",
      icon: "../assets/computer-networking.png",
      domain: "Core CS",
      keywords: ["networking","tcp/ip","osi","routing"]
    },
  
    // DevOps & Tools
    {
      title: "Introduction to DevOps",
      platform: "edX",
      url: "https://www.edx.org/course/introduction-to-devops",
      description: "Culture, CI/CD, containers, with Docker & Kubernetes tutorials.",
      certificate: "Free (Audit) / Paid Certificate",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
      domain: "DevOps",
      keywords: ["devops","docker","kubernetes","ci/cd"]
    },
    {
      title: "Git & GitHub Masterclass",
      platform: "Udemy",
      url: "https://www.udemy.com/course/git-and-github-masterclass/",
      description: "Master version control with Git, GitHub workflow, pull requests.",
      certificate: "Paid Certificate",
      icon: "../assets/github.png",
      domain: "DevOps",
      keywords: ["git","github","version control","workflow"]
    },
  
    // Aptitude & Interview Prep
    {
      title: "Data Structures & Algorithms",
      platform: "Udacity",
      url: "https://www.udacity.com/course/data-structures-and-algorithms-nanodegree--nd256",
      description: "In-depth Nanodegree on DS&A with project reviews.",
      certificate: "Paid Certificate",
      icon: "../assets/data-structures.png",
      domain: "Aptitude & Prep",
      keywords: ["data structures","algorithms","interview","nanodegree"]
    },
    {
      title: "Cracking the Coding Interview Prep",
      platform: "Udemy",
      url: "https://www.udemy.com/course/cracking-the-coding-interview/",
      description: "50+ challenging coding problems and solutions for interviews.",
      certificate: "Paid Certificate",
      icon: "../assets/interview.png",
      domain: "Aptitude & Prep",
      keywords: ["interview","coding","problems","prep"]
    }
  ];
// DOM elements
const searchInput = document.getElementById("searchInput");
const coursesContainer = document.getElementById("coursesContainer");
const detailsModal = document.getElementById("detailsModal");
const modalDetails = document.getElementById("modalDetails");
const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");

// Mobile menu toggle
navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("show");
});

// Render courses
function renderCourses(list) {
  coursesContainer.innerHTML = '';
  list.forEach(course => {
    const card = document.createElement('div');
    card.className = 'course-card';
    card.setAttribute('data-keywords', course.keywords.join(' '));
    card.innerHTML = `
      <img src="${course.icon}" alt="${course.platform}" class="course-icon">
      <h3>${course.title}</h3>
      <p class="platform"><strong>Platform:</strong> ${course.platform}</p>
      <p>${course.description}</p>
      <p class="certificate"><strong>Certificate:</strong> ${course.certificate}</p>
      <div class="course-buttons">
        <a href="${course.url}" target="_blank" class="btn btn-primary">Visit Course</a>
        <button class="btn btn-secondary details-btn" data-title="${course.title}">Details</button>
      </div>
    `;
    coursesContainer.appendChild(card);
  });

  // Attach detail handlers
  document.querySelectorAll('.details-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const title = btn.dataset.title;
      const course = courses.find(c => c.title === title);
      if (!course) return;
      modalDetails.innerHTML = `
        <h2>${course.title}</h2>
        <p><strong>Platform:</strong> ${course.platform}</p>
        <p><strong>Domain:</strong> ${course.domain}</p>
        <p><strong>Description:</strong> ${course.description}</p>
        <p><strong>Certificate:</strong> ${course.certificate}</p>
        <a href="${course.url}" class="btn btn-primary" target="_blank">Go to Course</a>
      `;
      detailsModal.classList.add('active');
    });
  });
}

// Close modal
function closeModal() {
  detailsModal.classList.remove('active');
}

// Attach modal close
const closeBtn = detailsModal.querySelector('.close-btn');
if (closeBtn) {
  closeBtn.addEventListener('click', closeModal);
}
// Close when clicking outside content
detailsModal.addEventListener('click', e => {
  if (e.target === detailsModal) closeModal();
});

// Search functionality
searchInput.addEventListener('input', () => {
  const q = searchInput.value.toLowerCase().trim();
  const filtered = courses.filter(course => {
    const hay = [
      course.title,
      course.platform,
      course.domain,
      course.description,
      ...course.keywords
    ].join(' ').toLowerCase();
    return hay.includes(q);
  });
  renderCourses(filtered);
});

// Initial render
renderCourses(courses);