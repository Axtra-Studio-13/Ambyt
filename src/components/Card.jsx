import Image from "next/image";

const Card = ({ src }) => {
  // const { base64 } = await getImage(src);
  // console.log(base64, src)
  return (
    <div className="w-[250px]">
      {/* <CustomImage img={src}
      base64={base64}
        cn='drop-shadow-2xl rounded-md w-full h-full bg-red-400' /> */}
      <Image
        src={src}
        width={250}
        height={150}
        alt="Card image"
        className="drop-shadow-2xl rounded-md"
      />
      <p
        className="mt-2 text-sm text-white font-semibold
       whitespace-nowrap overflow-hidden text-ellipsis w-full"
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem,
        provident exercitationem modi saepe voluptate reprehenderit.
      </p>
    </div>
  );
};

export default Card;
