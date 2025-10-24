import React from 'react'
import { motion } from 'framer-motion'

const skills = {
  'Languages':['Python','SQL','JavaScript'],
  'Frameworks':['FastAPI','Streamlit','React'],
  'Data & Tools':['Grafana','AWS','Docker','Redis','MongoDB','Postgres'],
  'Analytics / ML':['Pandas','NumPy','Scikit-Learn'],
  'Infra / DevOps':['Git','CI/CD','Linux','Raspberry Pi']
}

export default function SkillsFull(){
  return (
    <div className="container">
      <h2 className="text-2xl font-semibold mb-3">Skills & Tech Stack</h2>
      <div className="grid md:grid-cols-2 gap-4">
        {Object.entries(skills).map(([cat, list], i)=>(
          <motion.div key={i} initial={{opacity:0, x:-6}} whileInView={{opacity:1,x:0}} viewport={{once:true}} className="card">
            <div style={{fontWeight:700}}>{cat}</div>
            <div style={{marginTop:8}} className="skills-grid">
              {list.map((s,idx)=>(<div key={idx} className="skill-pill small">{s}</div>))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
