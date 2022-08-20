// Write your code here.
import './index.css'

const EmojiCard = props => {
  const {items, clickEmoji} = props
  const {id, emojiName, emojiUrl} = items
  const clickEmojis = () => {
    clickEmoji(id)
  }

  return (
    <li className="emoji-items">
      <button className="emoji-button" type="button" onClick={clickEmojis}>
        <img className="emoji-image" alt={emojiName} src={emojiUrl} />
      </button>
    </li>
  )
}
export default EmojiCard
