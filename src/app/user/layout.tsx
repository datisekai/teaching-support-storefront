import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import Header from "@/components/custom/header";
import Footer from "@/components/custom/footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const user = { id: 1, name: "Nguyễn Hải Dương", mssv: "3120410103" };
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-[url('/slider2_1240x450-min.jpg')] bg-cover bg-center">
      <Card className="h-full md:w-[60vh] w-full rounded-none">
        <CardHeader className="bg-[url('/background-header.png')] h-[30vh] flex justify-center">
          <Header content={user} />
        </CardHeader>
        <CardContent className="pb-1 px-2">{children}</CardContent>
        <CardFooter className="pb-0 px-0 md:w-[60vh] w-full z-10 h-16 flex items-center justify-between fixed left-1/2 transform -translate-x-1/2 bottom-0 ">
          <Footer />
        </CardFooter>
      </Card>
    </main>
  );
}
