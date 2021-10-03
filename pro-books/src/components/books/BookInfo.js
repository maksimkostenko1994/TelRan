import React from 'react';
import {useCollectionData} from "react-firebase-hooks/firestore";
import {firestore} from "../../config/fbConfig";
import Loader from "../Loader";
import {Box, Card, CardContent, CardMedia, Typography} from "@material-ui/core";

const BookInfo = ({match}) => {
    const id = +match.params.id

    const [books, loading] = useCollectionData(firestore.collection('books'))
    if (loading) return <Loader/>

    const book = books.find(item => item.id === id)
    console.log(book)

    return (
        <Card sx={{
            margin: '15px auto',
            width: '1000px',
        }}>
            <Box display={"flex"}>
                <Box width={'340px'}>
                    <CardMedia
                        component="img"
                        width="340px"
                        image={`${book.image}`}
                        alt="green iguana"
                        sx={{margin: '10px'}}
                    />
                </Box>
                <Box flexDirection={"column"} width={'50%'} sx={{margin: '20px 30px'}}>
                    <CardContent>
                        <Typography gutterBottom variant="h5">
                            {book.title}
                        </Typography>
                        <Typography gutterBottom variant="h6">
                            Author: <h3 style={{color: 'grey'}}>{book.author}</h3>
                        </Typography>
                        <Typography gutterBottom variant="h6">
                            Description: <h4 style={{color: 'grey'}}>{book.description}</h4>
                        </Typography>
                        <Typography gutterBottom variant="h6">
                            Rate: <h4 style={{color: 'grey'}}>{book.rate}</h4>
                        </Typography>
                    </CardContent>
                </Box>
            </Box>
        </Card>
    );
};

export default BookInfo;