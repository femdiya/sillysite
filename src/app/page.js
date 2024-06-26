import Text from "@/components/Text";
import { description, name, socialLinkDiscord, socialLinkExternal, socialLinkTelegram } from "@/constants";
import { IconBrandDiscord, IconBrandTelegram, IconExternalLink } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import { texts } from '@/constants';

export default function Home() {
  return (
    <main
      className={"relative overflow-hidden min-h-dvh bg-cover bg-center flex items-center justify-center"}
      style={{ backgroundImage: `url(${'/images/bg2.gif'})` }}
    >
      <div className="bg-slate-800 m-2 md:m-0 rounded-2xl overflow-hidden w-[400px] min-h-[400px] p-4 relative text-center justify-between items-center flex flex-col gap-4">

        {/* BG */}
        <div className="h-[82px] w-full bg-gray-900 absolute top-0 right-0"></div>

        <div className="flex w-full justify-start items-center gap-4 relative text-white">
          <Image src={'/images/kittyy1profile.jpg'} width={512} height={512} alt="Kittyy" className="rounded-full border-4 mx-auto border-pink-400 w-[128px] h-[128px]" />

          <div className="flex-1 text-start">
            <h2 className="text-[20px] font-extrabold">{name}</h2>
            <Text texts={texts} />
          </div>
        </div>

        <div className="text-white">
          {description}
        </div>

        {/* Socials */}
        <div className="flex gap-4 justify-center items-center">
          <Link href={socialLinkTelegram}><IconBrandTelegram width={24} height={24} className="text-white" /></Link>
          <Link href={socialLinkDiscord}><IconBrandDiscord width={24} height={24} className="text-white" /></Link>
          <Link href={socialLinkExternal}><IconExternalLink width={24} height={24} className="text-white" /></Link>
        </div>
      </div>
    </main>
  );
}
