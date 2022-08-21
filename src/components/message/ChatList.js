import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button'


const ChatList = (props) => {

    return (
        <div>

            <List sx={{
                width: '100%',
                marginLeft: '-30%',
                display: 'flex',
                justifyContent: 'space-between',
                maxWidth: 360,
                bgcolor: 'background.paper'

            }}>
                <Divider variant="inset" component="li" />
                <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                        <Avatar alt="Cindy Baker" />
                    </ListItemAvatar>
                    {props.number}
                </ListItem>

                <ListItemText
                    sx={{ width: '100%' }}
                    primary={props.message.name}
                    secondary={
                        <React.Fragment>
                            <Typography
                                sx={{ display: 'inline' }}
                                component="span"
                                variant="body2"
                                color="text.primary"
                            >
                                {props.message.text}
                            </Typography>
                        </React.Fragment>
                    }
                />

                <Button variant="contained"
                    color='primary'
                    type='button'
                    onClick={() => props.remove(props.message)}
                    sx={{ margin: '10px' }}
                >
                    x
                </Button>

            </List>
        </div>
    );
}
export default ChatList
