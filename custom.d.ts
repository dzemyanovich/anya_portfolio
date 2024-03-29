declare module '*.png' {
  const content: any;
  export default content;
}

declare module '*.jpg' {
  const content: any;
  export default content;
};

declare module '*.jpeg' {
  const content: any;
  export default content;
};

declare module '*.svg' {
  const content: any;
  export default content;
}

type Product = {
  category: string,
  path: string,
  imageSrc: string,
  name: string,
  year: number,
};

type LoginRequest = {
  password: string,
};

type LoginResponse = {
  isCorrectPassword: boolean,
  token: string,
};

type ValidateTokenRequest = {
  token: string,
};

type ValidateTokenResponse = {
  isValidToken: boolean,
};
