 import React from "react";
import { useParams } from "react-router-dom";
import Contact from "./Contact";
import { FaArrowLeft, FaCalendarAlt, FaClock, FaUserGraduate, FaCertificate } from "react-icons/fa";

const courses = [
// basic 
  {
     
  title: "Basic Computer (AI Based) Syllabus",
  description: "Learn essential computer skills including Office tools, Internet, Cyber Safety, and AI basics.",
  image: "/basicimage.jpg", // replace with correct image path
  slug: "basic-computer",
  duration: "3 Months",
  students: "500+",
      link :"https://www.youtube.com/watch?v=kqFLQG484pg",
 
   certification: "Yes",
  content: `
    This course offers a complete introduction to computers and their everyday use. You'll explore hardware and software basics, work with Windows or Linux, and learn office applications like Word, Excel, and PowerPoint. The course also includes internet use, email, cyber safety, typing practice, and scanning/printing techniques.
  `,
  topics: [
    {
      heading: "1. Introduction to Computers",
      points: [
        "What is a computer?",
        "Types & parts of a computer"
      ]
    },
    {
      heading: "2. Computer Hardware & Software",
      points: [
        "Input/output devices",
        "System software vs. application software"
      ]
    },
    {
      heading: "3. Operating System Basics",
      points: [
        "Using Windows or Linux",
        "File and folder management"
      ]
    },
    {
      heading: "4. Notepad, Paint",
      points: []
    },
    {
      heading: "5. MS Office / Libre Office",
      points: [
        "MS Word: Create and format documents",
        "MS Excel: Basic formulas and tables",
        "MS PowerPoint: Making presentations"
      ]
    },
    {
      heading: "6. Internet & Email",
      points: [
        "Browsing the internet",
        "Creating and using email"
      ]
    },
    {
      heading: "7. Cyber Safety",
      points: [
        "Safe internet use",
        "Avoiding viruses and scams"
      ]
    },
    {
      heading: "8. Basic Typing & Shortcuts",
      points: [
        "Keyboard practice",
        "Common keyboard shortcuts"
      ]
    },
    {
      heading: "9. Printing & Scanning Techniques",
      points: []
    }
  ]
},
// tally
{
  title: "Accounting with Tally Prime & BUSY – Syllabus",
  description: "Master accounting with Tally Prime, GST, inventory, payroll, and BUSY software.",
  image: "/tallybusy.jpg", // replace with your correct image path
  slug: "tally",
  duration: "3 Months",
  students: "500+",
  certification: "Yes",
  link: "https://www.youtube.com/watch?v=kqFLQG484pg",
  content: `
    This course is designed to provide hands-on training in accounting using Tally Prime and BUSY software. You will learn basic accounting principles, ledger and voucher entries, inventory management, GST, TDS, reporting, payroll, and data security. By the end of this course, students will be proficient in managing accounts and generating reports for businesses.
  `,
  topics: [
    {
      heading: "1. Basic Accounting Concepts",
      points: [
        "Types of accounts",
        "Journal entries and ledgers"
      ]
    },
    {
      heading: "2. Introduction to Tally Prime",
      points: [
        "Company creation",
        "Navigating the interface"
      ]
    },
    {
      heading: "3. Master Creation",
      points: [
        "Ledgers and groups",
        "Stock items and units"
      ]
    },
    {
      heading: "4. Voucher Entry",
      points: [
        "Payment, receipt, sales, purchase, journal",
        "GST entries, Debit note, credit note"
      ]
    },
    {
      heading: "5. Cost Center",
      points: []
    },
    {
      heading: "6. Inventory Management",
      points: [
        "Stock categories, godowns",
        "Orders and delivery notes"
      ]
    },
    {
      heading: "7. GST & Taxation",
      points: [
        "GST setup and returns",
        "Basic TDS (optional)"
      ]
    },
    {
      heading: "8. Reports & Final Accounts",
      points: [
        "P&L, Balance Sheet",
        "Trial balance, day book"
      ]
    },
    {
      heading: "9. Backup & Security",
      points: [
        "Data backup and restore",
        "User access control"
      ]
    },
    {
      heading: "10. Payroll",
      points: []
    }
  ]
},
// graphic
{
  title: "Graphic Design Syllabus",
  description: "Learn professional graphic design using industry-standard tools like Photoshop, Illustrator, and Canva. Build your own design portfolio with hands-on projects.",
  image: "/graphic.jpg", // Replace with your correct image path
  slug: "graphic",
  duration: "3 Months",
  students: "500+",
  certification: "Yes",
  link: "https://www.youtube.com/watch?v=kqFLQG484pg",
  content: `
    This course is ideal for aspiring graphic designers. It covers the fundamental principles of design, essential tools like Adobe Photoshop and Illustrator, and skills needed to create visual content for print, web, and social media. From branding to social media design, students will develop a strong portfolio by the end of the course.
  `,
  topics: [
    {
      heading: "1. Introduction to Graphic Design",
      points: [
        "Principles of design (contrast, alignment, balance, etc.)",
        "Color theory and typography basics"
      ]
    },
    {
      heading: "2. Design Software Tools",
      points: [
        "Adobe Photoshop – image editing & manipulation",
        "Adobe Illustrator – vector graphics & logo design",
        "Canva/CorelDRAW (optional for quick design)",
        "Video Editing"
      ]
    },
    {
      heading: "3. Working with Images & Graphics",
      points: [
        "Photo editing, retouching",
        "Creating illustrations and icons"
      ]
    },
    {
      heading: "4. Layout & Composition",
      points: [
        "Designing posters, flyers, banners",
        "Using grids and alignment for layouts"
      ]
    },
    {
      heading: "5. Branding & Logo Design",
      points: [
        "Logo creation process",
        "Brand color and font usage"
      ]
    },
    {
      heading: "6. Web & Social Media Design",
      points: [
        "Designing social media posts",
        "Website banners and UI basics"
      ]
    },
    {
      heading: "7. Portfolio Development",
      points: [
        "Creating a design portfolio",
        "Exporting files for print and web"
      ]
    }
  ]
},
// adca
{
  title: "ADCA Syllabus – Short Version",
  description: "Master computer fundamentals, office tools, accounting, design, programming, and more in this comprehensive ADCA course.",
  image: "/adca-course.webp", // Replace with your correct image path
  slug: "dca",
  duration: "6 Months",
  students: "800+",
  certification: "Yes",
  link: "https://www.youtube.com/watch?v=kqFLQG484pg", // Update if needed
  content: `
    This Advanced Diploma in Computer Applications (ADCA) course is designed to equip students with essential and advanced computer skills. It covers office tools, internet usage, accounting with Tally, basic graphic design, programming, databases, and cyber security. The course is ideal for students and job seekers looking to enhance their digital proficiency.
  `,
  topics: [
    {
      heading: "Semester 1: Computer Fundamentals & Office Tools",
      points: [
        "Computer Basics – History, types, components",
        "Operating System – Windows/Linux basics",
        "MS Word – Document creation",
        "MS Excel – Formulas, charts",
        "MS PowerPoint – Presentations",
        "Internet & Email – Browsing, email handling",
        "Typing Practice – Speed and accuracy"
      ]
    },
    {
      heading: "Semester 2: Advanced Applications",
      points: [
        "Tally (with GST) – Accounting and taxation",
        "Photoshop/CorelDRAW – Graphic design basics",
        "Programming Basics – HTML or Python (varies)",
        "Database Management – MS Access or MySQL",
        "Cyber Security Basics – Safe browsing, data protection"
      ]
    }
  ]
},
//digital marketing
{
  title: "Digital Marketing Syllabus – Short Version",
  description: "Learn the essentials of digital marketing including SEO, SEM, SMM, content, email marketing, and web analytics. Perfect for aspiring marketers.",
  image: "/digital.jpg", // Replace with your correct image path
  slug: "digitalmarketing",
  duration: "3 Months",
  students: "600+",
  certification: "Yes",
  link: "https://www.youtube.com/watch?v=kqFLQG484pg", // Update if needed
  content: `
    This Digital Marketing course covers key strategies and tools to grow a business or personal brand online. From SEO and Google Ads to content and social media marketing, students gain practical experience in managing campaigns and tracking performance with web analytics tools.
  `,
  topics: [
    {
      heading: "1. Introduction to Digital Marketing",
      points: [
        "What is digital marketing?",
        "Traditional vs. digital methods"
      ]
    },
    {
      heading: "2. Website Basics",
      points: [
        "Domain, hosting, and WordPress basics"
      ]
    },
    {
      heading: "3. Search Engine Optimization (SEO)",
      points: [
        "On-page & off-page SEO",
        "Keywords, backlinks, Google ranking"
      ]
    },
    {
      heading: "4. Search Engine Marketing (SEM)",
      points: [
        "Google Ads (PPC campaigns)",
        "Keyword planning and ad creation"
      ]
    },
    {
      heading: "5. Social Media Marketing (SMM)",
      points: [
        "Marketing on Facebook, Instagram, LinkedIn",
        "Paid ads and engagement strategies"
      ]
    },
    {
      heading: "6. Content Marketing",
      points: [
        "Blogs, articles, videos",
        "Strategy and content planning"
      ]
    },
    {
      heading: "7. Email Marketing",
      points: [
        "Creating email campaigns",
        "Tools like Mailchimp"
      ]
    },
    {
      heading: "8. Affiliate & Influencer Marketing",
      points: [
        "Basics of affiliate networks",
        "Collaborating with influencers"
      ]
    },
    {
      heading: "9. Web Analytics",
      points: [
        "Google Analytics basics",
        "Measuring traffic and conversions"
      ]
    }
  ]
},
//web design
{
  title: "Web Design Syllabus – Short Version",
  description: "Master the basics of web design including HTML, CSS, JavaScript, responsive layouts, and tools like Bootstrap. Build your own fully responsive website.",
  image: "/webdesign.jpg", // Replace with your correct image path
  slug: "web-development",
  duration: "3 Months",
  students: "700+",
  certification: "Yes",
  link: "https://www.youtube.com/watch?v=kqFLQG484pg", // Update if needed
  content: `
    This Web Design course is ideal for beginners who want to learn how to create and style websites. It covers foundational web technologies such as HTML, CSS, and JavaScript, along with responsive design using Bootstrap. Students will also learn about web hosting and complete a hands-on project by the end of the course.
  `,
  topics: [
    {
      heading: "1. Introduction to Web Design",
      points: [
        "What is a website?",
        "Types of websites (static vs. dynamic)"
      ]
    },
    {
      heading: "2. HTML (HyperText Markup Language)",
      points: [
        "Basic tags, structure, forms, tables"
      ]
    },
    {
      heading: "3. CSS (Cascading Style Sheets)",
      points: [
        "Styling text, layout, colors, and responsive design"
      ]
    },
    {
      heading: "4. JavaScript (Basics)",
      points: [
        "Simple scripts, interactivity, form validation"
      ]
    },
    {
      heading: "5. Web Design Tools",
      points: [
        "Text editors (VS Code, Sublime)",
        "Graphics tools (Canva, Photoshop – optional)"
      ]
    },
    {
      heading: "6. Responsive Design",
      points: [
        "Media queries",
        "Mobile-friendly layouts (using CSS or Bootstrap)"
      ]
    },
    {
      heading: "7. Bootstrap Framework",
      points: [
        "Grid system, components, quick styling"
      ]
    },
    {
      heading: "8. Website Hosting & Domain",
      points: [
        "Basics of hosting and uploading a site"
      ]
    },
    {
      heading: "9. Project Work",
      points: [
        "Create and design a complete responsive website"
      ]
    }
  ]
},
//data antyst
{
  title: "Data Analyst (AI Based) Syllabus – Short Version",
  description: "Learn data analysis with modern tools like Excel, SQL, Power BI/Tableau, and Python. Perfect for aspiring data analysts seeking AI-powered insights.",
  image: "/data.jpg", // Replace with your correct image path
  slug: "addDataAnalyst",
  duration: "3 Months",
  students: "500+",
  certification: "Yes",
  link: "https://www.youtube.com/watch?v=kqFLQG484pg", // Update if needed
  content: `
    This Data Analyst course covers foundational and advanced techniques to work with structured and unstructured data. Students learn to use Excel, SQL, and data visualization tools like Tableau or Power BI. Optional modules include Python for AI-based analysis using Pandas and NumPy. The course concludes with real-world projects and reporting insights.
  `,
  topics: [
    {
      heading: "1. Introduction to Data Analysis",
      points: [
        "What is data analysis?",
        "Types of data: structured & unstructured"
      ]
    },
    {
      heading: "2. Excel for Data Analysis",
      points: [
        "Formulas, functions, pivot tables",
        "Charts, graphs, data cleaning"
      ]
    },
    {
      heading: "3. Statistics Basics",
      points: [
        "Mean, median, mode, standard deviation",
        "Data distribution & probability"
      ]
    },
    {
      heading: "4. SQL (Structured Query Language)",
      points: [
        "Basics of databases",
        "Writing queries to extract and filter data"
      ]
    },
    {
      heading: "5. Data Visualization",
      points: [
        "Tableau or Power BI basics",
        "Creating dashboards and visual reports"
      ]
    },
    {
      heading: "6. Python for Data Analysis (Optional/Advanced)",
      points: [
        "Libraries: Pandas, NumPy, Matplotlib",
        "Data cleaning and basic analytics"
      ]
    },
    {
      heading: "7. Projects & Case Studies",
      points: [
        "Real-world datasets",
        "Reporting and decision-making insights"
      ]
    }
  ]
},
//adavaned excel 
{
  title: "Advanced Excel with MIS Syllabus – Short Version",
  description: "Master advanced Excel functions, MIS reporting, and automation with Power Query, VBA, and dashboards. Ideal for professionals aiming to enhance data-driven decision-making.",
  image: "/excel.jpg", // Replace with your correct image path
  slug: "digitalmarketingdfskfjskfjslkjfsjdf",
  duration: "2.5 Months",
  students: "600+",
  certification: "Yes",
  link: "https://www.youtube.com/watch?v=kqFLQG484pg", // Update if needed
  content: `
    This course provides in-depth training on Advanced Excel techniques, data analysis, and MIS (Management Information Systems) reporting. Learn powerful formulas, pivot tables, automation with VBA, Power Query, and dashboard creation. Ideal for data professionals, analysts, and decision-makers in business environments.
  `,
  topics: [
    {
      heading: "1. Advanced Excel Functions & Formulas",
      points: [
        "VLOOKUP, HLOOKUP, INDEX & MATCH",
        "Nested IF, SUMIF, COUNTIF, AND/OR",
        "Array formulas and advanced data manipulation"
      ]
    },
    {
      heading: "2. Data Analysis & Reporting",
      points: [
        "Pivot tables & Pivot charts for dynamic reporting",
        "Grouping and filtering data in Pivot tables",
        "Conditional formatting for reporting",
        "Advanced charting (Combo charts, Gantt charts)"
      ]
    },
    {
      heading: "3. Data Management in MIS",
      points: [
        "Importing & linking data from different sources",
        "Data validation, error checking, and correction",
        "Consolidating data from multiple sheets"
      ]
    },
    {
      heading: "4. Automation with Macros & VBA",
      points: [
        "Recording macros for repetitive tasks",
        "Introduction to VBA (Visual Basic for Applications)",
        "Automating report generation in MIS systems"
      ]
    },
    {
      heading: "5. Power Query & Power Pivot",
      points: [
        "Data extraction, transformation, and loading (ETL)",
        "Building relationships with Power Pivot",
        "Advanced data models and multi-table analysis"
      ]
    },
    {
      heading: "6. Management Reporting & Dashboard Creation",
      points: [
        "Designing interactive dashboards in Excel",
        "KPI tracking and visual representation of MIS data",
        "Creating executive-level reports and scorecards"
      ]
    },
    {
      heading: "7. Forecasting & Trend Analysis",
      points: [
        "Using Excel for forecasting and trend analysis",
        "Implementing regression analysis and statistical functions"
      ]
    },
    {
      heading: "8. MIS Reporting & Decision Making",
      points: [
        "Analyzing and interpreting MIS data for business decisions",
        "Decision-making tools (What-If analysis, Scenario Manager, Goal Seek)"
      ]
    }
  ]
},
//stock market 
{
  title: "Stock Market  ",
  description: "Understand how the stock market works, master trading strategies, and learn both fundamental and technical analysis. Perfect for beginners and aspiring investors.",
  image: "/stock5.jpg", // Replace with your correct image path
  slug: "stockmarket",
  duration: "2 Months",
  students: "400+",
  certification: "Yes",
  link: "https://www.youtube.com/watch?v=kqFLQG484pg", // Update if needed
  content: `
    This Stock Market course offers a practical foundation for anyone interested in stock trading and investments. Students learn the fundamentals of markets, how to read charts, apply investment strategies, and trade using popular platforms like Zerodha or Upstox. It covers both technical and fundamental analysis, risk management, and the regulatory landscape.
  `,
  topics: [
    {
      heading: "1. Introduction to Stock Market",
      points: [
        "Basics of the stock market: what it is and how it works",
        "Key terms: Stocks, Bonds, Indices, Bull/Bear Market"
      ]
    },
    {
      heading: "2. Stock Market Operations",
      points: [
        "Types of stock exchanges (NSE, BSE, NYSE, etc.)",
        "How buying and selling of stocks works",
        "Market orders, limit orders, and stop orders"
      ]
    },
    {
      heading: "3. Investment Strategies",
      points: [
        "Long-term vs. short-term investing",
        "Value investing, growth investing, and dividend investing",
        "Risk management and portfolio diversification"
      ]
    },
    {
      heading: "4. Technical Analysis",
      points: [
        "Chart patterns: Candlesticks, trends, support & resistance",
        "Key indicators: Moving averages, RSI, MACD, Bollinger Bands",
        "Understanding volumes and price action"
      ]
    },
    {
      heading: "5. Fundamental Analysis",
      points: [
        "Analyzing financial statements (Balance Sheet, P&L, Cash Flow)",
        "Key ratios: P/E, Debt-to-Equity, ROE",
        "Valuation methods: Intrinsic value, market value"
      ]
    },
    {
      heading: "6. Trading Strategies",
      points: [
        "Swing trading, day trading, and positional trading",
        "Risk-to-reward ratio, stop loss & take profit",
        "Psychological aspects of trading"
      ]
    },
    {
      heading: "7. Stock Market Derivatives",
      points: [
        "Introduction to futures and options",
        "Hedging, calls, puts, and margin trading"
      ]
    },
    {
      heading: "8. Online Trading Platforms",
      points: [
        "How to use trading platforms (e.g., Zerodha, Upstox, etc.)",
        "Placing orders, analyzing market trends, using trading tools"
      ]
    },
    {
      heading: "9. Regulatory Framework",
      points: [
        "Role of SEBI (Securities and Exchange Board of India)",
        "Rules and regulations of stock trading"
      ]
    }
  ]
},
//autoCad

{
  title: "AutoCAD Syllabus ",
  description: "Master 2D and basic 3D drafting using AutoCAD. Learn professional drawing, editing, layer management, and plotting techniques for real-world architectural and mechanical design.",
  image: "/autc.jpg", // Replace with your correct image path
  slug: "autocardcourse",
  duration: "2 Months",
  students: "300+",
  certification: "Yes",
  link: "https://www.youtube.com/watch?v=kqFLQG484pg", // Update if needed
  content: `
    This AutoCAD course offers comprehensive training in both 2D and basic 3D drafting. Perfect for civil, mechanical, and architectural fields, students will learn professional drawing, layer control, annotations, and printing techniques through hands-on projects and practical exercises.
  `,
  topics: [
    {
      heading: "1. Introduction to AutoCAD",
      points: [
        "What is AutoCAD?",
        "Interface overview: Toolbars, command line, drawing area",
        "Units, scales, and settings"
      ]
    },
    {
      heading: "2. Basic Drawing Tools",
      points: [
        "Drawing lines, circles, arcs, and polygons",
        "Using the draw, modify, and precision tools",
        "Object snaps and grid settings"
      ]
    },
    {
      heading: "3. Editing Tools",
      points: [
        "Move, copy, rotate, scale, trim, extend",
        "Fillet, chamfer, offset, and mirror commands"
      ]
    },
    {
      heading: "4. Layers & Properties",
      points: [
        "Creating and managing layers",
        "Assigning colors, linetypes, and lineweights to layers",
        "Layer visibility and printing settings"
      ]
    },
    {
      heading: "5. Advanced Drawing Techniques",
      points: [
        "Creating blocks and attributes",
        "Dynamic blocks and tool palettes",
        "Working with external references (Xrefs)"
      ]
    },
    {
      heading: "6. Dimensioning & Annotation",
      points: [
        "Linear, angular, and radius dimensions",
        "Text and leaders",
        "Multileader, tables, and hatching"
      ]
    },
    {
      heading: "7. 3D Drawing & Modeling (Optional/Advanced)",
      points: [
        "Basic 3D objects: cubes, spheres, cylinders",
        "3D viewports and camera views",
        "Creating 3D solid models and meshes"
      ]
    },
    {
      heading: "8. Printing & Plotting",
      points: [
        "Plot settings, paper size, and layout setup",
        "Creating and managing viewports",
        "Outputting to PDF or printer"
      ]
    },
    {
      heading: "9. Project Work",
      points: [
        "Real-world drawing projects (e.g., floor plans, mechanical parts)"
      ]
    }
  ]
},
//phythan
{
  title: "Python Syllabus – Short Version",
  description: "Learn Python programming from scratch. This beginner-friendly course covers core concepts, data structures, file handling, and basic OOP, with hands-on projects and practical examples.",
  image: "/phy.jpg", // Replace with your correct image path
  slug: "phythonfjkfjsklfjlfsjflasf",
  duration: "2 Months",
  students: "500+",
  certification: "Yes",
  link: "https://www.youtube.com/watch?v=kqFLQG484pg", // Update if needed
  content: `
    This Python course is ideal for beginners and aspiring developers. It covers everything from syntax and data types to object-oriented programming and popular libraries like NumPy and Pandas. By the end, students will be able to build small applications and scripts with confidence.
  `,
  topics: [
    {
      heading: "1. Introduction to Python",
      points: [
        "What is Python?",
        "Python installation and setup",
        "Writing and running your first Python program"
      ]
    },
    {
      heading: "2. Basic Syntax and Data Types",
      points: [
        "Variables, strings, numbers, and booleans",
        "Lists, tuples, sets, and dictionaries",
        "Basic input and output functions"
      ]
    },
    {
      heading: "3. Control Flow",
      points: [
        "If, elif, else statements",
        "For and while loops",
        "Break, continue, and pass"
      ]
    },
    {
      heading: "4. Functions and Modules",
      points: [
        "Defining and calling functions",
        "Arguments, return values, and scope",
        "Importing and using modules (math, random)"
      ]
    },
    {
      heading: "5. Data Structures",
      points: [
        "Lists, tuples, sets, and dictionaries",
        "List comprehensions",
        "Advanced operations on data structures"
      ]
    },
    {
      heading: "6. File Handling",
      points: [
        "Reading from and writing to files",
        "Working with text and CSV files",
        "File exceptions and error handling"
      ]
    },
    {
      heading: "7. Object-Oriented Programming (OOP)",
      points: [
        "Classes and objects",
        "Inheritance, polymorphism, encapsulation",
        "Constructors, methods, and attributes"
      ]
    },
    {
      heading: "8. Libraries and Frameworks",
      points: [
        "Introduction to popular libraries: NumPy, Pandas, Matplotlib",
        "Web frameworks (optional): Flask or Django (basic intro)"
      ]
    },
    {
      heading: "9. Debugging and Testing",
      points: [
        "Error handling with try/except",
        "Writing test cases using unittest"
      ]
    },
    {
      heading: "10. Project Work",
      points: [
        "Mini projects using Python concepts and libraries"
      ]
    }
  ]
}


  // ... other courses with added details
];

const CourseDetails = () => {
  const { slug } = useParams();
  const course = courses.find((c) => c.slug === slug);

  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center p-8 bg-white rounded-xl shadow-lg max-w-md mx-auto">
          <h2 className="text-2xl font-bold text-red-600 mb-4">Course Not Found</h2>
          <p className="text-gray-600 mb-6">The requested course could not be found.</p>
          <a 
            href="/courses" 
            className="inline-flex items-center px-4 py-2 bg-[#0C0950] text-white rounded-lg  transition-colors"
          >
            <FaArrowLeft className="mr-2" />
            Browse All Courses
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        {/* Course Header */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/2">
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-8 md:w-1/2">
              <div className="uppercase tracking-wide text-sm text-red-600 font-semibold">Featured Course</div>
              <h1 className="mt-2 text-3xl font-bold text-gray-900">{course.title}</h1>
              <p className="mt-3 text-lg text-gray-600">{course.description}</p>
              
              {/* Course Stats */}
              <div className="mt-6 grid grid-cols-3 gap-4">
                <div className="flex items-center">
                  <FaClock className="text-gray-400 mr-2" />
                  <span className="text-sm text-gray-600">{course.duration}</span>
                </div>
                <div className="flex items-center">
                  <FaUserGraduate className="text-gray-400 mr-2" />
                  <span className="text-sm text-gray-600">{course.students}</span>
                </div>
                <div className="flex items-center">
                  <FaCertificate className="text-gray-400 mr-2" />
                  <span className="text-sm text-gray-600">{course.certification}</span>
                </div>
              </div>

              {/* Enrollment Button */}
              <div className="mt-8">
                <a 
                  href="/contact" 
                  className="w-full flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white  bg-[#0C0950] hover:bg-red-500  transition-all duration-300"
                >
                  Enroll Now
                </a>
              </div>
              <div className="mt-8">
                <a 
                  href={course.link} 
                  className="w-full flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-[#0C0950] hover:bg-red-500 transition-all duration-300"
                >
                  Material
                </a>
              </div>
               
    

            </div>
          </div>
        </div>

        {/* Course Content */}
        <div className="mt-8 bg-white rounded-xl shadow-md overflow-hidden">
          <div className="p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Course Details</h2>
            <div className="prose max-w-none text-gray-700">
              <p>{course.content}</p>
              
              {/* Syllabus Section */}
              <h3 className="text-xl font-semibold mt-8 mb-4 text-gray-800">What You'll Learn</h3>
              <ul className="space-y-2">
                 {course.topics.map((section, idx) => (
  <div key={idx} className="mb-6">
    <h3 className="text-lg font-semibold text-gray-800">{section.heading}</h3>
    <ul className="list-disc list-inside text-gray-700 mt-2">
      {section.points.map((point, i) => (
        <li key={i}>{point}</li>
      ))}
    </ul>
  </div>
))}

              </ul>
            </div>

            {/* Additional CTA */}
            <div className="mt-10 text-center">
              <a 
                href="/contact" 
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-gradient-to-r from-green-600 to-green-800 hover:from-green-700 hover:to-green-900 transition-all duration-300"
              >
                Start Learning Today
              </a>
              <a 
                href="/courses" 
                className="ml-4 inline-flex items-center px-4 py-2 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
              >
                <FaArrowLeft className="mr-2" />
                Back to Courses
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <Contact />
    </div>
  );
};

export default CourseDetails;