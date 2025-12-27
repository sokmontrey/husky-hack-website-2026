type BronzeSponsorCardProps = {
  title: string;
  sponsorLogo: string;
  borderColour: string;
};

function BronzeSponsorCard({
  title,
  sponsorLogo,
  borderColour,
}: BronzeSponsorCardProps) {
  return (
    <div
      className="
        flex flex-col items-center justify-center
        rounded-md bg-[#434343]
        h-[15vh] w-[18vw]
        p-4
        grayscale opacity-90
        transition duration-300
        hover:grayscale-0 hover:opacity-100
      "
      style={{ border: `2px solid ${borderColour}` }}
    >
      {/* Sponsor name */}
      <h3 className="text-white text-xs font-medium mb-2 text-center">
        {title}
      </h3>

      {/* Logo */}
      <div className="flex items-center justify-center">
        <img
          src={sponsorLogo}
          alt={`Brand logo for ${title}`}
          className="max-h-16 object-contain"
        />
      </div>
    </div>
  );
}

export default BronzeSponsorCard;
