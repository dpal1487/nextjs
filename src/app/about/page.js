import Link from "next/link";

const About = () => {
  return (
    <div>
      <h1>About Page</h1>
      <Link href="/" className="m-4 ">
        Home Page
      </Link>
      <Link href="/about/aboutcollege" >About College</Link>
      <Link href="/about/aboutstudent" className="m-4">About Student</Link>
    </div>
  );
};

export default About;
