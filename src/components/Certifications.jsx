import React from 'react'

export default function Certifications(){
  const items = ['Python: Introduction to Data Science and Machine Learning A-Z','Cybersecurity Essentials — Cisco','Data Scientist Certificate — Datacamp (Apr 2025)','Introduction to Packet Tracer — Cisco','Introduction to Cybersecurity — Cisco','Publication: Spatio-temporal Feature-based Weapon and Violence Detection (IEEE, Oct 2023)']
  return (
    <div>
      <h3 className="text-xl font-semibold mb-3">Certifications & Publications</h3>
      <div className="space-y-2">
        {items.map((it,i)=>(<div key={i} className="card"><div className="small">{it}</div></div>))}
      </div>
    </div>
  )
}
