// Write your code here
import './index.css'

const Message = props => {
  const {message} = props
  const msg = message ? 'Welcome User' : 'Please Login'
  return <h1 className="content">{msg}</h1>
}
export default Message
