export interface routeTypes {
    name: string;
    route: string;
}

export interface HomeServicesProps{
    subtitle: string;
    title: string;
    description: string;
    img: string;
    link: string;
}

export interface ButtonPrincipalProps{
    title?: string;
    type?: "primary" | "secundary";
    buttonAction?: ()=> void;
}

export interface ButtonAnchorProps{
    title?: string;
    type?: "primary" | "secundary";
    buttonAction?: ()=> void;
    href: string;
}

export interface GoogleMapsProps{
    height?: string,
    width?: string;
}

export interface Service {
    title: string;
    description: string;
    logo: string;
}

export interface ServiceCategory {
    subTitle: string;
    title: string;
    description: string;
    link: string;
    img: string;
    services: Service[];
}

export interface ServiceCardProps{
    logo: string;
    title: string;
    description: string;
}

export interface aboutCardProps{
    title: string;
    description: string;
    index: number;
}

export interface ourApproach {
    approach:aboutCardProps[];
}

export interface FormDataProps {
    name: string;
    email: string;
    message: string;
  }