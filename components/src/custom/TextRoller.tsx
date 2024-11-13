import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { CUSTOM } from "../constants/custom";

type ITextRoller = {
  values: string[];
  intervalMs?: number;
} & Omit<IEachChar, "index">;

export const TextRoller: React.FC<ITextRoller> = (props) => {
  const { values, intervalMs, ...otherProps } = props;

  const [currentIndex, setCurrentIndex] = useState(0);

  const currentText = useMemo(() => values[currentIndex], [currentIndex]);

  const longestLength = useMemo(() => {
    if (values.length === 0) return 0;
    return Math.max(...values.map((value) => value.length));
  }, [values]);

  const [indexes, setIndexes] = useState<number[]>([]);

  // #region Set Chars Index
  const setCharsIndexes = useCallback(() => {
    const _indexes: number[] = [];
    for (let i = 0; i < currentText.length; i++) {
      const indexOfChar = CUSTOM.CHARS.indexOf(currentText[i]);
      _indexes.push(indexOfChar);
    }
    setIndexes(_indexes);
  }, [currentText]);

  useEffect(() => {
    setCharsIndexes();
  }, [setCharsIndexes]);
  // #endregion

  // #region Setting Random Index
  const setRandomIndex = useCallback(() => {
    const index = Math.floor(Math.random() * values.length);
    setCurrentIndex(index);
  }, [values]);

  useEffect(() => {
    const interval = setInterval(setRandomIndex, intervalMs ?? 3000);
    return () => {
      clearInterval(interval);
    };
  }, [setRandomIndex, intervalMs]);
  // #endregion

  return (
    <div className="relative flex items-center items-center py-2">
      {Array.from({ length: longestLength }).map((_, i) => {
        const index = indexes[i];
        return <EachChar key={i} index={index} {...otherProps} trigger={indexes} />;
      })}
    </div>
  );
};

type IEachChar = {
  index?: number;
  className?: string;
  height: number;
  fontSize: number;
  trigger?: unknown;
};

const INDEX_OF_BLANK = CUSTOM.CHARS.indexOf(" ");

const EachChar: React.FC<IEachChar> = (props) => {
  const { index, className, height, fontSize, trigger } = props;

  const divRef = useRef<HTMLDivElement>(null);

  const scrollToChar = useCallback(() => {
    let indexOfChar = INDEX_OF_BLANK;
    if (index !== undefined) indexOfChar = index;
    const element = divRef.current?.childNodes.item(indexOfChar) as HTMLSpanElement;
    divRef.current?.scrollTo({
      top: element.offsetTop,
      behavior: "smooth",
    });
  }, [index]);

  useEffect(() => {
    scrollToChar();
  }, [scrollToChar, trigger]);

  return (
    <div ref={divRef} className="flex flex-col hide-scrollbar py-2 mx-[-3px]" style={{ maxHeight: height }}>
      {CUSTOM.CHARS.map((c, i) => (
        <span
          key={i}
          className={`flex flex-col justify-end text-center ${className}`}
          style={{ minHeight: height, fontSize: fontSize, lineHeight: `${fontSize}px` }}
        >
          {c}
        </span>
      ))}
    </div>
  );
};
