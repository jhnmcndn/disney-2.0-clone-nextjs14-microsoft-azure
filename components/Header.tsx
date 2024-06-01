import { ThemeToggler } from "@/components/ThemeToggler";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <header>
      <Link href="/">
        <Image
          src="https://links.papareact.com/a943ae"
          alt="Disney Logo"
          width={120}
          height={100}
          className="cursor-pointe invert-0 dark:invert"
        />
      </Link>

      <div className="flex space-x-2">
        {/*GenreDropdown*/}
        {/*SearchInput*/}
        {/*ThemeToggler*/}
        <ThemeToggler/>
      </div>
    </header>
  );
};

export default Header;