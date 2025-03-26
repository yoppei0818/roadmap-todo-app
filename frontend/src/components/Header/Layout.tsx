import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { LogOut } from "lucide-react";
import logo from "@/assets/temp-logo.jpg";

export const Layout = () => {
  return (
    <div className="fixed top-0 flex h-16 w-screen items-center justify-between border-b border-gray-300 bg-neutral-50 px-8 shadow-sm">
      <div className="logo">
        <a href="/">
          <img src={logo} className="h-10" alt="Roadmap-Todo" />
        </a>
      </div>
      <div className="flex items-center gap-3 sm:gap-8">
        <div className="flex items-center gap-2">
          <Avatar>
            <AvatarImage src="" />
            <AvatarFallback>U</AvatarFallback>
          </Avatar>
          <p className="hidden sm:block">Yuri Yohei</p>
        </div>
        <Button variant="default">
          <LogOut />
          Logout
        </Button>
      </div>
    </div>
  );
};
