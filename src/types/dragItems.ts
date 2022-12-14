export type TItemImg = {
  id: string;
  type: string;
  src: string;
  alt: string;
  position: {
    x: number;
    y: number;
  };
};

export type TItemText = {
  type: string;
  text: string;
};

export type TItem = {
  id: string;
  type: string;
  src?: string;
  alt?: string;
  position?: {
    x: number;
    y: number;
  };
};
