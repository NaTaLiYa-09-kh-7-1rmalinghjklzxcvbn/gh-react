function Message(props) {
    return (
        <div style={{ textAlign: "center", color: 'red' }}>
            привет {props.name}
        </div>
    );
}

export default Message;
