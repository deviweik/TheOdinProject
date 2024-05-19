import React, { useState } from 'react';

import PersonalDetailsResume from './PersonalDetailsResume';
import PersonalDescriptionResume from './PersonalDescriptionResume';
import WorkExperienceResume from './WorkExperienceResume';
import EducationResume from './EducationResume';
import SkillsResume from './SkillsResume';

const testData = {
  "personalDetails": {
    "name": "Devin Weikert",
    "address": "139 Gettysburg Lane, Holmdel, NJ 07733",
    "email": "weikert.devin@gmail.com",
    "phoneNumber": "4845350546"
  },
  "personalDescription": "I'm a hard worker who has a constant need to learn new things. I pride myself on coming up with unique and effective soltions to difficult problems. I work best when I have peers that can help me stay focused on the big picture when tackling issues.",
  "workExperience": {
    "currentRoleIndex": 2,
    "roles": [
      {
        "id": 0,
        "jobTitle": "Field Engineer",
        "companyName": "SLB",
        "location": "Midland, TX",
        "currentlyEmployed": false,
        "startDate": "2021-08-11",
        "endDate": "2022-06-25",
        "isLastRole": false,
        "bullets": [
          {
            "id": 0,
            "value": "I ran those oil fields man."
          },
          {
            "id": 1,
            "value": "So much crazy exciting work you wouldn't even believe."
          },
          {
            "id": 2,
            "value": "Could have done this job when I was in 10th grade..."
          }
        ]
      },
      {
        "id": 1,
        "jobTitle": "Product Manager",
        "companyName": "NextMed",
        "location": "New York City, NY (Hybrid)",
        "currentlyEmployed": false,
        "startDate": "2022-09-11",
        "endDate": "2023-02-22",
        "isLastRole": false,
        "bullets": [
          {
            "id": 0,
            "value": "This was much better, started learning real skills."
          },
          {
            "id": 1,
            "value": "No leadership, had to make my own decisions on limited knowledge/experience. But I'm a problem solver and it went well."
          },
          {
            "id": 2,
            "value": "Company messed up by not refunding anyone and getting shut down by their payment processor, I got let go during the panic/readjustment period. I called one of our close vendors the same day and got offered a new job with them."
          }
        ]
      },
      {
        "id": 2,
        "jobTitle": "Technical Solutions Engineering Manager",
        "companyName": "OpenLoop Health",
        "location": "Des Moines, IA (Remote)",
        "currentlyEmployed": true,
        "startDate": "2023-03-22",
        "endDate": "",
        "isLastRole": true,
        "bullets": [
          {
            "id": 0,
            "value": "This was where I really had the chance to start implementing the skills I'm learning and apply my natural problem solving ability to the tech world. "
          },
          {
            "id": 1,
            "value": "I am self learning programming on my personal time, and finding ways to apply it to my work whenever I can. I have implemented solutions for this company that have generated revenue at least 5x my salary."
          },
          {
            "id": 2,
            "value": "I was recently promoted to Solutions Engineering manager, a title that reflects the technical solutions I've been able to implement while also serving as a Product/Project Manager."
          }
        ]
      }
    ]
  },
  "education": {
    "schoolName": "Georgia Tech",
    "location": "Atlanta, GA",
    "degree": "Bachelors",
    "major": "Biomedical Engineering",
    "details": "GPA: 3.4",
    "isPursuing": false,
    "gradDate": "2021-05-08"
  },
  "skills": [
    {
      "id": 0,
      "value": "Fast learner with great problem solving skills, shown through my ability to thoroughly map process flows and implement them."
    },
    {
      "id": 1,
      "value": "Technical mindset, I believe in creating systems that are geared towards maintaining data in a way that supports data driven decisions at every level of a business."
    },
    {
      "id": 2,
      "value": "I have great ideas. I like to work collaboratively. I can solve most problems, and I openly communicate it when I'm unable to solve them on my own."
    }
  ]
};

const Resume = ({ formData }) => {
  // formData = testData;
  if (formData.personalDetails.name) {
    return (
      <div className='resume'>
        <PersonalDetailsResume
          formData={formData.personalDetails}
        />
        <div className='lineBreak'></div>
        <PersonalDescriptionResume
          formData={formData.personalDescription}
        />
        <WorkExperienceResume
          formData={formData.workExperience}
        />
        <EducationResume
          formData={formData.education}
        />
        <SkillsResume
          formData={formData.skills}
        />
      </div>
    );
  } else {
    return (
      <h2 className='errorMessage'>Data input is invalid, please try again.</h2>
    );
  }
};

export default Resume;