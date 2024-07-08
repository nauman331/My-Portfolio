import "../assets/stylesheets/client.css"
import pic1 from "../assets/images/clients/client1.jpeg"
import pic2 from "../assets/images/clients/client2.jpeg"
import pic3 from "../assets/images/clients/client3.jpeg"
import pic4 from "../assets/images/clients/client4.jpeg"
import pic5 from "../assets/images/clients/client5.png"
import ClientCard from "../components/ClientCard"

const Clients = () => {

    const data = [
        {
            imgurl: pic1,
            name: "Graphion Media",
            description: "Built very sleek and beautifull design website, loved his work and recommend for any frontend work.Highly recomended from me because of his elegent work",
        },
        {
            imgurl: pic2,
            name: "ROI MH",
            description: "I already working with Muhammad Nauman from 1 year as he always provides best results in making responsive websites and aligning dashboards",
        },
        {
            imgurl: pic3,
            name: "Mr. Nabeel",
            description: "The portfolio website you made for my sister zahra mauji is very beautifull. She loved it very much. I will love to work with you again",
        },
        {
            imgurl: pic4,
            name: "Edutopia",
            description: "Very fast developer! compeleted full webpage only in two days including all the responsive and animation work",
        },
        {
            imgurl: pic5,
            name: "AR Saleemi",
            description: "I had a great experience working with Muhammad Nauman. They improved the user experience on my website by implementing effective search features and pagination. Their attention to detail and commitment to enhancing usability were impressive. I highly recommend Muhammad Nauman for UX-related projects.",
        },
    ]

    return (
        <>
        <h3 style={{textAlign: "center", marginTop:"3rem", padding: "0rem 1rem"}}>Dont trust me, Trust the feedback from my satisfied clients.</h3>
           <div className="client-container">
            <ClientCard data={data}/>
            </div>
        </>
    )
}

export default Clients
