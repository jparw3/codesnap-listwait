import { Stars } from "@ui/Stars";
import { GlowLineOne } from "@ui/GlowingLineOne";
import { GlowLineTwo } from "@ui/GlowingLineTwo";
import { Wrapper } from "@ui/Wrapper";
import { Input } from "@ui/Input";
import { Button } from "@ui/Button";
import { useState } from "react";
import { Model } from "@ui/Model";
import { Circle } from "@ui/Circle";
import { motion } from "framer-motion";
import Head from "next/head";
import { NextSeo } from "next-seo";

export default function Home() {
  const [showModel, setShowModel] = useState(false);
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const submitData = async (e: React.SyntheticEvent) => {
    setLoading(true);
    e.preventDefault();
    try {
      const body = { name, email };
      await fetch("/api", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      setShowModel(true);
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  };

  return (
    <>
      <NextSeo
        title="CodeSnap Waitlist"
        description="Join the CodeSnap waitlist and get notified when it's released!"
        openGraph={{
          url: "https://www.url.ie/a",
          title: "CodeSnap Waitlist",
          description:
            "Join the CodeSnap waitlist and get notified when it's released!",
          images: [
            {
              url: "https://www.getcodesnap.app/og-image.png",
              width: 1024,
              height: 512,
              alt: "CodeSnap Waitlist",
              type: "image/png",
            },
          ],
        }}
      />
      <Model email={email} showModel={showModel} setShowModel={setShowModel} />
      <Stars />
      <GlowLineOne />
      <GlowLineTwo />
      <Wrapper>
        <Circle />
        <motion.p
          initial={{ y: 30, opacity: 0 }}
          transition={{
            delay: 0.4,
            type: "spring",
          }}
          animate={{ y: 0, opacity: 1 }}
          className="text-sm leading-4 text-center tracking-[0.04em] uppercase text-[rgb(75,75,88)] pt-6"
        >
          CREATE, STORE & SHARE
        </motion.p>
        <motion.h1
          initial={{ y: 30, opacity: 0 }}
          transition={{
            delay: 0.5,
            type: "spring",
          }}
          animate={{ y: 0, opacity: 1 }}
          className="flex flex-col md:text-5xl text-4xl text-center pt-2 text-transparent bg-clip-text bg-graydient"
        >
          Join the waitlist for
          <motion.span
            initial={{ y: 30, opacity: 0 }}
            transition={{
              delay: 0.6,
              type: "spring",
            }}
            animate={{ y: 0, opacity: 1 }}
            className="bg-codesnap-gradient font-semibold text-transparent bg-clip-text"
          >
            CodeSnap!
          </motion.span>
        </motion.h1>
        <motion.form
          initial={{ y: 30, opacity: 0 }}
          transition={{
            delay: 0.7,
            type: "spring",
          }}
          animate={{ y: 0, opacity: 1 }}
          className="w-80 flex flex-col gap-4 mt-12"
        >
          <Input
            autoFocus
            onChange={(e) => setName(e.target.value)}
            value={name}
            type="text"
          />
          <Input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="email"
          />
          <Button
            loading={loading}
            disabled={!name || !email}
            onClick={submitData}
            className="mt-2"
            icon
          >
            Join the wailist
          </Button>
        </motion.form>
      </Wrapper>
    </>
  );
}
