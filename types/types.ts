export type conmmentTypes = {
  comment: string;
  date: string;
};

export type imageLocationTypes = {
  latitude: number;
  longitude: number;
};

export type userDataType = {
  uid: string;
  email: string;
  displayName?: string;
  profilePhoto?: string;
};

export type postItemType = {
  title: string;
  comments?: conmmentTypes[];
  likes?: number;
  location?: string;
  source: any;
};
