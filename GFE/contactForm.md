```bash
import submitForm from './submitForm';

export default function App() {
  return (
    <form
      action="https://questions.greatfrontend.com/api/questions/contact-form"
      method="POST"
      onSubmit={submitForm}
    >
      <div>
        <label htmlFor="name">Name: </label>
        <input 
          type="text"
          name="name"
          id="name"
          placeholder="Enter Your Name"
        />
      </div>

      <div>
        <label htmlFor="email">Email: </label>
        <input 
          type="email"
          name="email"
          id="email"
          placeholder="Enter Your Email"
        />
      </div>

      <div>
        <label htmlFor="message">Message: </label>
        <textarea
          name="name"
          id="name"
          placeholder="Enter Your Thoughts"
        />
      </div>

      <button
        type="submit"
      >
        Send
      </button>
    </form>
  );
}

```
