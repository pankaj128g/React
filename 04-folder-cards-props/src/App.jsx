import React from 'react'
import Card from './components/Card'

function App() {

  const jobOpenings = [
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZfGyEcEdPfzca-b4iATLHuHIk80_yYMtRWw&s",
    companyName: "Google",
    datePosted: "5 days ago",
    post: "Frontend Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$58/hr",
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrppB3mWV5QdrddW0FK-KWznGuY7CULCjcMw&s",
    companyName: "Meta",
    datePosted: "2 weeks ago",
    post: "React Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$65/hr",
    location: "Bengaluru, India"
  },
  {
    brandLogo: "https://1000logos.net/wp-content/uploads/2016/10/Amazon-logo-meaning.jpg",
    companyName: "Amazon",
    datePosted: "3 days ago",
    post: "DevOps Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$52/hr",
    location: "Hyderabad, India"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBA5U88jLaKHSI5Mg_grZ6BX-KTmICy-cCQg&s",
    companyName: "Apple",
    datePosted: "10 days ago",
    post: "iOS Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$78/hr",
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShBu0cnozmDr454aSmHhedZltGVgU8fTfZwA&s",
    companyName: "Microsoft",
    datePosted: "1 week ago",
    post: "Cloud Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$70/hr",
    location: "Pune, India"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLNvnbt5ScG3ttZ1u2Wo_pllGcj3UfTIpM4g&s",
    companyName: "Netflix",
    datePosted: "4 weeks ago",
    post: "Backend Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$95/hr",
    location: "Remote"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIOAr8Zd1_kexu3OqqM3aX7HRcN-qH4u_A3g&s",
    companyName: "NVIDIA",
    datePosted: "6 days ago",
    post: "AI/ML Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$88/hr",
    location: "Bengaluru, India"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpha7gvmfpOlK-EilDO5pbveIhirXhR4b3Vg&s",
    companyName: "OpenAI",
    datePosted: "8 weeks ago",
    post: "Full Stack Engineer",
    tag1: "Part Time",
    tag2: "Senior Level",
    pay: "$110/hr",
    location: "Remote"
  },
  {
    brandLogo: "https://download.logo.wine/logo/Uber/Uber-Logo.wine.png",
    companyName: "Uber",
    datePosted: "12 days ago",
    post: "Mobile Developer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$62/hr",
    location: "Hyderabad, India"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzTmVc7unwsynm3Ofz31vehWOoGK4FMpkPtw&s",
    companyName: "Adobe",
    datePosted: "10 weeks ago",
    post: "UI Engineer",
    tag1: "Contract",
    tag2: "Junior Level",
    pay: "$55/hr",
    location: "Noida, India"
  }
];

console.log(jobOpenings);

  return (
    <div className='parent'>
    
    {jobOpenings.map(function(elem,idx){
      return <div key={idx}>
        <Card company={elem.companyName} logo={elem.brandLogo} location={elem.location}
         datepost={elem.datePosted} tag11={elem.tag1} tag22={elem.tag2} pay={elem.pay} post1={elem.post} />
      </div>
    })}
      
    </div>
  )
}

export default App
