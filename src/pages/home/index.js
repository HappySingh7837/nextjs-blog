import { Box, Typography, makeStyles, Button } from "@material-ui/core";
import Head from "next/head";
import { useEffect } from "react";
import { getAllAnimalsAPIcall } from "../../redux/actions/animalActions";

const useStyles = makeStyles({
    text: {
        color: "#DC143C",
    },
    button: {
        color: "#ffffff",
        backgroundColor: "#80ff00",
    },
});

const Home = ({ res }) => {
    const classes = useStyles();
    useEffect(() => {
        checkEnv();
    }, []);
    const checkEnv = async () => {
        let env = process.env.NODE_ENV;
        console.log(env);
        //const result = await getAllAnimalsAPIcall();
        console.log(res);
    };
    return (
        <div className="container">
            <Box>
                <Typography className={classes.text}>Home</Typography>
                <Button className={classes.button}>Secondary</Button>
            </Box>
        </div>
    );
};

export async function getStaticProps(context) {
    // Call an external API endpoint to get posts.
    // You can use any data fetching library
    const res = await getAllAnimalsAPIcall();

    // By returning { props: { posts } }, the Blog component
    // will receive `posts` as a prop at build time
    return {
        props: {
            res: res.data,
        },
    };
}

export default Home;
