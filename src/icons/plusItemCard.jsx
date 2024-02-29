export function Plus({ mobile = false }) {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="17"
        className={mobile ? "plus-mobile" : "lol"}
        height="16"
        style={{ marginRight: "8px" }}
        viewBox="0 0 17 16"
        fill="none"
      >
        <path
          d="M8.50001 3.33325L8.50001 12.6666M3.83334 7.99992L13.1667 7.99992"
          stroke="white"
          stroke-width="2.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>{" "}
      <style jsx="true">
        {`
          .plus-mobile {
            @media (max-width: 600px) {
              width: 14px;
              height: 14px;
            }
          }
        `}
      </style>
    </>
  );
}
