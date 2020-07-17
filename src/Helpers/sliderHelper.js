const TOTAL_PARAGRAPHS = 8;

//TODO: Refactor method
export const separateSlider = subtopic => {
  let count = 0;
  let tempArray = [];
  let paragrahs = subtopic.split(".");
  if (paragrahs.length > TOTAL_PARAGRAPHS) {
    paragrahs.map((paragrah, index) => {
      if (count == TOTAL_PARAGRAPHS || paragrah.length == index + 1) {
        tempArray.push(paragrahs.slice(index - count, index).join("."));
        count = 0;
      }
      count++;
    });
  }
  return tempArray;
};
