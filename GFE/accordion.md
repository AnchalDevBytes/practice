```bash
import { useState } from 'react';

export default function Accordion() {
  const [openId, setOpenId] = useState('html');

  const accordion = [
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
      {accordion.map((item) => (
        <div
          key={item.id}
        >
          <div 
            onClick={() => setOpenId(item.id)}
          >
            {item.title} <span aria-hidden={true} className="accordion-icon" />
          </div>
        

          {openId === item.id && (
            <div>
              {item.content}
            </div>
          )}

        </div>
      ))}
    </div>
  );
}

```
