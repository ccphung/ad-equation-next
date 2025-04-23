function ProcessItem({ file, title, desc, size }) {
  return (
    <div className="m-8 ">
      <div className="flex flex-col justify-center items-center">
        <div className="mb-8">
          <img
            className={`h-${size} `}
            src={`/images/icons/${file}.svg`}
            alt="handshake"
          />
        </div>

        <div>
          <h5 className="font-bold text-stone-800 text-center">{title}</h5>
          <p className="text-stone-600">{desc}</p>
        </div>
      </div>
    </div>
  );
}

export default ProcessItem;
