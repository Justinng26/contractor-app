import { title } from "process";
import ServicePageContent from "../modules/ServicePageContent";

export default function DecoratingAndLandscaping() {
  return <ServicePageContent {...data} />;
}

const data = {
  title: "Landscaping & Decorating",
  subtitle: "subtitle 2",
  image: "/hero7.jpeg",
  description: (
    <>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis cumque
      ex reiciendis expedita, assumenda commodi unde amet ducimus explicabo
      nesciunt consequuntur voluptate a porro vel nulla eaque voluptas
      perspiciatis veritatis.
      <br />
      <br />
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit ut, quis aut,
      maiores quisquam vero eligendi eius incidunt, odit saepe delectus tenetur
      consectetur eum dolores veritatis neque facilis cupiditate? A.
    </>
  ),
};
