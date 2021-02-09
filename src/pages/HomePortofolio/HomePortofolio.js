
import React from 'react';

const Awards = (props) => {
    const titleComponent = "AWARDS AND CERTIFICATIONS";
    let listAwards = [
        "Google Analytics Certified Developer",
        "Mobile Web Specialist - Google Certification",
        "1 st Place - University of Colorado Boulder - Emerging Tech Competition 2009",
        "1 st Place - University of Colorado Boulder - Adobe Creative Jam 2008 (UI Design Category)",
        "2 nd Place - University of Colorado Boulder - Emerging Tech Competition 2008",
        "1 st Place - James Buchanan High School - Hackathon 2006",
        "3 rd Place - James Buchanan High School - Hackathon 2005",
      ];
      return(
          <div>
          <h1>
              {titleComponent}
          </h1>
          <ul>
              {
                  listAwards.map((val,index) =>  (
                        <li>
                            {val}
                        </li>  
                      )
                  )
              }
          </ul>
          </div>
      )
}

const About = (props) => {
    let _data = {
        'Name' : 'Ahmad Anan R',
        'Birth Date' : '7 September 1994',
        'Place Of Birth' : 'Makassar'
    }
    return (
        <div>
        <h1>Biodata</h1>
        <ul>
            {
                Object.keys(_data).map((p,i) => (
                        <li>{p} : {_data[p]}</li>
                    
                ))
            }
        </ul>

        </div>
    )
}

const Experience = (props) => {
    let _exp = [
        {
            'Name' : 'Experience 1',
            'Year' : 2012
        },
        {
            'Name' : 'Experience 2',
            'Year' : 2021
        }
    ]

    return (
        <div>
         <h1>
             Experience
          </h1>
          <ul>
            {
                _exp.map((v,i) => (
                    <li>
                        {v['Year']} - {v['Name']}
                    </li>

                ))

            }
        </ul>

        </div>
    )
}

const Skills = (props) => {
    let _skill = [
        {
            'Name' : 'Javascript',
            'Year' : 2012
        },
        {
            'Name' : 'C#',
            'Year' : 2021
        }
    ]

    return (
        <>
         <h1>
         Skills
          </h1>
          <ul>
            {
                _skill.map((v,i) => (
                    <li>
                        {v['Year']} - {v['Name']}
                    </li>

                ))

            }
        </ul>

        </>
    )
}

const Interest = (props) => {
    let _interest = [
        {
            'Name' : 'DevOps',
            'Year' : 2021
        },
        {
            'Name' : 'Backend',
            'Year' : 2021
        },
        {
            'Name' : 'Frontend',
            'Year' : 2021
        }
    ]

    return (
        <div>
         <h1>
         Interest
          </h1>
          <ul>
            {
                _interest.map((v,i) => (
                    <li>
                        {v['Year']} - {v['Name']}
                    </li>

                ))

            }
        </ul>

        </div>
    )
}

class HomePortfolio extends React.Component{
    render() {
        return (
            <div>
                <About></About>
                <Experience></Experience>
                <Skills></Skills>
                <Interest></Interest>
                <Awards></Awards>
            </div>
        )
    }
}


export default HomePortfolio;
