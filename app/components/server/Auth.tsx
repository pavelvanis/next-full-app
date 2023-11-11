import Image from "next/image";
import Link from "next/link";

export type ProviderCardProps = {
  image: string;
  link: string;
  title: string;
};

export const providers: ProviderCardProps[] = [
  {
    image: "https://www.svgrepo.com/show/509967/github.svg",
    title: "Github",
    link: "",
  },
  {
    image: "https://www.svgrepo.com/show/494349/linkedin.svg",
    title: "Linkedin",
    link: "",
  },
  {
    image: "https://www.svgrepo.com/show/508761/apple.svg",
    title: "Apple ID",
    link: "",
  },
];

export const ProviderCard: React.FC<ProviderCardProps> = ({
  image,
  title,
  link,
}) => {
  return (
    <Link
      href={link}
      className="h-13 flex flex-row items-center justify-center rounded-md border-2 border-black px-2 py-1 font-light transition-all duration-300 hover:bg-gray-200 hover:-translate-y-[.15rem] hover:shadow-lg"
    >
      <Image
        src={image}
        alt={`logo_${title}`}
        width={64}
        height={64}
        className="me-2 w-8 p-1"
      />
      Sign up with
      <span className="ms-1 font-medium">{title}</span>
    </Link>
  );
};
