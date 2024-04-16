import Project from "./Project";
import pic1 from "../../assets/project1.png"
import pic2 from "../../assets/project2.png"
import pic3 from "../../assets/project3.png"
import pic4 from "../../assets/project4.png"
export default function Projectlist() {
  const projects = [
    {
      id: 1,
      src: pic1,
      link: "",
      repo: "https://github.com/shivampanwar15/FalseExchange",
      data: "The app is a mock stock exchange built with the MERN stack, enabling secure login and order management where users can place, adjust, or cancel investment orders even after partial execution. It features strong authentication, efficient order handling, and detailed portfolio tracking in a financial setting.",
      heading: "A Mock Trading Platform - FalseExchange"
    },
    {
      id: 2,
      src: pic2,
      link: "https://foodery-food-delivery-web-app.vercel.app/",
      repo: "https://github.com/shivampanwar15/Foodery-Food-Delivery-Web-App",
      data: "The app is a scalable online food ordering platform with a user-friendly single-page interface, allowing menu browsing, item selection, cart management, and secure payments via Stripe. It combines React.js, Node.js, and MongoDB technologies to ensure a smooth and responsive user experience with optimized backend operations.",
      heading: "Online Food Ordering Web App - Foodery"
    },
    {
      id: 3,
      src: pic3,
      link: "https://github.com/shivampanwar15/TollCalculator",
      repo: "https://github.com/shivampanwar15/KidSecure",
      data: "The app is a web-based authentication system that uses facial recognition to estimate a user's age during the login/signup process. It leverages FACE-api.js for age prediction and incorporates JSON Web Tokens for secure authentication, with the added functionality of directing users to appropriate content based on their age.on using NodeJS in the backend and ReactJS in the frontend.",
      heading: "User Authentication Web App - KidSecure"
    },
    {
      id: 4,
      src: pic4,
      link: "https://github.com/shivampanwar15/TollCalculator",
      repo: "https://github.com/shivampanwar15/TollCalculator",
      data: "The app is a online Toll Calculator based on TollGuru Api. Basically you can calculate toll between two cities and average cost of travel which include fuel charges as well according to vechicle category. ",
      heading: "DriveCharge"
    },
  ];

  return (
    <div id="project" className="px-4 lg:px-20 mx-auto max-w-screen-2xl">
      <div className="pb-4 my-10">
        <p className="text-4xl font-bold inline border-b-4 border-gray-500">
          Projects
        </p>
      </div>

      <div className="xl:mx-4 grid md:grid-cols-2 lg:grid-cols-3 justify-items-center justify-center gap-8 xl:px-12">
        {projects.map((data) => (
          <Project props={data} />
        ))}
      </div>
    </div>
  );
}
