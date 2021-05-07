import React from "react";
import { useParams } from "react-router-dom";

const SinglePage = () => {
    // About page Data 
    const aboutData = [
        {
            slug: "about-app",
            title: "About the App",
            description:
                "In this app, you can add, delete, submit and edit items.  To edit items, simply click the edit icon. Once you are done, press the enter key to resubmit. This app will persist your data in the browser local storage. So whether you reload, close your app or reopened it, you still have access to your to-dos items.",
        },
        {
            slug: "about-author",
            title: "About the Author",
            description:
                "This app was developed by Cynthia Iradukunda, a software developer. She is open to any opportunities: internships or jobs. So go ahead and connect with Cynthia Iradukunda on Twitter @IraduCynthia.",
        },
    ]

    // Get the relative path(slug)
    const { slug } = useParams()

    //Get the content based on the collected slug
    const aboutContent = aboutData.find(item => item.slug === slug)

    //destructure the aboutContent
    const { title, description } = aboutContent

    return (
        <div className="main__content">
            <h1>{title}</h1>
            <p>{description}</p>
        </div>
       
    )
}
export default SinglePage;