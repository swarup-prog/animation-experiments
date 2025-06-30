import { NAV_CIRCLE_GROWTH } from "@/constants";

interface ILetterPosElement {
  content: string;
  rotation: number;
}

export function getLetterPosition(
  charArr: string[],
  arrIndex: number
): ILetterPosElement[] {
  const charLen = charArr.length;
  const midIndex = Math.floor(charLen / 2);
  const baseArc = 90;
  let scale = arrIndex * (NAV_CIRCLE_GROWTH / 100);
  if (arrIndex === 1 || arrIndex === 0) {
    scale = 1;
  }
  const angle = baseArc / scale / charLen;

  let letterPos: ILetterPosElement[] = [];
  let leftPointer: number;
  let rightPointer: number;
  let iteration = 0;

  if (charLen % 2 !== 0) {
    // Odd: center char at 0°
    letterPos.push({
      content: charArr[midIndex],
      rotation: 0,
    });
    leftPointer = midIndex - 1;
    rightPointer = midIndex + 1;
  } else {
    // Even: two center chars, half-angle apart
    const halfAngle = angle / 2;
    leftPointer = midIndex - 1;
    rightPointer = midIndex;

    letterPos.unshift({
      content: charArr[leftPointer],
      rotation: halfAngle,
    });

    letterPos.push({
      content: charArr[rightPointer],
      rotation: -halfAngle,
    });

    leftPointer--;
    rightPointer++;
    iteration++;
  }

  while (leftPointer >= 0 || rightPointer < charLen) {
    const rotationAngle =
      charLen % 2 !== 0
        ? (iteration + 1) * angle // odd => full steps: 1 * angle, 2 * angle...
        : (iteration + 0.5) * angle; // even => half-step: 0.5, 1.5, ...

    if (leftPointer >= 0) {
      letterPos.unshift({
        content: charArr[leftPointer],
        rotation: rotationAngle,
      });
    }

    if (rightPointer < charLen) {
      letterPos.push({
        content: charArr[rightPointer],
        rotation: -rotationAngle,
      });
    }

    leftPointer--;
    rightPointer++;
    iteration++;
  }

  return letterPos;
}
