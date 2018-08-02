declare module 'reakit';

interface IPerson {
  name: string;
  age: number;
}

interface IBoxProps {
  text: string;
  subText?: string;
  list?: IPerson[];
}
