export interface TracksInterface {
  id: string
  title: string
  talks: Talks[]
}

export interface Talks {
  issueType: string,
  text: string,
  speaker?: string,
  createdAt: string,
  image?: string
  tags?: Tag[]
  description?: string
}

export interface Tag {
  name: string;
  color?: string;
}
