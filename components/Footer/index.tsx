import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="container mx-auto">
      <div className="text-center border-t py-8">
        <h3 className="text-xl">Important Links</h3>
        <div className="flex items-center justify-center my-4 underline">
          <Link href="https://dev.to/lpbryan" className="px-4">
            Dev.to (Lecrisha)
          </Link>
          <Link href="https://twitter.com/HellraiserBarbi" className="px-4">
            Twitter
          </Link>
          <Link href="https://linkedin.com/in/Lecrisha" className="px-4">
            LinkedIn
          </Link>
          <Link href="https://HellraiserBarbie.com" className="px-4">
            Website
          </Link>
        </div>
        <small>Lecrisha &copy; {new Date().getFullYear()}</small>
      </div>
    </footer>
  );
};
