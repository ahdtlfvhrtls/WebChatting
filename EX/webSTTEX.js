// 브라우저용: 마이크 음성 -> 텍스트 변환
const recognition = new window.webkitSpeechRecognition(); // 크롬 기준
recognition.lang = "ko-KR"; // 한국어
recognition.interimResults = false;
recognition.continuous = false;

recognition.onresult = (event) => {
  const transcript = event.results[0][0].transcript;
  console.log("🗣️ 텍스트:", transcript);
  sendToChat(transcript); // 채팅창에 보내기
};

recognition.onerror = (e) => {
  console.error("STT 오류:", e.error);
};

recognition.start();
