"use client";

const Page = () => {
  return (
    <div className="p-8">
      <h1>Welcome to Our Page</h1>
      <p>This is a simple page using the layout component.</p>
      <button
        onClick={() => {
          console.log("asd");
        }}
      >
        asd
      </button>
    </div>
  );
};

export default Page;
