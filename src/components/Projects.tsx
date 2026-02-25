export function Projects() {
  const images = [
    {
      id: 1,
      src: "https://images.pexels.com/photos/1624496/pexels-photo-1624496.jpeg",
    },
    {
      id: 2,
      src: "https://images.pexels.com/photos/1624496/pexels-photo-1624496.jpeg",
    },
    {
      id: 3,
      src: "https://images.pexels.com/photos/1624496/pexels-photo-1624496.jpeg",
    },
  ];
  return (
    <div className=" px-4 lg:px-8">
      <div className=" space-y-10">
        <h1 className="text-4xl text-center">Projects</h1>
        <div className=" grid grid-cols-1 lg:grid-cols-3 gap-4 place-items-center  ">
          {images.map((image) => {
            return (
              <div key={image.id} className=" overflow-hidden">
                <img
                  src={image.src}
                  alt="image"
                  className="hover:scale-105 transition-transform duration-300 object-cover w-[420px] h-[520px]"
                ></img>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
