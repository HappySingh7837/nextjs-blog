import { Box, Typography } from "@material-ui/core";
import Head from "next/head";
import { useEffect } from "react";

export default function Home() {
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
                <Typography>Home</Typography>
            </Box>
        </div>
    );
}
