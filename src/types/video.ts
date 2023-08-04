export interface video {
  id: {
    videoId: string
  }
  snippet: {
    publishedAt: string
    channelId: string
    title: string
    description: string
    thumbnails: {
      high: {
        url: string
        width: number
        height: number
      }
    }
  }
}

export interface VideoList {
  status: number
  data: {
    items: video[]
  }
}

export type SearchData = (
  keyword: string
) => Promise<VideoList>
