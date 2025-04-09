function Profile() {
  return (
    <div className="flex justify-center mt-5">
      <div className="max-w-[1048px] w-full">
        <div className="flex xl:flex-nowrap flex-wrap justify-around items-center">
          <img
            className="rounded-full w-[200px] border border-indigo-100 border-4 p-2"
            src="/images/profile/profile.jpg"
            alt="adeline"
          />
          <p className="ml-5 text-[1.5em] italic">
            &ldquo;Grâce à mon expertise et à ma parfaite connaissance du marché
            immobilier portuense, je vous guide avec transparence et pertinence
            vers les meilleures opportunités. Je mets à profit mon réseau de
            professionnels et d’investisseurs pour dénicher les biens qui
            correspondent parfaitement à vos critères.&rdquo;
          </p>
        </div>
      </div>
    </div>
  );
}

export default Profile;
