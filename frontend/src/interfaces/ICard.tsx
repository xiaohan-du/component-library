import AnimationEnum from '../enums/AnimationEnum';

interface ICard {
  id: number;
  animation: AnimationEnum;
  img: {
    path: string;
  };
  title: string;
  content: string;
}

export default ICard;