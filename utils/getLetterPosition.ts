interface ILetterPosElement {
  content: string;
  rotation: number;
}

export function getLetterPosition(charArr: string[]) {
  const charLen = charArr.length;
  let charMid = charLen / 2;
  const isCharEven = charLen % 2;
  let rightPointer = 0;
  let leftPointer = 0;

  let letterPos: ILetterPosElement[] = [];

  if (!isCharEven) {
    charMid = Math.ceil(charMid);
    letterPos.push({
      content: charArr[charMid],
      rotation: 0,
    });
  } else {
    rightPointer = Math.ceil(charMid);
    leftPointer = Math.floor(charMid);
    while (rightPointer < charLen && leftPointer >= 0) {
      letterPos.push({
        content: charArr[leftPointer],
        rotation: 0,
      });
      letterPos.push({
        content: charArr[rightPointer],
        rotation: 0,
      });
      rightPointer++;
      leftPointer--;
    }
  }
}
