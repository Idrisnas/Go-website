
import React from 'react';
import clsx from 'clsx'; 

const variants = {
  heading1: 'font-sora font-bold text-[30px] leading-[110%] tracking-[-2%] sm:text-[48px] md:text-[68px] md:leading-[100%] md:tracking-[-4%]',
  
  heading2: 'font-sora font-extrabold text-[32px] leading-[110%] tracking-[-2px] sm:text-[48px] md:text-[89.84px] md:leading-[100%] md:tracking-[-3.9px]',

  big: 'font-sora font-extrabold text-[25px] leading-[110%] tracking-[-3px] sm:text-[60px] md:text-[90px] md:leading-[100%] md:tracking-[-7.38px]',

  body: 'font-sora font-normal text-[12px] leading-[22px] tracking-normal sm:text-[18px] md:text-[20px] md:leading-[24px]',

  subheading: 'font-manrope font-normal text-[14px] leading-[20px] tracking-normal sm:text-[16px] md:text-[18px] md:leading-[24px]',

  caption: 'text-sm font-light text-gray-500 font-sans',

  faq1: 'font-sora font-bold text-[14px] leading-[28px] tracking-[-0.04em] sm:text-[20px] md:text-[24px] md:leading-[33px] md:tracking-[-0.0625em]',

  faq2: 'font-sora font-normal text-[16px] leading-[28px] tracking-[-0.04em] sm:text-[17px] md:text-[18px] md:leading-[33px] md:tracking-[-0.0625em]',
};


const Typography = ({ variant = 'body', children, className = '', as: Component = 'p', ...props }) => {
  const variantClasses = variants[variant] || variants.body;

  return (
    <Component className={clsx(variantClasses, className)} {...props}>
      {children}
    </Component>
  );
};

export default Typography;
