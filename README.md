# 엔믹스 음악 전시관 🎵

엔믹스의 독특한 음악 세계를 감각적인 UI/UX로 전시하는 웹 애플리케이션입니다.

## ✨ 주요 기능

- **음악 갤러리**: 엔믹스의 대표곡들을 카드 형태로 전시
- **필터링 & 정렬**: 앨범별 필터링, 발매일/제목/앨범순 정렬
- **상세 정보**: 각 곡의 상세 정보와 YouTube 링크 제공
- **반응형 디자인**: 모바일과 데스크톱에 최적화된 UI
- **애니메이션**: Framer Motion을 활용한 부드러운 인터랙션

## 🚀 기술 스택

- **Frontend**: React 18
- **스타일링**: CSS3 (Glassmorphism, Gradient)
- **애니메이션**: Framer Motion
- **배포**: GitHub Pages
- **폰트**: Noto Sans KR

## 📱 모바일 최적화

- 반응형 그리드 레이아웃
- 터치 친화적인 인터페이스
- 모바일 최적화된 폰트 크기
- 스와이프 제스처 지원

## 🎨 디자인 특징

- **Glassmorphism**: 반투명 유리 효과
- **Gradient Background**: 보라색 계열 그라데이션
- **Smooth Animations**: 부드러운 전환 효과
- **Modern UI**: 현대적이고 감각적인 디자인

## 🛠️ 설치 및 실행

### 1. 의존성 설치
```bash
npm install
```

### 2. 개발 서버 실행
```bash
npm start
```

### 3. 프로덕션 빌드
```bash
npm run build
```

## 🌐 GitHub Pages 배포

### 1. GitHub 저장소 설정
- `package.json`의 `homepage` 필드를 본인의 GitHub 사용자명으로 수정
```json
"homepage": "https://[your-username].github.io/mymusictoNMIXX"
```

### 2. 배포 실행
```bash
npm run deploy
```

### 3. GitHub 저장소 설정
- GitHub 저장소 → Settings → Pages
- Source를 `gh-pages` 브랜치로 설정
- Save 클릭

## 📁 프로젝트 구조

```
src/
├── components/
│   ├── Header.js          # 헤더 컴포넌트
│   ├── Header.css
│   ├── MusicGallery.js    # 음악 갤러리 컴포넌트
│   ├── MusicGallery.css
│   ├── MusicCard.js       # 개별 음악 카드
│   ├── MusicCard.css
│   ├── MusicDetail.js     # 음악 상세 모달
│   └── MusicDetail.css
├── data/
│   └── musicData.js       # 음악 데이터
├── App.js                 # 메인 앱 컴포넌트
├── App.css
├── index.js               # 앱 진입점
└── index.css              # 전역 스타일
```

## 🎵 음악 데이터 구조

```javascript
{
  id: 1,
  title: "O.O",
  artist: "NMIXX",
  album: "AD MARE",
  releaseDate: "2022-02-22",
  description: "곡 설명...",
  youtubeUrl: "YouTube 링크",
  thumbnail: "썸네일 이미지 URL",
  genre: "MIXX POP",
  duration: "3:15",
  highlights: ["하이라이트1", "하이라이트2"]
}
```

## 🔧 커스터마이징

### 음악 추가
`src/data/musicData.js`에 새로운 음악 객체를 추가하면 자동으로 갤러리에 표시됩니다.

### 스타일 수정
각 컴포넌트의 CSS 파일을 수정하여 디자인을 커스터마이징할 수 있습니다.

### 색상 테마 변경
`src/index.css`의 배경 그라데이션을 수정하여 전체적인 색상 테마를 변경할 수 있습니다.

## 📱 브라우저 지원

- Chrome (권장)
- Firefox
- Safari
- Edge
- 모바일 브라우저

## 🤝 기여하기

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 라이선스

이 프로젝트는 MIT 라이선스 하에 배포됩니다.

## 🙏 감사의 말

- NMIXX와 JYP Entertainment
- React 팀
- Framer Motion 팀
- 모든 오픈소스 기여자들

---

**엔믹스 음악 전시관**으로 독특한 음악 세계를 탐험해보세요! 🎶✨
