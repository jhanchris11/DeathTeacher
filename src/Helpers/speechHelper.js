export const speechTextSlider = async text => {
  let msg = new SpeechSynthesisUtterance(text);
  window.speechSynthesis.speak(msg);

  return new Promise(resolve => {
    msg.onend = resolve;
  });
};
