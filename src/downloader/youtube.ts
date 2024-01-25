import got from 'got'
import { Axios, Cheerio, parseFileSize } from "../Utils"
import { DEFAULT_HEADERS } from "../Constant"
import { errorHandling } from "../Interface"
import {
    YoutubeDownloaderArgsSchema,
    YoutubeDownloaderArgs,
    YoutubedlSchema,
    Youtubedl,
    ConvertResponseSchema,
    LinkItem,
    YoutubedlResponseSchema
} from "../Types/downloader"

export default async function youtubedl (
    url: string,
    server?: YoutubeDownloaderArgs['1']
) {
    YoutubeDownloaderArgsSchema.parse(arguments)

    const form = {
        k_query: url,
        k_page: 'home',
        hl: server || 'id',
        q_auto: 0
    }
    const data = await got.post('https://www.y2mate.com/mates/analyzeV2/ajax', {
        headers: {
            ...DEFAULT_HEADERS,
            'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
            'cookie': '_gid=GA1.2.1661642241.1695862299; _ga=GA1.1.27702254.1695862299; _ga_K8CD7CY0TZ=GS1.1.1695862298.1.1.1695864422.0.0.0; prefetchAd_3381349=true',
            'origin': 'https://www.y2mate.com'
        },
        form
    }).json()
    const json = YoutubedlResponseSchema.parse(data)
    const video: Youtubedl['video'] = {}
    const audio: Youtubedl['audio'] = {}
    const other: Youtubedl['other'] = {}
    for (const key in json.links) {
        for (const tag in json.links[key as keyof typeof json.links]) {
            const data: LinkItem = json.links[key as keyof typeof json.links][tag]
            const quality = data.q
            const type = data.f
            const fileSizeH = data.size
            const fileSize = parseFileSize(fileSizeH);
            (type === 'mp4' ? video : type === 'mp3' ? audio : other)
            [quality.toLowerCase()] = {
                quality,
                type,
                fileSizeH,
                fileSize,
                download: convert.bind(convert, json.vid, data.k)
            }
        }
    }
    const result = {
        id: json.vid,
        thumbnail: `https://i.ytimg.com/vi/${json.vid}/0.jpg`,
        title: json.title,
        duration: json.t,
        video,
        audio,
        other
    }
    return YoutubedlSchema.parse(result)
}

export async function convert (vid: string, k: string) {
    const form = {
        vid,
        k
    }
    const data = await got.post('https://www.y2mate.com/mates/convertV2/index', {
        headers: {
            ...DEFAULT_HEADERS,
            'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
            'cookie': '_gid=GA1.2.1661642241.1695862299; _ga=GA1.1.27702254.1695862299; _ga_K8CD7CY0TZ=GS1.1.1695862298.1.1.1695864422.0.0.0; prefetchAd_3381349=true',
            'origin': 'https://www.y2mate.com'
        },
        form
    }).json()
    const json = ConvertResponseSchema.parse(data)
    return json.dlink
}
