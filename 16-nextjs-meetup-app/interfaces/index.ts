export interface IMeetup {
  id: string;
  image: string;
  title: string;
  address: string;
  description: string;
}

export type IMeetupInput = Omit<IMeetup, "id">;
