import Video from "./Video";

function ToPorto() {
  return (
    <div className="flex justify-center pt-8 mt-8  bg-indigo-50">
      <div className="xl:max-w-[1048px] w-full">
        <h2 className="text-center text-[1.8em] text-stone-700 font-semibold mb-3">
          Direction Porto !
        </h2>
        <div className="mt-2 text-[1.1em] text-center text-stone-700">
          Découvrez, ressentez, aimez !
        </div>
        <div className="mt-5">
          <Video />
        </div>
      </div>
    </div>
  );
}

export default ToPorto;
