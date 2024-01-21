
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
