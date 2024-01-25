import { z } from 'zod'

export const YoutubeDownloaderArgsSchema = z.object({
    0: z.string().url(),
    1: z.literal('id')
        .or(z.literal('en'))
        .or(z.literal('es'))
        .optional()
})
export type YoutubeDownloaderArgs = z.infer<typeof YoutubeDownloaderArgsSchema>
const YoutubedlDataSchema = z.object({
    quality: z.string(),
    type: z.string(),
    fileSizeH: z.string(),
    fileSize: z.number(),
    download: z.function(z.tuple([]), z.promise(z.string().url()))
})

export const YoutubedlSchema = z.object({
    id: z.string(),
    thumbnail: z.string(),
    title: z.string(),
    duration: z.number(),
    video: z.record(z.string(), YoutubedlDataSchema),
    audio: z.record(z.string(), YoutubedlDataSchema),
    other: z.record(z.string(), YoutubedlDataSchema)
})
export type Youtubedl = z.infer<typeof YoutubedlSchema>

const LinkItemSchema = z.object({
    size: z.string(),
    f: z.string(),
    q: z.string(),
    q_text: z.string(),
    k: z.string(),
})
export type LinkItem = z.infer<typeof LinkItemSchema>

const LinksSchema = z.object({
    mp4: z.record(LinkItemSchema),
    mp3: z.record(LinkItemSchema),
    other: z.record(LinkItemSchema),
})

const RelatedContentSchema = z.object({
    v: z.string(),
    t: z.string(),
})

const RelatedVideosSchema = z.object({
    title: z.string(),
    contents: z.array(RelatedContentSchema),
})

export const YoutubedlResponseSchema = z.object({
    status: z.string(),
    mess: z.string(),
    page: z.string(),
    vid: z.string(),
    extractor: z.string(),
    title: z.string(),
    t: z.number(),
    a: z.string(),
    links: LinksSchema,
    related: z.array(RelatedVideosSchema),
})

export const ConvertResponseSchema = z.object({
    status: z.string(),
    mess: z.string(),
    c_status: z.string(),
    vid: z.string(),
    title: z.string(),
    ftype: z.string(),
    fquality: z.string(),
    dlink: z.string().url(),
});

export type InstagramDownloadResults = {
	url: string;
}[];
export type FacebookDownloadResult = {
	title: string;
	isHdAvailable: boolean;
	urls: { sd?: string; hd?: string }[];
};
