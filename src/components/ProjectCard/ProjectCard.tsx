import Link from "next/link";
import Image from "next/image";
import "./ProjectCard.css";

type ProjectCardProps = {
  ProjectNumber: string;
  ProjectName: string;
  ProjectImage: string;
  ProjectDescription: string;
  href: string;
};

export default function ProjectCard({
  ProjectNumber,
  ProjectName,
  ProjectImage,
  ProjectDescription,
  href,
}: ProjectCardProps) {
  return (
    <div className="ProjectCardWrapper">
      <h3 className="ProjectNumber">Hypemind.inc drop {ProjectNumber}</h3>
      <h1 className="ProjectName">{ProjectName}</h1>
      <Link href={href} target="_blank" rel="noopener noreferrer">
        <Image
          className="ProjectImage"
          src={ProjectImage}
          alt={`${ProjectName} image`}
          width={500}
          height={300}
        />
      </Link>
      <p className="ProjectDescription">{ProjectDescription}</p>
    </div>
  );
}
