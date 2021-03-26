import { Box, Typography, makeStyles, Button } from "@material-ui/core";
import Head from "next/head";
import { useEffect } from "react";

const useStyles = makeStyles({
    text: {
        color: "#DC143C"
    },
    button: {
        color: "#ffffff",
        backgroundColor: "#80ff00"
    }
});

export default function Home() {
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
            </Box>
        </div>
    );
}
