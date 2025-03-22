import React from 'react';
import Image from 'next/image';

export interface AboutData {
  title: string;
  description: string;
  image: string;
}

interface AboutProps {
  data: AboutData;
  imageFirst?: boolean;
  containerClassName?: string;
  textContainerClassName?: string;
  imageContainerClassName?: string;
  titleClassName?: string;
  descriptionClassName?: string;
  imageClassName?: string;
  // These props are here to match your existing structure but not used
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
}

const About: React.FC<AboutProps> = ({
  data,
  imageFirst = false,
  containerClassName = "",
  textContainerClassName = "",
  imageContainerClassName = "",
  titleClassName = "",
  descriptionClassName = "",
  imageClassName = "",
  // Unused props
  title: _,
  description: __,
  imageSrc: ___,
  imageAlt: ____,
}) => {
  // Default classes for each element
  const defaultContainerClass = "flex flex-col md:flex-row w-full gap-8 h-screen py-12";
  const defaultTextContainerClass = "flex flex-col justify-center space-y-4 md:w-1/2";
  const defaultImageContainerClass = "flex justify-center items-center md:w-1/2";
  const defaultTitleClass = "text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight";
  const defaultDescriptionClass = "text-lg md:text-xl text-gray-600";
  const defaultImageClass = "rounded-lg object-cover w-full h-auto max-w-lg";

  // Combine default and custom classes
  const combinedContainerClass = `${defaultContainerClass} ${containerClassName}`;
  const combinedTextContainerClass = `${defaultTextContainerClass} ${textContainerClassName}`;
  const combinedImageContainerClass = `${defaultImageContainerClass} ${imageContainerClassName}`;
  const combinedTitleClass = `${defaultTitleClass} ${titleClassName}`;
  const combinedDescriptionClass = `${defaultDescriptionClass} ${descriptionClassName}`;
  const combinedImageClass = `${defaultImageClass} ${imageClassName}`;

  // Function to split text into paragraphs
  const renderParagraphs = (text: string) => {
    return text.split('\n\n').map((paragraph, index) => (
      <p key={index} className={`${combinedDescriptionClass} ${index > 0 ? 'mt-4' : ''}`}>
        {paragraph}
      </p>
    ));
  };

  // Create text content section
  const textContent = (
    <div className={combinedTextContainerClass}>
      <h2 className={combinedTitleClass}>{data.title}</h2>
      {renderParagraphs(data.description)}
    </div>
  );



  // Create image section
  const imageContent = (
    <div className={combinedImageContainerClass}>
      <Image
        src={data.image}
        alt={data.title}
        width={600}
        height={400}
        className={combinedImageClass}
      />
    </div>
  );

  return (
    <div className={combinedContainerClass}>
      {imageFirst ? (
        <>
          {imageContent}
          {textContent}
        </>
      ) : (
        <>
          {textContent}
          {imageContent}
        </>
      )}
    </div>
  );
};

export default About;