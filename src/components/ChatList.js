import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';


const ChatList = (props) => {

    return (
        <div>

            <List sx={{
                width: '100%',
                marginLeft: '-40%',
                display: 'flex',
                maxWidth: 360,
                bgcolor: 'background.paper'

            }}>
                <Divider variant="inset" component="li" />
                <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                        <Avatar alt="Cindy Baker" />
                    </ListItemAvatar>

                </ListItem>
                <ListItemText
                    primary={props.message.name}
                    secondary={
                        <React.Fragment>
                            <Typography
                                sx={{ display: 'inline' }}
                                component="span"
                                variant="body2"
                                color="text.primary"
                            >
                                {props.index}
                            </Typography>
                            {props.message.text}
                        </React.Fragment>
                    }
                />


            </List>
        </div>
    );
}
export default ChatList
