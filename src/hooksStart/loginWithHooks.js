import React, {useState} from "react"

export default function LoginWithHooks() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [feedback, setFeedback] = useState("")

  const handleSubmit = e => {
    e.preventDefault()
    const feedback = `Thanks for loging in with username ; "${username}" and password "${password}"`
    setFeedback(feedback)
  }
  // changes on branch phase2

// Changes on master
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="username"
          value={username}
          onChange={e => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <button className="button" type="submit">
          Login
        </button>
      </form>
      {feedback && <p>{feedback}</p>}
    </div>
  )
}
