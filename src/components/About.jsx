import myimg from "../assets/profilePic.jpg"
export default function About() {
  return (
    <div
      id="about"
      className="mx-auto max-w-screen-2xl">
      <div className="p-4 lg:px-20">
        <div className="pb-8">
          <p className="text-4xl border-b-4 border-gray-500 font-bold inline">
            About Me
          </p>
        </div>
        <div className="lg:grid lg:grid-cols-3">
          <div className=" w-1/2 mx-auto my-auto">
            <img
              className="rounded-3xl border-4 border-black mx-auto w-3/4 sm:w-1/2 lg:w-full hover:scale-105 duration-500 "
              src={myimg}
              alt="my image"
            />
          </div>
          <div className="col-span-2">
          <p className="md:text-xl text-justify pt-4 mt-1">
  Currently a final year student at Motilal Nehru National Institute of Technology, Allahabad, Prayagraj, I am deeply passionate about using advanced technology to create exceptional, user-centric digital experiences that surpass expectations.<br /><br />
  As a proficient full-stack engineer, I excel in both front-end and back-end development. I design engaging user interfaces with ReactJS and integrate them with robust back-end systems using NodeJS, ExpressJS, and MongoDB to deliver balanced, functional, and visually appealing solutions. My development approach is holistic and focused on user experience, ensuring seamless, responsive applications that meet modern web challenges.<br /><br />
  Additionally, my problem-solving skills are honed by successfully tackling over 700+ data structures and algorithms questions on platforms like CodeChef, LeetCode, CodingNinja, and GeeksforGeeks, enhancing my ability to navigate complex software development issues.
</p>

          </div>
        </div>
      </div>
    </div>
  );
}

