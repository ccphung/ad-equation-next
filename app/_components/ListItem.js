function ListItem({ text }) {
  return (
    <div className="m-2">
      <li className="flex align-middle">
        <img
          className="w-4 h-4 m-1"
          src="/images/icons/check-mark-circle-icon.svg"
          alt="check mark"
        />
        <span>{text}</span>
      </li>
    </div>
  );
}

export default ListItem;
