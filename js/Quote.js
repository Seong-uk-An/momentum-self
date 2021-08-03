const quotes = [{
        quote: "지금 주어진 시간들을 후회없이 즐기고 노력하라.",
        author: "손흥민"
    },
    {
        quote: "쓰러질지 언정 무릎은 꿇지 않는다.",
        author: "박지성"
    },
    {
        quote: "공은 내 앞에서 멈춘다.",
        author: "파비오 칸나바로"
    },
    {
        quote: "나는 공을 막는 것이 아니라 팀의 패배를 막는 것이다.",
        author: "이케르 카시야스"
    },
    {
        quote: "나의 장점은 드리블도 스피드도 아닌 축구에 대한 열정이다.",
        author: "호나우두"
    },
    {
        quote: "폼은 일시적이지만 클래스는 영원하다",
        author: "빌 샹클리"
    },
    {
        quote: "힘든가? 오늘 쉬면 내일은 뛰어야 한다.",
        author: "카를레스 푸욜"
    },
    {
        quote: "사각지대는 그 어떤 골키퍼도 막을 수 없다. 그러나, 나는 막을 수 있다.",
        author: "레프 야신"
    },
    {
        quote: "축구는 몸이 아닌 머리로 하는 것이다.",
        author: "요한 크루이프"
    },
    {
        quote: "나는 세계 최고의 선수다. 자기에 대한 믿음이 없다면 그 사람은 끝난 것이다.",
        author: "즐라탄 이브라히모비치"
    }
]

const quote = document.querySelector("#quote")
const author = document.querySelector("#author")
const currentQuote = quotes[Math.floor(Math.random() * quotes.length)]

quote.innerText = currentQuote.quote
author.innerText = `-${currentQuote.author}`