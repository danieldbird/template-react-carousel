function Controls(props) {
  const { setIndex, index } = props;
  return (
    <div className="controls">
      <button
        onClick={() => {
          setIndex(index - 1);
        }}
      >
        Prev
      </button>
      <button
        onClick={() => {
          setIndex(index + 1);
        }}
      >
        Next
      </button>
    </div>
  );
}

export default Controls;
