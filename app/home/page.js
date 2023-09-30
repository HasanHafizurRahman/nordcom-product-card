import IconArea from "@/public/Nordcom-Icons/IconArea";
import IconDrink from "@/public/Nordcom-Icons/IconDrink";
import IconStar_Half from "@/public/Nordcom-Icons/IconStar_Half";
import IconWatch from "@/public/Nordcom-Icons/IconWatch";

export default function Home() {
  return (
    <>
      <h1 className="text-primary-5">Hi</h1>
      <h2 className="text-primary-12">Hello</h2>
      <h3 className="text-primary-22">Hello</h3>
      <h4 className="text-primary-22">Hello</h4>
      <h5 className="text-primary-32">Hello</h5>
      <IconDrink color="purple" />
      <IconArea size={30} color="green" />
      <IconStar_Half size={60} />
      <IconWatch size={80} />
    </>
  );
}
