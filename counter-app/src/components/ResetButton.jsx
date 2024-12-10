function ResetButton({ count, setCount }) {
  return (
    <>
      {count > 0 && (
        <button
          onClick={() => setCount(0)}
          style={{ backgroundColor: 'lightgreen' }}
        >
          Reset
        </button>
      )}
    </>
  )
}

export default ResetButton
