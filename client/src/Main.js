import React, { useState } from "react"
import { deleteBlog } from "./services/blogAPI"
import { dateFormater } from "./services/dateFormater"
import { List, ListItem, ListItemSecondaryAction, IconButton, Link, Typography, Grid, makeStyles } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles({
    rowStyle: {
        backgroundColor: "#FFF",
        borderWidth: "1px",
        borderColor: "#CCC",
    },
    rowStyleHover: {
        backgroundColor: "#fafafa",
        borderWidth: "1px",
        borderColor: "#CCC"
    },
    titleTime: {
        color: "#333",
        fontSize: "13pt",
        marginRight: "0.5rem",
    },
    author: {
        color: "#999"
    },
})

const RemoveBlog = ({ id, setBlogs, blogs }) => {
    const clickHandler = async () => {
        await deleteBlog(id)
        setBlogs(blogs.filter(blog => blog.id !== id))
    }
    return (

        <ListItemSecondaryAction onClick={() => { clickHandler() }}>
            <IconButton edge="end" aria-label="delete">
                <DeleteIcon />
            </IconButton>
        </ListItemSecondaryAction>

    )
}

const Row = ({ title, author, id, url, setBlogs, blogs, date }) => {
    const [trash, setTrash] = useState(false)
    const time = dateFormater(date)
    const classes = useStyles()

    return (
        <ListItem
            className={trash ? classes.rowStyleHover : classes.rowStyle}
            divider
            onMouseEnter={() => setTrash(true)}
            onMouseLeave={() => setTrash(false)} >

            <Grid container >
                <Grid item sm={11}>
                    <Grid container  >
                        <Grid item sm={11} container>

                            <Link href={url}
                                color="primary"
                                underline="hover"
                                target="_blank"
                                rel="noopener" >
                                <Typography
                                    className={classes.titleTime}>
                                    {title}.
                                </Typography>
                            </Link>

                            <Link href={url}
                                target="_blank"
                                rel="noopener">
                                <Typography
                                    className={classes.author}>
                                    {`-${author}-`}
                                </Typography>
                            </Link>

                        </Grid>

                        <Grid item container justify="center" sm={1} >
                            <Typography
                                className={classes.titleTime}>
                                {time}
                            </Typography>
                        </Grid>

                    </Grid>
                </Grid>

                <Grid item sm={1}>
                    {
                        trash &&
                        <RemoveBlog
                            id={id}
                            setBlogs={setBlogs}
                            blogs={blogs} />
                    }
                </Grid>

            </Grid>
        </ListItem>
    )
}

export default function Main({ blogs, setBlogs }) {
    return (
        <List>
            {
                !!blogs &&
                Array.isArray(blogs) &&
                blogs.map(({ title, author, id, url, created_at }) =>

                    <Row
                        title={title}
                        author={author}
                        key={id}
                        id={id}
                        url={url}
                        setBlogs={setBlogs}
                        blogs={blogs}
                        date={created_at} />
                )
            }
        </List>


    )
}
