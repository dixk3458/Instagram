import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

type Props = {
  children: React.ReactNode;
};

const responsive = {
  desk: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 576 },
    items: 6,
  },
  mobile: {
    breakpoint: { max: 576, min: 0 },
    items: 5,
  },
};

export default function ScrollableBar({ children }: Props) {
  console.log(children);
  return (
    <Carousel
      swipeable={true}
      containerClass="w-full flex items-center gap-2"
      responsive={responsive}
    >
      {children}
    </Carousel>
  );
}
