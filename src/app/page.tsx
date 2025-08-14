'use client';

import Image from "next/image";
import profile from "../assets/profile.jpg"
import vercel from "../assets/logo__vercel.svg"
import planetscale from "../assets/logo__planetscale.svg"
import trpc from "../assets/logo__trpc.svg"
import next from "../assets/logo__next.svg"
import previewBankWAW from '../assets/preview__bankwaw.jpg'
import previewParalympics from '../assets/preview__paralympics.jpg'
import previewPinkTest from '../assets/preview__pinktest.jpg'
import previewRythm from '../assets/preview__rythm.jpg'
import previewPlanPay from '../assets/preview__planpay.jpg'
import Link, { type LinkProps } from "next/link";
import Head from "next/head";
import { useState } from "react";

const positions = [
  {
    company: 'daisee',
    role: 'Senior Software Engineer',
    description: `
      As a Senior Software Engineer, I'm working with the team 
      to deliver the next generation of AI-powered customer service solutions.
    `,
    period: {
      start: '2023',
      end: '2024'
    },
    location: 'Sydney, Australia'
  },
  {
    company: 'PlanPay',
    role: 'Fullstack Software Engineer',
    description: `
      I've fulfilled a Hybrid Fullstack Engineer role since before 
      our product's launch. This involves continuous design and 
      development of new features, technical issue resolution, 
      system updates and maintenance, and collaborative integration 
      with other departments to ensure seamless client workflow incorporation.
    `,
    period: {
      start: '2022',
      end: '2023'
    },
    location: 'Sydney, Australia'
  },
  {
    company: 'Rythm',
    role: 'Marketing Engineer',
    description: `
      As contract work, starting in July, I had overseen the deployment of a 
      teaser website, developed email backends, implemented analytics tracking, 
      and created a beta signup form for the upcoming product launch.
    `,
    period: {
      start: '2022',
      end: '2022'
    },
    location: 'Remote'
  },
  {
    company: 'WEB MATRIX',
    role: 'Web Developer',
    description: `
      Working as a Web Developer, my role is to work with the backend and 
      full-stack developers on our team to achieve positive outcomes for our 
      clientele. Through peer-assisted code review, clientele management and 
      source-controlled code.
    `,
    period: {
      start: '2019',
      end: '2022'
    },
    location: 'Wodonga, Australia'
  }
]

const previouswork = [
  {
    title: "PlanPay",
    tags: ["Development"],
    image: previewPlanPay,
    url: "https://planpay.com",
  },
  {
    title: "Rythm",
    tags: ["Development"],
    image: previewRythm,
    url: "/clients/rythm",
  },
  {
    title: "Pink Test",
    tags: ["Design", "Development"],
    image: previewPinkTest,
    url: "https://pinktest.com.au",
  },
  {
    title: "Paralympics Winter Campaign",
    tags: ["Design", "Development"],
    image: previewParalympics,
    url: "https://web.archive.org/web/20220303220411/https://donate.paralympic.org.au/",
  },
  {
    title: "BankWAW",
    tags: ["Design", "Development"],
    image: previewBankWAW,
    url: "https://bankwaw.com.au/",
  },
];

const PreviousWork = () => {
  const [filter, setFilter] = useState<'All' | 'Design' | 'Development'>('All')

  const FilterButton = ({ children, onClick }: { children?: React.ReactNode, onClick: 'All' | 'Design' | 'Development' } ) => {
    return (
      <button
        type={'button'}
        onClick={() => setFilter(onClick)}
        className={[
          "inline-flex px-4 py-2 border border-white rounded-full hover:bg-white hover:text-black",
          ...(onClick === filter ? ['bg-white text-black'] : ['text-white']),
        ].join(' ')}
      >
        {children}
      </button>
    )
  }

  return (
    <section className="flex flex-col gap-6">
      <h2 className={"sr-only"}>Previous Work</h2>
      <div className="flex flex-wrap justify-center gap-6">
        <FilterButton onClick={'All'}>All</FilterButton>
        <FilterButton onClick={'Design'}>Design</FilterButton>
        <FilterButton onClick={'Development'}>Development</FilterButton>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 w-full gap-4">
        {previouswork.map(({ title, tags, image, url }) => {
          if ( !tags.includes(filter) && filter !== 'All' ) {
            return null
          }
          return (
            <article 
              key={title}
              className={"flex flex-col items-center justify-center relative bg-black aspect-[4/3] rounded-lg border border-white/20 gap-2"}
            >
              <div className={"relative z-40 flex flex-col items-center justify-center text-center gap-2"}>
                <div className={"text-xs bg-white text-black py-1 px-3 rounded-full"}>{tags.join(' + ')}</div>
                <h3 className={"text-xl"}>{title}</h3>
              </div>
              <Image 
                src={image} 
                alt={''} 
                className={"object-cover object-center rounded-lg z-30"} 
                layout={"fill"} 
                placeholder={"blur"}
              />
              <Link href={url} className={"absolute inset-0 z-50"} target={url.startsWith('https://') ? '_blank' : ''} />
            </article>
          )
        })}
      </div>
    </section>
  )
}

const Button = ({ children, target, ...props }: LinkProps & { target?: string, children?: React.ReactNode }) => {
  return (
    <Link 
      className={"inline-flex px-4 py-2 text-white border border-white rounded-full hover:bg-white hover:text-black"}
      target={target}
      {...props}
    >
      {children}
    </Link>
  )
}

export default function Home() {
  return (
    <>
      <main className="max-w-[50rem] w-full mx-auto pt-12 pb-24 px-8 flex flex-col gap-16">
        <section className="flex flex-col-reverse lg:flex-row gap-16 items-center">
          <div className="w-full max-w-[22rem]">
            <div className="relative bg-black aspect-[3/4] rounded-lg">
              <Image src={profile} layout={"fill"} placeholder={"blur"} alt="" className={"object-cover object-center rounded-lg"} />
            </div>
          </div>
          <div className="flex flex-col gap-8">
            <div className={"flex flex-col gap-2"}>
              <h1 className={"text-5xl"}>Jake Howell</h1>
              <p className={"text-xl"}>Software Engineer in Sydney, Australia.</p>
            </div>
            <div className={"flex flex-col gap-6"}>
              <p className={"leading-relaxed"}>
                With over 5 years of experience as a Full Stack Engineer, 
                I bring a wealth of expertise from the realms of 
                Professional Agile Agencies and innovative Startups.
              </p>
              <div className={"flex gap-4"}>
                <Button 
                  href={'https://github.com/jakehwll'}
                  target={'_blank'}
                >
                  GitHub
                </Button>
                <Button 
                  href={'https://linkedin.com/in/jake-hwll'}
                  target={'_blank'}
                >
                  LinkedIn
                </Button>
                <Button 
                  href={'mailto:jake@hwll.me'}
                  target={'_blank'}
                >
                  Email
                </Button>
              </div>
            </div>
          </div>
        </section>
        <section className="border-t border-white/10">
          <header className={"py-8"}>
            <h2 className={"text-2xl"}>Experience</h2>
          </header>
          <main className={"flex flex-col gap-12"}>
            {positions.map(({ company, role, description, period, location }) => ( 
              <article className={"flex flex-col lg:flex-row gap-12"} key={`${company}-${role}`}>
                <div className={"flex flex-1 flex-col gap-2"}>
                  <h3 className={"text-xl leading-relaxed"}>{company} — {role}</h3>
                  <p className={"leading-relaxed text-white/50"}>
                    {description}
                  </p>
                </div>
                <div className={"flex flex-col items-end gap-1"}>
                  <p className={"leading-relaxed"}>{period.start} — {period.end}</p>
                  <p className={"leading-relaxed"}>{location}</p>
                </div>
              </article>
            ))}
          </main>
        </section>
        <PreviousWork />
        <section>
          <div className="flex justify-center items-center">
            <a href={'mailto:jake@hwll.me'} className={"text-3xl"}>jake@hwll.me</a>
          </div>
        </section>
        <footer className={'flex flex-col gap-4 items-center'}>
          <p>
            &copy; Jake Howell
          </p>
          <div className={"flex gap-4 items-center bg-black border border-white py-3 px-6 rounded-full"}>
            <p className={"text-sm"}>Site built using</p>
            {/* TODO - Resolve these typings for Next.js. */}
            <Link href={'https://vercel.com/'}>
              {/* eslint-disable-next-line @typescript-eslint/no-unsafe-assignment */}
              <Image src={vercel} alt={''} className={"w-6 h-6"} />
              <span className={"sr-only"}>Vercel</span>
            </Link>
            <Link href={'https://planetscale.com/'}>
              {/* eslint-disable-next-line @typescript-eslint/no-unsafe-assignment */}
              <Image src={planetscale} alt={''} className={"w-6 h-6"} />
              <span className={"sr-only"}>Planetscale</span>
            </Link>
            <Link href={'https://trpc.io/'}>
              {/* eslint-disable-next-line @typescript-eslint/no-unsafe-assignment */}
              <Image src={trpc} alt={''} className={"w-6 h-6"} />
              <span className={"sr-only"}>TRPC</span>
            </Link>
            <Link href={'https://nextjs.org/'}>
              {/* eslint-disable-next-line @typescript-eslint/no-unsafe-assignment */}
              <Image src={next} alt={''} className={"w-6 h-6"} />
              <span className={"sr-only"}>Next.js</span>
            </Link>
          </div>
          <Button href={'https://github.com/jakehwll/portfolio'}>
            View Source
          </Button>
        </footer>
      </main>
    </>
  );
}
