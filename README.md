[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/colored.png)](#table-of-contents)
# UBS

 > *Note*: Source Recode From https://github.com/xct007/frieren-scraper
 
 <p align="center">
<img width="" src="https://img.shields.io/github/repo-size/RFIunknown/UBS?color=green&label=Repo%20Size&style=for-the-badge&logo=appveyor">

</p>

## List features

| Feature  | Status |
| ------------- | ------------- |
| Games | ✅ |
| Downloader | ✅ |

#### Installations.

Using GitHub version to test latest fix/update.

```bash
npm install github:RFIunknown/UBS
```
## Example use

### Downloader
#### Youtube

```js
// import module
import { youtubedl } from '@RFIunknown/UBS'

const data = await youtubedl('https://youtu.be/iik25wqIuFo')
console.log(data) // JSON
const resolutions = Object.keys(data.video) // List of resolution/quality
console.log(resolutions) 
const url = await data.video[resolutions[0]].download() // Download '720p' video
console.log(url) // string
```
#### Instagram

```js
import { instagram } from "@RFIunknown/UBS";

// fetch direct download url
const Obj = await instagram("https://instagram_URL");
console.log(Obj);
```

### Games
#### Family00
```js
import { family100 } from '@RFIunknown/UBS'

const data = await family100()
console.log(data) // JSON
```
#### Asah Otak
```js
import { asahotak } from '@RFIunknown/UBS'

const data = await asahotak()
console.log(data) // JSON
```

 [![xct007](https://github.com/xct007.png?size=100)](https://github.com/xct007) | [![BochilTeam](https://github.com/BochilTeam.png?size=150)](https://github.com/BochilTeam) | [![RFIunknown](https://github.com/RFIunknown.png?size=100)](https://github.com/RFIunknown)
----|----|----
[xct007](https://github.com/xct007) | [BochilTeam](https://github.com/BochilTeam) | [RFIunknown](https://github.com/RFIunknown)
 Source Bawaan | Beberapa Kode | Pengembang ulang
