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

export interface playlist {
  status: number
  data: {
    items: video[]
  }
}
