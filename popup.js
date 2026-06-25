document.getElementById('actionBtn').addEventListener('click', () => {
  const greetingText = document.getElementById('greeting');
  greetingText.textContent = "Widget button clicked!";
  greetingText.style.color = "blue";
});
