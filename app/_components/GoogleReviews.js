import Script from "next/script";

function GoogleReviews() {
  return (
    <>
      <div className="mt-5">
        <div
          className="elfsight-app-7da455a3-c7cb-4198-97b4-0adeb748709d"
          data-elfsight-app-lazy
        ></div>
      </div>
      <Script
        src="https://static.elfsight.com/platform/platform.js"
        strategy="lazyOnload"
      />
    </>
  );
}

export default GoogleReviews;
