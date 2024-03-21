// eslint-disable-next-line no-unused-vars
import React from 'react'
import Card from './Card'

function Career() {
  let data = [
    {
      image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSD2vG-s87IN3CaLkDF1jmPlFpN_TQzoTeERg&usqp=CAU",
      title  : "UI/UX Designer Job Description and Roles & Responsibilities",
      description : "UI UX is the abbreviated word that’s been rocking the trend over the years, especially in the past decade. You know what UI UX is, but do you know their roles and responsibilities? Do you know anything about the UI/UX designer job description?"
    },
    {
      image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7SaWO8LHPXFRy0zStyJQwfdBmM641gHZFeA&usqp=CAU",
      title  : "Top 5 IT Jobs for Economics Students",
      description : "In today’s digital age, the intersection of economics and technology offers exciting career opportunities for students with a background in economics. As the world becomes increasingly interconnected, businesses are relying on technology to drive growth and make data-driven decisions. This has created a high demand for professionals who possess both economic acumen and technical skills."
    }
  ]
  return <>
    <div className="container mt-5">
      <div className="row">
        {
          data.map((e,i)=>{
            return <Card cardData={e} key={i}/>
          })
        }
      </div>
    </div>
  </>
}

export default Career