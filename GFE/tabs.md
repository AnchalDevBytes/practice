```bash
import { useState } from 'react';

export default function Tabs() {
  const [active, setActive] = useState('html');

  const tabs = [
    {
      id: 'html',
      title: 'HTML',
      content: 'The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser.'
    },
    {
      id: 'css',
      title: 'CSS',
      content: 'Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML or XML.'
    },
    {
      id: 'javascript',
      title: 'Javascript',
      content: 'JavaScript, often abbreviated as JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS.'
    }
  ]

  return (
    <div>
      <div>
       {tabs.map((tab) => (
         <button 
          key={tab.id} 
          onClick={() => setActive(tab.id)}
        >
          {tab.title}
        </button>
       ))}
      </div>

      <div>
        {
          tabs.filter((tab) => tab.id === active).map((tab) => (
            <p 
              key={tab.id}
            >
              {tab.content}
            </p>
          ))
        }
      </div>
    </div>
  );
}

```
