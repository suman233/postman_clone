import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import { Container, Typography } from "@mui/material";
import Link from "next/link";
import dynamic from "next/dynamic";
import avatarloader from '@/json/lottie/AvatarFlying.json'

const inter = Inter({ subsets: ["latin"] });
// const  CodeBlock = dynamic(() => import("../components/CodeBlock"), { ssr: false });
const Lottie = dynamic(() => import("lottie-react"))

export default function Home() {
  return (
    <>
      <Container>
        <Typography textAlign={'center'} sx={{ my: 5 }}>Home Page</Typography>
        <p style={{ textAlign: 'center' }}>Wanna get responses for your apis? Go to api network <Link href={'/apinetwork'}>Get API Responses</Link></p>
        <Lottie
          animationData={avatarloader}
          loop
          autoplay
          style={{
            height: 400,
            width: '100%',
            textAlign: 'center',
          }}
        />
      </Container>
    </>
  );
}
