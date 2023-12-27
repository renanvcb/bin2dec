import Converter from "@/components/converter";
import Footer from "@/components/footer";
import Header from "@/components/header";

export default function Home() {
  return (
    <div className="h-dvh">
      <Header />
      <Converter />
      <Footer />
    </div>
  );
}
