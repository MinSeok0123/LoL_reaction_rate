import {
  Loading,
  Logo,
  LoadingText,
  LogoImg,
  LoadingbarDiv,
} from "./Loading.styles";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import "tailwindcss/tailwind.css";

function LoadingPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prevProgress + 10;
      });
    }, 300);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsLoading(false);
      router.push("/Main");
    }, 4000); // 3초 후에 '/other-page'로 이동

    return () => {
      clearTimeout(timeoutId);
    };
  }, [router]);

  if (isLoading) {
    return (
      <>
        <Loading>
          <Logo>
            <LogoImg src="/img/lologo.png"></LogoImg>
            <LoadingText>로딩 중...</LoadingText>
            <LoadingbarDiv>
              <div
                style={{
                  width: `${progress}%`,
                  height: "100%",
                  backgroundColor: "#488C99",
                  position: "absolute",
                  top: 0,
                  left: 0,
                  transition: "width 0.9s ease-in-out",
                }}
              />
            </LoadingbarDiv>
          </Logo>
        </Loading>
      </>
    );
  }

  return null; // 로딩이 끝나면 null을 반환하여 페이지를 표시하지 않음
}

export default LoadingPage;
