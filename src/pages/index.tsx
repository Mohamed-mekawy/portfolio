import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import {
  TypeScriptIcon,
  ReactIcon,
  TailwindCssIcon,
  NextJsIcon,
  FigmaIcon,
  InkscapeIcon,
  SparklesIcon,
  HeartIcon,
  BoltIcon,
} from '@/components/Icons';

import type { NextPage } from 'next';
import type { ReactElement } from 'react';

interface FeaturedCardProps {
  icon: ReactElement;
  title: string;
  desc: string;
}

const FeaturedCard = ({ icon, title, desc }: FeaturedCardProps) => {
  return (
    <div className="z-10 flex-1 rounded-2xl border border-slate-100 bg-white p-6">
      <div className="mb-1 flex items-center gap-4 font-bold text-gray-900 lg:flex-col lg:items-start">
        {icon}
        <h2 className="">{title}</h2>
      </div>
      <div className="text-sm text-gray-500">{desc}</div>
    </div>
  );
};

const Index: NextPage = () => {
  return (
    <>
      <Head>
        <title>Enji • Designer & Developer</title>
        <meta name="description" content="Hi!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="relative border-b border-b-slate-100 pt-28 pb-20 lg:pt-36 lg:pb-28">
        <div
          className="absolute inset-0 z-[-1] bg-slate-100 bg-grid-slate-200 lg:bg-grid-big-slate-200/60"
          style={{
            maskImage: 'radial-gradient(black, transparent)',
            WebkitMaskImage: 'radial-gradient(black, transparent)',
          }}
        ></div>
        <div className="content-wrapper fade-in-start">
          <div className="relative">
            {/* title */}
            <h1 className=" text-gray-600 ">
              <span className="mb-3 block animate-fade-in text-5xl font-bold md:mb-4 md:text-7xl">
                hai! saya{' '}
                <strong className="font-extrabold text-gray-900">énji</strong>,
              </span>
              <span className="block animate-fade-in text-xl animation-delay-100 md:text-2xl">
                seorang <strong>designer</strong> dan <strong>developer</strong>
                .
              </span>
            </h1>
            {/* cta */}
            <div className="mt-8 flex animate-fade-in gap-2 animation-delay-100">
              <Link
                href="/"
                className="button button--solid button--big min-w-[128px]"
              >
                Hire Me
              </Link>
              <Link href="/" className="button button--outlined button--big">
                Resume
              </Link>
            </div>
            {/* tech stack */}
            <div className="mt-28 lg:mt-48">
              <p className="mb-2 animate-fade-left text-sm text-gray-500 animation-delay-400">
                tech stack/tools favorit saya saat ini:
              </p>
              <ul className="flex gap-4 text-gray-500">
                <li>
                  <div className="animate-fade-left transition duration-200 animation-delay-[400ms] hover:text-[#3178C6]">
                    <TypeScriptIcon className="h-6 w-6" />
                  </div>
                </li>
                <li>
                  <div className="animate-fade-left transition duration-200 animation-delay-[430ms] hover:text-[#61DAFB]">
                    <ReactIcon className="h-6 w-6" />
                  </div>
                </li>
                <li>
                  <div className="animate-fade-left transition duration-200 animation-delay-[460ms] hover:text-[#06B6D4]">
                    <TailwindCssIcon className="h-6 w-6" />
                  </div>
                </li>
                <li>
                  <div className="animate-fade-left transition duration-200 animation-delay-[490ms] hover:text-[#000000]">
                    <NextJsIcon className="h-6 w-6" />
                  </div>
                </li>
                <li>
                  <div className="animate-fade-left transition duration-200 animation-delay-[520ms] hover:text-[#F24E1E]">
                    <FigmaIcon className="h-6 w-6" />
                  </div>
                </li>
                <li>
                  <div className="animate-fade-left transition duration-200 animation-delay-[550ms] hover:text-[#000000]">
                    <InkscapeIcon className="h-6 w-6" />
                  </div>
                </li>
              </ul>
            </div>
            {/* image */}
            <div className="absolute right-0 -top-28 hidden animate-fade-in animation-delay-100 lg:block">
              {/* image */}
              <Image
                alt="me"
                src="/me.png"
                height={597}
                width={467}
                className="aspect-auto w-[440px]"
              />
            </div>
          </div>
        </div>
      </header>
      <section>
        <div className="content-wrapper">
          <div className="-mt-8 mb-8 flex flex-col gap-4 lg:-mt-16 lg:flex-row lg:gap-8">
            <FeaturedCard
              icon={
                <div className="lg:rounded-full lg:bg-[#A199FF] lg:p-4">
                  <SparklesIcon className="h-5 w-5 text-[#FFC41F] lg:text-[#FFFF00]" />
                </div>
              }
              title="Clean & Modern Desain"
              desc="Senang membuat design yang modern, clean serta UI yang intuitif."
            />
            <FeaturedCard
              icon={
                <div className="lg:rounded-full lg:bg-[#FF7DAC] lg:p-4">
                  <HeartIcon className="h-5 w-5 text-[#FF7DAC] lg:text-white" />
                </div>
              }
              title="Detail Oriented"
              desc="Tantangan terbesarnya: aksesibilitas, browser kompatibilitas dan desain responsive."
            />
            <FeaturedCard
              icon={
                <div className="lg:rounded-full lg:bg-[#BFF4FF] lg:p-4">
                  <BoltIcon className="h-5 w-5 text-[#5096FF]" />
                </div>
              }
              title="Fast & Optimized"
              desc="Penulisan code yang terstruktur, optimal serta efisien."
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;