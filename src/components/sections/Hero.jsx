function Hero() {
  return (
    <section className="h-screen flex flex-col justify-center items-center text-center bg-gradient-to-b from-black via-gray-900 to-black">
      <h1 className="text-6xl font-bold mb-6 leading-tight">
        안녕하세요 👋 <br />
        <span className="text-blue-500">Frontend Developer</span>
      </h1>

      <p className="text-gray-400 mb-8 max-w-xl">
        React 기반으로 사용자 경험을 개선하는 웹을 만듭니다.
      </p>

      <div className="flex gap-4">
        <button className="px-6 py-3 bg-blue-500 rounded-xl hover:bg-blue-600 transition">
          프로젝트 보기
        </button>
        <button className="px-6 py-3 border border-gray-500 rounded-xl hover:bg-gray-800 transition">
          연락하기
        </button>
      </div>
    </section>
  )
}

export default Hero