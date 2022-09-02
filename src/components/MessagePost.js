
const MessagePost = (props) => {
    return (
        <div className='post'>
            <strong>{props.number} {props.message.text}</strong>
            <div>{props.message.author}</div>
            <div>
                <button>Удалить</button>
            </div>
        </div>
    )
}
export default MessagePost