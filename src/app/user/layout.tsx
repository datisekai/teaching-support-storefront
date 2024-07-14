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
    <main className="flex min-h-screen flex-col items-center justify-between ">
      <Card className="h-full md:w-[60vh] w-full rounded-none">
        <CardHeader className="bg-primary">
          <Header content={user} />
        </CardHeader>
        <CardContent className="grid gap-4 pb-2">{children}</CardContent>
        <CardFooter className="z-10 h-20 fixed left-0 right-0 bottom-0 bg-red-600">
          <Footer />
        </CardFooter>
      </Card>
    </main>
  );
}
