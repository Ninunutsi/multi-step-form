import React from 'react'

interface rulesI {
  description: string
  rules: string[]
}

const Rules: React.FC<rulesI> = ({ description, rules }) => {
  return (
    <div className="text-slate-600 mb-4 text-xs">
      {description}
      <ul className="list-disc text-xs ml-4 mt-2">
        {rules.map((rule, index) => (
          <li key={index}>{rule}</li>
        ))}
      </ul>
    </div>
  )
}

export default Rules
