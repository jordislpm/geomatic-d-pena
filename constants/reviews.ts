interface CardReviewProps {
    name: string;
    rating: number;
    text: string;
    time: number;
    profile_photo_url: string;
    publishAt: string;
    isLocalGuide: boolean;
    reviewerNumberOfReviews: number;
    likesCount: number;
}

// Extracted reviews data (all 15 reviews - Spanish version)
const reviewsData: CardReviewProps[] = [
    {
        name: "Alexander Lopez",
        rating: 5,
        text: "Usamos a Juan y su compañia para unos planos de curvas de nivel , el trabajo se hiso rapido y con buena comunicacion , lo recomiendo.",
        time: 1714607682683,
        profile_photo_url: "https://lh3.googleusercontent.com/a-/ALV-UjUOZIK_PdK4KXxwj9Q_ldjR1AbLcKuqJwswc2WRsnBF1IQE2RCh=s1920-c-rp-mo-br100",
        publishAt: "Hace 4 meses",
        isLocalGuide: false,
        reviewerNumberOfReviews: 6,
        likesCount: 0
    },
    {
        name: "Olivier De la CONDAMINE",
        rating: 5,
        text: "Servicio perfecto, profesional y ultra cortés. Gracias a todo el equipo, muy comprometidos con la satisfacción del cliente.",
        time: 1729809325945,
        profile_photo_url: "https://lh3.googleusercontent.com/a-/ALV-UjXtR3ShfOLqWgRlTu84cO0HLRbrQDUOXLO2IXGYB0UdnuvIr7w=s1920-c-rp-mo-br100",
        publishAt: "Hace 10 meses",
        isLocalGuide: false,
        reviewerNumberOfReviews: 7,
        likesCount: 0
    },
    {
        name: "Oksana Romaniuk",
        rating: 5,
        text: "Muy conocido y bueno",
        time: 1726336433474,
        profile_photo_url: "https://lh3.googleusercontent.com/a-/ALV-UjVJXBfALhUE_7djsKchlbVEVU8e-njmCn4T40COOEsnbYem5ihI=s1920-c-rp-mo-br100",
        publishAt: "Hace un año",
        isLocalGuide: false,
        reviewerNumberOfReviews: 2,
        likesCount: 0
    },
    {
        name: "Craig Moore",
        rating: 5,
        text: "Geomatrica e Inmobiliaria hizo un gran trabajo para nosotros en un trabajo difícil. Se mantuvieron firmes cuando otras empresas dijeron que no se podía hacer y completaron el trabajo. los recomiendo ampliamente",
        time: 1679365756951,
        profile_photo_url: "https://lh3.googleusercontent.com/a/ACg8ocImcKoL1Wdg7bqwb6rsc0pFE1vRMaUFQ67UMUyxYjJZyEtCMg=s1920-c-rp-mo-br100",
        publishAt: "Hace 2 años",
        isLocalGuide: false,
        reviewerNumberOfReviews: 1,
        likesCount: 0
    },
    {
        name: "Jose Bourget",
        rating: 5,
        text: "Profesionales, efectivos, buena comunicación.",
        time: 1678804456299,
        profile_photo_url: "https://lh3.googleusercontent.com/a-/ALV-UjWhj34tus5S0Hx3X9KbLagEcuio3tRFovIgNQz5DvdvKFeSrHhENA=s1920-c-rp-mo-ba2-br100",
        publishAt: "Hace 2 años",
        isLocalGuide: true,
        reviewerNumberOfReviews: 6,
        likesCount: 0
    },
    {
        name: "Daniel Frigeri diaz",
        rating: 5,
        text: "Excelente trabajo y trato. Un placer trabajar con Jordis Peña.",
        time: 1662563322039,
        profile_photo_url: "https://lh3.googleusercontent.com/a-/ALV-UjVkDPj3m0k9iDqUWe6MBY1UsUlrKfmTNCXt0SpwNObnEkjvJhvW=s1920-c-rp-mo-br100",
        publishAt: "Hace 3 años",
        isLocalGuide: false,
        reviewerNumberOfReviews: 3,
        likesCount: 0
    },
    {
        name: "Andres Lopez",
        rating: 5,
        text: "Excelente servicio. Muy profesional y preparado.",
        time: 1659384062700,
        profile_photo_url: "https://lh3.googleusercontent.com/a/ACg8ocLt3eQmxNtVRyNDNIVty5UMsSHWJ2Sj7HeWA-nhg9bSSs0Cww=s1920-c-rp-mo-br100",
        publishAt: "Hace 3 años",
        isLocalGuide: false,
        reviewerNumberOfReviews: 1,
        likesCount: 0
    },
    {
        name: "Yesy Luna",
        rating: 5,
        text: "Juan Tomas es un profesional serio y confiable, 100% recomendado!",
        time: 1653266212426,
        profile_photo_url: "https://lh3.googleusercontent.com/a/ACg8ocJgjTMo1bgIK3tBI5eI65VfHhqESApHGZAjn2rJW7-ToCcXBw=s1920-c-rp-mo-br100",
        publishAt: "Hace 3 años",
        isLocalGuide: false,
        reviewerNumberOfReviews: 1,
        likesCount: 0
    },
    {
        name: "Bill Med International Inc.",
        rating: 5,
        text: "No text provided",
        time: 1653259649698,
        profile_photo_url: "https://lh3.googleusercontent.com/a-/ALV-UjVXR6BeEPjKbkMKeQhvxe2BI7ySfEl-__TsbeQSeGfNDqJj5kM=s1920-c-rp-mo-br100",
        publishAt: "Hace 3 años",
        isLocalGuide: false,
        reviewerNumberOfReviews: 0,
        likesCount: 0
    },
    {
        name: "jordi sicilia",
        rating: 5,
        text: "No text provided",
        time: 1650267220184,
        profile_photo_url: "https://lh3.googleusercontent.com/a/ACg8ocJKSZQdDfI5F5ur9y8drx1CXGqjGPjFDltNZz-D-ccSEsO7YQ=s1920-c-rp-mo-br100",
        publishAt: "Hace 3 años",
        isLocalGuide: false,
        reviewerNumberOfReviews: 2,
        likesCount: 0
    },
    {
        name: "Michel Marin",
        rating: 5,
        text: "Muy buen servicio y excelente trato, 100% recomendado.",
        time: 1649287013258,
        profile_photo_url: "https://lh3.googleusercontent.com/a-/ALV-UjWkyN6gvrGiv175gmDYEzqfZe42z0hXeK2hZS_ls_d4DEz_b6Mb=s1920-c-rp-mo-br100",
        publishAt: "Hace 3 años",
        isLocalGuide: false,
        reviewerNumberOfReviews: 4,
        likesCount: 0
    },
    {
        name: "Andry Camero",
        rating: 5,
        text: "No text provided",
        time: 1649287472936,
        profile_photo_url: "https://lh3.googleusercontent.com/a/ACg8ocIRNnIk7lo8BOyrGX6ktq3ljd6D9cUCD2JBwyMfBNF6gSLL4Q=s1920-c-rp-mo-br100",
        publishAt: "Hace 3 años",
        isLocalGuide: false,
        reviewerNumberOfReviews: 2,
        likesCount: 0
    },
    {
        name: "Yelena Camero",
        rating: 5,
        text: "Utilizamos los servicios de el Sr. Juan Tomas y su equipo y estamos muy agradecidos con ellos. Su profesionalismo y rápida respuesta siempre, fue algo que nos encantó y nos hizo sentir seguros a la hora de elegirlos. Hiceron un excelente trabajo y quedamos mas que complacidos 🙏🏻",
        time: 1649287151534,
        profile_photo_url: "https://lh3.googleusercontent.com/a-/ALV-UjVFDSpTn8RcRdN9HwE-0IRSuRzq49BEBWdyYhJb9mBXLZObiw5uog=s1920-c-rp-mo-br100",
        publishAt: "Hace 3 años",
        isLocalGuide: false,
        reviewerNumberOfReviews: 5,
        likesCount: 0
    },
    {
        name: "Las Terrenas Te informa",
        rating: 5,
        text: "No text provided",
        time: 1649285106652,
        profile_photo_url: "https://lh3.googleusercontent.com/a/ACg8ocLikR_H-ilKr9Z6_esSq_rfY0jfs9f-vu4dOUWUiAvUvCAWQA=s1920-c-rp-mo-br100",
        publishAt: "Hace 3 años",
        isLocalGuide: false,
        reviewerNumberOfReviews: 0,
        likesCount: 0
    },
    {
        name: "cooperativa agropecuaria las terrenas",
        rating: 5,
        text: "No text provided",
        time: 1649284218754,
        profile_photo_url: "https://lh3.googleusercontent.com/a/ACg8ocI5n6E-NMOjThRVSJlIWA9pQvtvYtyZLNfHlUCIq7uqVUEToQ=s1920-c-rp-mo-br100",
        publishAt: "Hace 3 años",
        isLocalGuide: false,
        reviewerNumberOfReviews: 0,
        likesCount: 0
    }
];

// Export for use
export { type CardReviewProps, reviewsData };