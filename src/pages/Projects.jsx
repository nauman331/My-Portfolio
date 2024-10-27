import "../assets/stylesheets/project.css"
import Card from "../components/Card"
import pic1 from "../assets/images/projects/project1.webp"
import pic2 from "../assets/images/projects/project2.webp"
import pic3 from "../assets/images/projects/project3.webp"
import pic4 from "../assets/images/projects/project4.webp"
import pic5 from "../assets/images/projects/project5.webp"
import pic6 from "../assets/images/projects/more.webp"
import pic7 from "../assets/images/projects/project6.webp"

const Projects = () => {
    const data = [
        {
            imgurl: pic2,
            name: "CEP Exams",
            description: "Enhanced user Expereince on CEP Exams website(NextJs + TailwindCss) by adding features like search bar and pagination etc.",
            projectlink: "https://cepexam.com/",
            category: "fullstack"
        },
        {
            imgurl: pic7,
            name: "Prime BNB",
            description: "A crypto DEFI website(Typescript + shadcn/magic ui) with solidity and web3",
            projectlink: "https://prime-bnb.vercel.app/",
            category: "fullstack"
        },
        {
            imgurl: pic3,
            name: "Flappy Bird",
            description: "A crypto coin pre-sale website(Nextjs TailwindCss) with some animations",
            projectlink: "https://flappybird-gules-sigma.vercel.app/",
            category: "frontend"
        },
        {
            imgurl: pic1,
            name: "Zoi Network",
            description: "A crypto mining web application(mern stack) with some unique idea",
            projectlink: "https://zoinetwork.vercel.app/",
            category: "fullstack"
        },
        {
            imgurl: pic4,
            name: "My Old Portfolio",
            description: "my old portfolio website(reactjs tailwindcss framer-mation)",
            projectlink: "https://nauman-portfolio.vercel.app/",
            category: "frontend"
        },
        {
            imgurl: pic5,
            name: "1core",
            description: "Made responsive an already built crypto investment project(html css)",
            projectlink: "https://nauman331.github.io/onecore.github.io/",
            category: "frontend"
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
