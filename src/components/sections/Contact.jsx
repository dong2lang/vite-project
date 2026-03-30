function Contact() {
  return (
    <section id="contact" className="py-24 px-6 text-center">
      <h2 className="text-4xl font-bold mb-6">Contact</h2>

      <div className="flex justify-center gap-4">
        <input
          placeholder="이메일 입력"
          className="px-4 py-3 rounded-lg bg-gray-800 border border-gray-700"
        />
        <button className="px-6 py-3 bg-blue-500 rounded-lg hover:bg-blue-600">
          보내기
        </button>
      </div>
    </section>
  )
}

export default Contact