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
}

export interface GoogleMapsProps{
    height?: string,
    width?: string;
}

export interface Service {
    title: string;
    description: string;
}

export interface ServiceCategory {
    subTitle: string;
    title: string;
    description: string;
    link: string;
    img: string;
    services: Service[];
}