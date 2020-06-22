import React, { useEffect, useState } from 'react'
import { getBlogs, wakeUp } from './services/blogAPI'
import { Grid } from '@material-ui/core'
import Main from './Main'
import Header from './Header'
import { makeStyles } from '@material-ui/styles'

const useStyle = makeStyles({
    main: {
        paddingLeft: '2rem',
        paddingRight: '2rem',
    }
})

export default function App() {
    const classes = useStyle()
    const [blogs, setBlogs] = useState(null)
    const init = async () => {
        const aux = await getBlogs()
        setBlogs(aux)
    }

    useEffect(() => {
        wakeUp()
        init()


    }, [])

    return (
        <Grid container direction='column' >

            <Grid >
                <Header />
            </Grid>

            <Grid className={classes.main} >
                <Main blogs={blogs} setBlogs={setBlogs} />
            </Grid>

        </Grid>
    )
}

