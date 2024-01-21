import { z } from 'zod'

export const AsahOtakSchema = z.object({
    index: z.number(),
    soal: z.string(),
    jawaban: z.string()
})
export type AsahOtak = z.infer<typeof AsahOtakSchema>

export const Family100Schema = z.object({
    soal: z.string(),
    jawaban: z.array(z.string())
})
export type Family100 = z.infer<typeof Family100Schema>

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

export type InstagramDownloadResults = {
	url: string;
}[];
export type FacebookDownloadResult = {
	title: string;
	isHdAvailable: boolean;
	urls: { sd?: string; hd?: string }[];
};
