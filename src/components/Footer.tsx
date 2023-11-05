import Link from "next/link";
import LoggiLogo from "./svg/LoggiLogo";

export default function Footer() {
  return (
    <div className="flex gap-[60px] items-center border-t border-zinc-200 bg-[#f4f4f4] py-[30px] px-[20px] w-full">
      <LoggiLogo color="#0172ff" width="100" height="33" />
      <ul className="flex flex-row gap-6 text-zinc-600">
        <li>
          <Link href={"#"}>Nossos produtos</Link>
        </li>
        <li>
          <Link href={"#"}>Fazer entregas</Link>
        </li>
        <li>
          <Link href={"#"}>Rastrear pacotes</Link>
        </li>
        <li>
          <Link href={"#"}>Central de ajuda</Link>
        </li>
      </ul>
    </div>
  );
}
