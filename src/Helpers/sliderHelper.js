const TOTAL_PARAGRAPHS = 4;

//TODO: Refactor method
export const separateSlider = subtopic => {
  let count = 0;
  let tempArray = [];
  let paragrahs = subtopic.split(".");
  if (paragrahs.length > TOTAL_PARAGRAPHS) {
    paragrahs.map((paragrah, index) => {
      if (count == TOTAL_PARAGRAPHS || paragrahs.length == index + 1) {
        tempArray.push(paragrahs.slice(index - count, index).join("."));
        count = 0;
      }
      count++;
    });
  }
  return tempArray;
};
