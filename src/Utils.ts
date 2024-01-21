import axios, { AxiosInstance, AxiosRequestConfig } from "axios"
import cheerio from "cheerio"
import crypto from 'crypto'

function CreateInstance (
	headers?: { [key: string]: any },
	config?: AxiosRequestConfig
): AxiosInstance {
	return axios.create({
		headers: {
			"User-Agent": "Frieren-Scraper (0.0.1x)",
			...headers
		},
		...config
	})
}
export const Axios = CreateInstance()
export function Cheerio (data: any): any {
	return cheerio.load(data)
}

export function parseFileSize (size: string): number {
  const sized = parseFloat(size)
  return (isNaN(sized) ? 0 : sized) * (
    /GB/i.test(size)
      ? 1000000
      : /MB/i.test(size)
        ? 1000
        : /KB/i.test(size)
          ? 1
          : /bytes?/i.test(size)
            ? 0.001
            : /B/i.test(size)
              ? 0.1
              : 0
  )
}
