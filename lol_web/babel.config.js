module.exports = {
    presets: ['next/babel'],
    plugins: [
      [
        'babel-plugin-styled-components',
        {
          ssr: true, // 서버사이드 렌더링을 위해 true로 설정합니다.
          displayName: true, // 개발모드에서 스타일 컴포넌트 이름을 보여줍니다.
          preprocess: false // 전처리기를 사용하지 않습니다.
        }
      ]
    ]
  }