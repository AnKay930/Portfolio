import React from 'react'
import ProjectCard from './ProjectCard'
import TinDogImage from "../../../images/projects/TinDog.png"
import ToDoListImage from "/images/projects/ToDoList.png"

const projectsData = [
    {
        id: 1,
        title:"TinDog Website",
        description: "Creating a front page for a subscription-based app",
        image: TinDogImage,
        tag: ["All", "Web"]
    },
    {
        id: 2,
        title:"To-Do List Website",
        description: "Creating Tasks with Title and Description and Ability to Delete those Tasks on Completion",
        image: {ToDoListImage},
        tag: ["All", "Web"]
    }
]

const ProjectSection = () => {
  return (
    <div>
        <h2>My Projects</h2>
        <div>{projectsData.map((project) => <ProjectCard 
        key={project.id} 
        title={project.title} 
        description={project.description} 
        imgUrl={ ...project.image} 
        tags={project.tag}/>

        )}
        </div>
        </div>
  )
}

export default ProjectSection