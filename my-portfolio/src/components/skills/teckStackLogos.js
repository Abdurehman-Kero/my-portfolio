import React from 'react';
import TechStack from './teckStack.js';
import nextLogo from '../../assets/images/nextLogo.png';
import nestLogo from '../../assets/images/nestLogo.png';
import pytorchLogo from '../../assets/images/pytorchLogo.png';
import tensorFlowLogo from '../../assets/images/tensorFlowLogo.png';

const StackLogos = () => {
    const logos = [
        { src: 'https://img.icons8.com/?size=100&id=122637&format=png&color=d4af37', alt: 'React' },
        { src: nextLogo, alt: 'NextJS' },
        { src: 'https://img.icons8.com/?size=100&id=23027&format=png&color=d4af37', alt: 'HTML' },
        { src: 'https://img.icons8.com/?size=100&id=42769&format=png&color=d4af37', alt: 'JavaScript' },
        { src: 'https://img.icons8.com/?size=100&id=FQlr_bFSqEdG&format=png&color=d4af37', alt: 'Node.js' },
        { src: 'https://img.icons8.com/?size=100&id=kg46nzoJrmTR&format=png&color=d4af37', alt: 'Express' },
        { src: nestLogo, alt: 'NestJS' },
        { src: 'https://img.icons8.com/?size=100&id=39858&format=png&color=d4af37', alt: 'MySQL' },
        { src: 'https://img.icons8.com/?size=100&id=25010&format=png&color=d4af37', alt: 'PostgreSQL' },
        { src: 'https://img.icons8.com/?size=100&id=OdTjgPoHJeaK&format=png&color=d4af37', alt: 'MongoDB' },
        { src: 'https://img.icons8.com/?size=100&id=12584&format=png&color=d4af37', alt: 'Python' },
        { src: tensorFlowLogo, alt: 'TensorFlow' },
        { src: pytorchLogo, alt: 'PyTorch' },
        { src: 'https://img.icons8.com/?size=100&id=lx6cJkVf1gg7&format=png&color=d4af37', alt: 'GraphQL' },,
        { src: 'https://img.icons8.com/?size=100&id=PwDLBrxvWI3V&format=png&color=d4af37', alt: 'Chakra UI' },
        { src: 'https://img.icons8.com/?size=100&id=OODqBWCdRF8o&format=png&color=d4af37', alt: 'Bootstrap' },
        { src: 'https://img.icons8.com/?size=100&id=38388&format=png&color=d4af37', alt: 'Git' },
        { src: 'https://img.icons8.com/?size=100&id=fmFqQmR0UdsR&format=png&color=d4af37', alt: 'GitHub' },
        { src: 'https://img.icons8.com/?size=100&id=h67b5xF2blsK&format=png&color=d4af37', alt: 'VS Code' },
        { src: 'https://img.icons8.com/?size=100&id=GflC6KLkdd0Y&format=png&color=d4af37', alt: 'Figma' },
        ,
        { src: 'https://img.icons8.com/?size=100&id=38273&format=png&color=d4af37', alt: 'CSS' },
        { src: 'https://img.icons8.com/?size=100&id=qOFWMoaAQIdR&format=png&color=d4af37', alt: 'Tailwind CSS' },
        { src: 'https://img.icons8.com/?size=100&id=KIcFwp9MNQL5&format=png&color=d4af37', alt: 'Postman' },
    ];
    

  return (
    <div>
      <TechStack logos={logos} />
    </div>
  );
};

export default StackLogos;
