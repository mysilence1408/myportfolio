export function Contact() {
  return (
    <div className=" pt-10">
      <div className=" relative">
        <img
          src="https://images.pexels.com/photos/5541019/pexels-photo-5541019.png"
          alt="Contact"
          className=" h-125 w-full object-cover"
        />

        <form
          action=""
          className=" flex flex-col absolute inset-0 w-fit h-fit m-auto bg-primary/90 dark:bg-primary-dark/90 gap-2 p-16 rounded-md"
        >
          <h5 className=" text-center text-3xl pb-4">Contact me</h5>
          <input
            type="text"
            placeholder="Enter your name"
            className="outline-none border-2 border-solid border-primary-dark dark:border-primary rounded-md p-2"
          />
          <textarea
            name="message"
            cols={30}
            rows={4}
            placeholder=" Enter your message"
            className="outline-none border-2 border-solid border-primary-dark dark:border-primary p-2 rounded-md"
          />
          <button className=" flex items-start w-fit cursor-pointer border-2 border-solid border-primary-dark dark:border-primary p-1 rounded-md text-sm">
            Send message
          </button>
        </form>
      </div>
    </div>
  );
}
