import axios from 'axios';
import { TikWM } from '../Constant';
import { TiktokDownloadResult } from '../Types/downloader';
import { errorHandling } from '../Interface';

export interface TiktokScrapeResponse {
  code: number;
  msg: string;
  processed_time: number;
  data: {
    id: string;
    region: string;
    title: string;
    cover: string;
    duration: number;
    play: string;
    wmplay: string;
    hdplay: string;
    size: number;
    wm_size: number;
    hd_size: number;
    music: string;
    music_info: {
      id: string;
      title: string;
      play: string;
      author: string;
      original: boolean;
      duration: number;
      album: string;
    };
    play_count: number;
    digg_count: number;
    comment_count: number;
    share_count: number;
    download_count: number;
    collect_count: number;
    create_time: number;
    author: {
      id: string;
      unique_id: string;
      nickname: string;
      avatar: string;
    };
  };
}

export async function tiktokdl(url: string): Promise<TiktokDownloadResult | errorHandling> {
  try {
    const scrapeResult = await axios.post<TiktokScrapeResponse>(
      TikWM,
      { url, count: 12, cursor: 0, web: 1, hd: 1 }
    );

    const data: TiktokScrapeResponse = scrapeResult.data;

    if (scrapeResult.status === 200) {
      if (data && typeof data === 'object') {
        if (data.code === 0 && data.data) {
          const {
            id,
            region,
            title,
            duration,
            play,
            wmplay,
            hdplay,
            size,
            wm_size,
            hd_size,
            music,
            music_info,
            play_count,
            digg_count,
            comment_count,
            share_count,
            download_count,
            collect_count,
            create_time,
            author,
          } = data.data;

          return {
            id,
            region,
            title,
            duration,
            play,
            wmplay,
            hdplay,
            size,
            wm_size,
            hd_size,
            music,
            music_info,
            play_count,
            digg_count,
            comment_count,
            share_count,
            download_count,
            collect_count,
            create_time,
            author,
          };
        } else {
          throw new Error(data.msg || `Failed to scrape data from ${TikWM}`);
        }
      } else {
        throw new Error(data.msg || `Failed to scrape data from ${TikWM}`);
      }
    } else {
      throw new Error(`Unexpected status code: ${scrapeResult.status}`);
    }
} catch (error: any) {
  console.error('Error:', (error as Error).message);
  return {
    error: true,
    message: String((error as Error).message || 'Unknown error'),
  };
}
