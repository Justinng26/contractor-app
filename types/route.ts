export enum Route {
  HOME = "/",
  ABOUT = "/about",
  SERVICES = "/services",
  KITCHENS_AND_BATHROOMS = "/services/kitchens-and-bathrooms",
  LANDSCAPING_AND_DECORATING = "/services/decorating-and-landscaping",
  ELECTRICAL_AND_PLUMBING = "/services/electrical-and-plumbing",
  PROJECTS = "/projects",
  PROJECT = "/projects/:id",
  CONTACT = "/contact",
}

export enum SearchParams {
  YEAR = "year",
  LOCATION = "location",
  PAGE = "page",
  PER_PAGE = "per_page",
}
