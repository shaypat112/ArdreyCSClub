export default function Footer() {
  const contributors = [
    {
      id: 1,
      name: "Shivang Patel",
    },
  ];

  return (
    <footer className="mt-auto bg-black text-sm text-zinc-400 py-6">
      <div className="mx-auto max-w-7xl px-6 text-center">
        <div className="mb-2">
          &copy; {new Date().getFullYear()} Ardrey Kell Computer Science Club.
        </div>

        <div className="mb-2 text-zinc-300">
          This website was built by{" "}
          <span className="font-medium text-zinc-200">
            {contributors.map((c) => c.name).join(", ")}
          </span>
        </div>

        <div>
          <a
            href="https://github.com/shaypat112/ArdreyCSClub"
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-400 hover:underline"
          >
            View on GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}
