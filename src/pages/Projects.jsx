import "../assets/stylesheets/project.css"
import Card from "../components/Card"
import pic1 from "../assets/images/projects/project1.png"
import pic2 from "../assets/images/projects/project2.png"
import pic3 from "../assets/images/projects/project3.png"
import pic4 from "../assets/images/projects/project4.png"
import pic5 from "../assets/images/projects/project5.png"
import pic6 from "../assets/images/projects/more.webp"

const Projects = () => {
    const data = [
        {
            imgurl: pic2,
            name: "CEP Exams",
            description: "Enhanced user Expereince on CEP Exams website(NextJs + TailwindCss) by adding features like search bar and pagination etc.",
            projectlink: "https://cepexam.com/"
        },
        {
            imgurl: pic3,
            name: "Flappy Bird",
            description: "A crypto coin pre-sale website(Nextjs TailwindCss) with some animations",
            projectlink: "https://flappybird-gules-sigma.vercel.app/"
        },
        {
            imgurl: pic1,
            name: "Zoi Network",
            description: "A crypto mining web application(mern stack) with some unique idea",
            projectlink: "https://zoinetwork.vercel.app/"
        },
        {
            imgurl: pic4,
            name: "My Old Portfolio",
            description: "my old portfolio website(reactjs tailwindcss framer-mation)",
            projectlink: "https://nauman-portfolio.vercel.app/"
        },
        {
            imgurl: pic5,
            name: "1core",
            description: "Made responsive an already built crypto investment project(html css)",
            projectlink: "https://nauman331.github.io/onecore.github.io/"
        },
        {
            imgurl: pic6,
            name: "Show More",
            description: "My all projects and tasks available on my github",
            projectlink: "hhttps://github.com/nauman331"
        },
    ]
    

    return (
        <>
           <div className="card-container">
         <h3 style={{textAlign: "center", marginTop:"3rem", padding: "0rem 1rem"}}>Crafting digital experiences, one line of code at a time.</h3>
           <Card data={data}/>
           </div>
        </>
    )
}

export default Projects
