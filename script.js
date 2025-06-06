// 이미지 요소 선택
const image = document.getElementById('draggableImage1');

// 드래그 시작 시
image.addEventListener('dragstart', function(e) {
  // 일부 브라우저 호환을 위한 설정
  e.dataTransfer.setData('text/plain', null);
});

// 페이지 전체에서 드래그 오버 이벤트 처리
document.addEventListener('dragover', function(e) {
  e.preventDefault(); // 기본 동작 방지
});

// 페이지 전체에서 드롭 이벤트 처리
document.addEventListener('drop', function(e) {
  e.preventDefault();
  // 마우스 중심에 이미지가 오도록 위치 계산
  const offsetX = e.clientX - (image.offsetWidth / 2);
  const offsetY = e.clientY - (image.offsetHeight / 2);
  image.style.left = offsetX + 'px';
  image.style.top = offsetY + 'px';
});

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("feedbackForm");
  const feedbackText = document.getElementById("feedbackText");
  const confirmationMessage = document.getElementById("confirmationMessage");

  form.addEventListener("submit", function (e) {
      e.preventDefault(); // 페이지 새로고침 방지

      const feedback = feedbackText.value.trim();
      if (feedback) {
          console.log("피드백 제출됨:", feedback);
          confirmationMessage.style.display = "block"; // 제출 완료 메시지 표시
          feedbackText.value = ""; // 입력 필드 초기화
      }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const btn = document.getElementById("showDetails");
  const structureDiv = document.getElementById("structure");

  btn.addEventListener("click", function () {
      if (structureDiv.style.display === "none") {
          structureDiv.style.display = "block";
          btn.textContent = "숨기기";
      } else {
          structureDiv.style.display = "none";
          btn.textContent = "구조 보기";
      }
  });
});

