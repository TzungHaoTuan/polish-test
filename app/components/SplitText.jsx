const SplitText = ({ text, type = "char", line }) => {
  const splitArray = type === "word" ? text.split(" ") : text.split("");

  return (
    <div>
      {line === "start" ? (
        <span className="char inline-block italic leading-[80px]">
          &quot;&nbsp;
        </span>
      ) : (
        <span className="char opacity-0 inline-block italic leading-[80px]">
          &quot;&nbsp;
        </span>
      )}
      {splitArray.map((item, index) => (
        <span key={index} className="char inline-block whitespace-pre">
          {item}
          {type === "word" ? " " : ""}
        </span>
      ))}
      {line === "end" && (
        <span className="char inline-block italic leading-[80px]">&quot;</span>
      )}
    </div>
  );
};

export default SplitText;
