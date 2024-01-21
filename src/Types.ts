import { z } from 'zod'

export const Family100Schema = z.object({
    soal: z.string(),
    jawaban: z.array(z.string())
})
export type Family100 = z.infer<typeof Family100Schema>

export type YoutubeSearchResult = {
	title: string;
	thumbnail: string;
	duration: string;
	uploaded: string;
	views: string;
	url: string;
}[];
export type YoutubeDownloadResult = {
	title: string;
	duration: string;
	thumbnail: string;
	urls: { url: string; quality: string; ext: string }[];
	mp3: string;
};
export type InstagramDownloadResults = {
	url: string;
}[];
export type FacebookDownloadResult = {
	title: string;
	isHdAvailable: boolean;
	urls: { sd?: string; hd?: string }[];
};
