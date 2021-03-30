import { Box, Typography, makeStyles, Button } from "@material-ui/core";
import Head from "next/head";
import { useEffect } from "react";

export const getStaticProps = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();

    return {
        props: { people: data }
    }
}


const useStyles = makeStyles({
    text: {
        color: "#DC143C"
    },
    button: {
        color: "#ffffff",
        backgroundColor: "#80ff00"
    }
});

const Home = ({ people }) => {
    const classes = useStyles()
    useEffect(() => {
        checkEnv();
    }, []);
    const checkEnv = () => {
        let env = process.env.NODE_ENV;
        console.log(env);
    };
    return (
        <div className="container">
            <Box>
                <Typography className={classes.text}>Home</Typography>
                <Button className={classes.button}>Secondary</Button>
                {people.map(person => (
                    <div key={person.id}>
                        <h3>{person.name}</h3>
                    </div>
                )
                )}
            </Box>
        </div>
    )
}

export default Home
