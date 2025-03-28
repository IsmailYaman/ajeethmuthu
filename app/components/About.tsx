import React from 'react';
import Image from 'next/image';
import { AboutProps } from '@/app/types/data';
import Section from './Section';


const About: React.FC<AboutProps> = ({
  data,
  imageFirst = false,
  containerClassName = "",
  textContainerClassName = "",
  imageContainerClassName = "",
  titleClassName = "",
  descriptionClassName = "",
  imageClassName = "",
}) => {
  // Default classes for each element
  const defaultContainerClass = "flex flex-col md:flex-row w-full gap-8 py-12";
  const defaultTextContainerClass = "flex flex-col justify-center space-y-4 md:w-1/2";
  const defaultImageContainerClass = "flex justify-center items-center md:w-1/2";
  const defaultTitleClass = "text-3xl md:text-4xl lg:text-4xl font-bold tracking-tight";
  const defaultDescriptionClass = "text-lg md:text-xl leading-relaxed text-gray-600";
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
    <Section animationType='slideLeft' delay={0.2}>
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
    </Section>
  );
};

export default About;