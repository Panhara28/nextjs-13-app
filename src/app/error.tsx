"use client";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <>
      <div>{error.message}</div>
      <button onClick={() => reset()}>Reset</button>
    </>
  );
}
