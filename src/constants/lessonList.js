const lessonList = [
  { title: "Imposter Syndrome", path: "/lessons/imposter-syndrome" },
  {
    title: "Why a Job in programming is Absolute Hell",
    path: "/lessons/why-a-job-in-programming-is-absolute-hell",
  },
  {
    title: "Using Search Engines",
    path: "/lessons/using-search-engines-effectively",
  },
  {
    title: "Douglas Crockford's JavaScript: The Good Parts",
    path: "/lessons/douglas-crockfords-javascript-the-good-parts",
  },
  {
    title: "Eric Elliott & Composing Software",
    path: "/lessons/eric-elliott-composing-software",
  },
  { title: "If Considered Harmful", path: "/lessons/if-considered-harmful" },
  {
    title: "Comments, Documentation, & Empathy",
    path: "/lessons/comments-documentation-and-empathy",
  },
  {
    title: "We Fired Our Top Talent. Best decision we ever made!",
    path: "/lessons/we-fired-our-top-talent-best-decision-we-ever-made",
  },
  {
    title: "Kevlin Henny & Structured Programming",
    path: "/lessons/kevlin-henny-structured-programming",
  },
  {
    title: "Robert Cecil Martin & (so called) Clean Code",
    path: "/lessons/robert-cecil-martin-and-so-called-clean-code",
  },
  {
    title: "Git, The Save Button for Programmers",
    path: "/lessons/git-the-save-button-for-programmers",
  },
  {
    title: "The Code Review & Psychological Safety",
    path: "/lessons/the-code-review-and-psychological-safety",
  },
  { title: "2005 Era HTML", path: "/lessons/2005-era-html" },
  { title: "The MDN & Modern HTML", path: "/lessons/the-mdn-and-modern-html" },
  { title: "2010 Era CSS", path: "/lessons/2010-era-css" },
  {
    title: "The Browser API & jQuery",
    path: "/lessons/the-browser-api-and-jquery",
  },
  {
    title: "I/O Introduction, AJAX, fetch() and Promises",
    path: "/lessons/io-introduction-ajax-fetch-and-promises",
  },
  {
    title: "MVC & Why no one respects you as a Frontend Developer",
    path: "/lessons/mvc-and-why-no-one-respects-you-as-a-frontend-developer",
  },
  { title: "Framework vs Libarary", path: "/lessons/framework-vs-library" },
  {
    title: "Even more design patterns,...",
    path: "/lessons/even-more-design-patterns",
  },
  {
    title: "How to make a Framework",
    path: "/lessons/how-to-make-a-framework",
  },
  { title: "Framework Wars", path: "/lessons/framework-wars" },
  {
    title:
      "NodeJS & The Fullstack Developer or When Frontend Developers Escape Hell",
    path: "/lessons/nodejs-and-the-fullstack-developer-or-when-frontend-developers-escape-hell",
  },
  {
    title: "NPM & Dependency Injection",
    path: "/lessons/npm-and-dependency-injection",
  },
  {
    title:
      "REST & ExpressJS or How the Frontend Developer Killed the PHP Developer",
    path: "/lessons/rest-and-expressjs-or-how-the-frontend-developer-killed-the-php-developer",
  },
  {
    title: "React Basics",
    path: "/lessons/react-basics",
  },
  {
    title: "Advanced React",
    path: "/lessons/advanced-react",
  },
  {
    title: "SQL & Relational Databases",
    path: "/lessons/sql-and-relational-databases",
  },
  {
    title: "NoSQL & Document Databases",
    path: "/lessons/nosql-and-document-databases",
  },
  {
    title: "Well Formed Data & Object Relational Mapping (ORM)",
    path: "/lessons/well-formed-data-and-object-relational-mapping-orm",
  },
  {
    title:
      "SOAP, Graph Databases & GraphQL, the Databases of Social Media Networks",
    path: "/lessons/soap-graph-databases-and-graphql-the-databases-of-social-media-networks",
  },
  {
    title: "WebSockets and Realtime Two Way Communication",
    path: "/lessons/websockets-and-realtime-two-way-communication",
  },
  {
    title: "The Foreign Function Interface, Straight Dark Magic",
    path: "/lessons/the-foreign-function-interface-straight-dark-magic",
  },
  {
    title: "The Command Line & Piping",
    path: "/lessons/the-command-line-and-piping",
  },
  {
    title: "Child Processes & Multithreading or Killing the Backend Developer",
    path: "/lessons/child-processes-and-multithreading-or-killing-the-backend-developer",
  },
  {
    title: 'Antipatterns & The 12 Factor App, or "Dont Do Stupid"',
    path: "/lessons/antipatterns-and-the-12-factor-app-or-dont-do-stupid",
  }, // need to add a note from Internet of Bugs
  {
    title:
      "ElectronJS, or How the Frontend Developer Offed the Desktop Developer",
    path: "/lessons/electronjs-or-how-the-frontend-developer-offed-the-desktop-developer",
  },
  {
    title: "How the Frontend Developer Offed the Phone App Developer",
    path: "/lessons/how-the-frontend-developer-offed-the-phone-app-developer",
  },
  {
    title: "React on Phones",
    path: "/lessons/react-on-phones",
  },
  {
    title: "IoT, Robots, Bluetooth, Data Analytics, Machine Learning & ChatGPT",
    path: "/lessons/iot-robots-bluetooth-data-analytics-machine-learning-and-chatgpt",
  },
  {
    title: "Testing AKA Certified Defect Free Software",
    path: "/lessons/testing-aka-certified-defect-free-software",
  },
  {
    title:
      "Continuous Integration & Continuous Deployment, or 300 Deploys a Day",
    path: "/lessons/continuous-integration-and-continuous-deployment-or-300-deploys-a-day",
  },
  {
    title: "Testing with Playwright & Cypress.io & Component Testing",
    path: "/lessons/testing-with-playwright-and-cypress-io-and-component-testing",
  },
  {
    title: "Observability & Knowing when Bad things Happen",
    path: "/lessons/observability-and-knowing-when-bad-things-happen",
  },
  {
    title: "I Need a Computer that is Always on the Internet",
    path: "/lessons/i-need-a-computer-that-is-always-on-the-internet",
  },
  {
    title: "Docker & Kubernetes or Shipping the Operating System at Scale",
    path: "/lessons/docker-and-kubernetes-or-shipping-the-operating-system-at-scale",
  },
  {
    title: "Terraform, Infrastructure as Code",
    path: "/lessons/terraform-infrastructure-as-code",
  },
  {
    title: "VisualStudio Code, Every Deity Needs a Temple",
    path: "/lessons/visualstudio-code-every-deity-needs-a-temple",
  },
  { title: "Waterfall Methology", path: "/lessons/waterfall-methodology" },
  {
    title: "Extreme Programming Methodology & The Agile Manifesto",
    path: "/lessons/extreme-programming-methodology-and-the-agile-manifesto",
  },
  {
    title: "SCRUM, the first bastardization of Agile",
    path: "/lessons/scrum-the-first-bastardization-of-agile",
  },

  {
    title: "Kanban, the second bastardization of Agile",
    path: "/lessons/kanban-the-second-bastardization-of-agile",
  },
  {
    title: "Agile at Scale & Spotify Model",
    path: "/lessons/agile-at-scale-and-spotify-model",
  },
  {
    title: "Six Sigma, DMICA & DMADV the third bastrardization of Agile",
    path: "/lessons/six-sigma-dmica-and-dmadv-the-third-bastardization-of-agile",
  },
  {
    title: "LEAN & the MVP, Most Viable Product",
    path: "/lessons/lean-and-the-mvp-most-viable-product",
  },
  {
    title: "Monoliths, Microservices, and Peer-To-Peer Architecture",
    path: "/lessons/monoliths-microservices-and-peer-to-peer-architecture",
  },
  { title: "God Level React, NextJS" },
  {
    title:
      "Angular, for when you think in Sin",
    path: "/lessons/angular-for-when-you-think-in-sin",
  },
  {
    title: "Vue, Simple to Complex NeoHTML",
    path: "/lessons/vue-simple-to-complex-neohtml",
  },
  {
    title: "God Level Vue, Nuxt",
    path: "/lessons/god-level-vue-nuxt",
  },
  {
    title: "EXTERMINATE: Embrace, extend, and extinguish",
    path: "/lessons/exterminate-embrace-extend-and-extinguish",
  },
  {
    title: "TypeScript, Microsoft's Obsession with Trying to kill JavaScript",
    path: "/lessons/typescript-microsofts-obsession-with-trying-to-kill-javascript",
  },
  {
    title: "God Level Angular, AnalogJS",
    path: "/lessons/god-level-angular-analogjs",
  },
  {
    title: "Theo - T3 Stack",
    path: "/lessons/theo-t3-stack",
  },
  {
    title: "EEG Bluetooth AI Interfaces - How to read Minds with JavaScript",
    path: "/lessons/eeg-bluetooth-ai-interfaces-how-to-read-minds-with-javascript",
  },
  {
    title: "Setting up Offline AI and Coding Tools",
    path: "/lessons/setting-up-offline-ai-and-coding-tools",
  }
];

export default lessonList;
