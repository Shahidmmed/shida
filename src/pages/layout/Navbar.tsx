import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { NavLink } from "react-router-dom";
import logo from "/assets/images/Logo.svg";

const Navbar = () => {
  return (
    <div className="">
      <header className="sticky top-0 flex h-16 items-center gap-4 max-sm:px-6 bg-background max-sm:gap-20 px-16 md:px-16">
        <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
          <div className="flex items-center gap-2 text-black font-bold">
            <NavLink to="/work">
              <img src={logo} alt="Logo" className="" />
            </NavLink>
          </div>
        </nav>
        <Sheet>
          <div className="md:hidden flex items-center gap-2 text-black font-bold">
            <NavLink to="/work">
              <img src={logo} alt="Logo" className="" />
            </NavLink>
          </div>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="shrink-0 md:hidden"
            >
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <nav className="grid gap-6 text-lg font-medium">
              <div className="flex items-center gap-2 text-black font-bold">
                <img src={logo} alt="Logo" className="" />
                <span></span>
              </div>
              <NavLink to="/work" className="hover:text-foreground">
                Work
              </NavLink>
              <NavLink
                to="/"
                className="text-muted-foreground hover:text-foreground"
              >
                About
              </NavLink>
              <NavLink
                to="/contact"
                className="text-muted-foreground hover:text-foreground"
              >
                Contact
              </NavLink>
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
