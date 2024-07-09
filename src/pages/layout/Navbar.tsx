import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { NavLink } from "react-router-dom";
import logo from "/assets/images/Logo.svg";
import minilogo from "/assets/images/Logo.png";

const Navbar = () => {
  return (
    <div className="">
      <header className="sticky top-0 flex h-16 items-center gap-4 max-sm:px-6 bg-background max-sm:gap-64 px-16 md:px-16">
        <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
          <div className="flex items-center gap-2 text-black font-bold">
            <NavLink to="/work">
              <img src={logo} alt="Logo" className="" />
            </NavLink>
          </div>
        </nav>
        <Sheet>
          <div className="md:hidden flex items-center justify-between mr-3 text-black font-bold">
            <NavLink to="/work">
              <img src={minilogo} alt="Logo" className="h-8" />
            </NavLink>
          </div>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="shrink-0 md:hidden border-0"
            >
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-full">
            <nav className="grid gap-6 text-lg font-medium mt-32" id="topnav">
              <div className="flex items-center justify-center gap-2 mb-16 text-black font-bold">
                <img src={logo} alt="Logo" className="" />
                <span></span>
              </div>
              <SheetClose asChild>
                <NavLink to="/work" className="hover:text-foreground">
                  Work
                </NavLink>
              </SheetClose>
              <SheetClose asChild>
                <NavLink
                  to="/"
                  className="text-muted-foreground hover:text-foreground"
                >
                  About
                </NavLink>
              </SheetClose>
              <SheetClose asChild>
                <NavLink
                  to="/contact"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Contact
                </NavLink>
              </SheetClose>
            </nav>
          </SheetContent>
        </Sheet>
        <nav
          id="topnav"
          className="flex font-medium max-sm:hidden items-center gap-8 md:ml-auto md:gap-2 lg:gap-8 ml-auto flex-1 sm:flex-initial"
        >
          <NavLink
            to="/work"
            className="text-foreground transition-colors hover:text-foreground"
          >
            Work
          </NavLink>
          <NavLink
            to="/"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            About
          </NavLink>
          <NavLink
            to="/contact"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            Contact
          </NavLink>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
