 export const projects = [
    { 
      /*VOYAGEIQ*/
      id: "voyageiq",
      index: "01",
      category: "Web and cloud Project",
      name: "VoyageIQ",
      tagline: "Smart Travel Intelligence Platform",
      description:
        "An end-to-end travel planning platform that brings flight search, hotel search, weather intelligence and goal-based trip planning into one personalized dashboard.",
      role: "Full-Stack / AI & ML",
      type: "Travel Intelligence Platform",
      stack: [
        { name: "Python", icon: "devicon-python-plain colored" },
        { name: "Flask", icon: "devicon-flask-original" },
        { name: "PostgreSQL", icon: "devicon-postgresql-plain colored" },
        { name: "REST API", icon: "fa-solid fa-diagram-project skill-fa" },
        { name: "JavaScript", icon: "devicon-javascript-plain colored" },
        { name: "Azure", icon: "devicon-azure-plain colored" },
      ],
      features: [
        { name: "Flight Search", note: "Search and compare flight options in real time." },
        { name: "Hotel Search", note: "Find and filter accommodation by location, price and rating." },
        { name: "Weather Intelligence", note: "Surfaces destination weather to help time a trip." },
        { name: "Target Trip", note: "Goal-based trip planning around a budget or date." },
        { name: "Personalized Dashboard", note: "One view of saved trips, bookings and preferences." },
      ],
      mainImage: { src: "images/VoyageIQ/Home.png", label: "VoyageIQ — Home" },
      gallery: [
        { src: "images/VoyageIQ/Flight.png", label: "Flight Search" },
        { src: "images/VoyageIQ/Hotel.png", label: "Hotel Search" },
        { src: "images/VoyageIQ/Dashboard.png", label: "Dashboard" },
        { src: "images/VoyageIQ/Target-Trip.png", label: "Target Trip" },
        { src: "images/VoyageIQ/Profile.png", label: "Profile" },
        { src: "images/VoyageIQ/Login.png", label: "Login" },
        { src: "images/VoyageIQ/Registration.png", label: "Registration" },
        { src: "images/VoyageIQ/Contact.png", label: "Contact" },
      ],
      links: { demo: "https://voyageiq-argah5bwdhhcarhz.centralindia-01.azurewebsites.net/",
               docs: "VoyageIQ Documentation.pdf", 
               github: "https://github.com/Aryan-Dongre/VoyageIQ" },
    },

    {/* SALON ERP */
      id: "salon-erp",
      index: "02",
      category: "ERP System",
      name: "Salon ERP System",
      tagline: "Multi-Branch Salon Operations Platform",
      description:
        "Staff, inventory, billing and multi-branch oversight from a single admin panel — built to run a real salon's day-to-day operations.",
      role: "Full-Stack Developer",
      type: "ERP System",
      stack: [
        { name: "Python", icon: "devicon-python-plain colored" },
        { name: "Flask", icon: "devicon-flask-original" },
        { name: "MySQL", icon: "devicon-mysql-plain colored" },
        { name: "HTML/CSS", icon: "devicon-html5-plain colored" },
      ],
      features: [
        { name: "Service Management", note: "Manage the service catalog offered across branches." },
        { name: "Appointment Booking", note: "Book and track appointments per branch and staff member." },
        { name: "Booking Summary", note: "A clear summary view of every booking's status." },
        { name: "Payment Processing", note: "Record and reconcile customer payments." },
        { name: "Admin Dashboard", note: "Multi-branch oversight from a single admin panel." },
      ],
      mainImage: { src: "images/ERP photos/Home-page.png", label: "Salon ERP — Home" },
      gallery: [
        { src: "images/ERP photos/Service page.png", label: "Service Page" },
        { src: "images/ERP photos/Appointment card.png", label: "Appointment Card" },
        { src: "images/ERP photos/Booking summary.png", label: "Booking Summary" },
        { src: "images/ERP photos/Payment.png", label: "Payment" },
        { src: "images/ERP photos/admin_dashboard.png", label: "Admin Dashboard" },
        { src: "images/ERP photos/manager_dashboard.png", label: "Branch Management" },
        { src: "images/ERP photos/recep_dashboard.png", label: "Receptionist Interface" },
      ],
      links: { demo: "https://salon-erp-system-pi6r.onrender.com", docs: "", github: "https://github.com/Aryan-Dongre/Salon-ERP-System" },
    },

    {
      /*LOAN APPROVAL PREDICTION*/
      id: "loan-approval-prediction",
      index: "03",
      category: "Machine Learning",
      name: "Loan Approval Prediction",
      tagline:"Machine Learning Base Credit Decision System",
      description:
             "A machine learning classification project that predicts whether a loan application is likely to be approved using applicant financial, demographic and credit-related information.",
      role: "Machine Learning Developer",
      type: "ML Classification Project",

      stack :[
        {name: "Python",icon: "devicon-python-plain colored" },
        {name: "Pandas",icon: "devicon-pandas-plain colored" },
        {name: "NumPy",icon: "devicon-numpy-plain colored" },
        {name: "Scikit-learn",icon: "devicon-scikit-learn-plain colored" },
        {name: "Matplotlib",icon: "devicon-matplotlib-plain colored" },
        {name: "Seaborn",icon: "devicon-seaborn-plain colored" },
      ],
      features: [
        {name: "Data Preprocessing", note:"Cleaned and prepared applicant data for machine learning." },
        {name: "Exploratory Data Analysis", note:"Visualized and analyzed data to identify patterns and relationships." },
        {name: "Feature Engineering", note:"Created new features from existing data to improve model performance." },
        {name: "Classification Model", note:"Trained machine learning models to predict loan approval."},
        {name:"Model Evaluation", note:"Evaluated model performance using metrics such as accuracy, precision, recall and F1 score."},
      ],
      mainImage: { src: "images/ML Project Image/Loan_approval.png", label: "Loan Approval Prediction" },
      gallery: [],
      links: {
        github: "https://github.com/Aryan-Dongre/Loan_Approval_Prediction"
      }
    },

    {
      /*NETFLIX_-ANALYSIS */
      id: "netflix-analysis",
      index: "04",
      category: "Data Analysis",
      name: "Netflix Data Analysis",
      tagline: "Exploring Netflix Content & Viewing Trends",
      description:
        "An exploratory data analysis project examining Netflix movies and TV shows to uncover patterns across content type, genres, countries, release years and other attributes.",
      role: "Data Analyst",
      type: "Exploratory Data Analysis",

      stack: [
        {name: "Python", icon: "devicon-python-plain colored"},
        {name: "Pandas", icon: "devicon-pandas-plain colored"},
        {name: "NumPy", icon: "devicon-numpy-plain colored"},
        {name: "Matplotlib", icon: "devicon-matplotlib-plain colored"},
        {name: "Seaborn", icon: "devicon-seaborn-plain colored"},
      ],

      features: [
        {name: "Content Analysis", note: "Explored the distribution of movies and TV shows available on Netflix."},
        {name: "Genre Analysis", note: "Analyzed the popularity and performance of different genres on Netflix."},
        {name: "Country Analysis", note: "Examined content distribution across different countries."},
        {name: "Release Trends", note: "Studied how Netflix content changed across release years."},
        {name:"Data Visualization", note: "Created visualizations to communicate important patterns and trends."}
      ],

      mainImage: { src: "images/ML Project Image/Netflix.png", label: "Netflix Data Analysis" },
      gallery: [],
      links: {github: "https://github.com/Aryan-Dongre/Netflix-Data-Analysis-"}
    },

    {/*Zomato Analysis*/
      id: "zomato-analysis",
      index: "05",
      category: "Data Analysis",
      name: "Zomato Data Analysis",
      tagline: "Restaurant & Customer Behaviour Analysis",
      description:
        "An exploratory data analysis project using Zomato restaurant data to understand restaurant types, ratings, votes, spending patterns and online ordering behaviour.",
      role: "Data Analyst",
      type: "Exploratory Data Analysis",

      stack : [
        {name: "Python", icon: "devicon-python-plain colored"},
        {name: "Pandas", icon: "devicon-pandas-plain colored"},
        {name: "NumPy", icon: "devicon-numpy-plain colored"},
        {name: "Matplotlib", icon: "devicon-matplotlib-plain colored"},
        {name: "Seaborn", icon: "devicon-seaborn-plain colored"},
      ],

      features: [
        {name: "Restaurant Type Analysis", note: "Analyzed the distribution of different restaurant types."},
        {name: "Rating Analysis", note: "Explored restaurant ratings and their relationship with customer engagement."},
        {name: "Vote Analysis", note: "Studied customer voting patterns across restaurants."},
        {name: "Cost Analysis", note: "Examined approximate spending patterns for customers."},
        {name: "Online Ordering", note: "Analysis online versus offline ordering behaviour."}
      ],
      mainImage: {src: "images/ML Project Image/Zomato.png", label: "Zomato Data Analysis"},
      gallery: [],
      links: {github: "https://github.com/Aryan-Dongre/Zomato-Analysis-Project-"}



    },

    {/* BEAUTY PARLOR */
      id: "beauty-parlor",
      index: "06",
      category: "Web Application",
      name: "Beauty Parlor Management System",
      tagline: "Appointments, Payments &amp; Service Management",
      description:
        "Appointments, payments and services, with a dedicated customer flow and an admin control center for daily operations.",
      role: "Full-Stack Developer",
      type: "Web Application",
      stack: [
        { name: "Python", icon: "devicon-python-plain colored" },
        { name: "Flask", icon: "devicon-flask-original" },
        { name: "MySQL", icon: "devicon-mysql-plain colored" },
        { name: "HTML/CSS", icon: "devicon-html5-plain colored" },
      ],
      features: [
        { name: "Appointment Booking", note: "A simple flow for customers to book a service." },
        { name: "Service & Payment Tracking", note: "Track services rendered and payments received." },
        { name: "Customer-Facing Flow", note: "A dedicated experience for walk-in and returning customers." },
        { name: "Admin Control Center", note: "Day-to-day operations managed from one place." },
      ],
      mainImage: { src: "images/salon photos/beauty-home.png", label: "Beauty Parlor — Home" },

      gallery: [
        { src: "images/salon photos/beauty-service.png", label: "Service Page" },
        { src: "images/salon photos/appointment.png", label: "Appointment Booking" },
        { src: "images/salon photos/payment.png", label: "Payment " },
        { src: "images/salon photos/pay success.png", label: "Payment Success" },
        { src: "images/salon photos/Login.png", label: "Login" },
        { src: "images/salon photos/dashboard.png", label: "Admin Dashboard" },
        { src: "images/salon photos/calendar.png", label: "Admin Appointment Calendar View" },
        { src: "images/salon photos/ser_analytics.png", label: "Service Analytics" },
        { src: "images/salon photos/booking-admin.png", label: "Booking Analytics" },
        { src: "images/salon photos/add_ser.png", label: "Add Service" },
        { src: "images/salon photos/beauty-myappointment.png", label: "My Appointments" },
        { src: "images/salon photos/app_history.png", label: "Appointment History" }

      ],
      links: { demo: "", docs: "Beauty Parlor.pdf", github: "https://github.com/Aryan-Dongre/Beauty-Parlor-Management-Systems-" },
    },
  ];