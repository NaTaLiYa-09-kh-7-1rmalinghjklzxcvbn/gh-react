function Message(props) {
    return (
        <div style={{ textAlign: "center", margin: '20px', color: 'red' }}>
            привет {props.name}
        </div>
    );
}

export default Message;
