import React from 'react';
import {Button, Card, CardActions, CardContent, CardMedia, Typography} from "@material-ui/core";
import {NavLink} from "react-router-dom";
import {useAuthState} from "react-firebase-hooks/auth";
import {auth} from "../../config/fbConfig";
import {connect} from "react-redux";
import {removeBook} from "../../store/books/bookActionCreater";

const BookCard = ({id, title, author, image, remove}) => {
    const [user] = useAuthState(auth)

    return (
        <Card sx={{width: 245, margin: '15px 5px'}}>
            <CardMedia
                component="img"
                height="140"
                image={`${image}`}
                alt="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h5">
                    {title}
                </Typography>
                <Typography gutterBottom variant="h6">
                    {author}
                </Typography>
            </CardContent>
            <CardActions>
                <NavLink to={`/books/${id}`} style={{textDecoration: 'none'}}>
                    <Button size="small">View info</Button>
                </NavLink>
                {user ? <Button onClick={() => removeBook(id)} style={{marginLeft: 'auto'}} variant={'contained'} color={'error'} size="small">Remove</Button> : ''}
            </CardActions>
        </Card>
    );
};

const mapDispatchToProps = dispatch => {
  return {
      remove: (id) => dispatch(removeBook(id))
  }
}

export default connect(null, mapDispatchToProps)(BookCard);