const About = () => {
  return (
    <div className="py-8 px-4 mx-auto m-2 p-1 max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6 gap-16 items-center">
      <div className="grid grid-cols-1 gap-4 mt-8 sm:grid-cols-2">
        <img
          className="w-full rounded-lg object-cover"
          src="https://media.istockphoto.com/photos/got-to-make-it-a-productive-night-picture-id886465858?k=20&m=886465858&s=612x612&w=0&h=CN-q-5X6ZiuJET2AIUKz71kvboDpGsmgQCUX9QU9lZQ="
          alt="office content 1"
        />
        <img
          className="w-full rounded-lg object-cover mt-4 sm:mt-0 lg:mt-10"
          src="https://images.unsplash.com/photo-1536148935331-408321065b18?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZ3JhbW1lcnxlbnwwfHwwfHw%3D&w=1000&q=80"
          alt="office content 2"
        />
      </div>

      <div className="font-light text-gray-500 sm:text-lg lg:mt-0 mt-8">
        <h2 className="text-5xl font-semibold text-gray-900 mb-4">About us </h2>
        <p className="text-xl text-black mb-4">
          Find a job that suits your interest and talents. A high salary is not
          the top priority. Most importantly, you can work according to your
          heart's desire and have a work-life balance.
        </p>
      </div>
    </div>
  );
};

export default About;
