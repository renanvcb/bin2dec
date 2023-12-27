import { Separator } from "./ui/separator";

export default function Footer() {
  return (
    <>
      <Separator />
      <div className="flex items-center justify-center py-1 px-2">
        <p className="">
          Made by{" "}
          <a
            className="hover:underline"
            target="_blank"
            href="https://github.com/renanvcb"
            rel="noopener noreferrer"
          >
            Renan Borges
          </a>
        </p>
      </div>
    </>
  );
}
