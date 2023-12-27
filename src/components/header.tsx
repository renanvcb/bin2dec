import { ModeToggle } from "./mode-toggle";
import { Separator } from "@/components/ui/separator";

export default function Header() {
  return (
    <>
      <div className="flex justify-between items-center py-1 px-2">
        <p className="text-2xl font-bold">Bin2Dec</p>
        {/* <div className="flex items-center text-2xl font-bold">
        <span className="text-green-700">Bin</span>
        <span className="text-blue-500">2</span>
        <span className="text-red-500">Dec</span>
      </div> */}
        <ModeToggle />
      </div>
      <Separator />
    </>
  );
}
