export default function Footer() {
  const contributors = [
    {
      id: 1,
      name: "Shivang Patel",
    },
  ];

  return (
    <footer className="mt-auto bg-black text-center text-sm text-zinc-400 py-4">
      &copy; {new Date().getFullYear()} Ardrey Kell Computer Science Club. All
      rights reserved.
      <p>
        This website was built by
        <ul className="inline-flex gap-2 ml-1">
          {contributors.map((contributor) => (
            <li key={contributor.id} className="font-medium text-zinc-200">
              {contributor.name}
            </li>
          ))}
        </ul>
      </p>
    </footer>
  );
}
