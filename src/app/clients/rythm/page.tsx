import Link from "next/link"
import Image from "next/image"
import hero from '../../../assets/clients/rythm/hero.png'
import interactivity2 from '../../../assets/clients/rythm/interactivity-2.jpg'

const Page = () => {
    return (
        <main className="max-w-[54rem] w-full mx-auto pt-12 pb-24 px-8 flex flex-col gap-8">
            <header className="flex flex-col gap-4">
                <Link href={'/'} className="text-white/50">Return to Home</Link>
                <h1 className="text-2xl">Rythm</h1>
            </header>

            <div className="flex flex-col gap-x-2 gap-y-8">
                <div className="col-span-2">
                    <div className="flex flex-col gap-4">
                        <div className="relative aspect-[16/9] bg-black rounded">
                            <Image 
                                src={hero} 
                                placeholder={"blur"}
                                layout={'fill'} 
                                alt={'Hero Summary of Rythm.fm'}
                                className={"rounded-lg"}
                            />
                        </div>
                        <div className="flex flex-col gap-2 p-4">
                            <h2 className="text-lg">Introduction</h2>
                            <p className="text-white/50 leading-relaxed">
                                Whilst teasing the upcoming re-release of Rythm. I was tasked in creating a new marketing website
                                to tease the upcoming release of a new product (entitled the same).
                            </p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-4">
                    <div className="flex flex-col lg:flex-row gap-4">
                        <div className="flex-1">
                            <video className="relative aspect-[16/9] bg-black rounded-lg" autoPlay muted loop>
                                <source src={'/clients/rythm/interactivity-1.mp4'} type="video/mp4" />
                            </video>
                        </div>
                        <div className="flex-1">
                            <div className="relative aspect-[16/9] bg-black rounded-lg">
                                <Image 
                                    src={interactivity2} 
                                    placeholder={"blur"}
                                    layout={'fill'} 
                                    alt={'A screenshot of the newsletter sign up form'}
                                    className="rounded-lg"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-2 p-4">
                        <h2 className="text-lg">Interactivity</h2>
                        <p className="text-white/50 leading-relaxed">
                            A key goal we wanted to sell on this website was the fact, we&apos;re not dead!
                            It was entailed to be a story-like experience showing where we we&apos;re and gauge
                            the community-hype as to our return. Showing that we still understood our key audience.
                        </p>
                    </div>
                </div>
                <div className="flex flex-col gap-4">
                    <div className="flex-1">
                        <div className="aspect-[16/9] bg-black rounded">
                            <video className="relative aspect-[16/9] bg-black rounded" autoPlay muted loop>
                                <source src={'/clients/rythm/beta.mp4'} type="video/mp4" />
                            </video>
                        </div>
                    </div>
                    <div className="flex flex-col gap-2 p-4">
                        <h2 className="text-lg">Beta Signup</h2>
                        <p className="text-white/50 leading-relaxed">
                            To sell the idea of a new product, we wanted to collect emails of those interested in the product.
                            Integrating seperately with the Discord API, we can send out information to those who signed up and
                            automatically invite them to the Beta&apos;s Discord should they be selected.
                        </p>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Page