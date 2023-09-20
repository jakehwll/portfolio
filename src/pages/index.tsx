import Image from "next/image";
import profile from "../assets/profile.jpg"
import vercel from "../assets/logo__vercel.svg"
import planetscale from "../assets/logo__planetscale.svg"
import trpc from "../assets/logo__trpc.svg"
import next from "../assets/logo__next.svg"
import Link from "next/link";
import Head from "next/head";

const positions = [
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

const Button = ({ children, href }: { children?: React.ReactNode, href: string }) => {
  return (
    <Link href={href} className={"inline-flex px-4 py-2 text-white border border-white rounded-full hover:bg-white hover:text-black"}>
      {children}
    </Link>
  )
}

export default function Home() {
  return (
    <>
      <Head>
        <title>Jake Howell - Software Engineer Australia</title>
      </Head>
      <main className="max-w-[50rem] w-full mx-auto pt-12 pb-24 px-8 flex flex-col gap-16">
        <section className="flex flex-col-reverse lg:flex-row gap-16 items-center">
          <div className="w-full max-w-[22rem]">
            <div className="relative bg-black aspect-[3/4] rounded-lg">
              <Image src={profile} layout={"fill"} alt="" className={"object-cover object-center rounded-lg"} />
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
                <Button href={'https://github.com/jakehwll'}>GitHub</Button>
                <Button href={'https://linkedin.com/in/jake-hwll'}>LinkedIn</Button>
                <Button href={'mailto:jake@hwll.me'}>Email</Button>
              </div>
            </div>
          </div>
        </section>
        <section className="border-t border-white">
          <header className={"py-8"}>
            <h2 className={"text-2xl"}>Experience</h2>
          </header>
          <main className={"flex flex-col gap-12"}>
            {positions.map(({ company, role, description, period, location }) => ( 
              <article className={"flex flex-col lg:flex-row gap-12"} key={`${company}-${role}`}>
                <div className={"flex flex-1 flex-col gap-2"}>
                  <h3 className={"text-xl leading-relaxed"}>{company} — {role}</h3>
                  <p className={"leading-relaxed text-white/80"}>
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
        <section>
          <div className="flex flex-wrap justify-center gap-6">
            <Button href={'#'}>
              All
            </Button>
            <Button href={'#'}>
              Design
            </Button>
            <Button href={'#'}>
              Development
            </Button>
            <Button href={'#'}>
              E-Commerce
            </Button>
            <Button href={'#'}>
              Business
            </Button>
          </div>
        </section>
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
