/** Returns the path to the user's picture directory.
 *
 * The returned value depends on the operating system and is either a string,
 * containing a value from the following table, or `null`.
 * 
 * |Platform | Value                 | Example                     |
 * | ------- | --------------------- | --------------------------- |
 * | Linux   | `XDG_PICTURES_DIR`    | /home/justjavac/Pictures    |
 * | macOS   | `$HOME`/Pictures      | /Users/justjavac/Pictures   |
 * | Windows | `{FOLDERID_Pictures}` | C:\Users\justjavac\Pictures |
 */
export default function pictureDir(): string | null {
  switch (Deno.build.os) {
    case "linux": {
      return Deno.env.get("XDG_PICTURES_DIR") ?? null;
    }

    case "darwin": {
      const home = Deno.env.get("HOME");
      if (home) return `${home}/Pictures`;
      break;
    }

    case "windows":
      return Deno.env.get("FOLDERID_Pictures") ?? null;
  }

  return null;
}
