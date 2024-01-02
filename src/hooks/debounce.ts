import { useEffect, useState } from 'react';

export default function useDebounce(value: string, delay: number) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  // useDebounce가 호출되면 useEffect()
  //delay후에 전달받은 value로 debouncedValue를 변경할수있도록

  useEffect(() => {
    // 실행될때마다 핸들러를 등록한다.
    // 만약 timeout이 끝나기도 전에 value를 전달받고 useEffect()가 호출된다면
    // 이전의 타임아웃은 종료되고 다시 시작
    // 만약 timeout이 정상적으로 끝나면 debouncedValue 반환
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}
