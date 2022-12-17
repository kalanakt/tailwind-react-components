// import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { SunIcon } from "@heroicons/react/outline";

const ThemeSwitch = () => {
  //   const [mounted, setMounted] = useState(false);
  //   const { resolvedTheme, setTheme } = useTheme();
  const { theme, setTheme } = useTheme();
  // useEffect only runs on the client, so now we can safely show the UI
  //   useEffect(() => {
  //     setMounted(true);
  //   }, []);

  //   if (!mounted) {
  //     return null;
  //   }

  return (
    <div className="shadow-md inline-flex py-1 px-3 outline-none focus:outline-none rounded-md items-center border border-gray-200 dark:border-gray-800">
      <SunIcon className="w-4 h-4 mr-2" />
      <select
        name="themeSwitch"
        className="bg-transparent rounded-md outline-none focus:outline-none"
        value={theme}
        onChange={e => setTheme(e.target.value)}>
        <option className="bg-transparent rounded-t-md" value="system">System</option>
        <option className="bg-transparent" value="dark">Dark</option>
        <option className="bg-transparent rounded-b-md px-4" value="light">Light</option>
      </select>
    </div>
  );
};

export default ThemeSwitch;
