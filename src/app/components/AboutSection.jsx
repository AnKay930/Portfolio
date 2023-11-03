"use client"

import React,{useState, useTransition} from 'react'
import Image from 'next/image'
import aboutImage from "/images/image2.png"
import TabButton from './TabButton'

const TAB_DATA = [
    {
        title: "Skills",
        id: "skills",
        content: (
            <ul className='list-disc pl-2'>
                <li>Node.js</li>
                <li>Express</li>
                <li>PostgreSQl</li>
                <li>Javascript</li>
                <li>React</li>
            </ul>
        )
    },
    {
        title: "Education",
        id: "education",
        content: (
            <ul className='list-disc pl-2'>
                <li>Bachelors in Computer Application</li>
                <li>Dr. C.V. Raman University</li>
            </ul>
        )
    },
    {
        title: "Experience",
        id: "experience",
        content: (
            <ul className='list-disc pl-2'>
                <li>Multiple Projects</li>
                <li>Solo and Group</li>
            </ul>
        )
    }
]


const AboutSection = () => {
    const [tab, settab] = useState("skills")
    const [isPending, startTransition] = useTransition()


    const handleTabChange = (id) =>{
        startTransition(()=>{
            settab(id)
        })
    }
  return (
    <section className='text-white'>
        <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
        <Image src={aboutImage} width={500} height={500}/>
        <div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
            <h2 className='text-4xl font-bold text-white mb-4'>About Me</h2>
            <p className='text-base lg:text-lg'>
            Creative web developer dedicated to developing and optimizing
            interactive, user-friendly, and feature-rich websites. I use strong
            analytical skills and attention to detail in order to deliver original and
            efficient web solutions, provide technical knowledge and expertise,
            and build new websites from start to finish.
            </p>
            <div className='flex flex-row mt-8'>
                <TabButton 
                selectTab={() => handleTabChange("skills")} active={tab === "skills"}> 
                {" "}
                Skills{" "}
                </TabButton>
                <TabButton 
                selectTab={() => handleTabChange("education")} active={tab === "education"}> 
                {" "}
                Education{" "}
                </TabButton>
                <TabButton 
                selectTab={() => handleTabChange("experience")} active={tab === "experience"}> 
                {" "}
                Experience{" "}
                </TabButton>
                
            </div>
            <div className='mt-8'>
            {TAB_DATA.find((t) => t.id === tab).content}
            </div>
        </div>
        </div>
        </section>
  )
}

export default AboutSection