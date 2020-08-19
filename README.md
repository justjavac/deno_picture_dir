# deno_picture_dir

[![tag](https://img.shields.io/github/release/justjavac/deno_picture_dir)](https://github.com/justjavac/deno_picture_dir/releases)
[![Build Status](https://github.com/justjavac/deno_picture_dir/workflows/ci/badge.svg?branch=master)](https://github.com/justjavac/deno_picture_dir/actions)
[![license](https://img.shields.io/github/license/justjavac/deno_picture_dir)](https://github.com/justjavac/deno_picture_dir/blob/master/LICENSE)
[![](https://img.shields.io/badge/deno-v1.3-green.svg)](https://github.com/denoland/deno)

Returns the path to the user's picture directory.

The returned value depends on the operating system and is either a string,
containing a value from the following table, or `null`.

|Platform | Value                 | Example                     |
| ------- | --------------------- | --------------------------- |
| Linux   | `XDG_PICTURES_DIR`    | /home/justjavac/Pictures    |
| macOS   | `$HOME`/Pictures      | /Users/justjavac/Pictures   |
| Windows | `{FOLDERID_Pictures}` | C:\Users\justjavac\Pictures |

## Usage

Requires `allow-env` permission.

Returns `null` if there is no applicable directory or if any other error occurs.

```ts
import pictureDir from "https://deno.land/x/picture_dir/mod.ts";

pictureDir();
// Lin: "/home/justjavac/Pictures"
// Mac: "/Users/justjavac/Pictures"
// Win: "C:\Users\justjavac\Pictures"
```

## License

[deno_picture_dir](https://github.com/justjavac/deno_picture_dir) is released under the MIT License. See the bundled [LICENSE](./LICENSE) file for details.
