export default function Home() {
  return (
    <div className="relative">
      <div className="absolute flex justify-center items-center h-screen w-screen">
        <div className="tk-poppins font-medium text-6xl/[64px] text-[#FFFFFF]">
          <p>
            <span className="italic leading-[80px]">&quot;&nbsp;</span>Team
            Taiwan! Team Taiwan!
          </p>
          <p>
            <span className="opacity-0">&quot;&nbsp;</span>Taiwan is a great
            country!<span className="italic leading-[80px]">&quot;</span>
          </p>
        </div>
      </div>
      <div className="bg-[url('/g-pic.png')] bg-contain bg-no-repeat h-screen w-screen"></div>
    </div>
  );
}
