export const speechTextSlider = async text => {
  let msg = new SpeechSynthesisUtterance(text);
  msg.voiceURI = "native";
  msg.volume = 1;
  msg.rate = 1;
  msg.pitch = 0.8;
  window.speechSynthesis.speak(msg);
  return new Promise(resolve => {
    msg.onend = resolve;
  });
};  