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