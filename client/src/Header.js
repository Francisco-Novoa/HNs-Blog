import React from 'react'
import { Grid, Typography, makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
    header: {
        backgroundColor: '#333333',
        borderWidth: '1px',
        borderColor: '#CCC',
        paddingTop: '3rem',
        paddingLeft: '2rem',
        paddingBottom: '3.5rem'
    },
    title: {
        fontWeight: '500',
        color: '#fefefe',
        fontSize: '4rem'
    },
    subtitle: {
        fontWeight: '500',
        color: '#fefefe',
        fontSize: '1.25rem',
        paddingTop: '0.5rem'
    }
})

export default function Header() {
    const aux = 'We <3 hacker news'
    const classes = useStyles()
    return (
        <Grid
            className={classes.header}
            container
            direction='column'>
            <Typography variant='h1' className={classes.title}>
                HN Feed
            </Typography>
            <Typography variant='h4' className={classes.subtitle}>
                {aux}
            </Typography>
        </Grid>
    )
}