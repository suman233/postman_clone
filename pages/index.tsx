import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import { Container, Typography } from "@mui/material";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Container>
        <Typography textAlign={'center'} sx={{ my: 5 }}>Home Page</Typography>
        Wanna get responses for your apis? Go to api network <Link href={'/apinetwork'}>Get API Responses</Link>
      </Container>
    </>
  );
}
