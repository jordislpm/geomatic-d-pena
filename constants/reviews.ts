export interface CardReviewProps {
  name: string;
  rating: number;
  text: string;
  publishedAtDate: string;
  time: number;
  publishAt?: string;
  profile_photo_url: string;
  isLocalGuide: boolean;
  reviewerNumberOfReviews: number;
  likesCount: number;
}

/**
 * Calculates a dynamic, accurate relative time string (in Spanish)
 * compared to the current date (new Date()).
 * Example: "Hace 3 meses", "Hace 1 año", "Hace 2 semanas", "Ayer", etc.
 */
export function formatRelativeTime(dateInput: string | number | Date): string {
  if (!dateInput) return "Reciente";

  const date = typeof dateInput === "number"
    ? new Date(dateInput)
    : new Date(dateInput);

  if (isNaN(date.getTime())) return "Reciente";

  const now = new Date();
  const diffInMs = now.getTime() - date.getTime();

  // If clock skew or future timestamp
  if (diffInMs < 0) return "Hace un momento";

  const diffInSeconds = Math.floor(diffInMs / 1000);
  const diffInMinutes = Math.floor(diffInSeconds / 60);
  const diffInHours = Math.floor(diffInMinutes / 60);
  const diffInDays = Math.floor(diffInHours / 24);
  const diffInWeeks = Math.floor(diffInDays / 7);
  const diffInMonths = Math.floor(diffInDays / 30.4375);
  const diffInYears = Math.floor(diffInDays / 365.25);

  if (diffInDays < 1) {
    if (diffInHours < 1) {
      if (diffInMinutes <= 1) return "Hace un momento";
      return `Hace ${diffInMinutes} minutos`;
    }
    return diffInHours === 1 ? "Hace 1 hora" : `Hace ${diffInHours} horas`;
  }
  if (diffInDays === 1) {
    return "Ayer";
  }
  if (diffInDays < 7) {
    return `Hace ${diffInDays} días`;
  }
  if (diffInWeeks < 4) {
    return diffInWeeks === 1 ? "Hace 1 semana" : `Hace ${diffInWeeks} semanas`;
  }
  if (diffInMonths < 12) {
    return diffInMonths <= 1 ? "Hace 1 mes" : `Hace ${diffInMonths} meses`;
  }
  return diffInYears <= 1 ? "Hace 1 año" : `Hace ${diffInYears} años`;
}

// Extracted Google Maps reviews for Geomatic D' Peña (17 reviews, 5.0 ⭐⭐⭐⭐⭐)
const rawReviews: Omit<CardReviewProps, 'publishAt'>[] = [
  {
    name: "Oli Store Las Terrenas",
    rating: 5,
    text: "Muy profesionales y transparentes. El señor Jordis (Juan) fue super atento y resolutivo con mi proyecto",
    publishedAtDate: "2026-07-18T02:58:23.627Z",
    time: 1784343503627,
    profile_photo_url: "https://lh3.googleusercontent.com/a-/ALV-UjVifWfMRL0ZOXt57RjeAENNsQ0OR-Qs_Yw2gycBbeRHmEJAZmQ=s1920-c-rp-mo-br100",
    isLocalGuide: false,
    reviewerNumberOfReviews: 1,
    likesCount: 0,
  },
  {
    name: "Renata Finilon",
    rating: 5,
    text: "Muy profesionales y puntuales. Realizaron la medición correctamente, entregaron todo a tiempo y el precio fue justo. Comunicación clara durante todo el proceso. Los recomiendo sin duda.",
    publishedAtDate: "2026-01-29T20:58:58.055Z",
    time: 1769720338055,
    profile_photo_url: "https://lh3.googleusercontent.com/a-/ALV-UjUK_NFZYfm4GoXfp0pn8rfYzNeaXRdcK4QIbFcK6qRbz8Td1xCe=s1920-c-rp-mo-ba12-br100",
    isLocalGuide: true,
    reviewerNumberOfReviews: 17,
    likesCount: 0,
  },
  {
    name: "Alexander Lopez",
    rating: 5,
    text: "Usamos a Juan y su compañia para unos planos de curvas de nivel , el trabajo se hiso rapido y con buena comunicacion , lo recomiendo.",
    publishedAtDate: "2025-05-02T00:34:42.683Z",
    time: 1746146082683,
    profile_photo_url: "https://lh3.googleusercontent.com/a-/ALV-UjUOZIK_PdK4KXxwj9Q_ldjR1AbLcKuqJwswc2WRsnBF1IQE2RCh=s1920-c-rp-mo-ba12-br100",
    isLocalGuide: true,
    reviewerNumberOfReviews: 8,
    likesCount: 0,
  },
  {
    name: "Olivier De la CONDAMINE",
    rating: 5,
    text: "Servicio impecable, profesional y sumamente amable. Gracias a todo el equipo por su dedicación a la satisfacción del cliente.",
    publishedAtDate: "2024-10-24T23:15:25.945Z",
    time: 1729811725945,
    profile_photo_url: "https://lh3.googleusercontent.com/a-/ALV-UjXtR3ShfOLqWgRlTu84cO0HLRbrQDUOXLO2IXGYB0UdnuvIr7w=s1920-c-rp-mo-ba12-br100",
    isLocalGuide: true,
    reviewerNumberOfReviews: 12,
    likesCount: 0,
  },
  {
    name: "Oksana Romaniuk",
    rating: 5,
    text: "Muy conocido y bueno",
    publishedAtDate: "2024-09-14T17:53:53.474Z",
    time: 1726336433474,
    profile_photo_url: "https://lh3.googleusercontent.com/a-/ALV-UjVJXBfALhUE_7djsKchlbVEVU8e-njmCn4T40COOEsnbYem5ihI=s1920-c-rp-mo-br100",
    isLocalGuide: false,
    reviewerNumberOfReviews: 2,
    likesCount: 0,
  },
  {
    name: "Craig Moore",
    rating: 5,
    text: "Geomatrica e Inmobiliaria hizo un gran trabajo para nosotros en un trabajo difícil. Se mantuvieron firmes cuando otras empresas dijeron que no se podía hacer y completaron el trabajo. Los recomiendo ampliamente.",
    publishedAtDate: "2023-03-21T03:09:16.951Z",
    time: 1679368156951,
    profile_photo_url: "https://lh3.googleusercontent.com/a/ACg8ocImcKoL1Wdg7bqwb6rsc0pFE1vRMaUFQ67UMUyxYjJZyEtCMg=s1920-c-rp-mo-br100",
    isLocalGuide: false,
    reviewerNumberOfReviews: 5,
    likesCount: 0,
  },
  {
    name: "Jose Bourget",
    rating: 5,
    text: "Profesionales, efectivos, buena comunicación.",
    publishedAtDate: "2023-03-14T15:54:16.299Z",
    time: 1678809256299,
    profile_photo_url: "https://lh3.googleusercontent.com/a-/ALV-UjWhj34tus5S0Hx3X9KbLagEcuio3tRFovIgNQz5DvdvKFeSrHhENA=s1920-c-rp-mo-ba12-br100",
    isLocalGuide: true,
    reviewerNumberOfReviews: 7,
    likesCount: 0,
  },
  {
    name: "Daniel Frigeri diaz",
    rating: 5,
    text: "Excelente trabajo y trato. Un placer trabajar con Jordis Peña.",
    publishedAtDate: "2022-09-07T15:48:42.039Z",
    time: 1662565722039,
    profile_photo_url: "https://lh3.googleusercontent.com/a-/ALV-UjVkDPj3m0k9iDqUWe6MBY1UsUlrKfmTNCXt0SpwNObnEkjvJhvW=s1920-c-rp-mo-br100",
    isLocalGuide: false,
    reviewerNumberOfReviews: 4,
    likesCount: 0,
  },
  {
    name: "Andres Lopez",
    rating: 5,
    text: "Excelente servicio. Muy profesional y preparado.",
    publishedAtDate: "2022-08-01T20:01:02.700Z",
    time: 1659384062700,
    profile_photo_url: "https://lh3.googleusercontent.com/a/ACg8ocLt3eQmxNtVRyNDNIVty5UMsSHWJ2Sj7HeWA-nhg9bSSs0Cww=s1920-c-rp-mo-br100",
    isLocalGuide: false,
    reviewerNumberOfReviews: 2,
    likesCount: 0,
  },
  {
    name: "Yesy Luna",
    rating: 5,
    text: "Juan Tomas es un profesional serio y confiable, 100% recomendado!",
    publishedAtDate: "2022-05-23T01:10:12.426Z",
    time: 1653268212426,
    profile_photo_url: "https://lh3.googleusercontent.com/a/ACg8ocJgjTMo1bgIK3tBI5eI65VfHhqESApHGZAjn2rJW7-ToCcXBw=s1920-c-rp-mo-br100",
    isLocalGuide: false,
    reviewerNumberOfReviews: 2,
    likesCount: 0,
  },
  {
    name: "Bill Med International Inc.",
    rating: 5,
    text: "Excelente equipo de agrimensura y geodesia en Las Terrenas. Puntuales y con gran respaldo técnico.",
    publishedAtDate: "2022-05-22T23:27:29.698Z",
    time: 1653262049698,
    profile_photo_url: "https://lh3.googleusercontent.com/a-/ALV-UjVXR6BeEPjKbkMKeQhvxe2BI7ySfEl-__TsbeQSeGfNDqJj5kM=s1920-c-rp-mo-br100",
    isLocalGuide: false,
    reviewerNumberOfReviews: 0,
    likesCount: 0,
  },
  {
    name: "jordi sicilia",
    rating: 5,
    text: "Gran experiencia y excelente atención al cliente en todo momento. Recomendados al 100%.",
    publishedAtDate: "2022-04-18T08:47:00.184Z",
    time: 1650271620184,
    profile_photo_url: "https://lh3.googleusercontent.com/a/ACg8ocJKSZQdDfI5F5ur9y8drx1CXGqjGPjFDltNZz-D-ccSEsO7YQ=s1920-c-rp-mo-br100",
    isLocalGuide: false,
    reviewerNumberOfReviews: 3,
    likesCount: 0,
  },
  {
    name: "Michel Marin",
    rating: 5,
    text: "Muy buen servicio y excelente trato, 100% recomendado.",
    publishedAtDate: "2022-04-07T00:16:53.258Z",
    time: 1649290613258,
    profile_photo_url: "https://lh3.googleusercontent.com/a-/ALV-UjWkyN6gvrGiv175gmDYEzqfZe42z0hXeK2hZS_ls_d4DEz_b6Mb=s1920-c-rp-mo-br100",
    isLocalGuide: false,
    reviewerNumberOfReviews: 6,
    likesCount: 0,
  },
  {
    name: "Andry Camero",
    rating: 5,
    text: "Servicio de agrimensura rápido, confiable y con altos estándares de precisión.",
    publishedAtDate: "2022-04-06T23:44:32.936Z",
    time: 1649288672936,
    profile_photo_url: "https://lh3.googleusercontent.com/a-/ALV-UjUOd5PTCxcM7Ti12NGtIw_mmUyorUL4KIVFjXbZZcDCElvrLmc2=s1920-c-rp-mo-br100",
    isLocalGuide: false,
    reviewerNumberOfReviews: 5,
    likesCount: 0,
  },
  {
    name: "Yelena Camero",
    rating: 5,
    text: "Utilizamos los servicios de el Sr. Juan Tomas y su equipo y estamos muy agradecidos con ellos. Su profesionalismo y rápida respuesta siempre, fue algo que nos encantó y nos hizo sentir seguros a la hora de elegirlos. Hiceron un excelente trabajo y quedamos mas que complacidos 🙏🏻",
    publishedAtDate: "2022-04-06T23:39:11.534Z",
    time: 1649288351534,
    profile_photo_url: "https://lh3.googleusercontent.com/a-/ALV-UjVFDSpTn8RcRdN9HwE-0IRSuRzq49BEBWdyYhJb9mBXLZObiw5uog=s1920-c-rp-mo-br100",
    isLocalGuide: false,
    reviewerNumberOfReviews: 7,
    likesCount: 0,
  },
  {
    name: "Las Terrenas Te informa",
    rating: 5,
    text: "Oficina de agrimensura líder en Las Terrenas. Seriedad, puntualidad y conocimiento del área.",
    publishedAtDate: "2022-04-06T23:05:06.652Z",
    time: 1649286306652,
    profile_photo_url: "https://lh3.googleusercontent.com/a/ACg8ocLikR_H-ilKr9Z6_esSq_rfY0jfs9f-vu4dOUWUiAvUvCAWQA=s1920-c-rp-mo-br100",
    isLocalGuide: false,
    reviewerNumberOfReviews: 0,
    likesCount: 0,
  },
  {
    name: "cooperativa agropecuaria las terrenas",
    rating: 5,
    text: "Altamente recomendados para todo trámite de mensura, deslinde y regularización de parcelas en Samaná.",
    publishedAtDate: "2022-04-06T22:50:18.754Z",
    time: 1649285418754,
    profile_photo_url: "https://lh3.googleusercontent.com/a/ACg8ocI5n6E-NMOjThRVSJlIWA9pQvtvYtyZLNfHlUCIq7uqVUEToQ=s1920-c-rp-mo-br100",
    isLocalGuide: false,
    reviewerNumberOfReviews: 0,
    likesCount: 0,
  },
];

// Dynamically compute publishAt for each review based on current date
export const reviewsData: CardReviewProps[] = rawReviews.map((review) => ({
  ...review,
  publishAt: formatRelativeTime(review.publishedAtDate),
}));

// Dynamic statistics calculated across all reviews
export const totalReviewsCount = rawReviews.length;

export const averageRating = totalReviewsCount > 0
  ? Math.round((rawReviews.reduce((sum, r) => sum + (r.rating || 5), 0) / totalReviewsCount) * 10) / 10
  : 5.0;

export const averageRatingString = averageRating.toFixed(1);

export function getReviewsStats() {
  const total = rawReviews.length;
  const sum = rawReviews.reduce((acc, r) => acc + (r.rating || 5), 0);
  const avg = total > 0 ? sum / total : 5.0;
  return {
    total,
    average: Math.round(avg * 10) / 10,
    averageString: avg.toFixed(1),
  };
}
