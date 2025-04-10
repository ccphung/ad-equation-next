import Image from "next/image";

function ListItem({ text }) {
  return (
    <div className="mt-4">
      <li className="flex align-middle">
        <Image
          className="m-1"
          src="/images/icons/check-mark-circle-icon.svg"
          alt="check mark"
          width={20}
          height={20}
        />
        <span>{text}</span>
      </li>
    </div>
  );
}

export default ListItem;
