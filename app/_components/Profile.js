import Image from "next/image";

function Profile() {
  return (
    <div className="flex justify-center mt-5">
      <div className="max-w-[1048px] w-full">
        <div className="flex xl:flex-nowrap flex-wrap justify-around items-center">
          <Image
            className="rounded-full border-indigo-100 border-4 p-2"
            src="/images/profile/profile.jpg"
            alt="adeline"
            width={200}
            height={200}
          />
          <p className="text-[1.5em] italic mx-2">
            &ldquo;Votre projet, mon engagement, l&apos;efficacité au service de
            vos rêves.&rdquo;
          </p>
        </div>
      </div>
    </div>
  );
}

export default Profile;
