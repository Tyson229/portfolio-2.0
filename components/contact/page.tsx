"use client";
import React from "react";
import SectionHeader from "../section_header/SectionHeader";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiOutlineMail,
  AiOutlinePhone,
} from "react-icons/ai";
import { PiPaperPlaneRightLight } from "react-icons/pi";
import Link from "next/link";
import { useInView } from "react-intersection-observer";
import { GITHUB_LINK, LINKEDIN_LINK } from "@/lib/data";
const Contact = () => {
  const { ref, inView } = useInView({
    threshold: 0.5,
    rootMargin: "-50px",
    triggerOnce: true,
  });
  return (
    <section className="flex flex-col w-full gap-4">
      <SectionHeader title="Connect" />
      <p
        ref={ref}
        className={`mb-4
      ${
        inView
          ? "animate-in fade-in slide-in-from-left-20 duration-500 "
          : "opacity-0"
      }`}
      >
        If you are interested in me and what I am working at, you can:
      </p>
      <div
        ref={ref}
        className={`flex flex-col md:flex-row gap-8 ${
          inView
            ? "animate-in fade-in slide-in-from-left-20 duration-500 "
            : "opacity-0"
        }`}
      >
        <div className="">
          <div>
            <AiOutlineMail size={30} />
            <span className="font-semibold">Email me</span>
          </div>
          <div>ngyntienkhoa22999@gmail.com</div>
        </div>
        <div className="">
          <div>
            <AiOutlinePhone size={30} />
            <span className="font-semibold">Phone me</span>
          </div>
          <div className="">(+84) 339 015 545</div>
          <div className="">(+61) 401 345 564</div>
        </div>
        <div className="">
          <div>
            <PiPaperPlaneRightLight size={30} className="font-bold" />
            <span className="font-semibold">Dm me</span>
          </div>
          <div className="flex gap-2">
            <Link href={GITHUB_LINK}>Github</Link>
            <Link href={LINKEDIN_LINK}>Linkedin</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
