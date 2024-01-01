import reactDom from 'react-dom';

type Props = {
  children: React.ReactNode;
};

// children을 받아와서 portal에다가 보여주는것을 처리해주는 컴포넌트
export default function ModalPortal({ children }: Props) {
  // portal이 서버사이드렌더링이 될때는 처리하고싶지 않다.
  if (typeof window === 'undefined') {
    return null;
  }

  const node = document.getElementById('portal') as HTMLElement;
  return reactDom.createPortal(children, node);
}
